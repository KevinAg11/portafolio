import { onBeforeUnmount, onMounted, ref, shallowRef, type Ref } from 'vue'
import { MapEngine } from '@/engine/core/MapEngine'
import { detectQuality, prefersReducedMotion, supportsWebGL } from '@/utils/quality'
import { useMapState } from './useMapState'

const MIN_LOADING_MS = 1700

export function useMapScene(
  containerRef: Ref<HTMLElement | null>,
  canvasRef: Ref<HTMLCanvasElement | null>,
) {
  const {
    setLoading,
    setSelection,
    setHover,
    setTransitioning,
    setWebglSupported,
    setQualityTier,
    setReducedMotion,
  } = useMapState()

  const engine = shallowRef<MapEngine | null>(null)
  const error = ref<Error | null>(null)
  const startedAt = performance.now()

  function finishLoading(): void {
    const minimum = prefersReducedMotion() ? 320 : MIN_LOADING_MS
    const remaining = Math.max(0, minimum - (performance.now() - startedAt))
    window.setTimeout(() => setLoading(false), remaining)
  }

  onMounted(() => {
    const container = containerRef.value
    const canvas = canvasRef.value

    if (!container || !canvas) {
      setWebglSupported(false)
      setLoading(false)
      return
    }

    if (!supportsWebGL()) {
      setWebglSupported(false)
      setLoading(false)
      return
    }

    const quality = detectQuality()
    const reducedMotion = prefersReducedMotion()
    setQualityTier(quality.tier)
    setReducedMotion(reducedMotion)
    setWebglSupported(true)

    try {
      engine.value = new MapEngine({
        container,
        canvas,
        quality,
        reducedMotion,
        callbacks: {
          onReady: finishLoading,
          onHoverChange: setHover,
          onSelectionChange: setSelection,
          onTransitionChange: setTransitioning,
          onError: (engineError) => {
            error.value = engineError
          },
        },
      })
    } catch (initializationError) {
      error.value =
        initializationError instanceof Error
          ? initializationError
          : new Error(String(initializationError))
      setWebglSupported(false)
      setLoading(false)
    }
  })

  onBeforeUnmount(() => {
    engine.value?.dispose()
    engine.value = null
  })

  return { engine, error }
}
