import type { BuildingKind, MapCity, MapRegion, RegionId } from '@/types/portfolio'
import { pointInPolygon } from '@/utils/geometry'
import { clamp, lerp, seededRandom } from '@/utils/math'

export interface BuildingPlacement {
  id: string
  cityId: string
  regionId: RegionId
  kind: BuildingKind
  x: number
  z: number
  rotation: number
  width: number
  depth: number
  height: number
  color: string
  projectId?: string
}

export interface StreetSegment {
  start: [number, number]
  end: [number, number]
  width: number
}

export interface CityPark {
  x: number
  z: number
  radius: number
}

export interface CityLayout {
  city: MapCity
  buildings: BuildingPlacement[]
  streets: StreetSegment[]
  plaza: { x: number; z: number; radius: number }
  parks: CityPark[]
}

interface LayoutOptions {
  density?: number
}

interface LocalCell {
  x: number
  z: number
}

const facadePalette = [
  '#d8d0c2',
  '#c9c0ae',
  '#b9b3a5',
  '#cbb9a2',
  '#aeb5ad',
  '#d6c8b2',
  '#bfb2a0',
  '#c4c8c2',
]

function cityToWorld(city: MapCity, localX: number, localZ: number): [number, number] {
  const cos = Math.cos(city.rotation)
  const sin = Math.sin(city.rotation)
  return [
    city.position.x + localX * cos - localZ * sin,
    city.position.z + localX * sin + localZ * cos,
  ]
}

function insideRegion(region: MapRegion, x: number, z: number): boolean {
  return pointInPolygon(x - region.position.x, z - region.position.z, region.boundary)
}

function chooseKind(regionId: RegionId, roll: number): BuildingKind {
  if (regionId === 'BUSINESS') {
    if (roll > 0.82) return 'tower'
    if (roll > 0.35) return 'office'
    return 'house'
  }

  if (regionId === 'WEB' || regionId === 'SYSTEMS') {
    if (roll > 0.88) return 'tower'
    if (roll > 0.42) return 'office'
    return 'house'
  }

  if (regionId === 'MOBILE') {
    if (roll > 0.86) return 'tower'
    if (roll > 0.38) return 'office'
    return 'house'
  }

  if (roll > 0.9) return 'tower'
  if (roll > 0.5) return 'office'
  return 'house'
}

function buildingHeight(kind: BuildingKind, random: () => number, regionId: RegionId): number {
  if (kind === 'tower') {
    const max = regionId === 'BUSINESS' ? 4.4 : 3.5
    return lerp(2.3, max, random())
  }
  if (kind === 'office') return lerp(1.2, 2.05, random())
  if (kind === 'house') return lerp(0.72, 1.15, random())
  return 0.95
}

function landmarkHeight(regionId: RegionId, random: () => number): number {
  const base = regionId === 'BUSINESS' ? 5.2 : 4.4
  return base + random() * 0.9
}

function cellKey(x: number, z: number): string {
  return `${x.toFixed(3)}:${z.toFixed(3)}`
}

function nearbyKeys(x: number, z: number, step: number): string[] {
  return [
    cellKey(x + step, z),
    cellKey(x - step, z),
    cellKey(x, z + step),
    cellKey(x, z - step),
    cellKey(x + step, z + step),
    cellKey(x + step, z - step),
    cellKey(x - step, z + step),
    cellKey(x - step, z - step),
  ]
}

function createLocalCells(inner: number, outer: number): LocalCell[] {
  const cells: LocalCell[] = []
  for (const x of [-outer, -inner, inner, outer]) {
    for (const z of [-outer, -inner, inner, outer]) {
      cells.push({ x, z })
    }
  }
  return cells
}

function createLandmark(
  city: MapCity,
  region: MapRegion,
  cell: LocalCell,
  projectId: string | undefined,
  random: () => number,
): BuildingPlacement {
  const [x, z] = cityToWorld(city, cell.x, cell.z)
  const isProject = Boolean(projectId)

  return {
    id: projectId ? `${city.id}-${projectId}` : `${city.id}-civic`,
    cityId: city.id,
    regionId: city.regionId,
    kind: isProject ? 'landmark' : 'civic',
    x,
    z,
    rotation: city.rotation + (random() - 0.5) * 0.12,
    width: isProject ? 1.2 + random() * 0.28 : 0.92 + random() * 0.16,
    depth: isProject ? 0.92 + random() * 0.24 : 0.78 + random() * 0.14,
    height: isProject ? landmarkHeight(city.regionId, random) : 1.05 + random() * 0.35,
    color: isProject ? region.color : '#cfc4b1',
    projectId,
  }
}

