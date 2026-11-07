# DOCUMENTO MAESTRO 02
# EVOLUCIÓN VISUAL Y FUNCIONAL DEL PORTAFOLIO — REALISTIC DIGITAL TERRITORY

**Versión:** 1.0  
**Tipo de documento:** Especificación de mejora y evolución del proyecto  
**Proyecto:** Portafolio interactivo tridimensional  
**Documento relacionado:** DIGITAL_MAP_MASTER_SPEC.md

---

# 1. INTRODUCCIÓN

## 1.1. Descripción general

El objetivo de esta segunda etapa es transformar el mapa digital actualmente implementado en una experiencia tridimensional mucho más realista, detallada y visualmente atractiva.

La versión actual utiliza secciones geométricas con formas hexagonales para representar las diferentes categorías del portafolio. Estas secciones funcionan como territorios independientes dentro de un mapa digital.

Sin embargo, se busca evolucionar esta representación para que el mapa tenga una apariencia más cercana a un territorio geográfico real, compuesto por regiones irregulares, paisajes naturales, montañas, vegetación, carreteras y ciudades.

Cada región representará una categoría de desarrollo o servicio. Dentro de estas regiones existirán ciudades y construcciones que darán vida al territorio.

Los proyectos más importantes estarán representados mediante edificios o construcciones destacadas. Cada uno de estos edificios será un elemento interactivo que permitirá al visitante descubrir el proyecto correspondiente.

La experiencia debe transmitir la sensación de estar explorando un mundo digital construido para representar las capacidades, los servicios y los trabajos realizados por el desarrollador.

## 1.2. Concepto principal

**Realistic Digital Territory: un territorio digital interactivo que representa un portafolio profesional mediante regiones geográficas, paisajes naturales y ciudades tridimensionales.**

El mapa dejará de parecer un conjunto de figuras geométricas organizadas y comenzará a comportarse visualmente como un territorio.

El visitante deberá poder identificar:

- Dónde comienza y termina cada región.
- Qué tipo de desarrollo representa cada territorio.
- Qué elementos naturales componen el paisaje.
- Dónde se encuentran las ciudades.
- Qué edificios representan proyectos.
- Cómo explorar y seleccionar cada proyecto.

La experiencia debe combinar tres grandes elementos:

1. **Geografía:** territorios, fronteras, montañas, valles y elevaciones.
2. **Naturaleza:** vegetación, árboles, bosques, césped y elementos ambientales.
3. **Urbanismo:** ciudades, edificios, casas, calles y construcciones representativas de proyectos.

---

# 2. OBJETIVOS DE LA EVOLUCIÓN

## 2.1. Objetivo general

Rediseñar el mapa tridimensional existente para convertirlo en un entorno geográfico y urbano más realista, manteniendo su propósito de representar visualmente las categorías y proyectos del portafolio.

## 2.2. Objetivos específicos

- Reemplazar las secciones hexagonales por territorios de geometría irregular.
- Asignar un color único y reconocible a cada región.
- Diseñar un terreno general de apariencia natural y predominantemente verde.
- Incorporar montañas, elevaciones, valles, árboles y vegetación.
- Construir ciudades con edificios, casas, calles y espacios urbanos.
- Diferenciar visualmente los edificios que representan proyectos.
- Permitir seleccionar edificios y consultar información de sus proyectos.
- Mejorar la integración visual entre regiones, naturaleza y ciudades.
- Mantener una experiencia interactiva fluida.
- Evitar que el mapa termine pareciendo una colección de modelos 3D independientes.

---

# 3. REDISEÑO DE LAS REGIONES GEOGRÁFICAS

## 3.1. Eliminar las formas hexagonales

La primera modificación importante consiste en eliminar la apariencia hexagonal de las secciones actuales.

Las regiones deben adquirir formas similares a territorios de un mapa geográfico.

No deben ser círculos, cuadrados, hexágonos ni polígonos regulares.

Se busca conseguir contornos irregulares, con:

- Fronteras curvas.
- Entrantes y salientes.
- Bordes asimétricos.
- Variaciones en el ancho de las regiones.
- Límites que parezcan diseñados geográficamente y no generados mediante una distribución geométrica repetitiva.

La inspiración debe provenir de mapas geográficos, mapas políticos y representaciones cartográficas de territorios.

**Importante:** las regiones no deben copiar fronteras de países reales. Se deben diseñar territorios ficticios, creados específicamente para el portafolio.

## 3.2. Construcción de los territorios

Cada región debe tener una geometría propia.

La geometría debe permitir:

- Representar límites irregulares.
- Tener superficies independientes.
- Incorporar pequeñas variaciones de elevación.
- Aplicar materiales y colores individuales.
- Detectar interacciones mediante Raycasting.
- Resaltar una región cuando el usuario pase el cursor sobre ella.
- Seleccionar una región sin afectar las demás.

Se recomienda utilizar geometrías poligonales personalizadas mediante `THREE.ShapeGeometry`, `THREE.ExtrudeGeometry` o `BufferGeometry`, dependiendo de la complejidad y el relieve requerido.

Para una solución más avanzada, se puede utilizar un sistema de polígonos triangulados que permita deformar el terreno y mantener las fronteras correctamente definidas.

## 3.3. Distribución territorial

Las regiones deben estar conectadas dentro de un mismo territorio general.

No deben parecer islas geométricas separadas ni plataformas flotantes.

Se recomienda que compartan una base geográfica común, sobre la cual se dibujen o construyan sus fronteras.

