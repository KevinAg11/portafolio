<script setup lang="ts">
import { ref, watch } from 'vue'
import type { MapEngine } from '@/engine/core/MapEngine'
import { useMapScene } from '@/composables/useMapScene'

const emit = defineEmits<{
  ready: [engine: MapEngine]
  error: [error: Error]
}>()

const containerRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

const { engine, error } = useMapScene(containerRef, canvasRef)

watch(engine, (value) => {
  if (value) emit('ready', value)
})

watch(error, (value) => {
  if (value) emit('error', value)
})

defineExpose({ engine, canvasRef, containerRef })
</script>

<template>
  <div ref="containerRef" class="absolute inset-0">
    <canvas
      ref="canvasRef"
      class="map-canvas"
      tabindex="0"
      role="application"
      aria-label="Mapa tridimensional interactivo. Usa clic para seleccionar una región o proyecto, y las flechas para desplazarte."
    />
  </div>
</template>
