# DOCUMENTO MAESTRO
# PORTAFOLIO INTERACTIVO — DIGITAL MAP EXPERIENCE

**Tipo de proyecto:** Portafolio profesional de desarrollo de software  
**Nivel de complejidad:** Experto  
**Enfoque:** Experiencia web interactiva 2D/3D  
**Tecnologías principales:** Vue 3, TypeScript, Three.js, GSAP y GLSL  
**Herramienta de construcción:** Vite  
**Estilos:** Tailwind CSS 4 + CSS personalizado  
**Documento:** Especificación funcional, visual y técnica  
**Versión:** 1.0

---

# 1. INTRODUCCIÓN

## 1.1. Descripción general del proyecto

El proyecto consiste en desarrollar un portafolio profesional de desarrollo de software cuya característica principal será un mapa digital interactivo que permitirá explorar visualmente los diferentes servicios, especialidades y proyectos desarrollados.

La propuesta busca alejarse de los portafolios convencionales que presentan sus trabajos mediante cuadrículas de tarjetas, listas de proyectos o secciones estáticas.

En su lugar, se plantea construir una experiencia de navegación basada en un mapa diseñado digitalmente, compuesto por diferentes territorios o regiones. Cada territorio representará una especialidad de desarrollo y contendrá los proyectos correspondientes a esa categoría.

El usuario podrá desplazarse por el mapa, acercarse a diferentes regiones, seleccionar territorios y explorar los proyectos que se encuentren dentro de ellos.

La experiencia tendrá como referencia conceptual la navegación interactiva de la página de proyectos de Hubtown:

https://hubtown.co.in/projects

Sin embargo, no se pretende realizar una copia de su diseño. Se busca desarrollar una experiencia propia que aproveche el concepto de exploración cartográfica, adaptándolo a un portafolio tecnológico.

## 1.2. Objetivo principal

Construir una experiencia web visualmente atractiva, técnicamente avanzada e interactiva que permita presentar los servicios y proyectos del desarrollador mediante un mapa digital personalizado.

El mapa deberá funcionar como el sistema principal de navegación del portafolio.

La experiencia debe transmitir:

- Capacidad técnica.
- Creatividad.
- Innovación.
- Dominio de tecnologías modernas.
- Organización de proyectos.
- Capacidad para desarrollar soluciones digitales.
- Atención al detalle en diseño y experiencia de usuario.

El portafolio no debe limitarse a demostrar que el desarrollador conoce determinadas tecnologías. Debe demostrar sus capacidades mediante la propia experiencia que está construyendo.

## 1.3. Objetivos específicos

1. Diseñar un mapa digital personalizado que represente las diferentes especialidades de desarrollo.
2. Dividir el mapa en regiones independientes.
3. Permitir la navegación espacial mediante desplazamiento, zoom y selección.
4. Incorporar animaciones avanzadas de cámara y transiciones.
5. Implementar efectos visuales mediante shaders personalizados.
6. Representar los proyectos mediante puntos interactivos dentro de las regiones.
7. Mostrar información detallada de cada proyecto.
8. Integrar demostraciones, repositorios y enlaces externos.
9. Garantizar una experiencia adaptable a escritorio, tabletas y dispositivos móviles.
10. Mantener una arquitectura modular y escalable.

---

# 2. CONCEPTO VISUAL Y DIRECCIÓN ARTÍSTICA

## 2.1. Concepto principal: Interactive Digital Map

El elemento central será un territorio digital diseñado exclusivamente para el portafolio.

Este territorio tendrá una apariencia tecnológica, con características visuales inspiradas en mapas cartográficos, mapas satelitales estilizados y representaciones tridimensionales de terrenos.

El mapa deberá transmitir la sensación de estar observando una superficie digital que puede explorarse libremente.

No será un mapa geográfico convencional ni representará una ubicación real.

Será una composición visual abstracta que utilizará caminos, límites, elevaciones, zonas y puntos de interés para organizar la información.

## 2.2. Estilo visual

La dirección artística inicial será:

- Fondo oscuro.
- Superficies de terreno en diferentes tonalidades de azul.
- Caminos y conexiones luminosas.
- Límites territoriales claramente identificables.
- Elementos tridimensionales distribuidos estratégicamente.
- Puntos interactivos con iluminación dinámica.
- Texturas y detalles cartográficos.
- Tipografía moderna y minimalista.
- Interfaz secundaria discreta.

El diseño debe mantener un equilibrio entre tecnología, profesionalismo y claridad visual.

Se debe evitar una apariencia excesivamente futurista que termine pareciendo un videojuego.

El objetivo es crear una experiencia tecnológica de carácter profesional.

## 2.3. Paleta cromática inicial

| Elemento | Color |
|---|---|
| Fondo principal | #080B12 |
| Fondo secundario | #101827 |
| Superficie del mapa | #172438 |
| Superficie elevada | #203650 |
| Azul eléctrico | #2563EB |
| Cian luminoso | #38BDF8 |
| Texto principal | #F8FAFC |
| Texto secundario | #94A3B8 |
| Límites territoriales | #334B68 |

