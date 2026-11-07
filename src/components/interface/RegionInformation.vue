<script setup lang="ts">
import type { MapCity, MapRegion, Project } from '@/types/portfolio'

defineProps<{
  region: MapRegion
  projects: Project[]
  cities: MapCity[]
}>()

const emit = defineEmits<{
  close: []
  selectCity: [cityId: string]
  selectProject: [projectId: string]
  contact: []
}>()
</script>

<template>
  <section
    class="panel-glass pointer-events-auto flex max-h-[calc(100dvh-11rem)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl"
    :aria-label="`Información de la región ${region.name}`"
  >
    <div class="h-px w-full" :style="{ background: `linear-gradient(90deg, transparent, ${region.color}, transparent)` }" />
    <header class="flex items-start justify-between gap-4 px-5 pt-5">
      <div>
        <p class="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-mist">
          <span class="h-1.5 w-1.5 rounded-full" :style="{ backgroundColor: region.color, boxShadow: `0 0 10px ${region.color}` }" />
          Región {{ region.shortName }}
        </p>
        <h2 class="mt-2 font-display text-xl leading-tight text-ice">{{ region.name }}</h2>
      </div>
      <button
        type="button"
        class="map-button !h-8 !min-w-8"
        aria-label="Cerrar información de la región"
        @click="emit('close')"
      >
        <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
        </svg>
      </button>
    </header>

    <div class="min-h-0 flex-1 overflow-y-auto px-5 pb-5">
      <p class="mt-3 text-sm leading-relaxed text-ice/80">{{ region.tagline }}</p>
      <p class="mt-3 text-xs leading-relaxed text-mist">{{ region.description }}</p>

      <div class="mt-4 flex flex-wrap gap-1.5">
        <span v-for="service in region.services" :key="service" class="tech-chip">{{ service }}</span>
      </div>

      <div v-if="cities.length" class="mt-6">
        <div class="flex items-center justify-between">
          <h3 class="text-[10px] uppercase tracking-[0.2em] text-mist">Distritos de la región</h3>
          <span class="font-mono text-[10px] text-glow">{{ String(cities.length).padStart(2, '0') }}</span>
        </div>
        <div class="mt-3 grid gap-2 sm:grid-cols-2">
          <button
            v-for="city in cities"
            :key="city.id"
            type="button"
            class="group flex items-center justify-between gap-2 rounded-xl border border-white/6 bg-white/[0.02] px-3 py-2.5 text-left transition-colors hover:border-glow/35 hover:bg-glow/5"
            @click="emit('selectCity', city.id)"
          >
            <span class="min-w-0">
              <span class="block truncate text-xs text-ice">{{ city.name }}</span>
              <span class="block text-[9px] uppercase tracking-[0.14em] text-mist">
                {{ city.projectIds.length }} proyectos
              </span>
            </span>
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 shrink-0 text-mist transition-transform group-hover:translate-x-0.5 group-hover:text-glow" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex items-center justify-between">
          <h3 class="text-[10px] uppercase tracking-[0.2em] text-mist">Proyectos en esta región</h3>
          <span class="font-mono text-[10px] text-glow">{{ String(projects.length).padStart(2, '0') }}</span>
        </div>

        <div v-if="projects.length" class="mt-3 space-y-2">
          <button
            v-for="(project, index) in projects"
            :key="project.id"
            type="button"
            class="group flex w-full items-center gap-3 rounded-xl border border-white/6 bg-white/[0.02] px-3 py-3 text-left transition-colors hover:border-glow/35 hover:bg-glow/5"
            @click="emit('selectProject', project.id)"
          >
            <span class="font-mono text-[10px] text-glow/70">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="min-w-0 flex-1">
              <span class="block truncate text-sm text-ice">{{ project.title }}</span>
              <span class="block truncate text-[10px] uppercase tracking-[0.14em] text-mist">{{ project.category }}</span>
            </span>
            <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0 text-mist transition-transform group-hover:translate-x-0.5 group-hover:text-glow" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <div v-else class="mt-3 rounded-xl border border-dashed border-white/10 bg-white/[0.015] px-4 py-5 text-center">
          <p class="font-display text-sm text-ice/85">Próximamente</p>
          <p class="mt-1 text-[11px] leading-relaxed text-mist">
            Este territorio está en exploración. Los próximos proyectos se incorporarán aquí.
          </p>
          <button
            type="button"
            class="mt-3 text-[11px] uppercase tracking-[0.14em] text-glow transition-colors hover:text-ice"
            @click="emit('contact')"
          >
            Hablemos de tu proyecto →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
