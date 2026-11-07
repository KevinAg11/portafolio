# Fase 07 · Sistema de proyectos

## Objetivo

Presentar proyectos reales dentro del mapa y en una vista de archivo.

## Implementado

- Modelo `Project` con descripción, reto, solución, tecnologías, características, galería y URL.
- Tres proyectos reales: Elizabeth Álvarez, Mayte Montero y TracKing.
- Ficha de proyecto con portada, galería, reto, solución, tecnologías y aspectos destacados.
- Paneles de región con listado de proyectos y estado vacío «Próximamente».
- `ProjectCard`, `ProjectGallery`, `ProjectDetail`, `RegionInformation`.
- Vista `/proyectos` con filtros por región y ficha compartida.
- Capturas reales de los sitios publicados mediante Playwright y Sharp.
- Imagen SVG de respaldo si una captura no está disponible.
- Botón «Ver sitio en vivo» y retorno a la región desde la ficha.

## Capturas generadas

- 3 portadas de 1440 × 900 en WebP.
- 9 capturas de galería de 1200 × 750 en WebP.
- Archivos en `public/images/projects/`.

## Verificación

- Las 12 imágenes cargan con dimensiones reales en la ficha.
- El build incluye las imágenes y el fallback.
- Los filtros de región muestran proyectos o el estado «Próximamente».
- Sin errores de consola en la vista de proyectos.

## Resultado

Contenido real navegable desde el mapa y desde una ruta independiente.