Los límites entre regiones deben ser visibles, pero integrados naturalmente al paisaje.

Se pueden representar mediante:

- Líneas topográficas.
- Diferencias sutiles de color.
- Senderos o caminos fronterizos.
- Cambios ligeros de elevación.
- Bordes cartográficos iluminados de manera discreta.

No se deben utilizar muros altos para separar las regiones.

## 3.4. Identidad cromática de las regiones

Cada región debe tener un color principal exclusivo.

La diferenciación cromática debe ser suficientemente evidente para que el visitante entienda que está explorando territorios distintos.

Los colores deben integrarse con el entorno natural. No deben parecer superficies de plástico ni bloques sólidos de color.

Se recomienda utilizar materiales con variaciones de tonalidad, texturas y detalles ambientales.

### Paleta territorial propuesta

| Región | Categoría | Color principal | Identidad visual |
|---|---|---|---|
| Región 01 | Desarrollo web | Verde azulado | Tecnología y plataformas web |
| Región 02 | Aplicaciones móviles | Azul | Conectividad y movilidad |
| Región 03 | Sistemas digitales | Violeta | Infraestructura y procesos |
| Región 04 | Experiencias digitales | Naranja | Creatividad e innovación |
| Región 05 | Soluciones empresariales | Dorado | Organización y productividad |

Los colores anteriores son una propuesta inicial y pueden ajustarse durante el diseño visual.

### Aplicación del color

El color principal debe utilizarse en:

- La superficie de identificación de la región.
- Los límites territoriales.
- Los indicadores de selección.
- Los elementos de interfaz relacionados con la región.
- Algunos detalles arquitectónicos o ambientales.

Sin embargo, no significa que todo el terreno deba pintarse de un solo color.

El paisaje debe seguir teniendo una apariencia natural. Los colores regionales funcionarán como una identidad visual superpuesta al entorno.

Por ejemplo, una región identificada con azul puede tener césped, árboles y montañas verdes, mientras que sus fronteras y determinados detalles cartográficos utilizan tonos azules.

---

# 4. REDISEÑO DEL TERRENO NATURAL

## 4.1. Concepto general

El terreno debe dejar de parecer una superficie artificial y convertirse en un paisaje natural tridimensional.

La nueva superficie debe representar un territorio con vegetación, elevaciones, zonas planas, montañas, valles y espacios urbanos.

La apariencia general debe ser verde y natural.

El objetivo es que el visitante tenga la sensación de observar un territorio construido en miniatura desde una perspectiva elevada.

Se debe evitar una apariencia excesivamente caricaturesca o infantil.

La dirección visual recomendada es un paisaje tridimensional estilizado-realista: suficiente detalle para transmitir realismo, pero sin intentar reproducir cada elemento del mundo físico.

## 4.2. Características del terreno

El terreno debe incorporar:

- Superficies verdes.
- Variaciones naturales de altura.
- Pequeñas colinas.
- Montañas de diferentes tamaños.
- Valles.
- Zonas boscosas.
- Espacios despejados.
- Áreas urbanas.
- Transiciones naturales entre diferentes regiones.

La superficie no debe ser completamente plana.

Se recomienda utilizar una geometría de terreno subdividida que permita modificar la altura de sus vértices.

El relieve debe estar controlado para no dificultar la construcción de las ciudades ni impedir la interacción con los proyectos.

## 4.3. Texturas del terreno

Se deben incorporar materiales que permitan diferenciar visualmente las superficies.

| Superficie | Apariencia |
|---|---|
| Césped | Verde natural con variaciones de tonalidad |
| Tierra | Marrón y verde oscuro |
| Montañas | Piedra, roca y vegetación |
| Caminos rurales | Tierra compactada o grava |
| Caminos urbanos | Asfalto |
| Zonas despejadas | Hierba corta |
| Bosques | Vegetación más densa |

Las texturas deben integrarse con la geometría y no utilizarse como sustituto de un terreno tridimensional.

Se recomienda trabajar con texturas optimizadas y materiales PBR cuando aporten una mejora visual real.

## 4.4. Montañas y elevaciones

El mapa debe tener montañas distribuidas estratégicamente.

No se busca llenar todo el escenario de montañas.

Se deben utilizar como elementos geográficos que aporten profundidad y permitan diferenciar visualmente las zonas.

Características:

- Montañas de diferentes alturas.
- Formas irregulares.
- Superficies rocosas.
- Algunas zonas con vegetación.
- Pendientes naturales.
- Transiciones hacia colinas y valles.

Las montañas deben ubicarse de manera que no oculten las ciudades ni los edificios representativos.

Se recomienda mantener las áreas urbanas en superficies relativamente estables.

## 4.5. Vegetación y árboles

El terreno debe tener vegetación distribuida de forma natural.

No se deben colocar árboles siguiendo patrones perfectamente simétricos.

Se recomienda incorporar:

- Árboles individuales.
- Pequeños grupos de árboles.
- Bosques.
- Arbustos.
- Vegetación baja.
- Zonas de césped.
- Vegetación cercana a montañas y caminos.

La distribución debe considerar densidad y ubicación.

Por ejemplo:

- Las zonas montañosas pueden tener vegetación irregular.
- Las áreas rurales pueden tener árboles dispersos.
- Las ciudades deben tener parques y árboles urbanos.
- Los alrededores de las carreteras pueden tener vegetación controlada.
- Los espacios urbanos principales deben permanecer despejados.

### Optimización

No se deben crear miles de objetos independientes si se puede conseguir el mismo resultado mediante instancias.

