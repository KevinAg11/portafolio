import { computed, type Ref } from 'vue'
import type { MapEngine } from '@/engine/core/MapEngine'
import type { NavigationSection } from '@/data/site'
import { useMapState, type ActivePanel } from './useMapState'

export function useMapNavigation(engine: Ref<MapEngine | null>) {
  const { state, setActivePanel } = useMapState()

  const activePanel = computed(() => state.activePanel)

  function openPanel(panel: Exclude<ActivePanel, null>): void {
    setActivePanel(panel)
  }

  function closePanel(): void {
    setActivePanel(null)
  }

  function navigate(section: NavigationSection): void {
    setActivePanel(null)

    if (section === 'inicio' || section === 'mapa') {
      engine.value?.goOverview()
      return
    }

    setActivePanel(section)
  }

  return {
    activePanel,
    openPanel,
    closePanel,
    navigate,
  }
}
