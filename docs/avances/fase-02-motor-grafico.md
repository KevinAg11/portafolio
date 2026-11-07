# Fase 02 · Construcción del motor gráfico

## Objetivo

Construir la capa que administra escena, cámara, render, etiquetas y ciclo de vida.

## Implementado

- `SceneManager`: escena, fondo, niebla, grupos de capas e iluminación.
- `CameraManager`: cámara de perspectiva, `OrbitControls` restringido, enfoque de región y de proyecto, zoom, paneo y transiciones GSAP.
- `RenderManager`: renderer WebGL, tone mapping, post-processing con bloom cuando la calidad lo permite y liberación de recursos.
- `LabelManager`: etiquetas CSS2D para regiones y proyectos, con visibilidad y énfasis.
- `MapEngine`: orquestador que crea capas, conecta eventos, controla el loop y expone la API de navegación.
- Detección de calidad alta, media y baja.
- Pausa del render cuando la pestaña o el mapa no son visibles.

## Decisiones

- Un único `MapEngine` por vista; `useMapScene` se encarga de crearlo y destruirlo.
- La animación usa `requestAnimationFrame` y tiempo real, sin `THREE.Clock` (deprecado en Three.js 0.187).
- Los observadores de tamaño e intersección viven en el motor y se desconectan al destruirlo.

## Verificación

- Typecheck y build sin errores.
- Prueba funcional del ciclo de vida: la vista general renderiza, las regiones enfocan y el desmontaje no deja errores.
- Consola sin advertencias de Three.js después de retirar `Clock`.

## Resultado

Motor gráfico estable, modular y reutilizable para las capas del mapa.