Se recomienda utilizar:

- `THREE.InstancedMesh` para árboles repetidos.
- Geometrías compartidas.
- Materiales reutilizables.
- Niveles de detalle (LOD).
- Distribución procedural controlada.

La vegetación debe aportar profundidad sin comprometer el rendimiento.

---

# 5. CONSTRUCCIÓN DE CIUDADES

## 5.1. Concepto general

Las ciudades serán uno de los componentes más importantes de esta evolución.

Cada territorio debe contener una o varias zonas urbanas que representen visualmente el trabajo desarrollado en la categoría correspondiente.

Estas ciudades deben incluir construcciones reconocibles, calles y una distribución urbana coherente.

El objetivo es que el mapa no parezca simplemente un paisaje con edificios colocados aleatoriamente.

Debe existir una organización visual.

## 5.2. Elementos urbanos

Cada ciudad podrá incorporar:

- Edificios pequeños y grandes.
- Casas.
- Edificios comerciales.
- Construcciones modernas.
- Oficinas.
- Torres.
- Calles principales.
- Calles secundarias.
- Cruces.
- Aceras.
- Plazas.
- Parques.
- Zonas residenciales.

La arquitectura debe mantener un lenguaje visual coherente.

No se necesita modelar cada construcción con un nivel de detalle extremo. Se busca una representación tridimensional convincente, donde los edificios tengan volumen, ventanas, techos, puertas y elementos arquitectónicos suficientes para diferenciarlos.

## 5.3. Organización de las ciudades

Se recomienda crear una estructura urbana que combine:

**Centro urbano:**

- Edificios más altos.
- Construcciones representativas.
- Calles principales.
- Mayor densidad de edificios.
- Proyectos destacados.

**Zonas residenciales:**

- Casas.
- Edificios pequeños.
- Calles secundarias.
- Espacios verdes.

**Zonas comerciales:**

- Construcciones de mayor tamaño.
- Locales.
- Edificios modernos.
- Espacios de circulación.

**Zonas periféricas:**

- Construcciones dispersas.
- Vegetación.
- Caminos de conexión.
- Transiciones hacia el paisaje natural.

La distribución debe adaptarse al tamaño y la forma de cada territorio.

## 5.4. Calles y carreteras

Las ciudades deben tener una red de calles visible y funcional desde el punto de vista visual.

Se deben diferenciar:

- Carreteras principales que conectan ciudades o regiones.
- Calles secundarias que organizan los barrios.
- Calles residenciales.
- Senderos peatonales.
- Caminos rurales.

Las calles deben seguir recorridos coherentes y adaptarse al terreno.

No deben atravesar edificios, montañas ni elementos importantes.

Se recomienda construirlas utilizando geometrías basadas en curvas y trayectorias, con materiales diferenciados según su función.

Las conexiones entre regiones deben transmitir la idea de que el mapa es un territorio unificado.

---

# 6. EDIFICIOS REPRESENTATIVOS DE LOS PROYECTOS

## 6.1. Concepto principal

Esta es una de las modificaciones funcionales más importantes.

Los proyectos del portafolio deben dejar de representarse únicamente mediante tarjetas o marcadores tradicionales.

Cada proyecto destacado tendrá una construcción propia dentro de una ciudad.

**Cada edificio destacado representa un proyecto real del portafolio.**

El visitante podrá recorrer la ciudad, identificar las construcciones destacadas y seleccionarlas para descubrir la información del proyecto.

Por ejemplo:

- Una construcción moderna puede representar una página web.
- Una torre tecnológica puede representar un sistema digital.
- Un edificio comercial puede representar una plataforma empresarial.
- Una construcción de diseño particular puede representar una aplicación o experiencia digital.

La relación entre el edificio y el proyecto debe ser clara.

No se debe utilizar una construcción destacada sin que exista un proyecto asociado.

## 6.2. Diferenciación visual

Los edificios que representan proyectos deben distinguirse del resto de las construcciones.

Se pueden utilizar los siguientes recursos:

- Iluminación propia.
- Un color de acento.
- Un contorno luminoso.
- Una base o plataforma discreta.
- Un indicador flotante.
- Una animación suave.
- Una pequeña señal de interacción.

El objetivo es que el visitante pueda reconocer que ese edificio es importante y que puede seleccionarlo.

No todos los edificios deben tener estos efectos.

La diferenciación debe reservarse para los proyectos reales.

## 6.3. Identidad visual de cada proyecto

Cada edificio destacado debe tener una relación visual con el proyecto que representa.

Se recomienda que el diseño del edificio considere:

- Categoría del proyecto.
- Tipo de producto digital.
- Complejidad.
- Importancia dentro del portafolio.
- Identidad visual del proyecto.

No todos los edificios deben ser iguales.

Puede haber construcciones modernas, casas, edificios comerciales, torres o estructuras especiales.

Sin embargo, deben mantener una estética arquitectónica coherente con el resto de la ciudad.

## 6.4. Interacción con los edificios

Cuando el usuario pase el cursor sobre un edificio representativo:

1. El edificio debe mostrar una respuesta visual.
2. Debe aumentar ligeramente su iluminación.
3. Puede elevarse sutilmente o activar un contorno.
4. Debe aparecer un indicador con el nombre del proyecto.
5. El cursor debe indicar que el elemento es interactivo.

Cuando el usuario haga clic:

1. Se debe identificar el proyecto asociado.
2. La cámara debe acercarse al edificio.
3. El edificio debe convertirse en el punto principal de atención.
4. Se debe abrir un panel con la información del proyecto.
5. Se debe permitir acceder a los enlaces disponibles.

