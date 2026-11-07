import { describe, expect, it } from 'vitest'
import { projects, getFeaturedProjects, getProjectById } from '@/data/projects'
import {
  cities,
  getCityForProject,
  getRegionCities,
} from '@/data/cities'
import {
  getProjectCount,
  getRegion,
  getRegionProjects,
  populatedRegions,
  regions,
} from '@/data/regions'
import {
  isInsidePolygon,
  isUrbanZone,
  TERRAIN_SIZE,
  terrainHeight,
} from '@/engine/terrain/height'
import { clamp, distance2D, lerp, smoothstep } from '@/utils/math'
import { isSafeExternalUrl } from '@/utils/links'
import {
  densifyClosedPolygon,
  distanceToSegment,
  pointInPolygon,
  polygonBounds,
} from '@/utils/geometry'
import { createBushVariant, createTreeVariants } from '@/engine/environment/TreeGenerator'
import { generateCityLayout } from '@/engine/cities/CityLayout'
import {
  createBuildingVariants,
  createFeaturedGeometry,
} from '@/engine/cities/BuildingGenerator'
import {
  cityDetailForDistance,
  cityDetailVisibility,
} from '@/engine/core/lod'

describe('project data', () => {
  it('contains the three published projects with unique ids', () => {
    expect(projects).toHaveLength(3)
    expect(new Set(projects.map((project) => project.id)).size).toBe(3)
    expect(getFeaturedProjects()).toHaveLength(3)
  })

  it('links every project to an existing region', () => {
    for (const project of projects) {
      expect(getRegion(project.regionId)).toBeDefined()
    }
  })

  it('uses local image paths and safe external links', () => {
    for (const project of projects) {
      expect(project.image.startsWith('/images/projects/')).toBe(true)
      for (const image of project.gallery ?? []) {
        expect(image.startsWith('/images/projects/')).toBe(true)
      }
      expect(isSafeExternalUrl(project.liveUrl)).toBe(true)
    }
  })

  it('resolves projects by id', () => {
    expect(getProjectById('elizabeth-alvarez')?.title).toBe('Elizabeth Álvarez')
    expect(getProjectById('tracking')?.title).toBe('TracKing')
    expect(getProjectById('missing')).toBeUndefined()
  })
})

describe('region data', () => {
  it('defines five regions with irregular boundaries and camera views', () => {
    expect(regions).toHaveLength(5)
    expect(new Set(regions.map((region) => region.id)).size).toBe(5)
    expect(new Set(regions.map((region) => region.color)).size).toBe(5)

    for (const region of regions) {
      expect(region.boundary.length).toBeGreaterThanOrEqual(40)
      expect(region.cameraTarget).toBeDefined()
      expect(region.cameraPosition).toBeDefined()
      expect(region.services.length).toBeGreaterThan(0)
    }
  })

  it('distributes the three projects across regions', () => {
    expect(getProjectCount('WEB')).toBe(2)
    expect(getProjectCount('BUSINESS')).toBe(1)
    expect(getProjectCount('MOBILE')).toBe(0)
    expect(getProjectCount('SYSTEMS')).toBe(0)
    expect(getProjectCount('EXPERIENCE')).toBe(0)
    expect(getRegionProjects('WEB')).toHaveLength(2)
    expect(populatedRegions).toHaveLength(2)
  })

  it('keeps every region center inside its boundary', () => {
    for (const region of regions) {
      expect(pointInPolygon(0, 0, region.boundary)).toBe(true)
      expect(
        isInsidePolygon(
          region.position.x,
          region.position.z,
          region.boundary,
          region.position.x,
          region.position.z,
        ),
      ).toBe(true)
    }
  })

  it('places BUSINESS at the center of the map', () => {
    expect(getRegion('BUSINESS')?.position).toMatchObject({ x: 0, z: 0 })
  })
})