Los colores de iluminación deberán utilizarse de forma controlada.

No todas las superficies deben emitir luz. Los efectos luminosos se reservarán principalmente para caminos, puntos interactivos, límites seleccionados y elementos importantes.

## 2.4. Perspectiva del mapa

La perspectiva inicial recomendada será isométrica.

El usuario visualizará el territorio desde una cámara elevada e inclinada, permitiendo apreciar:

- La distribución de las regiones.
- La profundidad del terreno.
- Los caminos.
- Las estructuras tridimensionales.
- Los puntos de interés.

La cámara deberá permitir modificar la distancia y posición de observación.

La perspectiva no debe ser completamente fija: durante determinadas transiciones podrá variar ligeramente para producir una sensación cinematográfica.

---

# 3. ORGANIZACIÓN Y DISTRIBUCIÓN DEL MAPA

## 3.1. Estructura territorial

El mapa estará dividido en cinco regiones principales.

Cada región representará una categoría de servicios tecnológicos.

Las regiones deberán tener límites visuales identificables y una distribución espacial coherente.

No deben parecer cinco tarjetas colocadas sobre una superficie. Deben integrarse visualmente como partes de un mismo territorio.

## 3.2. Región 01: Desarrollo web

**Identificador:** WEB

Representará los proyectos relacionados con la creación de sitios web y plataformas digitales.

Servicios asociados:

- Landing pages.
- Sitios corporativos.
- Portafolios.
- Tiendas virtuales.
- Aplicaciones web.
- Interfaces administrativas.

Los proyectos se representarán mediante marcadores distribuidos dentro del territorio.

Al seleccionar esta región, la cámara deberá acercarse progresivamente y mostrar los proyectos disponibles.

Información de cada proyecto:

- Nombre.
- Imagen de presentación.
- Descripción.
- Objetivo.
- Tecnologías utilizadas.
- Características principales.
- Enlace a la demostración.
- Enlace al repositorio, cuando corresponda.

## 3.3. Región 02: Aplicaciones móviles

**Identificador:** MOBILE

Representará los desarrollos realizados para dispositivos móviles.

Servicios asociados:

- Aplicaciones Android.
- Aplicaciones multiplataforma.
- Aplicaciones empresariales.
- Aplicaciones de gestión.
- Interfaces móviles.
- Integración con servicios externos.

Se podrán utilizar elementos visuales tridimensionales relacionados con dispositivos móviles para diferenciar esta región.

Los proyectos aparecerán mediante marcadores interactivos.

## 3.4. Región 03: Sistemas digitales

**Identificador:** SYSTEMS

Representará sistemas diseñados para administrar procesos, información y operaciones empresariales.

Servicios asociados:

- Sistemas administrativos.
- Sistemas de gestión.
- Plataformas de seguimiento.
- Gestión de usuarios.
- Automatización de procesos.
- Sistemas de información.
- Integración de bases de datos.

Esta región deberá transmitir organización, estructura y funcionalidad.

## 3.5. Región 04: Experiencias digitales

**Identificador:** EXPERIENCE

Representará los proyectos relacionados con diseño interactivo y desarrollo visual avanzado.

Servicios asociados:

- Experiencias 3D.
- Animaciones web.
- Interfaces interactivas.
- Visualizaciones gráficas.
- Experiencias inmersivas.
- Efectos visuales.
- Experimentación con WebGL.

Esta región puede utilizar efectos visuales más expresivos, sin romper la coherencia general del mapa.

## 3.6. Región 05: Soluciones empresariales

**Identificador:** BUSINESS

Representará soluciones tecnológicas desarrolladas para responder a necesidades específicas de empresas y negocios.

Servicios asociados:

- Plataformas personalizadas.
- Digitalización de procesos.
- Sistemas de administración.
- Automatización empresarial.
- Soluciones de logística.
- Integraciones entre plataformas.

Esta región podrá incluir proyectos que integren varias especialidades.

## 3.7. Distribución espacial

La distribución definitiva deberá diseñarse durante la primera fase del proyecto.

Se deben establecer coordenadas tridimensionales para cada región.

Cada región tendrá:

- Identificador único.
- Nombre.
- Descripción.
- Posición dentro del mapa.
- Límites geométricos.
- Color de referencia.
- Puntos de interés.
- Proyectos asociados.
- Posición recomendada de cámara.
- Nivel de zoom de entrada.

La distribución debe evitar que los territorios se superpongan visualmente o que existan zonas excesivamente vacías.

También se deberán diseñar caminos que conecten las regiones y permitan comprender la continuidad del territorio.

---

# 4. EXPERIENCIA DEL USUARIO

## 4.1. Pantalla inicial

Cuando el usuario ingrese al portafolio, encontrará una pantalla de presentación.

Esta pantalla tendrá una animación inicial que preparará la aparición del mapa.

La secuencia propuesta es:

1. Mostrar una pantalla de carga minimalista.
2. Inicializar los recursos gráficos.
3. Preparar la escena tridimensional.
4. Construir progresivamente la superficie del mapa.
5. Mostrar los caminos y límites territoriales.
6. Aparecerán los nombres de las regiones.
7. Se habilitarán los controles de navegación.

