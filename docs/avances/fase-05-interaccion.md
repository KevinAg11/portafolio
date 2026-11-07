# Fase 05 · Sistema de interacción

## Objetivo

Permitir que el usuario explore el mapa por puntero, teclado y controles de interfaz.

## Implementado

- `RaycastManager`: hover y clic sobre regiones y marcadores, con umbral para distinguir clic de arrastre.
- `SelectionManager`: estados `overview`, `region` y `project`.
- Composables:
  - `useMapState`: estado compartido de selección, hover, carga, calidad y paneles.
  - `useMapScene`: creación, carga mínima y destrucción del motor.
  - `useMapCamera`: zoom, reset, enfoque y paneo.
  - `useMapInteraction`: atajos de teclado globales.
  - `useMapNavigation`: navegación entre paneles y vista general.
- Controles del mapa: acercar, alejar, región anterior, región siguiente y reset.
- Selector de regiones con estado activo y contador de proyectos.
- Paneles de región, proyecto y navegación con cierre por `Esc`.
- Navegación por teclado: flechas, `+`, `-`, `R` y `Esc`.
- Alternativa accesible con botones de región y lista de proyectos para lectores de pantalla.

## Decisiones

- El estado de la interfaz reacciona a los eventos del motor; no se mantienen dos selecciones distintas.
- Los paneles modales marcan `data-modal` para que los atajos del mapa no interfieran.
- Los controles usan botones reales con etiquetas ARIA, no solo iconos clicables.

## Verificación

- Smoke test: clic en WEB abre el panel de región; clic en Elizabeth abre la ficha; cerrar vuelve a la región; cerrar la región vuelve a la vista general.
- Teclado: `Esc` regresa a la vista general.
- Sin errores de consola.

## Resultado

Exploración completa por ratón, teclado y controles accesibles.
