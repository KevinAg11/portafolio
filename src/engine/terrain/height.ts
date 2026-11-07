import { fbm } from '@/utils/noise'
import { clamp, lerp, smoothstep } from '@/utils/math'
import { distanceToSegment, pointInPolygon, type Point2 } from '@/utils/geometry'
import { regions } from '@/data/regions'
import { cities } from '@/data/cities'
import { getRoadSamples, roadLinks } from '@/data/roads'

export const TERRAIN_SIZE = 150
const BASE_HEIGHT = 1.35

interface HeightSample {
  raw: number
  rolling: number
}

function sampleField(x: number, z: number): HeightSample {
  const large = fbm(x * 0.019 + 13.7, z * 0.019 + 7.3, 4) - 0.5
  const medium = fbm(x * 0.048 + 3.1, z * 0.048 + 19.4, 3) - 0.5
  const detail = fbm(x * 0.14 + 41.2, z * 0.14 + 9.8, 2) - 0.5
  const basin = -0.75 * Math.exp(-(x * x + z * z) / 3400)

  const ridgeA = 1 - Math.abs(fbm(x * 0.024 + 60.3, z * 0.024 + 21.7, 4) * 2 - 1)
  const ridgeB = 1 - Math.abs(fbm(x * 0.011 + 5.2, z * 0.011 + 88.1, 3) * 2 - 1)
  const ridge = ridgeA * 0.66 + ridgeB * 0.34
  const radial = Math.hypot(x, z)
  const edge = smoothstep(28, 67, radial)
  const mountainMask = Math.pow(clamp((ridge - 0.4) / 0.6, 0, 1), 1.65) * edge
  const valley = smoothstep(0.56, 0.82, fbm(x * 0.042 + 90.5, z * 0.042 + 10.8, 3)) * 2.1

  const rolling = BASE_HEIGHT + large * 3.2 + medium * 0.55 + basin
  const raw =
    BASE_HEIGHT +
    large * 4.2 +
    medium * 1.05 +
    detail * 0.2 +
    basin +
    mountainMask * 15.5 -
    valley

  return { raw, rolling }
}

function rawHeight(x: number, z: number): number {
  return sampleField(x, z).raw
}

interface Plateau {
  x: number
  z: number
  target: number
  inner: number
  outer: number
}

const plateaus: Plateau[] = regions.map((region) => ({
  x: region.position.x,
  z: region.position.z,
  target: rawHeight(region.position.x, region.position.z) + 0.12,
  inner: 6.5,
  outer: 15.5,
}))

const cityPads: Plateau[] = cities.map((city) => ({
  x: city.position.x,
  z: city.position.z,
  target: rawHeight(city.position.x, city.position.z) + 0.14,
  inner: city.radius * 0.58,
  outer: city.radius + 2.2,
}))

const roadPaths = roadLinks
  .map((link) => getRoadSamples(link, 36))
  .filter((samples) => samples.length > 1)

export function distanceToRoad(x: number, z: number): number {
  let closest = Number.POSITIVE_INFINITY

  for (const samples of roadPaths) {
    for (let index = 0; index < samples.length - 1; index += 1) {
      const [ax, az] = samples[index]
      const [bx, bz] = samples[index + 1]
      const distance = distanceToSegment(x, z, ax, az, bx, bz)
      if (distance < closest) closest = distance
    }
  }

  return closest
}

function roadInfluence(x: number, z: number): number {
  const distance = distanceToRoad(x, z)
  return 1 - smoothstep(1.6, 8.5, distance)
}

function influence(pads: Plateau[], x: number, z: number): { weight: number; target: number } {
  let weight = 0
  let target = 0

  for (const pad of pads) {
    const distance = Math.hypot(x - pad.x, z - pad.z)
    const current = 1 - smoothstep(pad.inner, pad.outer, distance)
    if (current > weight) {
      weight = current
      target = pad.target
    }
  }

  return { weight, target }
}

export function terrainHeight(x: number, z: number): number {
  const { raw, rolling } = sampleField(x, z)
  let height = raw

  const plateau = influence(plateaus, x, z)
  if (plateau.weight > 0) {
    height = lerp(height, plateau.target, plateau.weight * 0.84)
  }

  const road = roadInfluence(x, z)
  if (road > 0) {
    height = lerp(height, rolling, road * 0.72)
  }

  const city = influence(cityPads, x, z)
  if (city.weight > 0) {
    height = lerp(height, city.target, city.weight * 0.92)
  }

  return height
}

export function terrainSlope(x: number, z: number): number {
  const step = 0.65
  const left = terrainHeight(x - step, z)
  const right = terrainHeight(x + step, z)
  const down = terrainHeight(x, z - step)
  const up = terrainHeight(x, z + step)
  return Math.hypot((right - left) / (step * 2), (up - down) / (step * 2))
}

export function isUrbanZone(x: number, z: number, padding = 0): boolean {
  for (const plateau of plateaus) {
    if (Math.hypot(x - plateau.x, z - plateau.z) <= plateau.inner + padding) return true
  }

  const cityPadding = Math.min(padding, 2.4)
  for (const city of cities) {
    if (Math.hypot(x - city.position.x, z - city.position.z) <= city.radius + cityPadding) {
      return true
    }
  }

  return false
}

export function isNearRoad(x: number, z: number, padding = 2.2): boolean {
  return distanceToRoad(x, z) <= padding
}

export function isInsidePolygon(
  x: number,
  z: number,
  boundary: Point2[],
  centerX = 0,
  centerZ = 0,
): boolean {
  return pointInPolygon(x - centerX, z - centerZ, boundary)
}
