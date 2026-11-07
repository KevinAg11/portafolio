# Territorio del mapa

## Concepto

El portafolio es un mapa digital isométrico dividido en cinco regiones. Cada región representa una especialidad y contiene los proyectos que le corresponden. La región central funciona como núcleo y las demás se distribuyen a su alrededor. La evolución actual convierte los antiguos hexágonos en territorios irregulares integrados a un paisaje natural.

## Distribución espacial

| Región | Coordenadas | Color | Proyectos | Estado |
| --- | --- | --- | --- | --- |
| BUSINESS · Soluciones Empresariales | `(0, 3.4, 0)` | `#EAB308` | TracKing | Con proyecto |
| WEB · Desarrollo Web | `(-26, 2.8, -15)` | `#14B8A6` | Elizabeth Álvarez, Mayte Montero | Con proyectos |
| MOBILE · Aplicaciones Móviles | `(26, 2.6, -17)` | `#3B82F6` | — | Próximamente |
| SYSTEMS · Sistemas Digitales | `(29, 3, 18)` | `#8B5CF6` | — | Próximamente |
| EXPERIENCE · Experiencias Digitales | `(-28, 2.9, 20)` | `#F97316` | — | Próximamente |

## Regiones

- Cada región nace de 15 anclas dibujadas a mano y se densifica a 60 puntos con un Catmull-Rom cerrado y una variación determinista.
- La geometría de superficie se recorta por rejilla contra el contorno y se apoya sobre la altura real del terreno.
- La frontera es una cinta fina elevada sobre el terreno que usa el color regional.
- El color regional funciona como tinte de identidad sobre el paisaje; el terreno y la vegetación conservan tonos naturales.
- La selección y el hover se resuelven por raycasting contra la superficie de cada región.

## Cámara

- Perspectiva isométrica con `PerspectiveCamera` FOV 35.
- Vista general: posición `(0, 69, 73)`, objetivo `(0, 1.5, 0)`.
- Vista de región: desplazamiento isométrico de 46 unidades sobre el objetivo de la región.
- Vista de ciudad: distancia de 17 a 21 unidades según el radio del distrito.
- `OrbitControls` con rotación deshabilitada, paneo limitado a ±54 en X/Z y zoom entre 16 y 138.
- Las transiciones de cámara usan GSAP con una curva Bézier cuadrática.

## Terreno

- Plano de 150 × 150 unidades con 96 a 190 segmentos según la calidad del dispositivo.
- Campo de altura procedural con colinas suaves, crestas, montañas periféricas, valles y una cuenca central.
- Altura base de 1.35; las montañas pueden superar 20 unidades en el borde del mapa.
- Cinco mesetas regionales aplanan el terreno y sus alrededores se mezclan gradualmente con el paisaje.
- Cada ciudad aplana una plataforma urbana con peso `0.92` y transición suave hacia el terreno natural.
- Los caminos de conexión suavizan y allanan un corredor de terreno antes de dibujar la cinta de la vía.
- El shader del terreno mezcla pasto, tierra seca, suelo y roca según altura y pendiente, y añade curvas de nivel sutiles.

## Caminos

- Seis enlaces conectan BUSINESS con las cuatro regiones y WEB con EXPERIENCE.
- Cada camino se muestrea con una curva Bézier y se conforma a la altura del terreno.
- Las cintas usan un material de tierra con un ligero acento del color de la región de destino.
- Al seleccionar una región, los caminos no vinculados reducen su intensidad.

## Vegetación

- Árboles y arbustos generados por código, sin modelos externos.
- Tres variantes de árbol (conífera, frondosa y alta) y una variante de arbusto; la calidad baja usa dos variantes de árbol. Todo se combina con `InstancedMesh`.
- La densidad se controla por perfil de calidad y se distribuye en bosques mediante ruido FBM.
- La vegetación evita cascos urbanos, corredores de caminos y pendientes pronunciadas.
- La iluminación diurna usa hemisférica, ambiente, sol direccional y relleno frío; las sombras se activan en calidad media y alta.

## Ciudades y edificios

