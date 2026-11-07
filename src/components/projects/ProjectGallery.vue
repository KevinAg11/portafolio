<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { FALLBACK_PROJECT_IMAGE, handleImageError } from '@/utils/media'

const props = defineProps<{
  images: string[]
  title: string
}>()

const activeIndex = ref(0)
const displayImages = computed(() =>
  props.images.length ? props.images : [FALLBACK_PROJECT_IMAGE],
)
const activeImage = computed(
  () => displayImages.value[activeIndex.value] ?? FALLBACK_PROJECT_IMAGE,
)

function select(index: number): void {
  activeIndex.value = index
}

function move(direction: 1 | -1): void {
  const total = displayImages.value.length
  activeIndex.value = (activeIndex.value + direction + total) % total
}

watch(
  () => props.images,
  () => {
    activeIndex.value = 0
  },
)
</script>

<template>
  <div>
    <div class="group relative aspect-video overflow-hidden rounded-xl border border-white/8 bg-night">
      <img
        :src="activeImage"
        :alt="`${title} — captura ${activeIndex + 1}`"
        class="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        @error="handleImageError"
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/45 via-transparent to-transparent" />

      <template v-if="displayImages.length > 1">
        <button
          type="button"
          class="absolute top-1/2 left-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-abyss/70 text-ice opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          aria-label="Captura anterior"
          @click="move(-1)"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          class="absolute top-1/2 right-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-abyss/70 text-ice opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          aria-label="Captura siguiente"
          @click="move(1)"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <span class="absolute right-3 bottom-3 rounded-full border border-white/12 bg-abyss/75 px-2 py-1 font-mono text-[10px] text-ice/80">
          {{ activeIndex + 1 }} / {{ displayImages.length }}
        </span>
      </template>
    </div>

    <div v-if="displayImages.length > 1" class="mt-2 grid grid-cols-4 gap-2">
      <button
        v-for="(image, index) in displayImages"
        :key="`${image}-${index}`"
        type="button"
        class="aspect-video overflow-hidden rounded-lg border transition-colors"
        :class="activeIndex === index ? 'border-glow/70' : 'border-white/8 hover:border-white/25'"
        :aria-label="`Ver captura ${index + 1}`"
        :aria-pressed="activeIndex === index"
        @click="select(index)"
      >
        <img
          :src="image"
          :alt="`${title} miniatura ${index + 1}`"
          class="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          @error="handleImageError"
        />
      </button>
    </div>
  </div>
</template>