La interacción debe ser clara y fluida.

No se debe abrir directamente una página externa al hacer clic en el edificio. Primero se debe mostrar la información del proyecto dentro del portafolio.

## 6.5. Panel de información del proyecto

Al seleccionar un edificio, se debe mostrar un panel con información organizada.

El panel debe contener:

- Nombre del proyecto.
- Imagen o vista previa.
- Descripción.
- Problema que resuelve.
- Solución desarrollada.
- Tecnologías utilizadas.
- Categoría.
- Enlace al proyecto.
- Enlace al repositorio, si está disponible.

Se recomienda que el panel aparezca como una interfaz superpuesta al mapa, sin destruir la experiencia tridimensional.

El usuario debe poder cerrar el panel y regresar a la exploración.

## 6.6. Relación entre edificios y datos

Los edificios deben estar vinculados a los proyectos mediante identificadores.

No se debe programar cada edificio con información escrita directamente dentro de sus componentes.

Se recomienda mantener una estructura de datos independiente.

Ejemplo:

```ts
interface ProjectBuilding {
  id: string;
  projectId: string;
  regionId: string;

  position: {
    x: number;
    y: number;
    z: number;
  };

  scale: {
    x: number;
    y: number;
    z: number;
  };

  buildingType:
    | 'office'
    | 'commercial'
    | 'residential'
    | 'tower'
    | 'special';

  highlightColor: string;
  isFeatured: boolean;
}
```

El edificio representa visualmente un proyecto, pero la información del proyecto debe mantenerse en la entidad `Project`.

Esto permite cambiar la ubicación, apariencia o modelo de un edificio sin duplicar la información del proyecto.

---

# 7. EXPERIENCIA DE EXPLORACIÓN

## 7.1. Vista general

Al ingresar al portafolio, el visitante debe observar el territorio completo desde una perspectiva elevada.

La cámara debe permitir reconocer:

- Las regiones.
- Los colores territoriales.
- Las montañas.
- Los bosques.
- Las ciudades.
- Las carreteras.
- Los edificios destacados.

La primera impresión debe ser la de un territorio tridimensional con profundidad y múltiples elementos por descubrir.

## 7.2. Exploración de regiones

Al seleccionar una región:

1. La cámara se aproxima.
2. La región seleccionada adquiere mayor protagonismo.
3. Las demás regiones reducen ligeramente su intensidad visual.
4. Se muestra el nombre de la región.
5. Aparece una breve descripción.
6. Se permite explorar la ciudad y sus proyectos.

No se debe ocultar completamente el resto del mapa.

La conexión geográfica debe mantenerse.

## 7.3. Exploración de ciudades

Dentro de una región, el usuario podrá acercarse a las ciudades.

La cámara debe permitir observar las construcciones sin perder la orientación.

Se recomienda establecer distintos niveles de zoom:

- Vista territorial.
- Vista regional.
- Vista urbana.
- Vista de proyecto.

Cada nivel debe tener una distancia de cámara y un nivel de detalle apropiados.

## 7.4. Selección de proyectos

Cuando el usuario seleccione un edificio, la cámara debe acercarse y enfocar la construcción.

Se debe utilizar una transición suave.

El movimiento debe sentirse intencional, no brusco.

La información del proyecto debe aparecer sin interrumpir completamente la visualización del territorio.

## 7.5. Navegación de regreso

El usuario debe poder regresar fácilmente a:

- La ciudad.
- La región.
- La vista general del territorio.

Se recomienda incorporar un sistema de navegación contextual o breadcrumb:

`Territorio > Región > Ciudad > Proyecto`

Cada elemento debe permitir regresar a su nivel correspondiente.

---

# 8. DIRECCIÓN ARTÍSTICA Y REALISMO VISUAL

## 8.1. Estilo visual

La dirección artística recomendada es un **diorama geográfico tridimensional de estilo estilizado-realista**.

Esto significa combinar:

- Terreno natural.
- Arquitectura reconocible.
- Vegetación.
- Iluminación ambiental.
- Materiales con profundidad.
- Colores regionales.
- Detalles tecnológicos discretos.

El resultado no debe parecer un videojuego infantil ni una simulación arquitectónica excesivamente técnica.

Debe sentirse como una experiencia digital profesional, sofisticada y cuidadosamente diseñada.

## 8.2. Iluminación

Se recomienda incorporar:

- Iluminación ambiental.
- Luz direccional principal.
- Sombras suaves.
- Oclusión ambiental cuando sea viable.
- Iluminación de edificios destacados.
- Efectos de selección controlados.

La iluminación debe ayudar a distinguir los volúmenes y generar profundidad.

No se recomienda utilizar Bloom excesivo ni hacer que todos los edificios emitan luz.

## 8.3. Cámara y perspectiva

Se recomienda conservar una cámara en perspectiva elevada, con inclinación suficiente para observar tanto el terreno como los edificios.

La cámara debe permitir:

- Desplazamiento horizontal.
- Zoom progresivo.
- Rotación controlada si el diseño lo requiere.
- Enfoque automático de regiones.
- Enfoque de ciudades.
- Enfoque de proyectos.

Se debe evitar que la cámara atraviese el terreno, las montañas o los edificios.

## 8.4. Nivel de detalle

El nivel de detalle debe variar según la distancia.

Desde la vista general, el visitante debe reconocer el paisaje y las ciudades.

Al acercarse, deben aparecer progresivamente los detalles arquitectónicos, la vegetación y los elementos urbanos.

