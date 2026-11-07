<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import type { Project } from '@/types/portfolio'
import ProjectGallery from './ProjectGallery.vue'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  close: []
  selectRegion: [regionId: Project['regionId']]
}>()

const galleryImages = computed(() => {
  const images = [props.project.image, ...(props.project.gallery ?? [])]
  return [...new Set(images)]
})

function handleEscape(event: KeyboardEvent): void {
  if (event.key !== 'Escape') return
  event.preventDefault()
  event.stopPropagation()
  emit('close')
}

onMounted(() => document.addEventListener('keydown', handleEscape))
onBeforeUnmount(() => document.removeEventListener('keydown', handleEscape))
</script>

<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-[70] flex justify-end" @click.self="emit('close')">
      <div class="absolute inset-0 bg-abyss/75 backdrop-blur-sm" aria-hidden="true" @click="emit('close')" />

      <article
        role="dialog"
        aria-modal="true"
        data-modal="true"
        :aria-label="`Ficha del proyecto ${project.title}`"
        class="panel-glass relative z-10 flex h-full w-[min(720px,100vw)] flex-col overflow-hidden"
      >
        <header class="flex items-start justify-between gap-5 border-b border-white/8 px-6 py-5 md:px-8">
          <div>
            <p class="text-[10px] uppercase tracking-[0.22em] text-glow">{{ project.category }}</p>
            <h2 class="mt-1.5 font-display text-2xl text-ice md:text-3xl">{{ project.title }}</h2>
          </div>
          <button type="button" class="map-button shrink-0" aria-label="Cerrar ficha del proyecto" @click="emit('close')">
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
            </svg>
          </button>
        </header>

        <div class="min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-8">
          <ProjectGallery :images="galleryImages" :title="project.title" />

          <p class="mt-6 text-sm leading-relaxed text-ice/85">{{ project.description }}</p>

          <div v-if="project.problem || project.solution" class="mt-6 grid gap-3 sm:grid-cols-2">
            <section v-if="project.problem" class="rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <h3 class="text-[10px] uppercase tracking-[0.18em] text-mist">Reto</h3>
              <p class="mt-2 text-xs leading-relaxed text-ice/75">{{ project.problem }}</p>
            </section>
            <section v-if="project.solution" class="rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <h3 class="text-[10px] uppercase tracking-[0.18em] text-mist">Solución</h3>
              <p class="mt-2 text-xs leading-relaxed text-ice/75">{{ project.solution }}</p>
            </section>
          </div>

          <div class="mt-6">
            <h3 class="text-[10px] uppercase tracking-[0.18em] text-mist">Tecnologías</h3>
            <div class="mt-2 flex flex-wrap gap-1.5">
              <span v-for="technology in project.technologies" :key="technology" class="tech-chip">{{ technology }}</span>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="text-[10px] uppercase tracking-[0.18em] text-mist">Aspectos destacados</h3>
            <ul class="mt-2 space-y-2">
              <li v-for="feature in project.features" :key="feature" class="flex gap-2.5 text-xs leading-relaxed text-ice/75">
                <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-glow" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <footer class="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 px-6 py-4 md:px-8">
          <button
            type="button"
            class="text-[11px] uppercase tracking-[0.14em] text-mist transition-colors hover:text-ice"
            @click="emit('selectRegion', project.regionId)"
          >
            ← Explorar la región
          </button>
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noreferrer noopener"
            class="inline-flex items-center gap-2 rounded-xl border border-glow/30 bg-glow/8 px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] text-glow transition-colors hover:border-glow/60 hover:bg-glow/12 hover:text-ice"
          >
            Ver sitio en vivo
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </footer>
      </article>
    </div>
  </Teleport>
</template>
