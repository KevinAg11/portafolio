import type { Vec3 } from '@/types/portfolio'

export const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value))

export const lerp = (start: number, end: number, amount: number): number =>
  start + (end - start) * amount

export const smoothstep = (edge0: number, edge1: number, value: number): number => {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1)
  return t * t * (3 - 2 * t)
}

export const distance2D = (a: Vec3, b: Vec3): number =>
  Math.hypot(a.x - b.x, a.z - b.z)

export function toVector3(value: Vec3): [number, number, number] {
  return [value.x, value.y, value.z]
}

export function seededRandom(seed: number): () => number {
  let state = seed >>> 0
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0
    return state / 4294967295
  }
}
