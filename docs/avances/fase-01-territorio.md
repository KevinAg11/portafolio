# Fase 01 · Diseño y planificación del territorio

## Objetivo

Definir la organización visual y espacial del mapa antes de construir la geometría.

## Implementado

- Cinco regiones con identidad, color, descripción, servicios y polígono propio.
- Distribución espacial alrededor de BUSINESS como núcleo.
- Coordenadas y cámaras por región en `src/data/regions.ts`.
- Vista general isométrica con `PerspectiveCamera` y objetivos de cámara.
- Paleta de azules profundos con acentos cian, documentada en `variables.css`.
- Estructura de contenido real:
  - WEB: Elizabeth Álvarez y Mayte Montero.
  - BUSINESS: TracKing.
  - MOBILE, SYSTEMS y EXPERIENCE: «Próximamente».
- Documento de territorio en `docs/territorio.md`.

## Decisiones

- Los proyectos se asignan por `regionId`; no se duplican en la región.
- Las regiones sin proyectos son visibles y seleccionables, con un estado vacío útil.
- La cámara mantiene una vista isométrica: sin rotación libre, con paneo y zoom controlados.

## Verificación

- Pruebas de integridad de regiones, polígonos y asignación de proyectos.
- Verificación manual de la vista general y del enfoque por región.

## Resultado

Territorio definido y navegable, con coordenadas estables para todas las capas.
