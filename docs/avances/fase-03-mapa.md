# Fase 03 · Construcción del mapa

## Objetivo

Construir el terreno, las regiones, los caminos, las estructuras y los marcadores.

## Implementado

- `height.ts`: ruido FBM, altura del terreno y prueba de punto en polígono.
- `TerrainGeometry` y `TerrainLayer`: plano de 150 × 150 con relieve y material propio.
- `RegionLayer`: polígonos extruidos sobre el terreno, bordes, selección y énfasis por hover.
- `RoadLayer`: caminos entre regiones y el núcleo, con animación de flujo.
- `StructureLayer`: estructuras de baja altura con densidad según calidad.
- `MarkerLayer`: marcadores por proyecto, anillos, pulso y estados de hover/selección.
- Todas las capas se adaptan a movimiento reducido mediante el modo instantáneo.

## Decisiones

- La geometría se genera a partir de los datos de región, no de valores escritos en las capas.
- Los marcadores se ubican con un desplazamiento relativo a la región para evitar solapamientos.
- El terreno y las regiones comparten la misma función de altura para que no floten.

## Verificación

- 5 etiquetas de región presentes en el DOM.
- Selección de WEB y BUSINESS mediante mapa y botones.
- Build y typecheck correctos.

## Resultado

Mapa completo con las cinco regiones, caminos, estructuras y marcadores de proyecto.
