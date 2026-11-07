<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import type { Project, RegionId } from '@/types/portfolio'
import { projects } from '@/data/projects'
import { regions } from '@/data/regions'
import { siteConfig } from '@/data/site'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectDetail from '@/components/projects/ProjectDetail.vue'

type Filter = 'all' | RegionId

const router = useRouter()
const activeFilter = ref<Filter>('all')
const selectedProjectId = ref<string | null>(null)

const selectedProject = computed<Project | undefined>(() =>
  projects.find((project) => project.id === selectedProjectId.value),
)

const filters = computed(() => {
  return [
    { id: 'all' as const, label: 'Todos', count: projects.length },
    ...regions.map((region) => ({
      id: region.id,
      label: region.shortName,
      count: region.projectIds.length,
    })),
  ]
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter((project) => project.regionId === activeFilter.value)
})

const emptyRegion = computed(() =>
  activeFilter.value === 'all'
    ? null
    : regions.find((region) => region.id === activeFilter.value),
)

function openProject(projectId: string): void {
  selectedProjectId.value = projectId
}

function closeProject(): void {
  selectedProjectId.value = null
}

function exploreRegion(regionId: RegionId): void {
  selectedProjectId.value = null
  void router.push({ path: '/', query: { region: regionId } })
}
</script>

<template>
  <div class="h-dvh overflow-y-auto map-shell">
    <div class="mx-auto w-full max-w-6xl px-5 py-6 md:px-8 md:py-10">
      <header class="flex flex-wrap items-center justify-between gap-4">
        <RouterLink to="/" class="group flex items-center gap-3">
          <span class="grid h-9 w-9 place-items-center rounded-xl border border-glow/30 bg-glow/10 font-display text-sm text-glow">
            {{ siteConfig.initials }}
          </span>
          <span>
            <span class="block font-display text-sm tracking-[0.08em] text-ice">{{ siteConfig.name }}</span>
            <span class="block text-[10px] uppercase tracking-[0.18em] text-mist/70">Volver al mapa</span>
          </span>
        </RouterLink>

        <RouterLink
          to="/"
          class="rounded-full border border-white/12 px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-mist transition-colors hover:border-glow/45 hover:text-ice"
        >
          Inicio
        </RouterLink>
      </header>

      <section class="mt-12 max-w-2xl">
        <p class="text-[10px] uppercase tracking-[0.24em] text-glow">Archivo de proyectos</p>
        <h1 class="mt-3 font-display text-3xl leading-tight text-ice md:text-5xl">
          Trabajo construido, territorio por territorio.
        </h1>
        <p class="mt-4 text-sm leading-relaxed text-mist">
          Tres proyectos reales, tres problemas distintos y una misma obsesión: que la tecnología se sienta clara. Explora las fichas completas o vuelve al mapa para recorrer cada región.
        </p>
      </section>

      <nav class="mt-8 flex flex-wrap gap-2" aria-label="Filtrar proyectos por región">
        <button
          v-for="filter in filters"
          :key="filter.id"
          type="button"
          class="flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] uppercase tracking-[0.14em] transition-colors"
          :class="
            activeFilter === filter.id
              ? 'border-glow/60 bg-glow/10 text-ice'
              : 'border-white/10 text-mist hover:border-white/25 hover:text-ice'
          "
          :aria-pressed="activeFilter === filter.id"
          @click="activeFilter = filter.id"
        >
          {{ filter.label }}
          <span class="font-mono text-[9px]" :class="filter.count ? 'text-glow' : 'text-mist/50'">
            {{ filter.count }}
          </span>
        </button>
      </nav>

      <div v-if="filteredProjects.length" class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @open="openProject"
        />
      </div>

      <div v-else class="mt-6 rounded-2xl border border-dashed border-white/12 bg-white/[0.015] px-6 py-14 text-center">
        <p class="font-display text-xl text-ice">Próximamente</p>
        <p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-mist">
          {{ emptyRegion?.name }} es un territorio en exploración. Aún no hay proyectos publicados, pero la estructura está lista para recibirlos.
        </p>
        <button
          type="button"
          class="mt-5 text-[11px] uppercase tracking-[0.14em] text-glow transition-colors hover:text-ice"
          @click="activeFilter = 'all'"
        >
          Ver todos los proyectos →
        </button>
      </div>

      <footer class="mt-14 border-t border-white/8 py-6">
        <p class="text-[10px] uppercase tracking-[0.16em] text-mist/60">
          {{ siteConfig.name }} · {{ siteConfig.role }}
        </p>
      </footer>
    </div>
  </div>

  <ProjectDetail
    v-if="selectedProject"
    :project="selectedProject"
    @close="closeProject"
    @select-region="exploreRegion"
  />
</template>