describe('city data and layout', () => {
  it('places two cities in every region', () => {
    expect(cities).toHaveLength(10)
    expect(new Set(cities.map((city) => city.id)).size).toBe(10)

    for (const region of regions) {
      const regionCities = getRegionCities(region.id)
      expect(regionCities).toHaveLength(2)
      expect(regionCities.every((city) => city.regionId === region.id)).toBe(true)
    }
  })

  it('keeps city footprints inside their region boundaries', () => {
    for (const city of cities) {
      const region = getRegion(city.regionId)
      expect(region).toBeDefined()
      if (!region) continue

      for (let index = 0; index < 16; index += 1) {
        const angle = (index / 16) * Math.PI * 2
        const x = city.position.x + Math.cos(angle) * city.radius
        const z = city.position.z + Math.sin(angle) * city.radius
        expect(
          isInsidePolygon(x, z, region.boundary, region.position.x, region.position.z),
          `${city.id} angle ${index}`,
        ).toBe(true)
      }
    }
  })

  it('assigns every project to exactly one city in its region', () => {
    for (const project of projects) {
      const city = getCityForProject(project.id)
      expect(city).toBeDefined()
      expect(city?.regionId).toBe(project.regionId)
      expect(cities.filter((entry) => entry.projectIds.includes(project.id))).toHaveLength(1)
    }
  })

  it('builds deterministic layouts with landmarks and generic buildings', () => {
    for (const city of cities) {
      const region = getRegion(city.regionId)
      expect(region).toBeDefined()
      if (!region) continue

      const first = generateCityLayout(city, region, { density: 1 })
      const second = generateCityLayout(city, region, { density: 1 })

      expect(first.buildings.map((building) => building.id)).toEqual(
        second.buildings.map((building) => building.id),
      )
      expect(first.streets.length).toBeGreaterThan(4)
      expect(first.plaza.radius).toBeGreaterThan(1)
      expect(first.parks).toHaveLength(1)
      expect(first.buildings.length).toBeGreaterThan(6)

      const landmarks = first.buildings.filter((building) => building.kind === 'landmark')
      const civics = first.buildings.filter((building) => building.kind === 'civic')
      expect(landmarks).toHaveLength(city.projectIds.length)
      expect(civics).toHaveLength(city.projectIds.length === 0 ? 1 : 0)

      for (const building of first.buildings) {
        expect(
          isInsidePolygon(
            building.x,
            building.z,
            region.boundary,
            region.position.x,
            region.position.z,
          ),
        ).toBe(true)
      }
    }
  })

  it('flattens the terrain around every city center', () => {
    for (const city of cities) {
      const centerHeight = terrainHeight(city.position.x, city.position.z)
      for (let index = 0; index < 8; index += 1) {
        const angle = (index / 8) * Math.PI * 2
        const x = city.position.x + Math.cos(angle) * city.radius * 0.55
        const z = city.position.z + Math.sin(angle) * city.radius * 0.55
        expect(Math.abs(terrainHeight(x, z) - centerHeight)).toBeLessThan(0.6)
      }
    }
  })

  it('uses cities as urban zones and lowers building density on low quality', () => {
    const city = cities[0]
    expect(isUrbanZone(city.position.x, city.position.z)).toBe(true)

    const region = getRegion(city.regionId)
    expect(region).toBeDefined()
    if (!region) return

    const dense = generateCityLayout(city, region, { density: 1 })
    const sparse = generateCityLayout(city, region, { density: 0.2 })
    expect(sparse.buildings.length).toBeLessThanOrEqual(dense.buildings.length)
  })
})

describe('level of detail helpers', () => {
  it('switches city detail tiers by camera distance', () => {
    expect(cityDetailForDistance(18)).toBe('high')
    expect(cityDetailForDistance(34)).toBe('high')
    expect(cityDetailForDistance(35)).toBe('medium')
    expect(cityDetailForDistance(82)).toBe('medium')
    expect(cityDetailForDistance(96)).toBe('low')
  })

  it('hides fine urban detail only in the farthest tier', () => {
    const near = cityDetailVisibility(20)
    const medium = cityDetailVisibility(52)
    const far = cityDetailVisibility(110)

    expect(near).toMatchObject({ tier: 'high', parkTrees: true, houses: true, offices: true })
    expect(medium).toMatchObject({ tier: 'medium', parkTrees: true, houses: true })
    expect(far).toMatchObject({ tier: 'low', parkTrees: false, houses: false, offices: true })
  })
})

