import * as THREE from 'three'
import gsap from 'gsap'
import type { MapRegion, QualityProfile, RegionId } from '@/types/portfolio'
import { createRegionMaterial } from '@/engine/effects/RegionShader'
import { buildRegionGeometry } from '@/engine/regions/RegionGeometry'
import { terrainHeight } from './height'

interface RegionVisual {
  region: MapRegion
  mesh: THREE.Mesh
  material: THREE.ShaderMaterial
  border: THREE.Mesh
  borderMaterial: THREE.MeshBasicMaterial
}

function cellSizeForQuality(quality: QualityProfile): number {
  if (quality.tier === 'high') return 0.9
  if (quality.tier === 'medium') return 1.2
  return 1.6
}

function borderColor(color: string): THREE.Color {
  return new THREE.Color(color).lerp(new THREE.Color('#f4fbf6'), 0.36)
}

export class RegionLayer {
  readonly group = new THREE.Group()
  private readonly visuals = new Map<RegionId, RegionVisual>()

  constructor(
    regions: MapRegion[],
    quality: QualityProfile,
    private readonly instant = false,
  ) {
    this.group.name = 'region-layer'
    const cellSize = cellSizeForQuality(quality)

    for (const region of regions) {
      const { surface, border } = buildRegionGeometry(region, cellSize)
      const material = createRegionMaterial(region.color)
      material.uniforms.uIntro.value = instant ? 1 : 0

      const mesh = new THREE.Mesh(surface, material)
      mesh.name = `region-${region.id}`
      mesh.position.set(region.position.x, region.position.y, region.position.z)
      mesh.renderOrder = 1
      mesh.receiveShadow = quality.shadows
      mesh.userData = { kind: 'region', regionId: region.id }

      const borderMaterial = new THREE.MeshBasicMaterial({
        color: borderColor(region.color),
        transparent: true,
        opacity: instant ? 0.72 : 0,
        side: THREE.DoubleSide,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      })
      const borderMesh = new THREE.Mesh(border, borderMaterial)
      borderMesh.name = `region-border-${region.id}`
      borderMesh.position.set(region.position.x, region.position.y, region.position.z)
      borderMesh.renderOrder = 2
      borderMesh.userData = { kind: 'region-decoration' }

      this.group.add(mesh, borderMesh)
      this.visuals.set(region.id, {
        region,
        mesh,
        material,
        border: borderMesh,
        borderMaterial,
      })
    }

    this.group.visible = true
  }

  get meshes(): THREE.Mesh[] {
    return [...this.visuals.values()].map((visual) => visual.mesh)
  }

  getRegionVisual(id: RegionId | null | undefined): RegionVisual | undefined {
    if (!id) return undefined
    return this.visuals.get(id)
  }

  setHover(id: RegionId | null): void {
    for (const [regionId, visual] of this.visuals) {
      const hovered = regionId === id
      gsap.to(visual.material.uniforms.uHover, {
        value: hovered ? 1 : 0,
        duration: hovered ? 0.28 : 0.4,
        ease: 'power2.out',
        overwrite: true,
      })
      gsap.to(visual.borderMaterial, {
        opacity: hovered ? 0.95 : this.borderOpacity(regionId),
        duration: 0.3,
        ease: 'power2.out',
        overwrite: true,
      })
    }
  }

  private borderOpacity(regionId: RegionId): number {
    const selectedId = this.selectedId
    if (selectedId === null) return 0.72
    return selectedId === regionId ? 0.95 : 0.18
  }

  private selectedId: RegionId | null = null

  setSelection(selectedId: RegionId | null): void {
    this.selectedId = selectedId

    for (const [regionId, visual] of this.visuals) {
      const selected = regionId === selectedId
      const dim = selectedId !== null && !selected ? 1 : 0

      gsap.to(visual.material.uniforms.uSelected, {
        value: selected ? 1 : 0,
        duration: 0.55,
        ease: 'power2.out',
        overwrite: true,
      })
      gsap.to(visual.material.uniforms.uDim, {
        value: dim,
        duration: 0.55,
        ease: 'power2.out',
        overwrite: true,
      })
      gsap.to(visual.borderMaterial, {
        opacity: this.borderOpacity(regionId),
        duration: 0.5,
        ease: 'power2.out',
        overwrite: true,
      })
    }
  }

  setLabelEmphasis(selectedId: RegionId | null): void {
    for (const [regionId, visual] of this.visuals) {
      const focused = selectedId === null || regionId === selectedId
      visual.borderMaterial.color.set(
        focused
          ? borderColor(visual.region.color)
          : new THREE.Color(visual.region.color).lerp(new THREE.Color('#6b7c6a'), 0.25),
      )
    }
  }

  playIntro(): void {
    if (this.instant) return
    const visuals = [...this.visuals.values()]
    visuals.forEach((visual, index) => {
      gsap.to(visual.material.uniforms.uIntro, {
        value: 1,
        duration: 1.1,
        delay: 0.12 * index,
        ease: 'power2.out',
        overwrite: true,
      })
      gsap.to(visual.borderMaterial, {
        opacity: 0.72,
        duration: 1,
        delay: 0.12 * index + 0.35,
        ease: 'power2.out',
        overwrite: true,
      })
    })
  }

  update(time: number): void {
    for (const visual of this.visuals.values()) {
      visual.material.uniforms.uTime.value = time
    }
  }

  dispose(): void {
    for (const visual of this.visuals.values()) {
      visual.mesh.geometry.dispose()
      visual.material.dispose()
      visual.border.geometry.dispose()
      visual.borderMaterial.dispose()
      this.group.remove(visual.mesh, visual.border)
    }
    this.visuals.clear()
  }
}

export function regionSurfaceHeight(region: MapRegion): number {
  return terrainHeight(region.position.x, region.position.z)
}
