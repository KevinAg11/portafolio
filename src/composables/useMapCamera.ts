import { type Ref } from 'vue'
import type { MapEngine } from '@/engine/core/MapEngine'
import type { RegionId } from '@/types/portfolio'

export function useMapCamera(engine: Ref<MapEngine | null>) {
  function zoomIn(): void {
    engine.value?.zoomIn()
  }

  function zoomOut(): void {
    engine.value?.zoomOut()
  }

  function reset(): void {
    engine.value?.resetView()
  }

  function focusRegion(regionId: RegionId): void {
    engine.value?.selectRegion(regionId)
  }

  function focusCity(cityId: string): void {
    engine.value?.selectCity(cityId)
  }

  function focusProject(projectId: string): void {
    engine.value?.selectProject(projectId)
  }

  function goUp(): void {
    engine.value?.goUp()
  }

  function goOverview(): void {
    engine.value?.goOverview()
  }

  function focusNextRegion(direction: 1 | -1): void {
    engine.value?.focusNextRegion(direction)
  }

  function panBy(deltaX: number, deltaZ: number): void {
    engine.value?.panBy(deltaX, deltaZ)
  }

  return {
    zoomIn,
    zoomOut,
    reset,
    focusRegion,
    focusCity,
    focusProject,
    goUp,
    goOverview,
    focusNextRegion,
    panBy,
  }
}