La animación debe ser progresiva y no demasiado extensa.

El usuario debe comprender rápidamente que se encuentra ante un mapa interactivo.

## 4.2. Vista general

La vista general mostrará todo el territorio.

Desde esta posición, el usuario podrá identificar las cinco regiones.

Cada región tendrá una identificación visual mediante su nombre y algún elemento gráfico discreto.

Los territorios estarán disponibles para selección.

Al pasar el cursor sobre una región:

- Su superficie cambiará ligeramente de intensidad.
- Se resaltarán sus límites.
- Aparecerá su nombre.
- Podrá mostrarse una breve descripción.
- Se indicará la cantidad de proyectos disponibles.

El efecto debe ser inmediato, fluido y visualmente claro.

## 4.3. Selección de una región

Cuando el usuario seleccione una región, se ejecutará una transición de cámara.

La secuencia será:

1. Identificar la región seleccionada.
2. Obtener sus coordenadas.
3. Calcular la posición final de la cámara.
4. Reducir ligeramente la intensidad de las regiones no seleccionadas.
5. Desplazar la cámara hacia la región.
6. Ejecutar el acercamiento.
7. Resaltar el territorio seleccionado.
8. Mostrar los marcadores de sus proyectos.
9. Actualizar la interfaz de información.

Las animaciones deberán ser controladas mediante GSAP.

No se deberán crear movimientos bruscos ni saltos de cámara.

## 4.4. Exploración de proyectos

Dentro de cada región se encontrarán los proyectos correspondientes.

Cada proyecto tendrá un marcador interactivo.

Los marcadores deberán ser claramente identificables, pero no deben saturar visualmente el mapa.

Al pasar el cursor sobre uno:

- Aumentará ligeramente su tamaño.
- Cambiará su iluminación.
- Aparecerá el nombre del proyecto.
- Se podrá mostrar una miniatura o resumen.

Al seleccionarlo:

- La cámara podrá realizar un acercamiento adicional.
- Se abrirá un panel informativo.
- Se mostrará la información completa del proyecto.

## 4.5. Panel de información

La información de los proyectos se mostrará mediante componentes HTML y Vue, no mediante textos dibujados directamente en Three.js.

El panel incluirá:

- Imagen principal.
- Nombre del proyecto.
- Categoría.
- Descripción.
- Problema que resuelve.
- Solución implementada.
- Tecnologías utilizadas.
- Características principales.
- Galería de imágenes.
- Enlace de demostración.
- Enlace al repositorio.

El panel deberá integrarse visualmente con el mapa.

Podrá aparecer lateralmente en escritorio y ocupar una posición adaptada en dispositivos móviles.

## 4.6. Regreso a la vista general

El usuario deberá poder regresar a la vista general desde cualquier región.

Se incorporará un control de navegación que permita volver al mapa completo.

El regreso deberá utilizar una transición inversa de cámara.

También se deberá permitir seleccionar otra región sin necesidad de reiniciar la experiencia.

---

# 5. SISTEMA DE NAVEGACIÓN

La navegación combinará controles manuales y movimientos automáticos.

## 5.1. Navegación manual

En escritorio:

- Arrastrar para desplazarse.
- Rueda del mouse para acercar y alejar.
- Selección de regiones mediante clic.
- Selección de proyectos mediante clic.
- Controles visuales para zoom.
- Botón para regresar a la vista general.

Se deberá establecer un límite de desplazamiento para impedir que el usuario abandone completamente el territorio.

También se establecerán niveles mínimos y máximos de zoom.

## 5.2. Navegación automática

La cámara se desplazará automáticamente cuando el usuario seleccione una región o un proyecto.

Cada región tendrá una posición de cámara definida.

Las transiciones utilizarán curvas de aceleración y desaceleración.

Se utilizarán movimientos interpolados para evitar desplazamientos artificiales.

## 5.3. Navegación híbrida

El usuario tendrá libertad para explorar el mapa, pero el sistema también facilitará desplazamientos automáticos.

La navegación manual no debe interferir con una transición activa.

Si el usuario realiza una nueva interacción durante una animación, el sistema deberá cancelar o actualizar correctamente la transición anterior.

---

# 6. TECNOLOGÍAS Y HERRAMIENTAS

La arquitectura utilizará las siguientes tecnologías.

## 6.1. Vue 3

Responsabilidad: interfaz y estructura de la aplicación.

Se utilizará para:

- Componentes.
- Navegación.
- Paneles informativos.
- Gestión de estados.
- Selección de proyectos.
- Filtros.
- Controles.
- Integración con la escena 3D.

Se utilizará Composition API y componentes organizados por responsabilidad.

Documentación: https://vuejs.org/

## 6.2. TypeScript

Responsabilidad: tipado y organización de la lógica.

Se utilizará para definir estructuras de datos y contratos entre los componentes de Vue y el motor gráfico.

Se deberán tipar:

