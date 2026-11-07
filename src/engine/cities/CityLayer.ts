import * as THREE from 'three'
import gsap from 'gsap'
import type {
  BuildingKind,
  MapCity,
  MapRegion,
  Project,
  QualityProfile,
  RegionId,
  Vec3,
} from '@/types/portfolio'
import { clamp, seededRandom } from '@/utils/math'
import { terrainHeight } from '@/engine/terrain/height'
import { cityDetailVisibility } from '@/engine/core/lod'
import {
  generateCityLayout,
  type BuildingPlacement,
  type CityLayout,
  type StreetSegment,
} from './CityLayout'
import {
  createBuildingVariants,
  createFeaturedGeometry,
  type BuildingVariant,
} from './BuildingGenerator'
import { createBroadleafVariant } from '@/engine/environment/TreeGenerator'

const CITY_LIFT = 0.18
const SIDEWALK_LIFT = 0.135
const ASPHALT_LIFT = 0.17
const PARK_LIFT = 0.145

interface MeshBuffers {
  positions: number[]
  indices: number[]
}

interface FeaturedVisual {
  projectId: string
  regionId: RegionId
  cityId: string
  group: THREE.Group
  ring: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>
  marker: THREE.Mesh<THREE.OctahedronGeometry, THREE.MeshBasicMaterial>
  material: THREE.MeshStandardMaterial
  height: number
  phase: number
}

interface CityTarget {
  city: MapCity
  hit: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>
  ring: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>
}

interface ParkTreePlacement {
  x: number
  z: number
  rotation: number
  scale: number
}

function emptyBuffers(): MeshBuffers {
  return { positions: [], indices: [] }
}

function pushRibbon(
  buffers: MeshBuffers,
  streets: StreetSegment[],
  extraWidth: number,
  lift: number,
): void {
  for (const street of streets) {
    const [startX, startZ] = street.start
    const [endX, endZ] = street.end
    const deltaX = endX - startX
    const deltaZ = endZ - startZ
    const length = Math.hypot(deltaX, deltaZ)
    if (length < 0.001) continue

    const steps = Math.max(1, Math.ceil(length / 1.4))
    const sideX = (-deltaZ / length) * (street.width / 2 + extraWidth)
    const sideZ = (deltaX / length) * (street.width / 2 + extraWidth)
    const vertexOffset = buffers.positions.length / 3

    for (let index = 0; index <= steps; index += 1) {
      const t = index / steps
      const x = startX + deltaX * t
      const z = startZ + deltaZ * t
      const y = terrainHeight(x, z) + lift
      buffers.positions.push(x + sideX, y, z + sideZ, x - sideX, y, z - sideZ)
    }

    for (let index = 0; index < steps; index += 1) {
      const base = vertexOffset + index * 2
      buffers.indices.push(base, base + 2, base + 1, base + 1, base + 2, base + 3)
    }
  }
}

function pushDisc(
  buffers: MeshBuffers,
  x: number,
  z: number,
  radius: number,
  lift: number,
  segments = 24,
): void {
  const center = buffers.positions.length / 3
  buffers.positions.push(x, terrainHeight(x, z) + lift, z)

  for (let index = 0; index <= segments; index += 1) {
    const angle = (index / segments) * Math.PI * 2
    const pointX = x + Math.cos(angle) * radius
    const pointZ = z + Math.sin(angle) * radius
    buffers.positions.push(pointX, terrainHeight(pointX, pointZ) + lift, pointZ)
  }

  for (let index = 0; index < segments; index += 1) {
    buffers.indices.push(center, center + index + 2, center + index + 1)
  }
}

function buildGeometry(buffers: MeshBuffers): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(buffers.positions, 3))
  geometry.setIndex(buffers.indices)
  geometry.computeVertexNormals()
  geometry.computeBoundingSphere()
  return geometry
}

function createSurface(
  geometry: THREE.BufferGeometry,
  color: string,
  quality: QualityProfile,
  instant: boolean,
): { mesh: THREE.Mesh; material: THREE.MeshStandardMaterial } {
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.94,
    metalness: 0,
    transparent: !instant,
    opacity: instant ? 1 : 0,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.receiveShadow = quality.shadows
  mesh.renderOrder = 4
  mesh.userData = { kind: 'city-decoration' }
  return { mesh, material }
}

function variantForKind(kind: BuildingKind): BuildingVariant['id'] {
  if (kind === 'civic') return 'civic'
  if (kind === 'tower') return 'tower'
  if (kind === 'office') return 'office'
  return 'house'
}