No se debe renderizar el máximo detalle de todos los objetos permanentemente.

---

# 9. TECNOLOGÍAS Y HERRAMIENTAS

La evolución debe aprovechar el stack tecnológico del proyecto existente, evitando reemplazar tecnologías sin una justificación técnica.

## 9.1. Vue 3

Responsabilidad:

- Interfaz del portafolio.
- Componentes de información.
- Paneles de proyectos.
- Navegación.
- Estados de selección.
- Comunicación entre interfaz y escena 3D.

Se debe mantener la separación entre la interfaz y el motor gráfico.

## 9.2. TypeScript

Responsabilidad:

- Modelos de regiones.
- Modelos de edificios.
- Modelos de proyectos.
- Configuración de ciudades.
- Posiciones y escalas.
- Estados de interacción.
- Tipado de eventos.

## 9.3. Three.js

Será responsable de representar el mundo tridimensional.

Tecnologías y recursos recomendados:

- `BufferGeometry`: terreno y superficies personalizadas.
- `ShapeGeometry`: regiones de contorno irregular cuando resulte adecuado.
- `ExtrudeGeometry`: volúmenes y relieves territoriales.
- `MeshStandardMaterial`: materiales físicos.
- `MeshPhysicalMaterial`: materiales específicos que requieran mayor realismo.
- `InstancedMesh`: vegetación y edificios repetidos.
- `Raycaster`: selección de regiones y edificios.
- `TextureLoader`: texturas.
- `LOD`: niveles de detalle.
- `Fog`: profundidad ambiental.
- `WebGLRenderer`: renderizado.

## 9.4. GSAP

Responsabilidad:

- Transiciones de cámara.
- Animaciones de selección.
- Entrada de paneles.
- Cambios de estado.
- Animaciones ambientales.
- Transiciones entre niveles de exploración.

## 9.5. GLSL

Los shaders podrán utilizarse para:

- Variaciones del terreno.
- Transiciones de color.
- Límites territoriales.
- Efectos de selección.
- Iluminación especial.
- Detalles ambientales.

Los shaders deben complementar la geometría y los materiales, no convertirse en una solución innecesariamente compleja para todos los elementos.

## 9.6. Herramientas complementarias

Se podrán utilizar herramientas externas para crear o conseguir recursos:

- Blender para modelado y optimización de edificios.
- Recursos 3D en formato GLTF/GLB.
- Texturas PBR.
- Herramientas de creación de terrenos.
- Recursos de vegetación optimizados.

Los recursos externos deben tener licencias compatibles con el uso del portafolio.

Se debe priorizar la reutilización de modelos y materiales.

---

# 10. ARQUITECTURA TÉCNICA PROPUESTA

La evolución debe realizarse de manera modular.

Se recomienda ampliar la arquitectura existente, sin reemplazar componentes funcionales innecesariamente.

Una posible organización es:

```text
src/
├── components/
│   ├── map/
│   │   ├── DigitalMap.vue
│   │   ├── MapCanvas.vue
│   │   ├── MapControls.vue
│   │   ├── MapRegions.vue
│   │   ├── MapTerrain.vue
│   │   └── MapNavigation.vue
│   │
│   ├── environment/
│   │   ├── VegetationLayer.vue
│   │   ├── MountainsLayer.vue
│   │   └── EnvironmentLayer.vue
│   │
│   ├── cities/
│   │   ├── CityLayer.vue
│   │   ├── BuildingsLayer.vue
│   │   ├── RoadsLayer.vue
│   │   └── UrbanDetails.vue
│   │
│   ├── projects/
│   │   ├── ProjectBuilding.vue
│   │   ├── ProjectInformation.vue
│   │   └── ProjectGallery.vue
│   │
│   └── interface/
│       ├── RegionInformation.vue
│       ├── ProjectPanel.vue
│       └── NavigationBreadcrumb.vue
│
├── engine/
│   ├── core/
│   │   ├── SceneManager.ts
│   │   ├── CameraManager.ts
│   │   └── RenderManager.ts
│   │
│   ├── terrain/
│   │   ├── TerrainGeometry.ts
│   │   ├── TerrainMaterial.ts
│   │   └── TerrainGenerator.ts
│   │
│   ├── regions/
│   │   ├── RegionGeometry.ts
│   │   ├── RegionMaterial.ts
│   │   └── RegionManager.ts
│   │
│   ├── environment/
│   │   ├── VegetationManager.ts
│   │   ├── TreeGenerator.ts
│   │   └── MountainGenerator.ts
│   │
│   ├── cities/
│   │   ├── CityManager.ts
│   │   ├── BuildingManager.ts
│   │   └── RoadManager.ts
│   │
│   └── interaction/
│       ├── RaycastManager.ts
│       ├── SelectionManager.ts
│       └── ProjectInteraction.ts
│
├── data/
│   ├── regions.ts
│   ├── cities.ts
│   ├── buildings.ts
│   └── projects.ts
│
└── views/
    └── ProjectsView.vue
```

Esta estructura es una referencia. Antes de crear carpetas o mover componentes, se debe revisar la estructura real del repositorio y reutilizar lo que ya exista.

---

# 11. MODELOS DE DATOS

## 11.1. Región

Cada región debe tener información geográfica y visual.

```ts
interface MapRegion {
  id: string;
  name: string;
  description: string;

  color: string;

  boundary: Array<{
    x: number;
    z: number;
  }>;

  cityIds: string[];
  projectIds: string[];
}
```

