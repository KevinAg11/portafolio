# Fase 00 · Base técnica

## Objetivo

Preparar el proyecto Vue 3 + TypeScript + Vite con las dependencias, la configuración y la estructura mínima para construir el mapa.

## Implementado

- Proyecto npm con Vue 3.5, TypeScript 6, Vite 8, Tailwind CSS 4, Three.js, GSAP, Vue Router, Vitest y Playwright.
- Scripts `dev`, `build`, `preview`, `typecheck`, `test` y `capture`.
- Configuración de Vite, Vitest, TypeScript y entrada HTML con metadatos.
- Tipografías Inter Variable y Space Grotesk.
- Estilos base: variables de color, fondo, scrollbars, grano, paneles de vidrio, botones del mapa y respeto a movimiento reducido.
- Tipos del dominio en `src/types/portfolio.ts`.
- Datos separados de la interfaz en `src/data/`.
- Utilidades de ruido, matemáticas, calidad y enlaces.
- Estructura de carpetas para motor, componentes, composables, shaders, vistas y pruebas.

## Decisiones

- Los datos son la única fuente de verdad: añadir un proyecto no requiere tocar el motor.
- El alias `@` apunta a `src`.
- `typecheck` y `build` se ejecutan con `vue-tsc` para validar también las plantillas.
- Se eliminó `baseUrl` porque TypeScript 6 lo deprecia; los paths usan `./src/*`.

## Verificación

- `npm run typecheck`: correcto.
- `npm run build`: correcto.
- `npm run test`: correcto.

## Resultado

Base técnica estable, sin errores de tipos ni de compilación.
