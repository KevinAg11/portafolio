import { computed, ref } from 'vue'
import { prefersReducedMotion } from '@/utils/quality'

export function useMapAnimation() {
  const reducedMotion = ref(prefersReducedMotion())

  const transitionDuration = computed(() => (reducedMotion.value ? 0 : 320))

  function duration(base: number): number {
    return reducedMotion.value ? 0 : base
  }

  function refreshPreference(): void {
    reducedMotion.value = prefersReducedMotion()
  }

  return {
    reducedMotion,
    transitionDuration,
    duration,
    refreshPreference,
  }
}
