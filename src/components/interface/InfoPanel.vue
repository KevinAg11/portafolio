<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { ActivePanel } from '@/composables/useMapState'
import { siteConfig } from '@/data/site'
import { regions } from '@/data/regions'

const props = defineProps<{
  panel: Exclude<ActivePanel, null>
}>()

const emit = defineEmits<{
  close: []
  contact: []
}>()

const copied = ref(false)
let copyTimer = 0

const content = computed(() => {
  if (props.panel === 'servicios') {
    return {
      eyebrow: 'Capacidades',
      title: 'Servicios',
      intro:
        'Cada territorio del mapa representa una especialidad. Estas son las áreas desde las que puedo aportar a un producto digital.',
    }
  }

  if (props.panel === 'sobre-mi') {
    return {
      eyebrow: 'Perfil',
      title: 'Sobre mí',
      intro: siteConfig.summary,
    }
  }

  return {
    eyebrow: 'Conversemos',
    title: 'Contacto',
    intro:
      '¿Tienes un proyecto, una idea o un proceso que digitalizar? Escríbeme y revisemos cómo abordarlo.',
  }
})

async function copyEmail(): Promise<void> {
  try {
    await navigator.clipboard.writeText(siteConfig.email)
    copied.value = true
    window.clearTimeout(copyTimer)
    copyTimer = window.setTimeout(() => {
      copied.value = false
    }, 2200)
  } catch {
    copied.value = false
  }
}

function handleEscape(event: KeyboardEvent): void {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => document.addEventListener('keydown', handleEscape))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscape)
  window.clearTimeout(copyTimer)
})
</script>

<template>
  <div class="fixed inset-0 z-[60] flex justify-end" @click.self="emit('close')">
    <div class="absolute inset-0 bg-abyss/70 backdrop-blur-sm" aria-hidden="true" @click="emit('close')" />

    <aside
      role="dialog"
      aria-modal="true"
      data-modal="true"
      :aria-label="content.title"
      class="panel-glass relative z-10 flex h-full w-[min(520px,100vw)] flex-col overflow-hidden"
    >
      <header class="flex items-start justify-between gap-6 border-b border-white/8 px-6 py-6 md:px-8">
        <div>
          <p class="text-[10px] uppercase tracking-[0.24em] text-glow">{{ content.eyebrow }}</p>
          <h2 class="mt-2 font-display text-3xl text-ice">{{ content.title }}</h2>
        </div>
        <button type="button" class="map-button" aria-label="Cerrar panel" @click="emit('close')">
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
          </svg>
        </button>
      </header>

      <div class="min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-8">
        <p class="text-sm leading-relaxed text-ice/80">{{ content.intro }}</p>

        <template v-if="panel === 'servicios'">
          <div class="mt-7 space-y-5">
            <section v-for="region in regions" :key="region.id">
              <div class="flex items-center gap-2">
                <span class="h-1.5 w-1.5 rounded-full" :style="{ backgroundColor: region.color }" />
                <h3 class="font-display text-sm text-ice">{{ region.name }}</h3>
              </div>
              <div class="mt-2 flex flex-wrap gap-1.5">
                <span v-for="service in region.services" :key="service" class="tech-chip">{{ service }}</span>
              </div>
            </section>
          </div>
          <button
            type="button"
            class="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-glow transition-colors hover:text-ice"
            @click="emit('contact')"
          >
            Cuéntame tu necesidad
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </template>

        <template v-else-if="panel === 'sobre-mi'">
          <div class="mt-7 space-y-4">
            <div class="rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <p class="text-[10px] uppercase tracking-[0.18em] text-mist">Enfoque</p>
              <p class="mt-2 text-sm leading-relaxed text-ice/80">
                Diseño y desarrollo soluciones completas: desde la arquitectura y los datos hasta la interfaz y el detalle visual. Priorizo el rendimiento, la claridad y el mantenimiento a largo plazo.
              </p>
            </div>
            <div class="rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <p class="text-[10px] uppercase tracking-[0.18em] text-mist">Disponibilidad</p>
              <p class="mt-2 flex items-center gap-2 text-sm text-ice/80">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                {{ siteConfig.availability }}
              </p>
            </div>
            <div class="rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <p class="text-[10px] uppercase tracking-[0.18em] text-mist">Rol</p>
              <p class="mt-2 text-sm text-ice/80">{{ siteConfig.role }}</p>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="mt-7 space-y-3">
            <a
              :href="`mailto:${siteConfig.email}`"
              class="flex items-center justify-between gap-4 rounded-xl border border-glow/25 bg-glow/6 px-4 py-4 transition-colors hover:border-glow/55 hover:bg-glow/10"
            >
              <span>
                <span class="block text-[10px] uppercase tracking-[0.18em] text-mist">Correo</span>
                <span class="mt-1 block text-sm text-ice">{{ siteConfig.email }}</span>
              </span>
              <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0 text-glow" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>

            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-4 text-left transition-colors hover:border-glow/35"
              @click="copyEmail"
            >
              <span>
                <span class="block text-[10px] uppercase tracking-[0.18em] text-mist">Copiar correo</span>
                <span class="mt-1 block text-sm text-ice">{{ copied ? 'Copiado al portapapeles' : 'Un clic, sin seleccionar texto' }}</span>
              </span>
              <span class="font-mono text-[10px] uppercase tracking-[0.12em]" :class="copied ? 'text-emerald-300' : 'text-mist'">
                {{ copied ? 'OK' : 'Copiar' }}
              </span>
            </button>

            <div class="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-4">
              <span class="block text-[10px] uppercase tracking-[0.18em] text-mist">Ubicación</span>
              <span class="mt-1 block text-sm text-ice">{{ siteConfig.location }}</span>
            </div>

            <div v-if="siteConfig.socials.length" class="flex gap-2 pt-2">
              <a
                v-for="social in siteConfig.socials"
                :key="social.label"
                :href="social.url"
                target="_blank"
                rel="noreferrer noopener"
                class="tech-chip transition-colors hover:border-glow/60 hover:text-ice"
              >
                {{ social.label }}
              </a>
            </div>
          </div>
        </template>
      </div>

      <footer class="border-t border-white/8 px-6 py-4 md:px-8">
        <p class="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-mist/70">
          <span class="h-1 w-1 rounded-full bg-glow" />
          {{ siteConfig.name }} · {{ siteConfig.location }}
        </p>
      </footer>
    </aside>
  </div>
</template>
