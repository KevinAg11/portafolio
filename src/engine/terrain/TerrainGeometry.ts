import * as THREE from 'three'
import { TERRAIN_SIZE, terrainHeight } from './height'

export function buildTerrainGeometry(segments: number): THREE.BufferGeometry {
  const geometry = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, segments, segments)
  geometry.rotateX(-Math.PI / 2)

  const positions = geometry.attributes.position as THREE.BufferAttribute
  for (let index = 0; index < positions.count; index += 1) {
    const x = positions.getX(index)
    const z = positions.getZ(index)
    positions.setY(index, terrainHeight(x, z))
  }

  positions.needsUpdate = true
  geometry.computeVertexNormals()
  geometry.computeBoundingSphere()

  return geometry
}
