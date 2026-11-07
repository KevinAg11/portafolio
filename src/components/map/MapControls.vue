<script setup lang="ts">
defineProps<{
  canZoomIn: boolean
  canZoomOut: boolean
}>()

const emit = defineEmits<{
  zoomIn: []
  zoomOut: []
  reset: []
  previous: []
  next: []
}>()
</script>

<template>
  <div class="pointer-events-auto flex flex-col gap-2 rounded-2xl border border-white/8 bg-abyss/65 p-1.5 backdrop-blur-xl">
    <button type="button" class="map-button" aria-label="Acercar mapa" :disabled="!canZoomIn" @click="emit('zoomIn')">
      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M12 5v14M5 12h14" stroke-linecap="round" />
      </svg>
    </button>
    <button type="button" class="map-button" aria-label="Alejar mapa" :disabled="!canZoomOut" @click="emit('zoomOut')">
      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M5 12h14" stroke-linecap="round" />
      </svg>
    </button>
    <span class="mx-auto h-px w-6 bg-white/10" />
    <button type="button" class="map-button" aria-label="Región anterior" @click="emit('previous')">
      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <button type="button" class="map-button" aria-label="Región siguiente" @click="emit('next')">
      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <span class="mx-auto h-px w-6 bg-white/10" />
    <button type="button" class="map-button" aria-label="Volver a la vista general" @click="emit('reset')">
      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M4 11l8-7 8 7M6 10v9h12v-9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>