- Proyectos.
- Regiones.
- Coordenadas.
- Configuración de cámara.
- Estados de navegación.
- Eventos de selección.
- Recursos gráficos.

Documentación: https://www.typescriptlang.org/

## 6.3. Vite

Responsabilidad: entorno de desarrollo y construcción.

Permitirá ejecutar el proyecto, gestionar módulos y optimizar los recursos durante la compilación.

Documentación: https://vite.dev/

## 6.4. Three.js

Responsabilidad: motor gráfico principal.

Se utilizará para construir el mapa y administrar la escena tridimensional.

Elementos principales:

**Scene**

Contenedor de los objetos gráficos.

**PerspectiveCamera u OrthographicCamera**

Controlará la perspectiva del mapa.

Se evaluará el uso de una cámara ortográfica para la vista isométrica y una cámara perspectiva para transiciones con mayor profundidad.

**WebGLRenderer**

Se encargará de renderizar la escena.

**BufferGeometry**

Permitirá construir terrenos, caminos, límites y superficies personalizadas.

**ShaderMaterial**

Permitirá utilizar shaders GLSL personalizados.

**Raycaster**

Permitirá detectar interacciones con los objetos.

**InstancedMesh**

Permitirá representar múltiples elementos similares con menor cantidad de llamadas de renderizado.

**TextureLoader**

Permitirá cargar texturas y recursos gráficos.

Documentación: https://threejs.org/docs/

## 6.5. GSAP

Responsabilidad: sistema de animaciones.

Se utilizará para controlar:

- Movimientos de cámara.
- Transiciones entre regiones.
- Efectos de selección.
- Aparición de paneles.
- Animaciones de interfaz.
- Secuencias de entrada.
- Animaciones de caminos.

Se recomienda utilizar timelines para coordinar secuencias complejas.

Documentación: https://gsap.com/docs/

## 6.6. GLSL

Responsabilidad: efectos gráficos personalizados.

Se utilizará para desarrollar materiales y efectos que no se puedan conseguir satisfactoriamente mediante materiales estándar.

Se contemplan:

- Shader de terreno.
- Shader de caminos.
- Shader de iluminación.
- Shader de selección.
- Efectos de ondas.
- Efectos de distorsión.
- Animaciones basadas en tiempo.

Documentación de aprendizaje: https://thebookofshaders.com/

## 6.7. Post-processing

Se utilizará el sistema de postprocesamiento de Three.js cuando aporte valor visual.

Efectos contemplados:

- Bloom.
- Antialiasing.
- Corrección de color.
- Viñeta sutil.
- Ajustes de iluminación.

El efecto Bloom deberá estar limitado a los elementos que realmente emiten luz.

No se debe aplicar iluminación excesiva a toda la escena.

## 6.8. Tailwind CSS 4

Responsabilidad: estilos de la interfaz.

Se utilizará para:

- Layout.
- Paneles.
- Tipografía.
- Botones.
- Responsive.
- Elementos de navegación.

Los estilos complejos de la experiencia se implementarán mediante CSS personalizado cuando sea necesario.

---

# 7. MOTOR GRÁFICO Y ARQUITECTURA 3D

## 7.1. Arquitectura general

El motor gráfico deberá mantenerse separado de los componentes de interfaz.

Se establecerán tres niveles principales:

**Nivel 1: Aplicación Vue**

Administra los datos y la experiencia del usuario.

**Nivel 2: Motor gráfico**

Administra la escena, cámara, geometrías, materiales y renderizado.

**Nivel 3: Sistema de efectos**

Administra shaders, iluminación, animaciones gráficas y postprocesamiento.

Esta separación es fundamental para mantener el proyecto escalable.

## 7.2. SceneManager

Será responsable de crear y administrar la escena.

Funciones:

- Inicializar Scene.
- Configurar el fondo.
- Agregar iluminación.
- Incorporar objetos.
- Gestionar grupos.
- Eliminar recursos.
- Administrar el ciclo de vida de la escena.

## 7.3. CameraManager

Administrará las cámaras y sus movimientos.

Funciones:

- Posición inicial.
- Orientación.
- Zoom.
- Límites de navegación.
- Posiciones por región.
- Posiciones por proyecto.
- Transiciones.
- Regreso a vista general.

## 7.4. RenderManager

Controlará el proceso de renderizado.

Funciones:

- Inicializar WebGLRenderer.
- Ajustar tamaño.
- Controlar resolución.
- Actualizar la escena.
- Administrar animaciones.
- Gestionar el ciclo de renderizado.
- Liberar recursos.

Se deberá evitar mantener procesos de renderizado activos cuando la experiencia no esté visible.

## 7.5. Sistema de terreno

El terreno se construirá mediante geometrías personalizadas.

Se podrá utilizar una malla subdividida con desplazamiento de vértices para crear elevaciones.

El relieve deberá ser controlado.

No se busca construir una montaña o un paisaje natural, sino una superficie tecnológica que permita distinguir las regiones.

Se podrán incorporar:

