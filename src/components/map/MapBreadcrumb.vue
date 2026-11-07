<script setup lang="ts">
import type { MapCity, MapRegion, Project, SelectionMode } from '@/types/portfolio'

defineProps<{
  mode: SelectionMode
  region: MapRegion | undefined
  city: MapCity | undefined
  project: Project | undefined
}>()

const emit = defineEmits<{
  overview: []
  region: []
  city: []
}>()
</script>

<template>
  <nav
    v-if="region"
    class="pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border border-white/8 bg-abyss/70 px-2 py-1.5 backdrop-blur-xl"
    aria-label="Ruta de exploración del territorio"
  >
    <button
      type="button"
      class="breadcrumb-crumb"
      aria-label="Volver al territorio completo"
      @click="emit('overview')"
    >
      Territorio
    </button>

    <span class="breadcrumb-separator" aria-hidden="true">/</span>

    <button
      type="button"
      class="breadcrumb-crumb"
      :class="{ 'is-current': mode === 'region' }"
      :aria-current="mode === 'region' ? 'location' : undefined"
      @click="emit('region')"
    >
      <span
        class="h-1.5 w-1.5 shrink-0 rounded-full"
        :style="{ backgroundColor: region.color, boxShadow: `0 0 8px ${region.color}` }"
      />
      {{ region.shortName }}
    </button>

    <template v-if="city">
      <span class="breadcrumb-separator" aria-hidden="true">/</span>
      <button
        type="button"
        class="breadcrumb-crumb"
        :class="{ 'is-current': mode === 'city' }"
        :aria-current="mode === 'city' ? 'location' : undefined"
        @click="emit('city')"
      >
        {{ city.name }}
      </button>
    </template>

    <template v-if="project">
      <span class="breadcrumb-separator" aria-hidden="true">/</span>
      <span class="breadcrumb-crumb is-current" aria-current="location">
        {{ project.title }}
      </span>
    </template>
  </nav>
</template>
