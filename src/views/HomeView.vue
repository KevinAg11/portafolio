<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import type { RegionId } from '@/types/portfolio'
import { regions } from '@/data/regions'
import { siteConfig } from '@/data/site'
import { useMapState } from '@/composables/useMapState'
import DigitalMap from '@/components/map/DigitalMap.vue'

const route = useRoute()
const { state } = useMapState()

const regionIds = new Set<string>(regions.map((region) => region.id))

const initialRegion = computed<RegionId | null>(() => {
  const value = route.query.region
  if (typeof value !== 'string' || !regionIds.has(value)) return null
  return value as RegionId
})
</script>

<template>
  <DigitalMap v-if="state.webglSupported" :initial-region="initialRegion" />

  <div v-else class="h-dvh overflow-y-auto map-shell">
    <div class="mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center px-6 py-16">
      <p class="text-[10px] uppercase tracking-[0.24em] text-glow">Modo compatible</p>
      <h1 class="mt-3 font-display text-3xl text-ice md:text-5xl">El mapa 3D no está disponible en este navegador</h1>
      <p class="mt-4 max-w-xl text-sm leading-relaxed text-mist">
        La experiencia principal necesita WebGL. Puedes explorar los proyectos en la vista de listado, con el mismo contenido y sin perder detalle.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <RouterLink
          to="/proyectos"
          class="rounded-xl border border-glow/35 bg-glow/10 px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-glow transition-colors hover:border-glow/70 hover:text-ice"
        >
          Ver proyectos
        </RouterLink>
        <a
          :href="`mailto:${siteConfig.email}`"
          class="rounded-xl border border-white/12 px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-mist transition-colors hover:border-white/30 hover:text-ice"
        >
          Contacto
        </a>
      </div>
    </div>
  </div>
</template>
