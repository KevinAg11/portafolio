import * as THREE from 'three'
import gsap from 'gsap'
import type { QualityProfile } from '@/types/portfolio'
import { fbm } from '@/utils/noise'
import { seededRandom, smoothstep } from '@/utils/math'
import { isNearRoad, isUrbanZone, terrainHeight, terrainSlope } from '@/engine/terrain/height'
import { createBushVariant, createTreeVariants, type ProceduralVariant } from './TreeGenerator'

interface Placement {
  x: number
  z: number
  rotation: number
  scale: number
}

interface VegetationVisual {
  mesh: THREE.InstancedMesh
  material: THREE.MeshStandardMaterial
}

const TERRAIN_HALF = 66

function createMaterial(instant: boolean): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.94,
    metalness: 0,
    flatShading: true,
    transparent: !instant,
    opacity: instant ? 1 : 0,
  })
}

function gridStepForQuality(quality: QualityProfile): number {
  if (quality.tier === 'high') return 1.9
  if (quality.tier === 'medium') return 2.45
  return 3.15
}

function buildInstancedMesh(
  variant: ProceduralVariant,
  placements: Placement[],
  quality: QualityProfile,
  instant: boolean,
): VegetationVisual | null {
  if (placements.length === 0) return null

  const material = createMaterial(instant)
  const mesh = new THREE.InstancedMesh(variant.geometry, material, placements.length)
  mesh.name = `vegetation-${variant.id}`
  mesh.castShadow = quality.shadows
  mesh.receiveShadow = false
  mesh.userData = { kind: 'vegetation-decoration' }

  const dummy = new THREE.Object3D()

  placements.forEach((placement, index) => {
    dummy.position.set(placement.x, terrainHeight(placement.x, placement.z) - 0.06, placement.z)
    dummy.rotation.set(0, placement.rotation, 0)
    dummy.scale.setScalar(placement.scale)
    dummy.updateMatrix()
    mesh.setMatrixAt(index, dummy.matrix)
  })

  mesh.instanceMatrix.needsUpdate = true
  mesh.computeBoundingSphere()
  return { mesh, material }
}

export class VegetationLayer {
  readonly group = new THREE.Group()
  private readonly visuals: VegetationVisual[] = []

  constructor(
    quality: QualityProfile,
    private readonly instant = false,
  ) {
    this.group.name = 'vegetation-layer'

    const random = seededRandom(9127)
    const step = gridStepForQuality(quality)
    const density = quality.vegetationDensity
    const treeVariants = createTreeVariants(quality.treeVariants)
    const bushVariant = createBushVariant()
    const treePlacements: Placement[][] = treeVariants.map(() => [])
    const bushPlacements: Placement[] = []

    for (let z = -TERRAIN_HALF; z <= TERRAIN_HALF; z += step) {
      for (let x = -TERRAIN_HALF; x <= TERRAIN_HALF; x += step) {
        const jitterX = (random() - 0.5) * step * 0.9
        const jitterZ = (random() - 0.5) * step * 0.9
        const sampleX = x + jitterX
        const sampleZ = z + jitterZ

        const forest = fbm(sampleX * 0.032 + 15.3, sampleZ * 0.032 + 4.7, 3)
        const cluster = smoothstep(0.38, 0.68, forest)
        const chance = (0.06 + cluster * 0.94) * density

        if (random() > chance) continue
        if (isUrbanZone(sampleX, sampleZ, 7)) continue
        if (isNearRoad(sampleX, sampleZ, 2.7)) continue
        if (terrainSlope(sampleX, sampleZ) > 1.18) continue

        const isBush = random() < 0.24
        const rotation = random() * Math.PI * 2

        if (isBush) {
          bushPlacements.push({
            x: sampleX,
            z: sampleZ,
            rotation,
            scale: 0.8 + random() * 0.9,
          })
          continue
        }

        const selector = random()
        const variantIndex =
          treeVariants.length === 1
            ? 0
            : selector < 0.42
              ? 0
              : selector < 0.8
                ? 1
                : Math.min(2, treeVariants.length - 1)

        treePlacements[variantIndex].push({
          x: sampleX,
          z: sampleZ,
          rotation,
          scale: 0.72 + random() * 0.7,
        })
      }
    }

    treeVariants.forEach((variant, index) => {
      const visual = buildInstancedMesh(variant, treePlacements[index], quality, instant)
      if (visual) {
        this.group.add(visual.mesh)
        this.visuals.push(visual)
      } else {
        variant.geometry.dispose()
      }
    })

    const bushVisual = buildInstancedMesh(bushVariant, bushPlacements, quality, instant)
    if (bushVisual) {
      this.group.add(bushVisual.mesh)
      this.visuals.push(bushVisual)
    } else {
      bushVariant.geometry.dispose()
    }
  }

  playIntro(): void {
    if (this.instant) return
    this.visuals.forEach((visual, index) => {
      gsap.to(visual.material, {
        opacity: 1,
        duration: 0.9,
        delay: 0.5 + index * 0.08,
        ease: 'power2.out',
        overwrite: true,
        onComplete: () => {
          visual.material.transparent = false
          visual.material.needsUpdate = true
        },
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
      visual.mesh.dispose()
    }
    this.visuals.length = 0
  }
}
