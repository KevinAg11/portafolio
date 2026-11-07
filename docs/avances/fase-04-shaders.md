# Fase 04 · Shaders y efectos gráficos

## Objetivo

Aportar la identidad visual del mapa mediante GLSL y post-processing.

## Implementado

- Shader de terreno con variación de color, rejilla sutil y luz.
- Shader de caminos con flujo animado y énfasis por región.
- Shader de región con relleno, borde, introducción y selección.
- Shader de marcador y anillo con pulso.
- Materiales encapsulados en `TerrainMaterial`, `RoadShader`, `RegionShader` y `MarkerMaterial`.
- Bloom opcional en calidad alta.
- Uniformes de introducción y opacidad controlados por el motor.

## Decisiones

- Los shaders reciben color y estado desde los datos y la selección, sin duplicar lógica.
- En calidad media o baja se desactiva el bloom y se reduce la resolución de render.
- Con `prefers-reduced-motion`, las capas aparecen en su estado final sin animación de entrada.

## Verificación

- Compilación correcta de todos los shaders en el build de producción.
- Render visible en las capturas de humo de escritorio y móvil.
- Sin errores de consola relacionados con programas WebGL.

## Resultado

Estética de mapa digital coherente, con efectos controlados por calidad y accesibilidad.
