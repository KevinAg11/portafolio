<script setup lang="ts">
defineProps<{
  visible: boolean
}>()
</script>

<template>
  <Transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-[80] grid place-items-center bg-abyss"
      role="status"
      aria-live="polite"
      aria-label="Cargando el mapa digital"
    >
      <div class="flex w-[min(320px,80vw)] flex-col items-center gap-7 text-center">
        <div class="relative grid h-20 w-20 place-items-center">
          <span class="absolute inset-0 animate-ping rounded-2xl border border-glow/20" />
          <span class="absolute inset-2 rounded-2xl border border-glow/35 bg-glow/5" />
          <span class="relative font-display text-lg tracking-[0.24em] text-glow">DS</span>
        </div>
        <div class="space-y-2">
          <p class="font-display text-sm uppercase tracking-[0.28em] text-ice">Desplegando territorio</p>
          <p class="text-xs text-mist">Preparando geometría, rutas y marcadores</p>
        </div>
        <div class="h-px w-full overflow-hidden rounded-full bg-white/10">
          <span class="loading-bar block h-full w-1/2 bg-gradient-to-r from-transparent via-glow to-transparent" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.loading-bar {
  animation: loading-sweep 1.4s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

@keyframes loading-sweep {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(240%);
  }
}
</style>