- Cada región contiene dos ciudades: una capital en el centro de la región y un distrito secundario desplazado dentro del mismo contorno.
- Las ciudades se generan por código con una plaza central, calles en cruz, una ruta perimetral, aceras, parques y bloques de edificios deterministas por semilla.
- Los edificios genéricos usan cuatro variantes low-poly (casa, oficina, torre y cívico) combinadas con `InstancedMesh`; la densidad depende del perfil de calidad.
- Las regiones con proyectos colocan un edificio destacado por proyecto en un bloque junto a la plaza, con anillo y marcador flotante en el color regional.
- Las regiones vacías conservan una ciudad genérica con un edificio cívico, de modo que el territorio sigue habitado y preparado para futuros proyectos.
- Los edificios destacados de TracKing, Elizabeth Álvarez y Mayte Montero abren directamente la ficha del proyecto; los edificios genéricos seleccionan la ciudad.
- Al seleccionar una región se muestran las etiquetas de sus dos ciudades. Las etiquetas de proyecto se anclan sobre el edificio correspondiente.

## Exploración jerárquica

- La navegación avanza en cuatro niveles: territorio → región → ciudad → proyecto.
- Con una región activa, cada ciudad expone un disco invisible de selección y un anillo luminoso en el color regional.
- Al enfocar una ciudad, el anillo se intensifica, su etiqueta gana peso y se abre el panel del distrito con sus proyectos.
- El breadcrumb superior permite volver a cualquier nivel anterior; en móvil se desplaza horizontalmente.
- `Esc` sube un nivel: proyecto → ciudad (o región si no tiene ciudad), ciudad → región y región → territorio.
- El botón de cierre de la ficha de proyecto también vuelve al nivel inmediatamente superior.

## Niveles de detalle

- Los edificios destacados mantienen su geometría detallada a cualquier distancia para conservar su silueta; el LOD se aplica solo al detalle urbano genérico.
- El detalle urbano se ajusta según la distancia a la ciudad más cercana: alto hasta 34 unidades, medio hasta 82 y bajo por encima de 82.
- En el nivel bajo se ocultan las casas genéricas y los árboles de parque; las oficinas y torres se mantienen para conservar la lectura urbana.
- La niebla, las sombras y la densidad de vegetación se reducen en los perfiles de calidad inferiores.

## Navegación

- Manual: arrastrar, zoom y selección directa sobre regiones, ciudades o edificios destacados.
- Automática: botones de región, controles de región anterior/siguiente, panel de ciudad y enfoque de proyecto.
- Híbrida: teclado (flechas, `+`, `-`, `R`, `Esc`) y controles de interfaz.
- El panel de región lista sus distritos y proyectos; el panel de ciudad permite abrir la ficha de cada proyecto; la ficha vuelve al nivel anterior.

## Responsive y táctil

- Los paneles usan `min(380px, calc(100vw - 2rem))` y altura máxima relativa al viewport.
- El breadcrumb y los selectores de región se desplazan horizontalmente sin desbordar la pantalla.
- Los controles del mapa se compactan en móvil y conservan áreas táctiles de al menos 36 px.
- La navegación principal se pliega en un menú móvil y respeta el cierre con `Esc`.

## Accesibilidad

- Canvas con `role="application"` y descripción de uso.
- Selector de regiones con botones y `aria-pressed`.
- Breadcrumb con `aria-current="location"` y etiquetas claras.
- Lista de proyectos accesible para lectores de pantalla.
- Paneles con `role="dialog"`, `aria-modal`, cierre por `Esc` y foco visible.
- Respeto a `prefers-reduced-motion` en shaders, animaciones de entrada, cámara y CSS.

## Fuera de alcance por ahora

- No hay proyectos en MOBILE, SYSTEMS ni EXPERIENCE. Las regiones muestran el estado «Próximamente» y están preparadas para recibir datos sin cambios de código.
- La fase 09 del documento de evolución (pulido visual y lanzamiento) está completada; la publicación final depende de los datos personales definitivos y del acceso al hosting.
- Los datos personales de `src/data/site.ts` son provisionales.
