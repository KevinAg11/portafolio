import { onBeforeUnmount, onMounted, type Ref } from 'vue'
import type { MapEngine } from '@/engine/core/MapEngine'

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return (
    tag === 'INPUT' ||
    tag === 'TEXTAREA' ||
    tag === 'SELECT' ||
    target.isContentEditable
  )
}

export function useMapInteraction(engine: Ref<MapEngine | null>) {
  function handleKeydown(event: KeyboardEvent): void {
    if (isTypingTarget(event.target)) return
    if (document.querySelector('[data-modal="true"]')) return

    const step = event.shiftKey ? 4 : 1.6

    switch (event.key) {
      case 'Escape':
        if (engine.value?.selection.mode !== 'overview') {
          event.preventDefault()
          engine.value?.goUp()
        }
        break
      case '+':
      case '=':
        event.preventDefault()
        engine.value?.zoomIn()
        break
      case '-':
      case '_':
        event.preventDefault()
        engine.value?.zoomOut()
        break
      case 'r':
      case 'R':
        event.preventDefault()
        engine.value?.resetView()
        break
      case 'ArrowLeft':
        event.preventDefault()
        engine.value?.panBy(-step, 0)
        break
      case 'ArrowRight':
        event.preventDefault()
        engine.value?.panBy(step, 0)
        break
      case 'ArrowUp':
        event.preventDefault()
        engine.value?.panBy(0, step)
        break
      case 'ArrowDown':
        event.preventDefault()
        engine.value?.panBy(0, -step)
        break
      default:
        break
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  return { handleKeydown }
}
