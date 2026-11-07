export type RegionId = 'WEB' | 'MOBILE' | 'SYSTEMS' | 'EXPERIENCE' | 'BUSINESS'

export interface Vec3 {
  x: number
  y: number
  z: number
}

export interface MapRegion {
  id: RegionId
  name: string
  shortName: string
  tagline: string
  description: string
  position: Vec3
  cameraPosition: Vec3
  cameraTarget: Vec3
  zoom: number
  color: string
  services: string[]
  projectIds: string[]
  boundary: Array<[number, number]>
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  problem?: string
  solution?: string
  technologies: string[]
  features: string[]
  image: string
  gallery?: string[]
  liveUrl?: string
  githubUrl?: string
  regionId: RegionId
  featured: boolean
}

export interface MapCity {
  id: string
  name: string
  regionId: RegionId
  position: Vec3
  local: [number, number]
  radius: number
  rotation: number
  seed: number
  projectIds: string[]
}

export type BuildingKind = 'house' | 'office' | 'tower' | 'civic' | 'landmark'

export type SelectionMode = 'overview' | 'region' | 'city' | 'project'

export type QualityTier = 'high' | 'medium' | 'low'

export interface QualityProfile {
  tier: QualityTier
  pixelRatio: number
  bloom: boolean
  shadows: boolean
  terrainSegments: number
  structureDensity: number
  vegetationDensity: number
  treeVariants: number
  labelDensity: number
}

export interface MapSelection {
  mode: SelectionMode
  regionId: RegionId | null
  cityId: string | null
  projectId: string | null
}

export interface HoverState {
  regionId: RegionId | null
  projectId: string | null
}

export interface CameraView {
  position: Vec3
  target: Vec3
}