export function generateCityLayout(
  city: MapCity,
  region: MapRegion,
  options: LayoutOptions = {},
): CityLayout {
  const density = clamp(options.density ?? 1, 0, 1)
  const random = seededRandom(city.seed)
  const inner = city.radius * 0.5
  const outer = city.radius * 0.67
  const cellGap = outer - inner
  const maxHalfFootprint = clamp(cellGap * 0.42, 0.26, 0.4)
  const plazaRadius = city.radius * 0.3
  const ringRadius = city.radius - 0.35

  const landmarkCells: LocalCell[] = [
    { x: -inner, z: inner },
    { x: inner, z: inner },
    { x: -inner, z: -inner },
    { x: inner, z: -inner },
  ]

  const landmarks: BuildingPlacement[] = []
  const blocked = new Set<string>()

  if (city.projectIds.length > 0) {
    city.projectIds.slice(0, landmarkCells.length).forEach((projectId, index) => {
      const cell = landmarkCells[index]
      landmarks.push(createLandmark(city, region, cell, projectId, random))
      blocked.add(cellKey(cell.x, cell.z))
      for (const key of nearbyKeys(cell.x, cell.z, cellGap)) blocked.add(key)
    })
  } else {
    const cell = landmarkCells[0]
    landmarks.push(createLandmark(city, region, cell, undefined, random))
    blocked.add(cellKey(cell.x, cell.z))
  }

  const availableCells = createLocalCells(inner, outer).filter(
    (cell) => !blocked.has(cellKey(cell.x, cell.z)),
  )

  const parkCell =
    availableCells.find((cell) => Math.abs(cell.x) === inner && Math.abs(cell.z) === inner) ??
    availableCells[0]
  let park: CityPark | undefined

  if (parkCell) {
    const [x, z] = cityToWorld(city, parkCell.x, parkCell.z)
    park = { x, z, radius: city.radius * 0.095 }
    blocked.add(cellKey(parkCell.x, parkCell.z))
  }

  const buildings: BuildingPlacement[] = [...landmarks]

  for (const cell of availableCells) {
    if (blocked.has(cellKey(cell.x, cell.z))) continue
    if (random() > 0.58 + density * 0.42) continue

    const kind = chooseKind(city.regionId, random())
    const width = maxHalfFootprint * 2 * (0.8 + random() * 0.2)
    const depth = maxHalfFootprint * 2 * (0.8 + random() * 0.2)
    const jitterX = (random() - 0.5) * cellGap * 0.12
    const jitterZ = (random() - 0.5) * cellGap * 0.12
    const [x, z] = cityToWorld(city, cell.x + jitterX, cell.z + jitterZ)

    if (!insideRegion(region, x, z)) continue

    buildings.push({
      id: `${city.id}-building-${buildings.length}`,
      cityId: city.id,
      regionId: city.regionId,
      kind,
      x,
      z,
      rotation: city.rotation + (random() - 0.5) * 0.18,
      width,
      depth,
      height: buildingHeight(kind, random, city.regionId),
      color: facadePalette[Math.floor(random() * facadePalette.length)],
    })
  }

  const streets: StreetSegment[] = []
  const cardinal: Array<[number, number]> = [
    [ringRadius, 0],
    [0, ringRadius],
    [-ringRadius, 0],
    [0, -ringRadius],
  ]

  for (const [localX, localZ] of cardinal) {
    streets.push({
      start: cityToWorld(city, 0, 0),
      end: cityToWorld(city, localX, localZ),
      width: 0.92,
    })
  }

  const ringSegments = 20
  for (let index = 0; index < ringSegments; index += 1) {
    const angleA = (index / ringSegments) * Math.PI * 2
    const angleB = ((index + 1) / ringSegments) * Math.PI * 2
    streets.push({
      start: cityToWorld(city, Math.cos(angleA) * ringRadius, Math.sin(angleA) * ringRadius),
      end: cityToWorld(city, Math.cos(angleB) * ringRadius, Math.sin(angleB) * ringRadius),
      width: 0.68,
    })
  }

  const [plazaX, plazaZ] = cityToWorld(city, 0, 0)
  const plaza = { x: plazaX, z: plazaZ, radius: plazaRadius }

  return {
    city,
    buildings,
    streets,
    plaza,
    parks: park ? [park] : [],
  }
}
