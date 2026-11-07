import * as THREE from 'three'
import { describe, expect, it } from 'vitest'
import { CityLayer } from '@/engine/cities/CityLayer'
import { cities } from '@/data/cities'
import { projects } from '@/data/projects'
import { regions } from '@/data/regions'
import type { QualityProfile } from '@/types/portfolio'

const quality: QualityProfile = {
  tier: 'high',
  pixelRatio: 1,
  bloom: false,
  shadows: false,
  terrainSegments: 96,
  structureDensity: 1,
  vegetationDensity: 0,
  treeVariants: 1,
  labelDensity: 1,
}

describe('featured project buildings', () => {
  it('keeps the detailed building mesh at every distance', () => {
    const layer = new CityLayer(cities, regions, projects, quality, true)

    try {
      layer.group.traverse((object) => {
        expect(object.name.startsWith('featured-lod')).toBe(false)
      })

      for (const project of projects) {
        const building = layer.group.getObjectByName(`featured-building-${project.id}`)
        expect(building).toBeInstanceOf(THREE.Mesh)
        if (!(building instanceof THREE.Mesh)) continue

        const positions = building.geometry.getAttribute('position')
        expect(positions.count).toBeGreaterThan(100)
      }
    } finally {
      layer.dispose()
    }
  })
})