- Elevaciones.
- Depresiones.
- Plataformas.
- Curvas de nivel.
- Texturas.
- Superficies con diferentes materiales.

## 7.6. Sistema de caminos

Los caminos conectarán las diferentes regiones.

Se construirán mediante geometrías lineales o curvas.

Se utilizarán curvas de Bézier o Catmull-Rom cuando se requieran recorridos suaves.

Los caminos podrán incorporar materiales luminosos y animaciones de flujo.

El efecto de movimiento podrá desarrollarse mediante coordenadas UV y uniformes de tiempo en GLSL.

## 7.7. Sistema de regiones

Cada región deberá ser un objeto o grupo identificable dentro de la escena.

Debe contener:

- Geometría.
- Material.
- Identificador.
- Límites.
- Marcadores.
- Estado de interacción.
- Posición central.
- Configuración de cámara.

Se deben separar los elementos visuales de los datos que representan.

---

# 8. SISTEMA DE SHADERS Y EFECTOS AVANZADOS

## 8.1. Shader de terreno

Permitirá modificar visualmente la superficie del mapa.

Se utilizará para:

- Crear variaciones de altura.
- Simular texturas.
- Aplicar gradientes.
- Crear líneas topográficas.
- Modificar iluminación.
- Resaltar regiones.

El desplazamiento geométrico se deberá mantener coherente con la detección de interacciones.

## 8.2. Shader de caminos

Los caminos tendrán un efecto luminoso controlado.

Se podrá implementar un desplazamiento de coordenadas UV para generar una animación de flujo.

El movimiento debe tener una dirección definida.

No todos los caminos deberán animarse simultáneamente.

## 8.3. Shader de selección

Cuando una región sea seleccionada, el material deberá responder visualmente.

Efectos posibles:

- Aumento de intensidad.
- Gradiente de color.
- Borde luminoso.
- Ondas de selección.
- Animación de expansión.

## 8.4. Shader de iluminación

Se podrá implementar una iluminación personalizada para los puntos interactivos y algunas estructuras.

Se deberán utilizar uniformes para controlar parámetros como:

- Tiempo.
- Intensidad.
- Color.
- Posición.
- Estado de selección.

## 8.5. Optimización de shaders

Los shaders deberán diseñarse teniendo en cuenta el rendimiento.

Se evitarán cálculos innecesarios.

Se utilizarán uniformes para modificar parámetros sin recompilar materiales.

Los efectos deberán probarse en diferentes GPU y dispositivos.

---

# 9. SISTEMA DE INTERACCIÓN

## 9.1. Raycasting

Se utilizará Raycaster para detectar qué región o proyecto está debajo del cursor.

El sistema deberá identificar el objeto seleccionado y asociarlo con su identificador de datos.

Se deberá establecer una jerarquía de prioridad entre regiones, marcadores y elementos decorativos.

Los objetos decorativos no deben bloquear las interacciones con los elementos funcionales.

## 9.2. Estados de interacción

Cada región tendrá los siguientes estados:

- Normal.
- Hover.
- Seleccionada.
- En transición.
- Deshabilitada.

Los marcadores de proyectos también tendrán estados equivalentes.

Los cambios visuales se coordinarán con el sistema de animaciones.

## 9.3. Gestión de eventos

Se deberán controlar:

- PointerMove.
- PointerDown.
- PointerUp.
- Wheel.
- Resize.
- Eventos táctiles.

Los eventos deberán gestionarse sin duplicar listeners.

Se deberán eliminar correctamente al destruir los componentes.

## 9.4. Accesibilidad

La experiencia no puede depender exclusivamente del mouse.

Se deberán incorporar:

- Navegación mediante teclado.
- Botones HTML para seleccionar regiones.
- Alternativas textuales.
- Estados de foco.
- Contraste suficiente.
- Compatibilidad con lectores de pantalla en la interfaz.
- Opción de movimiento reducido.

---

# 10. SISTEMA DE DATOS

La información del portafolio estará inicialmente almacenada en archivos TypeScript.

No se requiere backend para la primera versión.

## 10.1. Modelo de región

Cada región tendrá una estructura equivalente a:

```ts
interface MapRegion {
  id: string;
  name: string;
  description: string;

  position: {
    x: number;
    y: number;
    z: number;
  };

  cameraPosition: {
    x: number;
    y: number;
    z: number;
  };

  color: string;
  projectIds: string[];
}
```

