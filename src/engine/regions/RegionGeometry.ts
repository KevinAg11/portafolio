import * as THREE from 'three'
import type { MapRegion } from '@/types/portfolio'
import { pointInPolygon, polygonBounds } from '@/utils/geometry'
import { terrainHeight } from '@/engine/terrain/height'

const SURFACE_OFFSET = 0.09
const BORDER_OFFSET = 0.16
const BORDER_WIDTH = 0.4

function localSurfaceY(region: MapRegion, x: number, z: number, offset: number): number {
  const worldX = region.position.x + x
  const worldZ = region.position.z + z
  return terrainHeight(worldX, worldZ) + offset - region.position.y
}

export function buildRegionSurface(
  region: MapRegion,
  cellSize = 1.1,
): THREE.BufferGeometry {
  const boundary = region.boundary
  const bounds = polygonBounds(boundary)
  const width = Math.max(bounds.maxX - bounds.minX, cellSize)
  const depth = Math.max(bounds.maxZ - bounds.minZ, cellSize)
  const columns = Math.max(1, Math.ceil(width / cellSize))
  const rows = Math.max(1, Math.ceil(depth / cellSize))
  const stepX = width / columns
  const stepZ = depth / rows

  const positions: number[] = []
  const indices: number[] = []

  for (let row = 0; row <= rows; row += 1) {
    for (let column = 0; column <= columns; column += 1) {
      const x = bounds.minX + column * stepX
      const z = bounds.minZ + row * stepZ
      positions.push(x, localSurfaceY(region, x, z, SURFACE_OFFSET), z)
    }
  }

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const centerX = bounds.minX + (column + 0.5) * stepX
      const centerZ = bounds.minZ + (row + 0.5) * stepZ
      if (!pointInPolygon(centerX, centerZ, boundary)) continue

      const topLeft = row * (columns + 1) + column
      const topRight = topLeft + 1
      const bottomLeft = topLeft + columns + 1
      const bottomRight = bottomLeft + 1

      indices.push(topLeft, bottomLeft, topRight, topRight, bottomLeft, bottomRight)
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  geometry.computeBoundingSphere()
  return geometry
}

export function buildRegionBorder(
  region: MapRegion,
  width = BORDER_WIDTH,
): THREE.BufferGeometry {
  const boundary = region.boundary
  const count = boundary.length
  const positions: number[] = []
  const uvs: number[] = []
  const indices: number[] = []

  for (let index = 0; index < count; index += 1) {
    const [x, z] = boundary[index]
    const [nextX, nextZ] = boundary[(index + 1) % count]
    const tangentX = nextX - x
    const tangentZ = nextZ - z
    const length = Math.hypot(tangentX, tangentZ) || 1
    const normalX = -tangentZ / length
    const normalZ = tangentX / length
    const halfWidth = width / 2

    const leftX = x + normalX * halfWidth
    const leftZ = z + normalZ * halfWidth
    const rightX = x - normalX * halfWidth
    const rightZ = z - normalZ * halfWidth

    positions.push(
      leftX,
      localSurfaceY(region, leftX, leftZ, BORDER_OFFSET),
      leftZ,
      rightX,
      localSurfaceY(region, rightX, rightZ, BORDER_OFFSET),
      rightZ,
    )
    uvs.push(index / count, 0, index / count, 1)
  }

  for (let index = 0; index < count; index += 1) {
    const next = (index + 1) % count
    const base = index * 2
    const nextBase = next * 2
    indices.push(base, nextBase, base + 1, base + 1, nextBase, nextBase + 1)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  geometry.computeBoundingSphere()
  return geometry
}

export function buildRegionGeometry(
  region: MapRegion,
  cellSize = 1.1,
): { surface: THREE.BufferGeometry; border: THREE.BufferGeometry } {
  return {
    surface: buildRegionSurface(region, cellSize),
    border: buildRegionBorder(region),
  }
}
