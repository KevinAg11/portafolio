<script setup lang="ts">
import type { MapRegion, RegionId } from '@/types/portfolio'

defineProps<{
  regions: MapRegion[]
  selectedRegionId: RegionId | null
  projectCounts: Record<RegionId, number>
}>()

const emit = defineEmits<{
  select: [regionId: RegionId]
}>()
</script>

<template>
  <nav
    class="pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-2xl border border-white/8 bg-abyss/70 p-1.5 backdrop-blur-xl"
    aria-label="Regiones del mapa"
  >
    <button
      v-for="region in regions"
      :key="region.id"
      type="button"
      class="group flex shrink-0 items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors duration-200"
      :class="
        selectedRegionId === region.id
          ? 'bg-elevated/80 text-ice'
          : 'text-mist hover:bg-elevated/45 hover:text-ice'
      "
      :aria-pressed="selectedRegionId === region.id"
      @click="emit('select', region.id)"
    >
      <span
        class="h-2 w-2 shrink-0 rounded-full transition-transform duration-200 group-hover:scale-125"
        :style="{ backgroundColor: region.color, boxShadow: `0 0 10px ${region.color}` }"
      />
      <span class="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em]">
        {{ region.shortName }}
      </span>
      <span
        class="rounded-full border border-white/10 px-1.5 py-0.5 font-mono text-[9px]"
        :class="projectCounts[region.id] > 0 ? 'text-glow' : 'text-mist/55'"
      >
        {{ projectCounts[region.id] }}
      </span>
    </button>
  </nav>
</template>