export class CityLayer {
  readonly group = new THREE.Group()
  private readonly layouts: CityLayout[] = []
  private readonly featured = new Map<string, FeaturedVisual>()
  private readonly cityTargets = new Map<string, CityTarget>()
  private readonly cityLabelPositions = new Map<string, THREE.Vector3>()
  private readonly cityCenters: THREE.Vector3[] = []
  private readonly buildingMeshes = new Map<BuildingVariant['id'], THREE.InstancedMesh>()
  private readonly introMaterials: THREE.Material[] = []
  private readonly regionById = new Map<RegionId, MapRegion>()
  private readonly projectById = new Map<string, Project>()
  private parkTreesMesh: THREE.InstancedMesh | null = null
  private hoveredId: string | null = null
  private selectedId: string | null = null
  private hoveredCityId: string | null = null
  private activeCityId: string | null = null
  private activeRegionId: RegionId | null = null

  constructor(
    cities: MapCity[],
    regions: MapRegion[],
    projects: Project[],
    private readonly quality: QualityProfile,
    private readonly instant = false,
  ) {
    this.group.name = 'city-layer'
    regions.forEach((region) => this.regionById.set(region.id, region))
    projects.forEach((project) => this.projectById.set(project.id, project))

    this.layouts = cities.map((city) => {
      const region = this.regionById.get(city.regionId)
      if (!region) throw new Error(`No se encontró la región ${city.regionId}`)
      return generateCityLayout(city, region, { density: quality.structureDensity })
    })

    this.buildGround()
    this.buildCityTargets(cities)
    this.buildBuildings()
    this.buildFeaturedBuildings()
    this.buildCityLabels(cities)
    this.refreshAll(false)
    this.refreshCityRings(false)
  }

  private buildGround(): void {
    const sidewalk = emptyBuffers()
    const asphalt = emptyBuffers()
    const parks = emptyBuffers()

    for (const layout of this.layouts) {
      pushRibbon(sidewalk, layout.streets, 0.34, SIDEWALK_LIFT)
      pushRibbon(asphalt, layout.streets, 0, ASPHALT_LIFT)
      pushDisc(sidewalk, layout.plaza.x, layout.plaza.z, layout.plaza.radius, SIDEWALK_LIFT + 0.01, 28)

      for (const park of layout.parks) {
        pushDisc(parks, park.x, park.z, park.radius, PARK_LIFT, 18)
      }
    }

    const sidewalkVisual = createSurface(
      buildGeometry(sidewalk),
      '#c6bba9',
      this.quality,
      this.instant,
    )
    sidewalkVisual.mesh.name = 'city-sidewalks'
    this.introMaterials.push(sidewalkVisual.material)
    this.group.add(sidewalkVisual.mesh)

    const asphaltVisual = createSurface(
      buildGeometry(asphalt),
      '#7b7263',
      this.quality,
      this.instant,
    )
    asphaltVisual.mesh.name = 'city-roads'
    this.introMaterials.push(asphaltVisual.material)
    this.group.add(asphaltVisual.mesh)

    const parkVisual = createSurface(buildGeometry(parks), '#638d4b', this.quality, this.instant)
    parkVisual.mesh.name = 'city-parks'
    this.introMaterials.push(parkVisual.material)
    this.group.add(parkVisual.mesh)

    const parkTreeVariant = createBroadleafVariant()
    const parkTrees = this.collectParkTrees()
    if (parkTrees.length > 0) {
      const material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.94,
        metalness: 0,
        flatShading: true,
        transparent: !this.instant,
        opacity: this.instant ? 1 : 0,
      })
      const mesh = new THREE.InstancedMesh(
        parkTreeVariant.geometry,
        material,
        parkTrees.length,
      )
      mesh.name = 'city-park-trees'
      mesh.castShadow = this.quality.shadows
      mesh.receiveShadow = false
      mesh.userData = { kind: 'city-decoration' }
      this.parkTreesMesh = mesh

