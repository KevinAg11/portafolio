export type CityDetailTier = 'high' | 'medium' | 'low'

export const CITY_DETAIL_HIGH_DISTANCE = 34
export const CITY_DETAIL_MEDIUM_DISTANCE = 82

export interface CityDetailVisibility {
  tier: CityDetailTier
  parkTrees: boolean
  houses: boolean
  offices: boolean
}

export function cityDetailForDistance(distance: number): CityDetailTier {
  if (!Number.isFinite(distance) || distance <= CITY_DETAIL_HIGH_DISTANCE) {
    return 'high'
  }
  if (distance <= CITY_DETAIL_MEDIUM_DISTANCE) {
    return 'medium'
  }
  return 'low'
}

export function cityDetailVisibility(distance: number): CityDetailVisibility {
  const tier = cityDetailForDistance(distance)
  return {
    tier,
    parkTrees: tier !== 'low',
    houses: tier !== 'low',
    offices: true,
  }
}
