import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

export interface BuildingVariant {
  id: 'house' | 'office' | 'tower' | 'civic'
  geometry: THREE.BufferGeometry
  baseWidth: number
  baseDepth: number
  baseHeight: number
}

export interface FeaturedGeometry {
  geometry: THREE.BufferGeometry
  height: number
}

function paint(geometry: THREE.BufferGeometry, color: string): THREE.BufferGeometry {
  const palette = new THREE.Color(color)
  const count = geometry.getAttribute('position').count
  const colors = new Float32Array(count * 3)

  for (let index = 0; index < count; index += 1) {
    const variation = 0.94 + (index % 5) * 0.015
    colors[index * 3] = palette.r * variation
    colors[index * 3 + 1] = palette.g * variation
    colors[index * 3 + 2] = palette.b * variation
  }

  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  return geometry
}

function part(
  source: THREE.BufferGeometry,
  color: string,
  x = 0,
  y = 0,
  z = 0,
): THREE.BufferGeometry {
  const geometry = source.index ? source.toNonIndexed() : source
  if (geometry !== source) source.dispose()
  geometry.translate(x, y, z)
  paint(geometry, color)
  geometry.computeVertexNormals()
  return geometry
}

function assemble(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const merged = mergeGeometries(parts, false)
  parts.forEach((geometry) => geometry.dispose())
  if (!merged) throw new Error('No se pudo generar la geometría de edificios')
  merged.computeBoundingSphere()
  return merged
}

function house(): BuildingVariant {
  const parts = [
    part(new THREE.BoxGeometry(0.78, 0.62, 0.74), '#e7e0d3', 0, 0.31),
    part(new THREE.ConeGeometry(0.64, 0.4, 4), '#8c5a46', 0, 0.82),
    part(new THREE.BoxGeometry(0.18, 0.3, 0.04), '#5b493b', 0, 0.15, 0.38),
    part(new THREE.BoxGeometry(0.15, 0.14, 0.03), '#7c9fa0', -0.22, 0.42, 0.375),
    part(new THREE.BoxGeometry(0.15, 0.14, 0.03), '#7c9fa0', 0.22, 0.42, 0.375),
  ]

  return { id: 'house', geometry: assemble(parts), baseWidth: 0.78, baseDepth: 0.78, baseHeight: 1.02 }
}

function office(): BuildingVariant {
  const parts = [
    part(new THREE.BoxGeometry(0.82, 1.25, 0.8), '#d6d0c4', 0, 0.625),
    part(new THREE.BoxGeometry(0.86, 0.11, 0.84), '#7f999a', 0, 0.33),
    part(new THREE.BoxGeometry(0.86, 0.11, 0.84), '#7f999a', 0, 0.64),
    part(new THREE.BoxGeometry(0.86, 0.11, 0.84), '#7f999a', 0, 0.95),
    part(new THREE.BoxGeometry(0.92, 0.1, 0.9), '#a99d8b', 0, 1.3),
    part(new THREE.BoxGeometry(0.22, 0.28, 0.04), '#5f4e40', 0, 0.16, 0.405),
  ]

  return { id: 'office', geometry: assemble(parts), baseWidth: 0.92, baseDepth: 0.9, baseHeight: 1.35 }
}

function tower(): BuildingVariant {
  const parts = [
    part(new THREE.BoxGeometry(0.72, 2.4, 0.7), '#d2ccbf', 0, 1.2),
    part(new THREE.BoxGeometry(0.76, 0.1, 0.74), '#7a9496', 0, 0.34),
    part(new THREE.BoxGeometry(0.76, 0.1, 0.74), '#7a9496', 0, 0.69),
    part(new THREE.BoxGeometry(0.76, 0.1, 0.74), '#7a9496', 0, 1.04),
    part(new THREE.BoxGeometry(0.76, 0.1, 0.74), '#7a9496', 0, 1.39),
    part(new THREE.BoxGeometry(0.76, 0.1, 0.74), '#7a9496', 0, 1.74),
    part(new THREE.BoxGeometry(0.52, 0.56, 0.5), '#bcb3a3', 0, 2.68),
    part(new THREE.BoxGeometry(0.3, 0.36, 0.28), '#c9ab58', 0, 3.14),
    part(new THREE.CylinderGeometry(0.03, 0.045, 0.64, 5), '#6d6357', 0, 3.64),
  ]

  return { id: 'tower', geometry: assemble(parts), baseWidth: 0.76, baseDepth: 0.74, baseHeight: 3.96 }
}

