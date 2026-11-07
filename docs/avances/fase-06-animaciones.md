# Fase 06 · Animaciones

## Objetivo

Dar ritmo a la entrada y a la navegación sin sacrificar claridad ni accesibilidad.

## Implementado

- Introducción de cámara desde una vista elevada hacia la vista general con GSAP.
- Entrada escalonada de regiones, caminos, estructuras, marcadores y etiquetas.
- Transiciones de cámara con curva Bézier cuadrática entre vistas.
- Pulso de anillos de marcador y flujo de caminos.
- Transiciones CSS para paneles, menú móvil y pantalla de carga.
- Modo instantáneo para `prefers-reduced-motion`: sin animaciones de entrada y transiciones de cámara inmediatas.

## Decisiones

- La pantalla de carga tiene un mínimo de 1.7 segundos para evitar parpadeos; con movimiento reducido baja a 320 ms.
- Las animaciones decorativas se pausan cuando la pestaña no está visible.
- No se animan propiedades que bloqueen la interacción: los controles se habilitan al terminar la transición correspondiente.

## Verificación

- Introducción visible en la prueba de escritorio.
- Navegación entre regiones y proyectos sin saltos ni estados bloqueados.
- Prueba con `prefers-reduced-motion` en navegador real: la pantalla de carga desaparece sin esperar la animación y las etiquetas aparecen con opacidad 1.

## Resultado

Experiencia fluida, con animaciones intencionales y respeto a la preferencia del usuario.
