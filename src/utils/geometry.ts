import { valueNoise } from './noise'

export type Point2 = [number, number]

export interface PolygonBounds {
  minX: number
  maxX: number
  minZ: number
  maxZ: number
}

export function polygonBounds(polygon: Point2[]): PolygonBounds {
  let minX = Number.POSITIVE_INFINITY
  let maxX = Number.NEGATIVE_INFINITY
  let minZ = Number.POSITIVE_INFINITY
  let maxZ = Number.NEGATIVE_INFINITY

  for (const [x, z] of polygon) {
    if (x < minX) minX = x
    if (x > maxX) maxX = x
    if (z < minZ) minZ = z
    if (z > maxZ) maxZ = z
  }

  return { minX, maxX, minZ, maxZ }
}

export function pointInPolygon(x: number, z: number, polygon: Point2[]): boolean {
  let inside = false

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
    const [xi, zi] = polygon[i]
    const [xj, zj] = polygon[j]
    const intersects =
      zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi
    if (intersects) inside = !inside
  }

  return inside
}

function catmullRom(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  t: number,
): number {
  const t2 = t * t
  const t3 = t2 * t
  return (
    0.5 *
    (2 * p1 +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
  )
}

export function densifyClosedPolygon(
  anchors: Point2[],
  subdivisions = 4,
  jitter = 0,
  seed = 0,
): Point2[] {
  if (anchors.length < 3 || subdivisions < 1) return anchors.map((point) => [...point] as Point2)

  const result: Point2[] = []
  const count = anchors.length
  const steps = Math.max(1, Math.round(subdivisions))

  for (let index = 0; index < count; index += 1) {
    const p0 = anchors[(index - 1 + count) % count]
    const p1 = anchors[index]
    const p2 = anchors[(index + 1) % count]
    const p3 = anchors[(index + 2) % count]

    for (let step = 0; step < steps; step += 1) {
      const t = step / steps
      let x = catmullRom(p0[0], p1[0], p2[0], p3[0], t)
      let z = catmullRom(p0[1], p1[1], p2[1], p3[1], t)

      if (jitter !== 0) {
        const wobble = (valueNoise(index * 3.17 + step * 0.71, seed * 0.013) - 0.5) * jitter
        const length = Math.hypot(x, z) || 1
        x += (x / length) * wobble
        z += (z / length) * wobble
      }

      result.push([x, z])
    }
  }

  return result
}

export function distanceToSegment(
  px: number,
  pz: number,
  ax: number,
  az: number,
  bx: number,
  bz: number,
): number {
  const dx = bx - ax
  const dz = bz - az
  const lengthSquared = dx * dx + dz * dz

  if (lengthSquared === 0) return Math.hypot(px - ax, pz - az)

  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / lengthSquared))
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t))
}