## 10.2. Modelo de proyecto

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

  featured: boolean;
}
```

## 10.3. Relación entre regiones y proyectos

Cada proyecto deberá pertenecer a una región principal.

La relación se realizará mediante identificadores.

El sistema deberá permitir agregar nuevos proyectos sin modificar la lógica del motor gráfico.

La cantidad de proyectos no deberá estar codificada manualmente dentro de los componentes visuales.

---

# 11. INTERFAZ DE USUARIO

## 11.1. Navegación principal

La interfaz tendrá una navegación discreta que permita acceder a:

- Inicio.
- Mapa de proyectos.
- Servicios.
- Sobre mí.
- Contacto.

El mapa será la experiencia principal.

Las demás secciones deberán mantener la misma identidad visual.

## 11.2. Controles del mapa

Se incorporarán controles para:

- Acercar.
- Alejar.
- Restablecer vista.
- Mostrar regiones.
- Consultar proyectos.

Los controles no deben cubrir áreas importantes del mapa.

## 11.3. Panel de región

Cuando se seleccione una región, se mostrará información contextual:

- Nombre.
- Descripción.
- Cantidad de proyectos.
- Servicios relacionados.
- Acción para explorar.

## 11.4. Panel de proyecto

El panel de proyecto mostrará información completa y permitirá consultar enlaces externos.

Los enlaces deberán abrirse de forma segura y utilizar destinos válidos.

---

# 12. RESPONSIVE Y EXPERIENCIA MÓVIL

El mapa debe adaptarse a diferentes tamaños de pantalla.

No se debe asumir que la experiencia de escritorio puede reducirse proporcionalmente para funcionar en un teléfono.

## 12.1. Escritorio

Experiencia completa:

- Perspectiva isométrica.
- Navegación manual.
- Zoom.
- Transiciones.
- Efectos visuales.
- Paneles flotantes.

## 12.2. Tablet

Se reducirá la densidad de elementos y se adaptarán los paneles.

Los controles tendrán un tamaño adecuado para interacción táctil.

## 12.3. Móvil

Se utilizará una experiencia simplificada:

- Navegación táctil.
- Gestos de desplazamiento.
- Zoom mediante gestos.
- Marcadores más grandes.
- Menor cantidad de partículas.
- Paneles adaptados a pantalla.
- Menor complejidad gráfica.

Si la interacción 3D completa no resulta adecuada para determinados dispositivos, se proporcionará una alternativa de navegación convencional.

---

# 13. RENDIMIENTO Y OPTIMIZACIÓN

El rendimiento será un requisito fundamental.

La complejidad visual no debe perjudicar la experiencia del usuario.

## 13.1. Optimización geométrica

Se utilizará:

- BufferGeometry.
- InstancedMesh.
- Reutilización de materiales.
- Reutilización de geometrías.
- Reducción de polígonos innecesarios.

## 13.2. Optimización de texturas

Se utilizarán imágenes optimizadas.

Formatos recomendados:

- WebP.
- AVIF.
- KTX2 cuando corresponda para texturas GPU.

Se deberán evitar imágenes excesivamente grandes.

## 13.3. Control de renderizado

Se implementará:

- Control de resolución.
- Ajuste de pixel ratio.
- Reducción de efectos en dispositivos limitados.
- Pausa o reducción de renderizado cuando la pestaña no esté visible.
- Limpieza de recursos.
- Control de animaciones simultáneas.

## 13.4. Gestión de memoria

Al abandonar una escena o componente se deberán liberar:

- Geometrías.
- Materiales.
- Texturas.
- Render targets.
- Recursos de postprocesamiento.
- Listeners.
- Animaciones activas.

No se deberán crear instancias duplicadas del motor gráfico innecesariamente.

## 13.5. Objetivos de rendimiento

Se utilizarán como objetivos iniciales:

- 60 FPS en dispositivos de escritorio compatibles.
- Experiencia fluida en dispositivos móviles.
- Carga progresiva.
- Sin errores de memoria durante la navegación.
- Sin bloqueos prolongados de la interfaz.
- Adaptación automática de calidad gráfica.

Estos valores deberán verificarse mediante pruebas reales; no se considerarán garantizados por la arquitectura.

---

# 14. ESTRUCTURA DE CARPETAS PROPUESTA

```text
src/
│
├── components/
│   ├── map/
│   │   ├── DigitalMap.vue
│   │   ├── MapCanvas.vue
│   │   ├── MapTerrain.vue
│   │   ├── MapRoads.vue
│   │   ├── MapRegions.vue
│   │   ├── MapMarkers.vue
│   │   └── MapControls.vue
│   │
│   ├── projects/
│   │   ├── ProjectCard.vue
│   │   ├── ProjectDetail.vue
│   │   └── ProjectGallery.vue
│   │
│   └── interface/
│       ├── MainNavigation.vue
│       ├── RegionInformation.vue
│       └── LoadingScreen.vue
│
├── engine/
│   ├── core/
│   │   ├── SceneManager.ts
│   │   ├── CameraManager.ts
│   │   └── RenderManager.ts
│   │
│   ├── terrain/
│   │   ├── TerrainGeometry.ts
│   │   └── TerrainMaterial.ts
│   │
│   ├── effects/
│   │   ├── RoadShader.ts
│   │   ├── RegionShader.ts
│   │   └── PostProcessing.ts
│   │
│   └── interaction/
│       ├── RaycastManager.ts
│       └── SelectionManager.ts
│
├── composables/
│   ├── useMapScene.ts
│   ├── useMapCamera.ts
│   ├── useMapInteraction.ts
│   ├── useMapAnimation.ts
│   └── useMapNavigation.ts
│
├── data/
│   ├── regions.ts
│   └── projects.ts
│
├── shaders/
│   ├── terrain.vert
│   ├── terrain.frag
│   ├── roads.vert
│   └── roads.frag
│
├── views/
│   ├── HomeView.vue
│   └── ProjectsView.vue
│
└── styles/
    ├── variables.css
    └── experience.css
