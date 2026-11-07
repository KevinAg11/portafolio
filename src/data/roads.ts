import type { RegionId } from '@/types/portfolio'
import { getRegion } from './regions'

export interface RoadLink {
  id: string
  from: RegionId
  to: RegionId
  bend: number
  width: number
}

export interface RoadAnchors {
  start: [number, number]
  control: [number, number]
  end: [number, number]
}

export const roadLinks: RoadLink[] = [
  { id: 'business-web', from: 'BUSINESS', to: 'WEB', bend: 6.5, width: 0.95 },
  { id: 'business-mobile', from: 'BUSINESS', to: 'MOBILE', bend: -5.4, width: 0.95 },
  { id: 'business-systems', from: 'BUSINESS', to: 'SYSTEMS', bend: 5.8, width: 0.95 },
  { id: 'business-experience', from: 'BUSINESS', to: 'EXPERIENCE', bend: -6.2, width: 0.95 },
  { id: 'web-experience', from: 'WEB', to: 'EXPERIENCE', bend: 4.4, width: 0.72 },
  { id: 'mobile-systems', from: 'MOBILE', to: 'SYSTEMS', bend: -4.8, width: 0.72 },
]

export function getRoadAnchors(link: RoadLink): RoadAnchors | null {
  const from = getRegion(link.from)
  const to = getRegion(link.to)
  if (!from || !to) return null

  const start: [number, number] = [from.position.x, from.position.z]
  const end: [number, number] = [to.position.x, to.position.z]
  const dx = end[0] - start[0]
  const dz = end[1] - start[1]
  const length = Math.hypot(dx, dz) || 1
  const perpendicularX = -dz / length
  const perpendicularZ = dx / length

  const control: [number, number] = [
    (start[0] + end[0]) / 2 + perpendicularX * link.bend,
    (start[1] + end[1]) / 2 + perpendicularZ * link.bend,
  ]

  return { start, control, end }
}

export function getRoadSamples(link: RoadLink, steps = 32): Array<[number, number]> {
  const anchors = getRoadAnchors(link)
  if (!anchors) return []

  const count = Math.max(2, Math.round(steps))
  const samples: Array<[number, number]> = []

  for (let index = 0; index <= count; index += 1) {
    const t = index / count
    const inverse = 1 - t
    samples.push([
      inverse * inverse * anchors.start[0] +
        2 * inverse * t * anchors.control[0] +
        t * t * anchors.end[0],
      inverse * inverse * anchors.start[1] +
        2 * inverse * t * anchors.control[1] +
        t * t * anchors.end[1],
    ])
  }

  return samples
}
