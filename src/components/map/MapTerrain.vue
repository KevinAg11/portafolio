<script setup lang="ts">
defineProps<{
  regionCount: number
  projectCount: number
  qualityTier: string
}>()
</script>

<template>
  <div class="hidden items-center gap-5 text-[11px] text-mist md:flex">
    <span class="flex items-center gap-2">
      <span class="h-1.5 w-1.5 rounded-full bg-glow shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
      {{ regionCount }} regiones
    </span>
    <span class="flex items-center gap-2">
      <span class="h-1.5 w-1.5 rounded-full bg-electric" />
      {{ projectCount }} proyectos
    </span>
    <span class="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/70">
      Vista isométrica · {{ qualityTier }}
    </span>
  </div>
</template>
