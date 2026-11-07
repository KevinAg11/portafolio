import * as THREE from 'three'
import gsap from 'gsap'
import type { MapRegion, QualityProfile } from '@/types/portfolio'
import { isInsidePolygon } from './height'
import { seededRandom } from '@/utils/math'

interface StructureVisual {
  mesh: THREE.InstancedMesh
  material: THREE.MeshStandardMaterial
}

function seedFromRegion(region: MapRegion): number {
  return region.id.split('').reduce((total, char) => total + char.charCodeAt(0), 0) * 97
}

function polygonBounds(polygon: Array<[number, number]>): {
  minX: number
  maxX: number
  minZ: number
  maxZ: number
} {
  const xs = polygon.map(([x]) => x)
  const zs = polygon.map(([, z]) => z)
  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minZ: Math.min(...zs),
    maxZ: Math.max(...zs),
  }
}

export class StructureLayer {
  readonly group = new THREE.Group()
  private readonly visuals: StructureVisual[] = []
  private readonly geometry = new THREE.BoxGeometry(1, 1, 1)
  private readonly beaconGeometry = new THREE.CylinderGeometry(0.08, 0.06, 1, 6)

  constructor(
    regions: MapRegion[],
    quality: QualityProfile,
    private readonly instant = false,
  ) {
    this.group.name = 'structure-layer'
    this.geometry.translate(0, 0.5, 0)

    for (const region of regions) {
      const random = seededRandom(seedFromRegion(region))
      const count = Math.max(3, Math.round((7 + region.projectIds.length * 2) * quality.structureDensity))
      const bounds = polygonBounds(region.boundary)
      const material = new THREE.MeshStandardMaterial({
        color: '#ffffff',
        metalness: 0.35,
        roughness: 0.42,
        transparent: true,
        opacity: this.instant ? 0.82 : 0,
      })
      const mesh = new THREE.InstancedMesh(this.geometry, material, count)
      mesh.name = `structures-${region.id}`
      mesh.userData = { kind: 'structure-decoration' }

      const matrix = new THREE.Matrix4()
      const color = new THREE.Color()
      const baseColor = new THREE.Color(region.color)
      const darkColor = new THREE.Color('#0b1626')
      const lightColor = new THREE.Color('#dbeafe')
      let placed = 0
      let attempts = 0

      while (placed < count && attempts < count * 30) {
        attempts += 1
        const localX = bounds.minX + random() * (bounds.maxX - bounds.minX)
        const localZ = bounds.minZ + random() * (bounds.maxZ - bounds.minZ)
        if (!isInsidePolygon(localX, localZ, region.boundary)) continue

        const height = 0.6 + random() * (region.id === 'BUSINESS' ? 4.6 : 2.8)
        const width = 0.55 + random() * 0.9
        const position = new THREE.Vector3(
          region.position.x + localX,
          region.position.y,
          region.position.z + localZ,
        )
        matrix.compose(
          position,
          new THREE.Quaternion(),
          new THREE.Vector3(width, height, width),
        )
        mesh.setMatrixAt(placed, matrix)

        color.copy(darkColor).lerp(baseColor, 0.55 + random() * 0.35)
        color.lerp(lightColor, random() * 0.22)
        mesh.setColorAt(placed, color)

        if (random() > 0.82) {
          const beacon = new THREE.Mesh(
            this.beaconGeometry,
            new THREE.MeshBasicMaterial({
              color: new THREE.Color(region.color).lerp(lightColor, 0.35),
              transparent: true,
              opacity: 0.55,
              blending: THREE.AdditiveBlending,
              depthWrite: false,
            }),
          )
          beacon.scale.set(1, height + 1.4, 1)
          beacon.position.set(position.x, region.position.y + height + 0.7, position.z)
          this.group.add(beacon)
        }

        placed += 1
      }

      mesh.count = placed
      mesh.instanceMatrix.needsUpdate = true
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
      this.group.add(mesh)
      this.visuals.push({ mesh, material })
    }
  }

  playIntro(): void {
    if (this.instant) return
    this.visuals.forEach((visual, index) => {
      gsap.to(visual.material, {
        opacity: 0.82,
        duration: 0.9,
        delay: 0.35 + index * 0.08,
        ease: 'power2.out',
        overwrite: true,
      })
    })
  }

  dispose(): void {
    for (const visual of this.visuals) {
      this.group.remove(visual.mesh)
      visual.mesh.dispose()
      visual.material.dispose()
    }
    this.visuals.length = 0

    this.group.traverse((object) => {
      if (object instanceof THREE.Mesh && object.geometry !== this.geometry) {
        object.geometry.dispose()
        const material = object.material
        if (Array.isArray(material)) material.forEach((entry) => entry.dispose())
        else material.dispose()
      }
    })

    this.geometry.dispose()
    this.beaconGeometry.dispose()
  }
}
