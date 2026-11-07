import * as THREE from 'three'
import gsap from 'gsap'
import type { MapRegion, RegionId } from '@/types/portfolio'
import { getRoadSamples, roadLinks, type RoadLink } from '@/data/roads'
import { terrainHeight } from './height'

interface RoadVisual {
  link: RoadLink
  mesh: THREE.Mesh
  material: THREE.MeshStandardMaterial
  index: number
}

const ROAD_LIFT = 0.2

function buildRibbonGeometry(samples: Array<[number, number]>, width: number): THREE.BufferGeometry {
  const positions: number[] = []
  const uvs: number[] = []
  const indices: number[] = []
  const count = samples.length

  for (let index = 0; index < count; index += 1) {
    const [x, z] = samples[index]
    const previous = samples[Math.max(0, index - 1)]
    const next = samples[Math.min(count - 1, index + 1)]
    const tangentX = next[0] - previous[0]
    const tangentZ = next[1] - previous[1]
    const length = Math.hypot(tangentX, tangentZ) || 1
    const sideX = (-tangentZ / length) * width
    const sideZ = (tangentX / length) * width
    const y = terrainHeight(x, z) + ROAD_LIFT

    positions.push(x + sideX, y, z + sideZ, x - sideX, y, z - sideZ)
    uvs.push(index / (count - 1), 0, index / (count - 1), 1)

    if (index < count - 1) {
      const base = index * 2
      indices.push(base, base + 2, base + 1, base + 1, base + 2, base + 3)
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  geometry.computeBoundingSphere()
  return geometry
}

export class RoadLayer {
  readonly group = new THREE.Group()
  private readonly visuals: RoadVisual[] = []

  constructor(
    regions: MapRegion[],
    private readonly instant = false,
  ) {
    this.group.name = 'road-layer'
    const byId = new Map<RegionId, MapRegion>(
      regions.map((region) => [region.id, region]),
    )

    roadLinks.forEach((link, index) => {
      const destination = byId.get(link.to)
      if (!destination) return

      const samples = getRoadSamples(link, 96)
      if (samples.length < 2) return

      const geometry = buildRibbonGeometry(samples, link.width)
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#8b7b5e').lerp(new THREE.Color(destination.color), 0.16),
        roughness: 0.96,
        metalness: 0,
        transparent: true,
        opacity: this.instant ? 1 : 0,
        depthWrite: true,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.name = `road-${link.id}`
      mesh.receiveShadow = true
      mesh.renderOrder = 3
      mesh.userData = { kind: 'road-decoration' }
      this.group.add(mesh)
      this.visuals.push({ link, mesh, material, index })
    })
  }

  playIntro(): void {
    if (this.instant) return
    this.visuals.forEach((visual, index) => {
      gsap.to(visual.material, {
        opacity: 1,
        duration: 1.1,
        delay: 0.65 + index * 0.08,
        ease: 'power2.out',
        overwrite: true,
      })
    })
  }

  setEmphasis(regionId: RegionId | null): void {
    this.visuals.forEach((visual, index) => {
      const linked =
        regionId === null ||
        visual.link.from === regionId ||
        visual.link.to === regionId
      gsap.to(visual.material, {
        opacity: linked ? 1 : 0.32,
        duration: 0.45,
        ease: 'power2.out',
        overwrite: true,
        delay: index * 0.01,
      })
    })
  }

  update(_time: number): void {
    void _time
  }

  dispose(): void {
    for (const visual of this.visuals) {
      this.group.remove(visual.mesh)
      visual.mesh.geometry.dispose()
      visual.material.dispose()
    }
    this.visuals.length = 0
  }
}
