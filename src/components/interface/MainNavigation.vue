<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { ActivePanel } from '@/composables/useMapState'
import type { NavigationSection } from '@/data/site'
import { navigationItems, siteConfig } from '@/data/site'

const props = defineProps<{
  activePanel: ActivePanel
  isOverview: boolean
}>()

const emit = defineEmits<{
  navigate: [section: NavigationSection]
}>()

const mobileOpen = ref(false)

function isActive(id: NavigationSection): boolean {
  if (props.activePanel) return props.activePanel === id
  return id === 'mapa' && props.isOverview
}

function select(section: NavigationSection): void {
  mobileOpen.value = false
  emit('navigate', section)
}

function handleEscape(event: KeyboardEvent): void {
  if (event.key !== 'Escape' || !mobileOpen.value) return
  event.preventDefault()
  event.stopPropagation()
  mobileOpen.value = false
}

onMounted(() => document.addEventListener('keydown', handleEscape, true))
onBeforeUnmount(() => document.removeEventListener('keydown', handleEscape, true))
</script>

<template>
  <header class="pointer-events-auto relative z-40 flex items-center justify-between gap-4 px-4 py-4 md:px-8">
    <button
      type="button"
      class="group flex items-center gap-3 text-left"
      aria-label="Volver al inicio"
      @click="select('inicio')"
    >
      <span class="grid h-9 w-9 place-items-center rounded-xl border border-glow/30 bg-glow/10 font-display text-sm text-glow">
        {{ siteConfig.initials }}
      </span>
      <span class="hidden sm:block">
        <span class="block font-display text-sm tracking-[0.08em] text-ice">{{ siteConfig.name }}</span>
        <span class="block text-[10px] uppercase tracking-[0.18em] text-mist/70">
          {{ siteConfig.location }}
        </span>
      </span>
    </button>

    <nav class="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
      <button
        v-for="item in navigationItems"
        :key="item.id"
        type="button"
        class="nav-link"
        :class="{ 'is-active': isActive(item.id) }"
        :aria-current="isActive(item.id) ? 'page' : undefined"
        @click="select(item.id)"
      >
        {{ item.label }}
      </button>
      <RouterLink
        to="/proyectos"
        class="rounded-full border border-glow/25 bg-glow/8 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-glow transition-colors hover:border-glow/60 hover:text-ice"
      >
        Proyectos
      </RouterLink>
    </nav>

    <div class="flex items-center gap-2 md:hidden">
      <RouterLink
        to="/proyectos"
        class="rounded-full border border-glow/25 bg-glow/8 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-glow"
      >
        Proyectos
      </RouterLink>
      <button
        type="button"
        class="map-button"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-navigation"
        aria-label="Abrir menú de navegación"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <Transition name="panel">
      <nav
        v-if="mobileOpen"
        id="mobile-navigation"
        data-modal="true"
        class="panel-glass absolute top-[calc(100%-0.25rem)] right-4 left-4 flex flex-col gap-1 rounded-2xl p-2 md:hidden"
        aria-label="Navegación principal móvil"
      >
        <button
          v-for="item in navigationItems"
          :key="item.id"
          type="button"
          class="rounded-xl px-4 py-3 text-left text-sm text-mist transition-colors hover:bg-elevated/60 hover:text-ice"
          :class="{ 'bg-elevated/60 text-ice': isActive(item.id) }"
          @click="select(item.id)"
        >
          {{ item.label }}
        </button>
      </nav>
    </Transition>
  </header>
</template>
