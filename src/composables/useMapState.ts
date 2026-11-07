import { computed, reactive } from 'vue'
import type {
  HoverState,
  MapSelection,
  QualityTier,
  RegionId,
} from '@/types/portfolio'
import {
  getRegion,
  getRegionProjects,
  getProjectCount,
  regions,
} from '@/data/regions'
import { getCity, getRegionCities } from '@/data/cities'
import { getProjectById } from '@/data/projects'

export type ActivePanel = 'servicios' | 'sobre-mi' | 'contacto' | null

interface MapState {
  selection: MapSelection
  hover: HoverState
  loading: boolean
  transitioning: boolean
  webglSupported: boolean
  qualityTier: QualityTier
  reducedMotion: boolean
  activePanel: ActivePanel
}

const state = reactive<MapState>({
  selection: {
    mode: 'overview',
    regionId: null,
    cityId: null,
    projectId: null,
  },
  hover: {
    regionId: null,
    projectId: null,
  },
  loading: true,
  transitioning: false,
  webglSupported: true,
  qualityTier: 'high',
  reducedMotion: false,
  activePanel: null,
})

const projectCounts = computed<Record<RegionId, number>>(() => {
  return regions.reduce(
    (accumulator, region) => {
      accumulator[region.id] = getProjectCount(region.id)
      return accumulator
    },
    {} as Record<RegionId, number>,
  )
})

export function useMapState() {
  const selectedRegion = computed(() => getRegion(state.selection.regionId))
  const selectedCity = computed(() => getCity(state.selection.cityId))
  const selectedProject = computed(() => getProjectById(state.selection.projectId))
  const selectedRegionCities = computed(() => {
    const region = selectedRegion.value
    return region ? getRegionCities(region.id) : []
  })
  const selectedRegionProjects = computed(() => {
    const region = selectedRegion.value
    return region ? getRegionProjects(region.id) : []
  })
  const selectedCityProjects = computed(() => {
    const city = selectedCity.value
    if (!city) return []
    return city.projectIds
      .map((projectId) => getProjectById(projectId))
      .filter((project): project is NonNullable<typeof project> => Boolean(project))
  })
  const hoveredRegion = computed(() => getRegion(state.hover.regionId))
  const hoveredProject = computed(() => getProjectById(state.hover.projectId))
  const isOverview = computed(() => state.selection.mode === 'overview')

  function setSelection(selection: MapSelection): void {
    state.selection = selection
  }

  function setHover(hover: HoverState): void {
    state.hover = hover
  }

  function setLoading(loading: boolean): void {
    state.loading = loading
  }

  function setTransitioning(transitioning: boolean): void {
    state.transitioning = transitioning
  }

  function setWebglSupported(supported: boolean): void {
    state.webglSupported = supported
  }

  function setQualityTier(tier: QualityTier): void {
    state.qualityTier = tier
  }

  function setReducedMotion(reduced: boolean): void {
    state.reducedMotion = reduced
  }

  function setActivePanel(panel: ActivePanel): void {
    state.activePanel = panel
  }

  function reset(): void {
    state.selection = { mode: 'overview', regionId: null, cityId: null, projectId: null }
    state.hover = { regionId: null, projectId: null }
    state.activePanel = null
  }

  return {
    state,
    selectedRegion,
    selectedCity,
    selectedProject,
    selectedRegionCities,
    selectedRegionProjects,
    selectedCityProjects,
    hoveredRegion,
    hoveredProject,
    isOverview,
    projectCounts,
    setSelection,
    setHover,
    setLoading,
    setTransitioning,
    setWebglSupported,
    setQualityTier,
    setReducedMotion,
    setActivePanel,
    reset,
  }
}
