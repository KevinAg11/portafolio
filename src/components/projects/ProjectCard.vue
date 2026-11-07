<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types/portfolio'
import { getRegion } from '@/data/regions'
import { handleImageError } from '@/utils/media'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  open: [projectId: string]
}>()

const region = computed(() => getRegion(props.project.regionId))
const visibleTechnologies = computed(() => props.project.technologies.slice(0, 4))
const extraTechnologies = computed(() =>
  Math.max(props.project.technologies.length - visibleTechnologies.value.length, 0),
)
</script>

<template>
  <button
    type="button"
    class="group flex w-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-glow/35 hover:bg-white/[0.035]"
    @click="emit('open', project.id)"
  >
    <div class="relative aspect-[16/10] overflow-hidden bg-night">
      <img
        :src="project.image"
        :alt="`Captura del proyecto ${project.title}`"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        decoding="async"
        @error="handleImageError"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-abyss/70 via-abyss/5 to-transparent" />
      <span
        v-if="region"
        class="absolute top-3 left-3 rounded-full border border-white/12 bg-abyss/75 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] backdrop-blur"
        :style="{ color: region.color }"
      >
        {{ region.shortName }}
      </span>
      <span class="absolute right-3 bottom-3 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-abyss/70 text-ice opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>

    <div class="flex flex-1 flex-col p-4">
      <p class="text-[10px] uppercase tracking-[0.16em] text-mist">{{ project.category }}</p>
      <h3 class="mt-1.5 font-display text-lg text-ice transition-colors group-hover:text-glow">{{ project.title }}</h3>
      <p class="mt-2 line-clamp-2 text-xs leading-relaxed text-mist">{{ project.description }}</p>

      <div class="mt-3 flex flex-wrap gap-1.5">
        <span v-for="technology in visibleTechnologies" :key="technology" class="tech-chip">{{ technology }}</span>
        <span v-if="extraTechnologies" class="tech-chip">+{{ extraTechnologies }}</span>
      </div>

      <span class="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-glow">
        Ver ficha
        <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>
  </button>
</template>
