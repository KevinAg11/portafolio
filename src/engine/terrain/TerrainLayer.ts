import * as THREE from 'three'
import type { QualityProfile } from '@/types/portfolio'
import { buildTerrainGeometry } from './TerrainGeometry'
import { createTerrainMaterial } from './TerrainMaterial'

export class TerrainLayer {
  readonly mesh: THREE.Mesh
  readonly material: THREE.ShaderMaterial

  constructor(quality: QualityProfile) {
    const geometry = buildTerrainGeometry(quality.terrainSegments)
    this.material = createTerrainMaterial()
    this.mesh = new THREE.Mesh(geometry, this.material)
    this.mesh.name = 'terrain-surface'
    this.mesh.receiveShadow = quality.shadows
  }

  update(time: number): void {
    this.material.uniforms.uTime.value = time
  }

  dispose(): void {
    this.mesh.geometry.dispose()
    this.material.dispose()
  }
}
