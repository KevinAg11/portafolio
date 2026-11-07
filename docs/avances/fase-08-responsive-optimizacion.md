# Fase 08 · Responsive y optimización

## Objetivo

Mantener el mapa utilizable en escritorio, tablet y móvil, con un coste gráfico controlado.

## Implementado

- Perfiles de calidad alta, media y baja según ancho, memoria y núcleos.
- Ajuste de `pixelRatio`, segmentos de terreno, densidad de estructuras y bloom.
- `ResizeObserver` para cámara, renderer y etiquetas.
- `IntersectionObserver` y `document.hidden` para pausar el render fuera de vista.
- Interfaz adaptable:
  - Navegación horizontal en escritorio y menú desplegable en móvil.
  - Selector de regiones con scroll horizontal.
  - Paneles con ancho máximo y scroll interno.
  - Controles del mapa accesibles en pantalla pequeña.
- Modo compatible sin WebGL con enlace a la vista de proyectos.
- Respeto a `prefers-reduced-motion` en CSS y motor.

## Verificación

- Smoke test con Chrome real a 1440 × 900.
- Smoke test con Chrome real a 390 × 844: menú, selector de regiones, panel y ficha sin desbordes.
- Smoke test con `prefers-reduced-motion: reduce`: sin pantalla de carga prolongada y sin errores.
- Build de producción correcto.
- Imágenes WebP servidas con dimensiones correctas.
- Consola sin errores.

## Resultado

Experiencia estable en los tamaños probados y degradación controlada cuando WebGL no está disponible.