      const dummy = new THREE.Object3D()
      parkTrees.forEach((tree, index) => {
        dummy.position.set(
          tree.x,
          terrainHeight(tree.x, tree.z) + PARK_LIFT,
          tree.z,
        )
        dummy.rotation.set(0, tree.rotation, 0)
        dummy.scale.setScalar(tree.scale)
        dummy.updateMatrix()
        mesh.setMatrixAt(index, dummy.matrix)
      })
      mesh.instanceMatrix.needsUpdate = true
      mesh.computeBoundingSphere()
      this.introMaterials.push(material)
      this.group.add(mesh)
    } else {
      parkTreeVariant.geometry.dispose()
    }
  }

  private collectParkTrees(): ParkTreePlacement[] {
    const placements: ParkTreePlacement[] = []

    for (const layout of this.layouts) {
      const random = seededRandom(layout.city.seed + 97)
      for (const park of layout.parks) {
        const count = 2
        for (let index = 0; index < count; index += 1) {
          const angle = random() * Math.PI * 2 + (index / count) * Math.PI * 2
          const distance = park.radius * (0.18 + random() * 0.22)
          placements.push({
            x: park.x + Math.cos(angle) * distance,
            z: park.z + Math.sin(angle) * distance,
            rotation: random() * Math.PI * 2,
            scale: 0.24 + random() * 0.1,
          })
        }
      }
    }

    return placements
  }

  private buildCityTargets(cities: MapCity[]): void {
    for (const city of cities) {
      const height = terrainHeight(city.position.x, city.position.z)
      const center = new THREE.Vector3(city.position.x, height, city.position.z)
      this.cityCenters.push(center)

      const hitMaterial = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false,
        depthTest: false,
        colorWrite: false,
        side: THREE.DoubleSide,
      })
      const hit = new THREE.Mesh(
        new THREE.CircleGeometry(city.radius * 0.9, 32),
        hitMaterial,
      )
      hit.name = `city-target-${city.id}`
      hit.rotation.x = -Math.PI / 2
      hit.position.set(city.position.x, height + CITY_LIFT + 0.05, city.position.z)
      hit.renderOrder = -1
      hit.userData = {
        kind: 'city',
        cityId: city.id,
        regionId: city.regionId,
      }

      const ringMaterial = new THREE.MeshBasicMaterial({
        color: this.regionById.get(city.regionId)?.color ?? '#38bdf8',
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      })
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(city.radius * 0.82, city.radius * 0.87, 48),
        ringMaterial,
      )
      ring.name = `city-ring-${city.id}`
      ring.rotation.x = -Math.PI / 2
      ring.position.set(city.position.x, height + CITY_LIFT + 0.07, city.position.z)
      ring.renderOrder = 5
      ring.userData = { kind: 'city-decoration' }

      this.group.add(hit, ring)
      this.cityTargets.set(city.id, { city, hit, ring })
    }
  }

  private buildBuildings(): void {
    const variants = createBuildingVariants()
    const placementsByVariant = new Map<BuildingVariant['id'], BuildingPlacement[]>()

    for (const layout of this.layouts) {
      for (const placement of layout.buildings) {
        if (placement.kind === 'landmark') continue
        const variantId = variantForKind(placement.kind)
        const list = placementsByVariant.get(variantId) ?? []
        list.push(placement)
        placementsByVariant.set(variantId, list)
      }
    }

    for (const variant of variants) {
      const placements = placementsByVariant.get(variant.id) ?? []
      if (placements.length === 0) {
        variant.geometry.dispose()
        continue
      }

      const material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.88,
        metalness: 0.02,
        flatShading: true,
        transparent: !this.instant,
        opacity: this.instant ? 1 : 0,
      })
      const mesh = new THREE.InstancedMesh(variant.geometry, material, placements.length)
      mesh.name = `city-buildings-${variant.id}`
      mesh.castShadow = this.quality.shadows
      mesh.receiveShadow = true
      mesh.userData = { kind: 'city-decoration' }

      const dummy = new THREE.Object3D()
      const color = new THREE.Color()

      placements.forEach((placement, index) => {
        const region = this.regionById.get(placement.regionId)
        const tint = new THREE.Color(placement.color)
        if (region) tint.lerp(new THREE.Color(region.color), placement.kind === 'civic' ? 0.1 : 0.16)

        dummy.position.set(
          placement.x,
          terrainHeight(placement.x, placement.z) + CITY_LIFT,
          placement.z,
        )
        dummy.rotation.set(0, placement.rotation, 0)
        dummy.scale.set(
          placement.width / variant.baseWidth,
          placement.height / variant.baseHeight,
          placement.depth / variant.baseDepth,
        )
        dummy.updateMatrix()
        mesh.setMatrixAt(index, dummy.matrix)
        mesh.setColorAt(index, color.copy(tint))
      })

      mesh.instanceMatrix.needsUpdate = true
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
      mesh.computeBoundingSphere()
      this.introMaterials.push(material)
      this.buildingMeshes.set(variant.id, mesh)
      this.group.add(mesh)
    }
  }

  private buildFeaturedBuildings(): void {
    for (const layout of this.layouts) {
      for (const placement of layout.buildings) {
        if (placement.kind !== 'landmark' || !placement.projectId) continue

        const project = this.projectById.get(placement.projectId)
        const region = this.regionById.get(placement.regionId)
        if (!project || !region) continue

        const featured = createFeaturedGeometry(project.id, region.color)
        const material = new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: 0.72,
          metalness: 0.06,
          flatShading: true,
          transparent: !this.instant,
          opacity: this.instant ? 1 : 0,
        })
        const building = new THREE.Mesh(featured.geometry, material)
        building.name = `featured-building-${project.id}`
        building.castShadow = this.quality.shadows
        building.receiveShadow = true

        const ringMaterial = new THREE.MeshBasicMaterial({
          color: region.color,
          transparent: true,
          opacity: this.instant ? 0.28 : 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        })
        const ring = new THREE.Mesh(new THREE.RingGeometry(0.95, 1.24, 36), ringMaterial)
        ring.name = `featured-ring-${project.id}`
        ring.rotation.x = -Math.PI / 2
        ring.position.y = 0.035

        const markerMaterial = new THREE.MeshBasicMaterial({
          color: region.color,
          transparent: true,
          opacity: this.instant ? 0.74 : 0,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        })
        const marker = new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), markerMaterial)
        marker.name = `featured-marker-${project.id}`
        marker.position.y = featured.height + 0.68

        const group = new THREE.Group()
        group.name = `featured-group-${project.id}`
        group.position.set(
          placement.x,
          terrainHeight(placement.x, placement.z) + CITY_LIFT + 0.02,
          placement.z,
        )
        group.rotation.y = placement.rotation
        group.userData = {
          kind: 'building',
          regionId: project.regionId,
          projectId: project.id,
        }
        if (!this.instant) group.scale.setScalar(0.001)
        group.add(building, ring, marker)
        this.group.add(group)
        this.introMaterials.push(material)

        this.featured.set(project.id, {
          projectId: project.id,
          regionId: project.regionId,
          cityId: placement.cityId,
          group,
          ring,
          marker,
          material,
          height: featured.height,
          phase: seededRandom(project.id.length * 977 + featured.height * 100)(),
        })
      }
    }
  }

  private buildCityLabels(cities: MapCity[]): void {
    for (const city of cities) {
      this.cityLabelPositions.set(
        city.id,
        new THREE.Vector3(
          city.position.x,
          terrainHeight(city.position.x, city.position.z) + 8,
          city.position.z,
        ),
      )
    }
  }

  getInteractiveObjects(): THREE.Object3D[] {
    const featured = [...this.featured.values()].map((visual) => visual.group)
    if (this.activeRegionId === null) return featured

    const cityHits = [...this.cityTargets.values()]
      .filter((target) => target.city.regionId === this.activeRegionId)
      .map((target) => target.hit)
    return [...featured, ...cityHits]
  }

  getProjectAnchor(projectId: string): THREE.Vector3 | null {
    const visual = this.featured.get(projectId)
    if (!visual) return null
    return new THREE.Vector3(
      visual.group.position.x,
      visual.group.position.y + visual.height + 0.45,
      visual.group.position.z,
    )
  }

  getProjectFocus(projectId: string): { position: Vec3; distance: number } | null {
    const visual = this.featured.get(projectId)
    if (!visual) return null
    return {
      position: {
        x: visual.group.position.x,
        y: visual.group.position.y + visual.height * 0.55,
        z: visual.group.position.z,
      },
      distance: 23,
    }
  }

  getCityFocus(cityId: string): { position: Vec3; distance: number } | null {
    const target = this.cityTargets.get(cityId)
    if (!target) return null

    const y = terrainHeight(target.city.position.x, target.city.position.z)
    return {
      position: {
        x: target.city.position.x,
        y: y + 0.9,
        z: target.city.position.z,
      },
      distance: clamp(target.city.radius * 3.7, 17, 21),
    }
  }

  getCityLabelPosition(cityId: string): THREE.Vector3 | null {
    return this.cityLabelPositions.get(cityId)?.clone() ?? null
  }

  setHover(projectId: string | null): void {
    if (this.hoveredId === projectId) return
    this.hoveredId = projectId
    this.refreshAll()
  }

  setSelection(projectId: string | null): void {
    if (this.selectedId === projectId) return
    this.selectedId = projectId
    this.refreshAll()
  }

  setHoveredCity(cityId: string | null): void {
    if (this.hoveredCityId === cityId) return
    this.hoveredCityId = cityId
    this.refreshCityRings()
  }

  setActiveCity(cityId: string | null): void {
    if (this.activeCityId === cityId) return
    this.activeCityId = cityId
    this.refreshCityRings()
  }

  setActiveRegion(regionId: RegionId | null): void {
    if (this.activeRegionId === regionId) return
    this.activeRegionId = regionId
    this.refreshAll()
    this.refreshCityRings()
  }

  private refreshCityRings(animate = true): void {
    for (const [cityId, target] of this.cityTargets) {
      const inRegion = this.activeRegionId === target.city.regionId
      const selected = this.activeCityId === cityId
      const hovered = this.hoveredCityId === cityId
      const opacity = !inRegion ? 0 : selected ? 0.86 : hovered ? 0.58 : 0.2
      const duration = this.instant ? 0 : 0.28

      if (!animate || this.instant || duration === 0) {
        target.ring.material.opacity = opacity
        continue
      }

      gsap.to(target.ring.material, {
        opacity,
        duration,
        ease: 'power2.out',
        overwrite: true,
      })
    }
  }

  private refreshAll(animate = true): void {
    for (const visual of this.featured.values()) this.refreshVisual(visual, animate)
  }

  private refreshVisual(visual: FeaturedVisual, animate: boolean): void {
    const inRegion = this.activeRegionId === null || this.activeRegionId === visual.regionId
    const selected = this.selectedId === visual.projectId
    const hovered = this.hoveredId === visual.projectId
    const scale = selected ? 1.06 : hovered ? 1.04 : 1
    const ringOpacity = !inRegion ? 0.06 : selected ? 0.74 : hovered ? 0.52 : 0.26
    const markerOpacity = !inRegion ? 0.1 : selected ? 1 : hovered ? 0.94 : 0.72

    if (!animate || this.instant) {
      visual.group.scale.setScalar(scale)
      visual.ring.material.opacity = ringOpacity
      visual.marker.material.opacity = markerOpacity
      return
    }

    gsap.to(visual.group.scale, {
      x: scale,
      y: scale,
      z: scale,
      duration: 0.34,
      ease: 'power2.out',
      overwrite: true,
    })
    gsap.to(visual.ring.material, {
      opacity: ringOpacity,
      duration: 0.34,
      ease: 'power2.out',
      overwrite: true,
    })
    gsap.to(visual.marker.material, {
      opacity: markerOpacity,
      duration: 0.34,
      ease: 'power2.out',
      overwrite: true,
    })
  }

  playIntro(): void {
    if (this.instant) return

    this.introMaterials.forEach((material, index) => {
      gsap.to(material, {
        opacity: 1,
        duration: 0.95,
        delay: 0.45 + index * 0.05,
        ease: 'power2.out',
        overwrite: true,
        onComplete: () => {
          material.transparent = false
          material.needsUpdate = true
        },
      })
    })

    let index = 0
    for (const visual of this.featured.values()) {
      gsap.to(visual.group.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.75,
        delay: 0.85 + index * 0.14,
        ease: 'back.out(1.7)',
        overwrite: true,
        onComplete: () => this.refreshVisual(visual, false),
      })
      index += 1
    }
  }

  update(time: number, camera: THREE.PerspectiveCamera): void {
    let nearestCity = Number.POSITIVE_INFINITY
    for (const center of this.cityCenters) {
      nearestCity = Math.min(nearestCity, camera.position.distanceTo(center))
    }

    const detail = cityDetailVisibility(nearestCity)
    if (this.parkTreesMesh) this.parkTreesMesh.visible = detail.parkTrees
    const houses = this.buildingMeshes.get('house')
    if (houses) houses.visible = detail.houses
    const offices = this.buildingMeshes.get('office')
    if (offices) offices.visible = detail.offices

    if (this.instant) return

    for (const visual of this.featured.values()) {
      visual.marker.position.y =
        visual.height + 0.68 + Math.sin(time * 1.8 + visual.phase) * 0.075
      visual.marker.rotation.y = time * 0.6 + visual.phase
    }
  }

  dispose(): void {
    this.group.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose()
        const material = object.material
        if (Array.isArray(material)) material.forEach((entry) => entry.dispose())
        else material.dispose()
      }
    })
    this.featured.clear()
    this.cityTargets.clear()
    this.cityLabelPositions.clear()
    this.cityCenters.length = 0
    this.buildingMeshes.clear()
    this.parkTreesMesh = null
    this.introMaterials.length = 0
    this.group.clear()
  }
}