function civic(): BuildingVariant {
  const parts = [
    part(new THREE.BoxGeometry(1.04, 0.16, 0.92), '#c9bda9', 0, 0.08),
    part(new THREE.BoxGeometry(0.82, 0.7, 0.72), '#e3d9c8', 0, 0.51),
    part(new THREE.BoxGeometry(1, 0.12, 0.9), '#8e8170', 0, 0.92),
    part(new THREE.CylinderGeometry(0.05, 0.05, 0.55, 6), '#f0e8da', -0.35, 0.38, 0.31),
    part(new THREE.CylinderGeometry(0.05, 0.05, 0.55, 6), '#f0e8da', 0.35, 0.38, 0.31),
    part(new THREE.CylinderGeometry(0.05, 0.05, 0.55, 6), '#f0e8da', -0.35, 0.38, -0.31),
    part(new THREE.CylinderGeometry(0.05, 0.05, 0.55, 6), '#f0e8da', 0.35, 0.38, -0.31),
  ]

  return { id: 'civic', geometry: assemble(parts), baseWidth: 1.04, baseDepth: 0.92, baseHeight: 0.98 }
}

export function createBuildingVariants(): BuildingVariant[] {
  return [house(), office(), tower(), civic()]
}

function featuredTower(accent: string): FeaturedGeometry {
  const parts = [
    part(new THREE.BoxGeometry(1.5, 0.28, 1.2), '#cdc1ab', 0, 0.14),
    part(new THREE.BoxGeometry(1.04, 3.25, 0.9), '#dcd5c7', 0, 1.77),
    part(new THREE.BoxGeometry(1.08, 0.12, 0.94), '#6f8d90', 0, 0.68),
    part(new THREE.BoxGeometry(1.08, 0.12, 0.94), '#6f8d90', 0, 1.22),
    part(new THREE.BoxGeometry(1.08, 0.12, 0.94), '#6f8d90', 0, 1.76),
    part(new THREE.BoxGeometry(1.08, 0.12, 0.94), '#6f8d90', 0, 2.3),
    part(new THREE.BoxGeometry(1.08, 0.12, 0.94), '#6f8d90', 0, 2.84),
    part(new THREE.BoxGeometry(0.66, 0.62, 0.58), '#e7dfcf', 0, 3.71),
    part(new THREE.BoxGeometry(0.4, 0.46, 0.38), accent, 0, 4.25),
    part(new THREE.CylinderGeometry(0.035, 0.05, 0.9, 5), accent, 0, 4.94),
  ]

  return { geometry: assemble(parts), height: 5.42 }
}

function featuredTwin(accent: string): FeaturedGeometry {
  const parts = [
    part(new THREE.BoxGeometry(1.55, 0.24, 1.22), '#cec2ad', 0, 0.12),
    part(new THREE.BoxGeometry(0.52, 2.75, 0.56), '#dcd5c7', -0.4, 1.62),
    part(new THREE.BoxGeometry(0.52, 2.4, 0.56), '#d5cec0', 0.4, 1.44),
    part(new THREE.BoxGeometry(0.96, 0.22, 0.44), accent, 0, 2.28),
    part(new THREE.BoxGeometry(0.3, 0.26, 0.3), accent, -0.4, 3.12),
    part(new THREE.BoxGeometry(0.3, 0.26, 0.3), accent, 0.4, 2.8),
    part(new THREE.BoxGeometry(0.54, 0.1, 0.58), '#6f8d90', -0.4, 1.22),
    part(new THREE.BoxGeometry(0.54, 0.1, 0.58), '#6f8d90', 0.4, 1.58),
  ]

  return { geometry: assemble(parts), height: 3.3 }
}

function featuredStudio(accent: string): FeaturedGeometry {
  const halo = new THREE.TorusGeometry(0.56, 0.04, 6, 20)
  halo.rotateX(Math.PI / 2)

  const parts = [
    part(new THREE.BoxGeometry(1.62, 0.24, 1.32), '#cec2ad', 0, 0.12),
    part(new THREE.BoxGeometry(1.02, 2.2, 0.9), '#ddd6c8', 0, 1.32),
    part(new THREE.BoxGeometry(0.6, 1.25, 0.92), '#d0c8b8', 0.94, 0.87),
    part(new THREE.BoxGeometry(0.78, 0.16, 0.7), '#e7dfcf', 0, 2.5),
    part(halo, accent, 0, 2.84),
    part(new THREE.BoxGeometry(0.34, 0.32, 0.32), accent, 0, 2.84),
    part(new THREE.BoxGeometry(1.06, 0.1, 0.94), '#7f999a', 0, 0.72),
    part(new THREE.BoxGeometry(1.06, 0.1, 0.94), '#7f999a', 0, 1.32),
  ]

  return { geometry: assemble(parts), height: 3.34 }
}

export function createFeaturedGeometry(projectId: string, accent: string): FeaturedGeometry {
  if (projectId === 'tracking') return featuredTower(accent)
  if (projectId === 'mayte-montero') return featuredStudio(accent)
  return featuredTwin(accent)
}
