import type { MapCity, RegionId } from '@/types/portfolio'
import { getRegion } from './regions'

type CitySeed = Omit<MapCity, 'position'> & {
  local: [number, number]
}

const citySeeds: CitySeed[] = [
  {
    id: 'business-nexo',
    name: 'Nexo Central',
    regionId: 'BUSINESS',
    local: [0, 0],
    radius: 5,
    rotation: 0.18,
    seed: 4201,
    projectIds: ['tracking'],
  },
  {
    id: 'business-meridiano',
    name: 'Distrito Meridiano',
    regionId: 'BUSINESS',
    local: [7.2, -6],
    radius: 4.2,
    rotation: -0.34,
    seed: 4202,
    projectIds: [],
  },
  {
    id: 'web-villa',
    name: 'Villa Código',
    regionId: 'WEB',
    local: [0, 0],
    radius: 4.9,
    rotation: 0.24,
    seed: 5101,
    projectIds: ['elizabeth-alvarez'],
  },
  {
    id: 'web-mirador',
    name: 'Mirador Digital',
    regionId: 'WEB',
    local: [-7.2, 6],
    radius: 4.2,
    rotation: -0.22,
    seed: 5102,
    projectIds: ['mayte-montero'],
  },
  {
    id: 'mobile-puerto',
    name: 'Puerto Móvil',
    regionId: 'MOBILE',
    local: [0, 0],
    radius: 4.8,
    rotation: -0.16,
    seed: 6201,
    projectIds: [],
  },
  {
    id: 'mobile-estacion',
    name: 'Estación Sur',
    regionId: 'MOBILE',
    local: [7, -5.8],
    radius: 4.2,
    rotation: 0.3,
    seed: 6202,
    projectIds: [],
  },
  {
    id: 'systems-nodo',
    name: 'Nodo Central',
    regionId: 'SYSTEMS',
    local: [0, 0],
    radius: 4.8,
    rotation: 0.12,
    seed: 7301,
    projectIds: [],
  },
  {
    id: 'systems-red',
    name: 'Red Alta',
    regionId: 'SYSTEMS',
    local: [-6.2, 4.4],
    radius: 3.9,
    rotation: -0.28,
    seed: 7302,
    projectIds: [],
  },
  {
    id: 'experience-lumen',
    name: 'Estudio Lumen',
    regionId: 'EXPERIENCE',
    local: [0, 0],
    radius: 4.8,
    rotation: 0.2,
    seed: 8401,
    projectIds: [],
  },
  {
    id: 'experience-jardin',
    name: 'Jardín Inmersivo',
    regionId: 'EXPERIENCE',
    local: [6.2, 4.3],
    radius: 3.9,
    rotation: -0.18,
    seed: 8402,
    projectIds: [],
  },
]

export const cities: MapCity[] = citySeeds.map((seed) => {
  const region = getRegion(seed.regionId)
  const origin = region?.position ?? { x: 0, y: 0, z: 0 }

  return {
    ...seed,
    position: {
      x: origin.x + seed.local[0],
      y: origin.y,
      z: origin.z + seed.local[1],
    },
  }
})

export const citiesById = new Map<string, MapCity>(cities.map((city) => [city.id, city]))

export const citiesByRegion = new Map<RegionId, MapCity[]>()
for (const city of cities) {
  const group = citiesByRegion.get(city.regionId) ?? []
  group.push(city)
  citiesByRegion.set(city.regionId, group)
}

export function getCity(id: string | null | undefined): MapCity | undefined {
  if (!id) return undefined
  return citiesById.get(id)
}

export function getRegionCities(regionId: RegionId): MapCity[] {
  return citiesByRegion.get(regionId) ?? []
}

export function getCityForProject(projectId: string | null | undefined): MapCity | undefined {
  if (!projectId) return undefined
  return cities.find((city) => city.projectIds.includes(projectId))
}
