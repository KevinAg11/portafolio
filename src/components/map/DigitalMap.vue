<script setup lang="ts">
import { shallowRef } from 'vue'
import type { MapEngine } from '@/engine/core/MapEngine'
import type { NavigationSection } from '@/data/site'
import type { RegionId } from '@/types/portfolio'
import { projects } from '@/data/projects'
import { regions } from '@/data/regions'
import { useMapState } from '@/composables/useMapState'
import { useMapNavigation } from '@/composables/useMapNavigation'
import { useMapCamera } from '@/composables/useMapCamera'
import { useMapInteraction } from '@/composables/useMapInteraction'
import MapCanvas from './MapCanvas.vue'
import MapTerrain from './MapTerrain.vue'
import MapRoads from './MapRoads.vue'
import MapRegions from './MapRegions.vue'
import MapMarkers from './MapMarkers.vue'
import MapControls from './MapControls.vue'
import MapBreadcrumb from './MapBreadcrumb.vue'
import MainNavigation from '@/components/interface/MainNavigation.vue'
import RegionInformation from '@/components/interface/RegionInformation.vue'
import CityInformation from '@/components/interface/CityInformation.vue'
import InfoPanel from '@/components/interface/InfoPanel.vue'
import ProjectDetail from '@/components/projects/ProjectDetail.vue'
import LoadingScreen from '@/components/interface/LoadingScreen.vue'

const props = defineProps<{
  initialRegion?: RegionId | null
}>()

const {
  state,
  selectedRegion,
  selectedCity,
  selectedProject,
  selectedRegionCities,
  selectedRegionProjects,
  selectedCityProjects,
  isOverview,
  projectCounts,
} = useMapState()

const engine = shallowRef<MapEngine | null>(null)
const { activePanel, navigate, closePanel } = useMapNavigation(engine)
const { zoomIn, zoomOut, reset, focusNextRegion } = useMapCamera(engine)
useMapInteraction(engine)

function handleReady(mapEngine: MapEngine): void {
  engine.value = mapEngine
  if (props.initialRegion) mapEngine.selectRegion(props.initialRegion)
}

function handleRegionSelect(regionId: RegionId): void {
  engine.value?.selectRegion(regionId)
}

function handleCitySelect(cityId: string): void {
  engine.value?.selectCity(cityId)
}

function handleProjectSelect(projectId: string): void {
  engine.value?.selectProject(projectId)
}

function handleBreadcrumbOverview(): void {
  engine.value?.goOverview()
}

function handleBreadcrumbRegion(): void {
  const regionId = state.selection.regionId
  if (regionId) engine.value?.selectRegion(regionId)
}

function handleBreadcrumbCity(): void {
  const cityId = state.selection.cityId
  if (cityId) engine.value?.selectCity(cityId)
}

function handleRegionClose(): void {
  engine.value?.goOverview()
}

function handleCityClose(): void {
  engine.value?.goUp()
}

function handleProjectClose(): void {
  engine.value?.goUp()
}

function handleNavigate(section: NavigationSection): void {
  navigate(section)
}

function handleContact(): void {
  navigate('contacto')
}
</script>

<template>
  <main class="relative h-dvh w-full overflow-hidden map-shell grain" aria-label="Mapa digital de proyectos">
    <MapCanvas @ready="handleReady" />

    <div class="pointer-events-none absolute inset-0 z-20 flex flex-col">
      <MainNavigation
        :active-panel="activePanel"
        :is-overview="isOverview"
        @navigate="handleNavigate"
      />
    </div>

    <div class="absolute top-[4.75rem] left-1/2 z-30 -translate-x-1/2 md:top-20">
      <MapBreadcrumb
        :mode="state.selection.mode"
        :region="selectedRegion"
        :city="selectedCity"
        :project="selectedProject"
        @overview="handleBreadcrumbOverview"
        @region="handleBreadcrumbRegion"
        @city="handleBreadcrumbCity"
      />
    </div>

    <div class="absolute top-1/2 right-4 z-30 -translate-y-1/2">
      <MapControls
        :can-zoom-in="!state.loading"
        :can-zoom-out="!state.loading"
        @zoom-in="zoomIn"
        @zoom-out="zoomOut"
        @reset="reset"
        @previous="focusNextRegion(-1)"
        @next="focusNextRegion(1)"
      />
    </div>

    <div class="absolute right-6 bottom-24 z-20 hidden lg:block">
      <MapRoads :transitioning="state.transitioning" />
    </div>

    <div v-if="isOverview && !activePanel" class="absolute bottom-6 left-6 z-20">
      <MapTerrain
        :region-count="regions.length"
        :project-count="projects.length"
        :quality-tier="state.qualityTier"
      />
    </div>

    <div class="absolute bottom-5 left-1/2 z-30 -translate-x-1/2">
      <MapRegions
        :regions="regions"
        :selected-region-id="state.selection.regionId"
        :project-counts="projectCounts"
        @select="handleRegionSelect"
      />
    </div>

    <MapMarkers :projects="projects" @select="handleProjectSelect" />

    <Transition name="panel">
      <div
        v-if="selectedRegion && state.selection.mode === 'region'"
        class="absolute bottom-24 left-4 z-40 md:left-6"
      >
        <RegionInformation
          :region="selectedRegion"
          :projects="selectedRegionProjects"
          :cities="selectedRegionCities"
          @close="handleRegionClose"
          @select-city="handleCitySelect"
          @select-project="handleProjectSelect"
          @contact="handleContact"
        />
      </div>
    </Transition>

    <Transition name="panel">
      <div
        v-if="selectedCity && selectedRegion && state.selection.mode === 'city'"
        class="absolute bottom-24 left-4 z-40 md:left-6"
      >
        <CityInformation
          :city="selectedCity"
          :region="selectedRegion"
          :projects="selectedCityProjects"
          @close="handleCityClose"
          @back="handleBreadcrumbRegion"
          @select-project="handleProjectSelect"
          @contact="handleContact"
        />
      </div>
    </Transition>

    <ProjectDetail
      v-if="selectedProject"
      :project="selectedProject"
      @close="handleProjectClose"
      @select-region="handleRegionSelect"
    />

    <InfoPanel
      v-if="activePanel"
      :panel="activePanel"
      @close="closePanel"
      @contact="handleContact"
    />

    <LoadingScreen :visible="state.loading" />
  </main>
</template>