```

Esta estructura es una propuesta de arquitectura. Los archivos se crearán progresivamente, según las necesidades de cada fase.

---

# 15. FASES DE DESARROLLO

El proyecto se desarrollará mediante nueve fases independientes y verificables.

No se deberá avanzar a una fase posterior sin comprobar que la anterior cumple sus criterios de aceptación.

## FASE 01. Diseño y planificación del territorio

Objetivo: definir completamente la composición visual y funcional del mapa.

Actividades:

1. Definir las cinco regiones.
2. Diseñar la distribución territorial.
3. Establecer límites.
4. Diseñar los caminos.
5. Definir la perspectiva.
6. Determinar la posición de cámara.
7. Definir los puntos de interés.
8. Establecer la paleta cromática.
9. Diseñar las interacciones.
10. Crear documentación visual y técnica.

Entregables:

- Diseño conceptual.
- Distribución del mapa.
- Plano de regiones.
- Especificación de cámara.
- Sistema de navegación.
- Referencias visuales.
- Documento de diseño aprobado.

Criterio de aceptación:

La distribución del mapa debe estar completamente definida antes de comenzar su construcción tridimensional.

## FASE 02. Construcción del motor gráfico

Objetivo: preparar la infraestructura técnica de Three.js.

Actividades:

- Inicializar la escena.
- Configurar cámaras.
- Crear el renderer.
- Configurar iluminación.
- Crear SceneManager.
- Crear CameraManager.
- Crear RenderManager.
- Implementar limpieza de recursos.

Criterio de aceptación:

La escena debe funcionar correctamente y adaptarse al tamaño de pantalla sin errores.

## FASE 03. Construcción del mapa

Objetivo: construir la geometría principal.

Actividades:

- Crear terreno.
- Construir regiones.
- Construir caminos.
- Incorporar límites.
- Crear estructuras.
- Distribuir puntos de interés.

Criterio de aceptación:

El mapa debe tener una composición visual completa y representar correctamente las cinco regiones.

## FASE 04. Shaders y efectos gráficos

Objetivo: incorporar los efectos visuales avanzados.

Actividades:

- Shader de terreno.
- Shader de caminos.
- Shader de selección.
- Iluminación.
- Texturas.
- Postprocesamiento.

Criterio de aceptación:

Los efectos deben funcionar correctamente y no producir errores gráficos o pérdidas importantes de rendimiento.

## FASE 05. Sistema de interacción

Objetivo: permitir explorar el mapa.

Actividades:

- Raycasting.
- Selección de regiones.
- Selección de proyectos.
- Hover.
- Desplazamiento.
- Zoom.
- Navegación táctil.

Criterio de aceptación:

El usuario debe poder seleccionar e interactuar correctamente con los elementos del mapa.

## FASE 06. Animaciones

Objetivo: desarrollar las transiciones cinematográficas.

Actividades:

- Animación de cámara.
- Entrada de regiones.
- Selección de proyectos.
- Transiciones de interfaz.
- Animación de caminos.
- Secuencias de navegación.

Criterio de aceptación:

Todas las animaciones deben funcionar de manera fluida y coordinada, sin conflictos entre acciones simultáneas.

## FASE 07. Sistema de proyectos

Objetivo: integrar los datos y la información.

Actividades:

- Crear modelos TypeScript.
- Definir regiones.
- Registrar proyectos.
- Asociar proyectos con regiones.
- Crear paneles informativos.
- Incorporar galerías.
- Integrar enlaces externos.

Criterio de aceptación:

Los proyectos deben poder agregarse mediante datos sin modificar el funcionamiento interno del mapa.

## FASE 08. Responsive y optimización

Objetivo: garantizar una experiencia adecuada en diferentes dispositivos.

Actividades:

- Adaptar cámara.
- Ajustar resolución.
- Reducir efectos cuando sea necesario.
- Adaptar controles.
- Optimizar recursos.
- Implementar accesibilidad.
- Probar dispositivos reales.

Criterio de aceptación:

La experiencia debe ser utilizable en escritorio, tabletas y móviles, incluyendo una alternativa cuando las capacidades gráficas sean insuficientes.

## FASE 09. Integración y lanzamiento

Objetivo: preparar el portafolio para producción.

Actividades:

- Pruebas funcionales.
- Pruebas de rendimiento.
- Corrección de errores.
- Optimización de recursos.
- SEO.
- Accesibilidad.
- Despliegue.
- Verificación final.

Criterio de aceptación:

La aplicación deberá estar disponible públicamente y permitir explorar todas las regiones y proyectos sin errores críticos.

---

# 16. REQUISITOS FUNCIONALES

| Código | Requisito |
|---|---|
| RF-01 | Mostrar el mapa digital al ingresar al portafolio. |
| RF-02 | Mostrar las cinco regiones principales. |
| RF-03 | Permitir seleccionar una región. |
| RF-04 | Ejecutar una transición de cámara al seleccionar una región. |
| RF-05 | Permitir desplazarse manualmente. |
| RF-06 | Permitir acercar y alejar el mapa. |
| RF-07 | Mostrar los proyectos correspondientes a cada región. |
| RF-08 | Permitir seleccionar proyectos. |
| RF-09 | Mostrar información detallada de los proyectos. |
| RF-10 | Permitir regresar a la vista general. |
| RF-11 | Permitir navegar entre regiones. |
| RF-12 | Permitir consultar enlaces externos. |
| RF-13 | Adaptar la interfaz a dispositivos móviles. |
| RF-14 | Proporcionar controles accesibles. |
| RF-15 | Permitir agregar nuevos proyectos mediante datos. |

# 17. REQUISITOS NO FUNCIONALES

| Código | Requisito |
|---|---|
| RNF-01 | Arquitectura modular y mantenible. |
| RNF-02 | Tipado estricto con TypeScript. |
| RNF-03 | Renderizado eficiente. |
| RNF-04 | Gestión correcta de memoria. |
| RNF-05 | Compatibilidad con navegadores modernos. |
| RNF-06 | Diseño responsive. |
| RNF-07 | Accesibilidad de la interfaz. |
| RNF-08 | Carga progresiva de recursos. |
| RNF-09 | Alternativa cuando WebGL no esté disponible. |
| RNF-10 | Soporte para movimiento reducido. |
| RNF-11 | Protección frente a enlaces externos inseguros. |
| RNF-12 | Separación entre lógica gráfica e interfaz. |

---

# 18. RESTRICCIONES Y DECISIONES TÉCNICAS

Las siguientes decisiones deberán respetarse durante el desarrollo:

1. Se mantendrá Vue 3 como framework principal.
2. Se utilizará TypeScript.
3. No se migrará el proyecto a React.
4. Three.js será el motor gráfico principal.
5. GSAP controlará las animaciones.
6. GLSL se utilizará para efectos personalizados.
7. La interfaz se desarrollará con componentes HTML y Vue.
8. No se utilizará un backend para almacenar los proyectos en la primera versión.
9. No se utilizarán imágenes estáticas como sustituto de las interacciones reales.
10. La geometría y los materiales deberán ser reutilizables.
11. El sistema deberá permitir incorporar nuevas regiones.
12. La experiencia deberá funcionar sin depender exclusivamente del mouse.
13. Se priorizará la calidad visual sin descuidar el rendimiento.

---

# 19. CRITERIOS GENERALES DE CALIDAD

El resultado final deberá cumplir con los siguientes criterios:

**Diseño**

- Identidad visual coherente.
- Distribución territorial clara.
- Jerarquía visual.
- Animaciones elegantes.
- Ausencia de saturación gráfica.

**Interactividad**

- Selección precisa.
- Navegación fluida.
- Respuesta visual consistente.
- Controles intuitivos.

**Arquitectura**

- Componentes independientes.
- Responsabilidades claramente definidas.
- Código tipado.
- Gestión adecuada de recursos.

**Rendimiento**

- Sin fugas de memoria.
- Sin renderizados innecesarios.
- Carga optimizada.
- Adaptación gráfica según dispositivo.

**Contenido**

- Información clara.
- Proyectos correctamente clasificados.
- Imágenes optimizadas.
- Enlaces funcionales.

---

# 20. RESULTADO FINAL ESPERADO

Al finalizar el proyecto se deberá disponer de un portafolio profesional cuya experiencia principal sea un mapa digital interactivo.

El visitante podrá observar un territorio compuesto por cinco regiones, cada una asociada a una especialidad tecnológica.

Podrá explorar el territorio, desplazarse, acercarse, seleccionar regiones, descubrir proyectos y consultar información detallada.

La experiencia combinará geometría tridimensional, materiales personalizados, shaders, animaciones cinematográficas y una interfaz web moderna.

El mapa será completamente personalizado y estará construido para representar el trabajo del desarrollador.

El resultado deberá funcionar como una demostración práctica de sus capacidades en desarrollo frontend, programación gráfica, diseño de interfaces, animación e integración de tecnologías.

**La experiencia completa deberá transmitir una idea: cada región representa una capacidad de desarrollo y cada proyecto demuestra cómo esa capacidad se transforma en una solución digital real.**

---

# 21. DOCUMENTACIÓN DE REFERENCIA

Recursos técnicos que deberán consultarse durante la implementación:

- Hubtown Projects: https://hubtown.co.in/projects
- Vue 3: https://vuejs.org/
- TypeScript: https://www.typescriptlang.org/
- Vite: https://vite.dev/
- Three.js: https://threejs.org/
- Three.js Documentation: https://threejs.org/docs/
- Three.js Examples: https://threejs.org/examples/
- GSAP: https://gsap.com/
- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- The Book of Shaders: https://thebookofshaders.com/
- MDN WebGL: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API

**FIN DEL DOCUMENTO — VERSIÓN 1.0**