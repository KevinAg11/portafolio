<script setup lang="ts">
defineProps<{
  transitioning: boolean
}>()
</script>

<template>
  <div class="hidden items-center gap-4 text-[10px] font-mono uppercase tracking-[0.16em] text-mist/70 lg:flex">
    <span :class="transitioning ? 'text-glow' : 'text-mist/70'">
      {{ transitioning ? 'Navegando' : 'Arrastra para explorar' }}
    </span>
    <span class="h-3 w-px bg-border-map/60" />
    <span>+ / − zoom</span>
    <span class="h-3 w-px bg-border-map/60" />
    <span>Esc vista general</span>
  </div>
</template>