La propiedad `boundary` representa el contorno de la región mediante puntos ordenados.

La geometría final deberá interpolar y triangular estos puntos cuando sea necesario.

## 11.2. Ciudad

```ts
interface City {
  id: string;
  name: string;
  regionId: string;

  position: {
    x: number;
    y: number;
    z: number;
  };

  buildingIds: string[];
  roadIds: string[];
}
```

## 11.3. Edificio

```ts
interface Building {
  id: string;
  cityId: string;

  position: {
    x: number;
    y: number;
    z: number;
  };

  buildingType:
    | 'office'
    | 'commercial'
    | 'residential'
    | 'tower'
    | 'special';

  modelPath?: string;
  scale: number;

  projectId?: string;
  isFeatured: boolean;
}
```

## 11.4. Proyecto

Se debe conservar la entidad `Project` del primer documento maestro y ampliarla solamente cuando sea necesario.

```ts
interface Project {
  id: string;
  title: string;
  category: string;

  description: string;
  problem?: string;
  solution?: string;

  technologies: string[];

  image: string;
  gallery?: string[];

  liveUrl?: string;
  githubUrl?: string;

  regionId: string;
  buildingId?: string;

  featured: boolean;
}
```

**Regla fundamental:** un proyecto puede existir sin un edificio destacado, pero un edificio destacado debe estar asociado a un proyecto existente.

---

# 12. SISTEMA DE INTERACCIÓN

## 12.1. Identificación de objetos

El sistema de interacción debe reconocer diferentes tipos de objetos:

- Región.
- Ciudad.
- Edificio.
- Proyecto.
- Elemento ambiental no interactivo.

Se recomienda utilizar metadatos en `userData` de Three.js para identificar los objetos.

Ejemplo:

```ts
building.userData = {
  type: 'project-building',
  projectId: 'project-001',
  regionId: 'region-web'
};
```

## 12.2. Prioridad de selección

Cuando existan varios objetos cercanos, el sistema debe priorizar el objeto interactivo más específico.

Orden recomendado:

1. Edificio representativo.
2. Región.
3. Ciudad, si se implementa selección urbana.
4. Terreno.

Esto evita que el clic sobre un edificio termine seleccionando accidentalmente la región que lo contiene.

## 12.3. Estados de interacción

Cada objeto interactivo debe manejar estados definidos:

- Normal.
- Hover.
- Seleccionado.
- Deshabilitado.
- En transición.

La selección debe gestionarse desde un sistema centralizado y no mediante múltiples eventos independientes que puedan entrar en conflicto.

---

# 13. RENDIMIENTO Y OPTIMIZACIÓN

La mejora visual no debe provocar que el mapa sea lento o difícil de utilizar.

El aumento de elementos tridimensionales exige una estrategia de optimización desde el principio.

## 13.1. Vegetación

- Utilizar `InstancedMesh`.
- Compartir geometrías.
- Compartir materiales.
- Limitar la densidad de árboles.
- Utilizar modelos simplificados a larga distancia.

## 13.2. Edificios

- Reutilizar modelos base.
- Utilizar variaciones de escala y materiales.
- Evitar geometrías innecesariamente complejas.
- Cargar modelos bajo demanda cuando sea conveniente.
- Utilizar LOD para edificios alejados.

## 13.3. Terreno

- Controlar la resolución de la geometría.
- Evitar subdivisiones innecesarias.
- Compartir recursos.
- Evitar recalcular geometrías constantemente.

## 13.4. Recursos externos

- Preferir GLB/GLTF optimizados.
- Utilizar texturas WebP o formatos comprimidos cuando corresponda.
- Comprimir texturas y modelos.
- Evitar archivos excesivamente grandes.
- Liberar recursos cuando dejen de utilizarse.

## 13.5. Rendimiento esperado

Objetivo de referencia:

- Mantener una navegación fluida en equipos de escritorio compatibles.
- Buscar aproximadamente 60 FPS en condiciones objetivo.
- Evitar bloqueos durante las transiciones.
- Controlar el uso de memoria.
- Reducir efectos gráficos en dispositivos menos potentes.

Los objetivos deben validarse mediante pruebas reales en distintos equipos.

---

# 14. RESPONSIVE Y EXPERIENCIA MÓVIL

El mapa debe funcionar en pantallas de escritorio, tabletas y dispositivos móviles.

Los controles deben adaptarse al dispositivo.

**Escritorio:**

- Arrastrar para desplazarse.
- Scroll para zoom.
- Hover para identificar edificios.
- Clic para seleccionar.

**Móvil:**

- Un dedo para desplazarse.
- Dos dedos para zoom.
- Toque para seleccionar.
- Controles visibles para regresar y cambiar de nivel.

En dispositivos táctiles no se debe depender del hover.

Los edificios representativos deben conservar un indicador visual que permita reconocerlos sin necesidad de pasar el cursor.

El panel de proyectos debe adaptarse a pantallas pequeñas.

---

# 15. FASES DE IMPLEMENTACIÓN

La evolución se debe realizar por etapas. No se recomienda implementar terreno, ciudades, vegetación, edificios y efectos simultáneamente.

Cada fase debe probarse y aprobarse antes de continuar.

## FASE 01 — Auditoría de la implementación actual

**Objetivo:** comprender cómo está construido el mapa existente antes de modificarlo.

Actividades:

