# Avances del portafolio

Última actualización: 6 de noviembre de 2026.

## Estado general

Las nueve fases del documento maestro original están implementadas y verificadas. Sobre esa base se completó la evolución hacia un territorio digital realista: las fases 01 a 09 están integradas y la revisión final de pulido quedó cerrada. El proyecto compila, pasa las pruebas automatizadas, tiene capturas reales de los tres proyectos y fue probado en escritorio y móvil con un navegador real.

## Evolución del territorio

| Fase | Alcance | Estado |
| --- | --- | --- |
| Evolución 01 · Auditoría | Diagnóstico del motor, capas, datos y presupuesto | Completada |
| Evolución 02 · Regiones irregulares | Contornos naturales, paleta territorial y fronteras integradas | Completada |
| Evolución 03 · Terreno natural | Colinas, montañas, valles, mesetas y materiales naturales | Completada |
| Evolución 04 · Vegetación | Árboles y arbustos procedurales instanciados | Completada |
| Evolución 05 · Ciudades | Trazado urbano y edificios | Completada |
| Evolución 06 · Edificios de proyecto | Edificios representativos e interacción | Completada |
| Evolución 07 · Exploración | Navegación territorio → región → ciudad → proyecto | Completada |
| Evolución 08 · Optimización | LOD, rendimiento y responsive de la nueva capa visual | Completada |
| Evolución 09 · Pulido | Ajuste visual y lanzamiento | Completada |

| Fase | Documento | Estado |
| --- | --- | --- |
| 00 · Base técnica | [fase-00-base.md](avances/fase-00-base.md) | Completada |
| 01 · Territorio | [fase-01-territorio.md](avances/fase-01-territorio.md) | Completada |
| 02 · Motor gráfico | [fase-02-motor-grafico.md](avances/fase-02-motor-grafico.md) | Completada |
| 03 · Mapa | [fase-03-mapa.md](avances/fase-03-mapa.md) | Completada |
| 04 · Shaders y efectos | [fase-04-shaders.md](avances/fase-04-shaders.md) | Completada |
| 05 · Interacción | [fase-05-interaccion.md](avances/fase-05-interaccion.md) | Completada |
| 06 · Animaciones | [fase-06-animaciones.md](avances/fase-06-animaciones.md) | Completada |
| 07 · Proyectos | [fase-07-proyectos.md](avances/fase-07-proyectos.md) | Completada |
| 08 · Responsive y optimización | [fase-08-responsive-optimizacion.md](avances/fase-08-responsive-optimizacion.md) | Completada |
| 09 · Integración y lanzamiento | [fase-09-lanzamiento.md](avances/fase-09-lanzamiento.md) | Completada con pendientes externos |

La distribución del mapa y las coordenadas están documentadas en [territorio.md](territorio.md).

## Verificación ejecutada

| Comando / prueba | Resultado |
| --- | --- |
| `npm run typecheck` | Sin errores |
| `npm run build` | Build de producción correcto |
| `npm run test` | 24 pruebas aprobadas |
| `npm run capture` | 3 portadas y 9 capturas de galería reales en WebP |
| Smoke test Playwright · escritorio 1440×900 | Región WEB → ciudad Villa Código → ficha de Elizabeth y retorno por `Esc` funcionando |
| Smoke test Playwright · cinco regiones | Dos ciudades visibles y etiquetadas en WEB, BUSINESS, MOBILE, SYSTEMS y EXPERIENCE |
| Smoke test Playwright · edificios destacados | TracKing, Elizabeth Álvarez y Mayte Montero abren su ficha desde el edificio o la lista accesible |
| Pruebas de ciudades | 10 ciudades, 2 por región, dentro de los límites y con 1 proyecto asignado por edificio |
| Pruebas de LOD | Tres niveles de detalle urbano; edificios de proyecto siempre detallados |
| Smoke test Playwright · móvil 390×844 | Menú, regiones, panel de ciudad, breadcrumb y layout sin desbordes |
| Prueba de teclado · menú móvil + `Esc` | El menú se cierra sin ejecutar `goUp` ni cambiar la región activa |
| Smoke test Playwright · `prefers-reduced-motion` | Carga breve, estado final inmediato y sin errores |
| Ruta `/?region=WEB` desde la vista de proyectos | La región se abre y enfoca al cargar el mapa |
| Rendimiento del mapa · escritorio y móvil | 60 fps estables tras la carga; sin errores ni advertencias de WebGL |
| Revisión de consola | Sin errores de ejecución |

## Contenido publicado

- WEB: Elizabeth Álvarez y Mayte Montero.
- BUSINESS: TracKing.
- MOBILE, SYSTEMS y EXPERIENCE: estado «Próximamente»; se pueden poblar solo con datos.
- Cada región tiene dos ciudades. Las regiones con proyectos colocan un edificio destacado por proyecto; las vacías mantienen una ciudad genérica con edificio cívico y plaza.

## Pendientes externos

1. Reemplazar los datos provisionales de `src/data/site.ts` (nombre, correo, redes) por los datos reales.
2. Conectar el repositorio y ejecutar el despliegue con las credenciales del usuario. `netlify.toml` ya está preparado.
3. Opcional: añadir proyectos a MOBILE, SYSTEMS o EXPERIENCE editando `src/data/projects.ts`.
4. Opcional: ejecutar `npm run capture` de nuevo cuando los sitios en vivo cambien.

## Criterio de cierre

No se marca una fase como completada sin `typecheck`, `build`, pruebas y una verificación funcional. Las capturas se generaron contra los sitios publicados, no con maquetas.
