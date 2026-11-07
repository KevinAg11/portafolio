import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

export interface ProceduralVariant {
  id: string
  geometry: THREE.BufferGeometry
  height: number
}

function paint(geometry: THREE.BufferGeometry, color: string): THREE.BufferGeometry {
  const palette = new THREE.Color(color)
  const count = geometry.getAttribute('position').count
  const colors = new Float32Array(count * 3)

  for (let index = 0; index < count; index += 1) {
    const variation = 0.9 + (index % 7) * 0.018
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
  if (!merged) throw new Error('No se pudo generar la geometría de vegetación')
  merged.computeBoundingSphere()
  return merged
}

function conifer(): ProceduralVariant {
  const parts = [
    part(new THREE.CylinderGeometry(0.09, 0.15, 1.5, 5), '#57452f', 0, 0.75),
    part(new THREE.ConeGeometry(0.98, 1.9, 7), '#2f5d3a', 0, 1.95),
    part(new THREE.ConeGeometry(0.76, 1.65, 7), '#386b41', 0, 2.85),
    part(new THREE.ConeGeometry(0.52, 1.35, 6), '#42784a', 0, 3.65),
  ]
  return { id: 'conifer', geometry: assemble(parts), height: 4.3 }
}

function broadleaf(): ProceduralVariant {
  const parts = [
    part(new THREE.CylinderGeometry(0.12, 0.19, 1.6, 5), '#5d4931', 0, 0.8),
    part(new THREE.IcosahedronGeometry(1.05, 0), '#3f7038', 0, 2.15),
    part(new THREE.IcosahedronGeometry(0.78, 0), '#4a7d3f', 0.52, 2.5, 0.28),
    part(new THREE.IcosahedronGeometry(0.72, 0), '#356535', -0.48, 2.42, -0.26),
  ]
  return { id: 'broadleaf', geometry: assemble(parts), height: 3.4 }
}

function tallTree(): ProceduralVariant {
  const parts = [
    part(new THREE.CylinderGeometry(0.1, 0.17, 2.1, 5), '#58452f', 0, 1.05),
    part(new THREE.IcosahedronGeometry(0.88, 0), '#376b3c', 0, 2.85),
    part(new THREE.IcosahedronGeometry(0.68, 0), '#457a43', 0.35, 3.45, -0.18),
    part(new THREE.IcosahedronGeometry(0.58, 0), '#2f6036', -0.32, 3.6, 0.24),
  ]
  return { id: 'tall', geometry: assemble(parts), height: 4.3 }
}

export function createTreeVariants(count = 3): ProceduralVariant[] {
  const builders = [conifer, broadleaf, tallTree]
  const total = Math.max(1, Math.min(builders.length, Math.round(count)))
  return builders.slice(0, total).map((build) => build())
}

export function createBroadleafVariant(): ProceduralVariant {
  return broadleaf()
}

export function createBushVariant(): ProceduralVariant {
  const parts = [
    part(new THREE.IcosahedronGeometry(0.68, 0), '#3f7038', 0, 0.5),
    part(new THREE.IcosahedronGeometry(0.48, 0), '#4c7d42', 0.45, 0.4, 0.2),
    part(new THREE.IcosahedronGeometry(0.42, 0), '#356335', -0.35, 0.36, -0.22),
  ]
  return { id: 'bush', geometry: assemble(parts), height: 1.2 }
}