- Revisar la estructura del proyecto.
- Identificar el sistema de regiones actual.
- Identificar cómo se generan los hexágonos.
- Revisar el terreno existente.
- Revisar la cámara.
- Revisar los controles.
- Revisar el sistema de Raycasting.
- Identificar los componentes reutilizables.
- Identificar problemas de rendimiento.
- Documentar dependencias y relaciones entre componentes.

Criterio de aceptación:

Se debe tener un diagnóstico técnico claro y una estrategia de modificación que evite reconstruir innecesariamente lo que ya funciona.

## FASE 02 — Rediseño geográfico de las regiones

**Objetivo:** sustituir los territorios hexagonales por regiones irregulares.

Actividades:

- Diseñar los contornos.
- Definir dimensiones.
- Definir coordenadas.
- Crear geometrías independientes.
- Configurar colores únicos.
- Construir fronteras.
- Integrar las regiones al terreno común.
- Actualizar el sistema de selección.

Criterio de aceptación:

Las regiones deben tener siluetas diferentes, reconocibles y correctamente conectadas.

No deben existir restos visuales de la distribución hexagonal anterior.

## FASE 03 — Reconstrucción del terreno natural

**Objetivo:** transformar la superficie actual en un paisaje verde tridimensional.

Actividades:

- Crear la geometría del terreno.
- Incorporar variaciones de altura.
- Crear colinas.
- Crear montañas.
- Incorporar valles.
- Aplicar materiales naturales.
- Configurar iluminación y sombras.
- Ajustar la integración con las regiones.

Criterio de aceptación:

El terreno debe transmitir una apariencia natural y presentar profundidad geográfica.

## FASE 04 — Vegetación y ambiente

**Objetivo:** incorporar vegetación que aporte realismo y profundidad.

Actividades:

- Crear o integrar modelos de árboles.
- Incorporar arbustos.
- Distribuir bosques.
- Añadir vegetación dispersa.
- Incorporar parques.
- Implementar instanciación.
- Ajustar densidad y distribución.

Criterio de aceptación:

La vegetación debe integrarse naturalmente y no debe parecer una repetición mecánica de objetos.

## FASE 05 — Construcción de ciudades

**Objetivo:** crear entornos urbanos dentro de las regiones.

Actividades:

- Definir ubicaciones de ciudades.
- Construir edificios.
- Incorporar casas.
- Crear calles.
- Crear carreteras.
- Añadir aceras y plazas.
- Incorporar parques urbanos.
- Ajustar la distribución de construcciones.

Criterio de aceptación:

Cada ciudad debe tener una estructura urbana reconocible y una integración adecuada con el paisaje.

## FASE 06 — Edificios representativos de proyectos

**Objetivo:** convertir determinados edificios en puntos de acceso a proyectos.

Actividades:

- Definir qué proyectos tendrán representación física.
- Diseñar edificios destacados.
- Asociar edificios con proyectos.
- Incorporar indicadores visuales.
- Implementar estados hover y seleccionado.
- Implementar selección mediante Raycasting.
- Crear el panel de información.
- Implementar transiciones de cámara.

Criterio de aceptación:

Cada edificio destacado debe representar un proyecto real y permitir acceder a su información.

## FASE 07 — Experiencia de exploración

**Objetivo:** integrar todos los elementos en una navegación coherente.

Actividades:

- Configurar vista general.
- Configurar vista regional.
- Configurar vista urbana.
- Configurar vista de proyecto.
- Implementar navegación contextual.
- Implementar transiciones.
- Incorporar controles de regreso.
- Ajustar la experiencia de exploración.

Criterio de aceptación:

El visitante debe poder explorar el territorio y descubrir proyectos sin perder la orientación.

## FASE 08 — Optimización y responsive

**Objetivo:** garantizar una experiencia estable.

Actividades:

- Optimizar geometrías.
- Optimizar modelos.
- Implementar LOD.
- Ajustar sombras.
- Optimizar vegetación.
- Implementar controles táctiles.
- Ajustar paneles móviles.
- Probar distintos dispositivos.

Criterio de aceptación:

La experiencia debe ser fluida, adaptable y estable.

## FASE 09 — Pulido visual y lanzamiento

**Objetivo:** conseguir una presentación profesional.

Actividades:

- Ajustar iluminación.
- Corregir materiales.
- Revisar paleta de colores.
- Ajustar cámara.
- Revisar animaciones.
- Corregir errores visuales.
- Validar interacciones.
- Revisar tiempos de carga.
- Realizar pruebas finales.

Criterio de aceptación:

El mapa debe presentar una identidad visual coherente, funcionar correctamente y representar de forma clara los proyectos del portafolio.

---

# 16. REQUISITOS FUNCIONALES

| Código | Requisito |
|---|---|
| RF-01 | Eliminar las regiones hexagonales actuales. |
| RF-02 | Representar regiones mediante contornos geográficos irregulares. |
| RF-03 | Asignar un color exclusivo a cada región. |
| RF-04 | Mantener las regiones integradas en un territorio común. |
| RF-05 | Representar un terreno verde con relieve. |
| RF-06 | Incorporar montañas, colinas y valles. |
| RF-07 | Incorporar vegetación distribuida naturalmente. |
| RF-08 | Construir ciudades tridimensionales. |
| RF-09 | Incorporar edificios, casas y calles. |
| RF-10 | Identificar edificios que representan proyectos. |
| RF-11 | Permitir seleccionar los edificios destacados. |
| RF-12 | Mostrar información del proyecto seleccionado. |
| RF-13 | Permitir navegar entre territorio, región, ciudad y proyecto. |
| RF-14 | Mantener controles de navegación en escritorio y móvil. |
| RF-15 | Optimizar los recursos tridimensionales. |

