<script setup lang="ts">
import type { Project } from '@/types/portfolio'

defineProps<{
  projects: Project[]
}>()

const emit = defineEmits<{
  select: [projectId: string]
}>()
</script>

<template>
  <nav class="sr-only" aria-label="Proyectos disponibles">
    <p>Selecciona un proyecto para abrir su ficha completa.</p>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <button type="button" @click="emit('select', project.id)">
          {{ project.title }} — {{ project.category }}
        </button>
      </li>
    </ul>
  </nav>
</template>