describe('terrain and math helpers', () => {
  it('returns a finite height for map coordinates', () => {
    for (const [x, z] of [
      [0, 0],
      [TERRAIN_SIZE / 2, TERRAIN_SIZE / 2],
      [-30, 22],
    ]) {
      const height = terrainHeight(x, z)
      expect(Number.isFinite(height)).toBe(true)
      expect(height).toBeGreaterThan(-6)
      expect(height).toBeLessThan(24)
    }
  })

  it('clamps, interpolates and measures distances predictably', () => {
    expect(clamp(12, 0, 10)).toBe(10)
    expect(clamp(-4, 0, 10)).toBe(0)
    expect(lerp(0, 10, 0.25)).toBe(2.5)
    expect(smoothstep(0, 1, 0.5)).toBe(0.5)
    expect(distance2D({ x: 0, y: 0, z: 0 }, { x: 3, y: 5, z: 4 })).toBe(5)
  })

  it('accepts only http and https external links', () => {
    expect(isSafeExternalUrl('https://example.com')).toBe(true)
    expect(isSafeExternalUrl('http://example.com')).toBe(true)
    expect(isSafeExternalUrl('javascript:alert(1)')).toBe(false)
    expect(isSafeExternalUrl('')).toBe(false)
    expect(isSafeExternalUrl(undefined)).toBe(false)
  })
})

describe('geometry helpers', () => {
  it('densifies closed polygons without losing their footprint', () => {
    const anchors: Array<[number, number]> = [
      [-10, 0],
      [0, -8],
      [9, -1],
      [4, 9],
      [-6, 7],
    ]
    const dense = densifyClosedPolygon(anchors, 4, 0.4, 7)

    expect(dense.length).toBe(anchors.length * 4)
    const bounds = polygonBounds(dense)
    expect(bounds.minX).toBeLessThan(-8)
    expect(bounds.maxX).toBeGreaterThan(8)
    expect(bounds.minZ).toBeLessThan(-6)
    expect(bounds.maxZ).toBeGreaterThan(7)
  })

  it('builds procedural tree and bush variants with vertex colors', () => {
    const variants = createTreeVariants(3)
    const limited = createTreeVariants(2)
    expect(variants).toHaveLength(3)
    expect(limited).toHaveLength(2)
    limited.forEach((variant) => variant.geometry.dispose())

    const bush = createBushVariant()
    for (const variant of [...variants, bush]) {
      const positions = variant.geometry.getAttribute('position')
      const colors = variant.geometry.getAttribute('color')
      expect(positions.count).toBeGreaterThan(30)
      expect(colors.count).toBe(positions.count)
      expect(variant.height).toBeGreaterThan(1)
      expect(variant.geometry.boundingSphere).not.toBeNull()
      variant.geometry.dispose()
    }
  })

  it('builds generic and featured building geometry with vertex colors', () => {
    const variants = createBuildingVariants()
    expect(variants).toHaveLength(4)

    for (const variant of variants) {
      const positions = variant.geometry.getAttribute('position')
      const colors = variant.geometry.getAttribute('color')
      expect(positions.count).toBeGreaterThan(30)
      expect(colors.count).toBe(positions.count)
      expect(variant.baseHeight).toBeGreaterThan(0)
      expect(variant.geometry.boundingSphere).not.toBeNull()
    }

    for (const project of projects) {
      const featured = createFeaturedGeometry(project.id, '#14B8A6')
      expect(featured.height).toBeGreaterThan(3)
      expect(featured.geometry.getAttribute('color')).toBeDefined()
      featured.geometry.dispose()
    }

    variants.forEach((variant) => variant.geometry.dispose())
  })

  it('measures distances to segments and polygon containment', () => {
    expect(distanceToSegment(0, 2, -5, 0, 5, 0)).toBeCloseTo(2)
    expect(distanceToSegment(7, 0, -5, 0, 5, 0)).toBeCloseTo(2)

    const square: Array<[number, number]> = [
      [0, 0],
      [10, 0],
      [10, 10],
      [0, 10],
    ]
    expect(pointInPolygon(5, 5, square)).toBe(true)
    expect(pointInPolygon(12, 5, square)).toBe(false)
    expect(pointInPolygon(-1, 5, square)).toBe(false)
  })
})