---

# 17. REQUISITOS NO FUNCIONALES

- **RNF-01:** La experiencia debe mantener una identidad visual profesional.
- **RNF-02:** El terreno debe presentar una apariencia natural.
- **RNF-03:** Las regiones deben distinguirse claramente.
- **RNF-04:** Los edificios destacados deben ser reconocibles.
- **RNF-05:** Las transiciones deben ser suaves.
- **RNF-06:** La navegación debe ser intuitiva.
- **RNF-07:** El mapa debe adaptarse a distintos tamaños de pantalla.
- **RNF-08:** Los recursos deben estar optimizados.
- **RNF-09:** El motor gráfico debe estar separado de la interfaz.
- **RNF-10:** Los proyectos deben administrarse mediante datos independientes.
- **RNF-11:** Debe existir una alternativa de navegación para usuarios que no puedan utilizar controles 3D convencionales.
- **RNF-12:** Debe respetarse la preferencia de movimiento reducido cuando corresponda.

---

# 18. REGLAS Y RESTRICCIONES DEL DESARROLLO

Las siguientes reglas deben respetarse durante toda la implementación.

1. No conservar las formas hexagonales como diseño principal de las regiones.
2. No utilizar polígonos regulares para representar todos los territorios.
3. No pintar todo el terreno con los colores de las regiones.
4. No utilizar árboles repetidos en patrones perfectamente simétricos.
5. No colocar edificios de manera aleatoria.
6. No construir ciudades sin una organización urbana.
7. No destacar edificios que no tengan un proyecto asociado.
8. No abrir enlaces externos directamente al seleccionar un edificio.
9. No implementar todos los efectos gráficos antes de tener una geometría funcional.
10. No sacrificar el rendimiento para conseguir efectos visuales innecesarios.
11. No duplicar información de proyectos dentro de los modelos 3D.
12. No reemplazar componentes funcionales sin justificarlo.
13. No modificar el backend: esta evolución debe concentrarse en el frontend y en los recursos gráficos, salvo que posteriormente se identifique una necesidad y se autorice expresamente.
14. No implementar todas las fases en una sola modificación.
15. No avanzar a la siguiente fase sin validar la anterior.

---

# 19. RESULTADO FINAL ESPERADO

Al finalizar esta evolución, el portafolio debe presentar un territorio digital tridimensional compuesto por regiones geográficas irregulares y claramente diferenciadas por colores.

El terreno debe tener una apariencia natural, con vegetación, árboles, montañas, colinas y valles.

Cada región debe contener ciudades con edificios, casas, calles y espacios urbanos.

Dentro de esas ciudades existirán edificios destacados que representarán proyectos reales del portafolio.

El visitante podrá recorrer el territorio, acercarse a una región, explorar sus ciudades y seleccionar construcciones representativas para descubrir los proyectos.

La experiencia debe transmitir profesionalismo, creatividad, capacidad técnica y atención al detalle.

El objetivo no es simplemente mostrar proyectos mediante una interfaz diferente.

El objetivo es convertir el portafolio en una experiencia de exploración visual donde cada territorio represente una capacidad profesional y cada edificio destacado represente un trabajo realizado.

---

# 20. REFERENCIAS VISUALES Y TÉCNICAS

Las referencias deben utilizarse como orientación y no como diseños que deban copiarse literalmente.

**Referencias de estilo geográfico:**

- Mapas topográficos.
- Mapas políticos con fronteras irregulares.
- Dioramas geográficos tridimensionales.
- Mapas de terreno con elevación y vegetación.

**Referencias de arquitectura y ciudades:**

- Maquetas arquitectónicas tridimensionales.
- Ciudades isométricas estilizadas.
- Visualizaciones urbanas.
- Modelos de edificios GLTF/GLB.

**Documentación técnica:**

- Three.js: https://threejs.org/docs/
- Three.js BufferGeometry: https://threejs.org/docs/#api/en/core/BufferGeometry
- Three.js InstancedMesh: https://threejs.org/docs/#api/en/objects/InstancedMesh
- Three.js Raycaster: https://threejs.org/docs/#api/en/core/Raycaster
- Three.js LOD: https://threejs.org/docs/#api/en/objects/LOD
- Three.js GLTFLoader: https://threejs.org/docs/#examples/en/loaders/GLTFLoader
- Vue 3: https://vuejs.org/
- TypeScript: https://www.typescriptlang.org/
- GSAP: https://gsap.com/

---

# 21. CRITERIO FINAL DE APROBACIÓN

La evolución se considerará satisfactoria cuando se cumplan estas condiciones:

- Las regiones tengan formas geográficas irregulares.
- Cada región tenga una identidad cromática propia.
- El terreno sea verde y tenga relieve.
- Existan árboles, vegetación y montañas.
- Las ciudades tengan una estructura urbana reconocible.
- Los edificios estén integrados al paisaje.
- Los edificios destacados representen proyectos reales.
- Los proyectos puedan seleccionarse y consultarse.
- La cámara permita explorar diferentes niveles del territorio.
- La experiencia funcione correctamente en escritorio y móvil.
- El rendimiento sea adecuado para los dispositivos objetivo.

**Principio rector del proyecto:**

El mapa debe sentirse como un territorio real construido para representar un portafolio digital. Las regiones representan las áreas de desarrollo, las ciudades representan los entornos donde se materializan las soluciones y los edificios destacados representan los proyectos realizados.

El resultado debe ser una experiencia visual tridimensional, interactiva, coherente y profesional.