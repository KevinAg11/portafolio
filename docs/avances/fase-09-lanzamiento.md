# Fase 09 · Integración y lanzamiento

## Objetivo

Dejar el proyecto compilado, probado y listo para publicar, con los pasos externos claramente separados.

## Implementado

- Build de producción con `vue-tsc --noEmit && vite build`.
- Pruebas automatizadas de datos, polígonos, terreno, matemáticas y enlaces seguros.
- Captura reproducible de pantallas reales con Playwright y Sharp.
- `netlify.toml` con comando de build, publicación de `dist`, Node 22 y redirección SPA.
- Fallback SVG para imágenes ausentes.
- Modo compatible sin WebGL.
- Cierre del menú móvil con `Esc` sin propagar la acción al mapa; el menú abierto bloquea los atajos globales.
- Foco visible unificado para botones y enlaces interactivos.
- Revisión final de iluminación, materiales, paleta, cámara y animaciones, manteniendo los perfiles de calidad y el modo de movimiento reducido.
- Documentación de avances y del territorio.

## Verificación final

- `npm run typecheck`: sin errores.
- `npm run build`: build correcto.
- `npm run test`: 24 pruebas aprobadas.
- `npm run capture`: 3 portadas + 9 capturas reales.
- Smoke test Playwright de producción en escritorio 1440×900: mapa, región, ciudad, ficha y retorno por `Esc` sin errores.
- Smoke test Playwright de producción en móvil 390×844: sin desbordes horizontales, menú cerrable con `Esc` y región activa preservada.
- Smoke test de producción con `prefers-reduced-motion`: carga breve y estado final sin errores.
- Consola sin errores ni advertencias durante las rutas `/`, `/proyectos` y la ficha de proyecto.

## Pendientes externos

1. Sustituir los placeholders de `src/data/site.ts` por nombre, correo y redes reales.
2. Conectar el repositorio al proveedor de despliegue con las credenciales del usuario.
3. Repetir `npm run capture` si los sitios en vivo cambian.
4. Añadir nuevos proyectos solo en `src/data/projects.ts` cuando existan.

## Resultado

Aplicación lista para despliegue. El único bloqueo restante es externo: datos personales definitivos y acceso al proveedor de hosting.
