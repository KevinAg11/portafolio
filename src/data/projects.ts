import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    id: 'elizabeth-alvarez',
    title: 'Elizabeth Álvarez',
    category: 'Sitio web · Marca personal',
    description:
      'Sitio web profesional creado para fortalecer la presencia digital de Elizabeth Álvarez Quiroga y presentar su perfil, identidad y propuesta profesional en un espacio propio. La página funciona como una vitrina digital para comunicar quién es, destacar su perfil y facilitar que las personas interesadas conozcan su trabajo y establezcan contacto.',
    problem:
      'La profesional necesitaba un espacio propio que reuniera su identidad, su propuesta de valor y un canal claro de contacto, manteniendo una experiencia visual atractiva en computadores y dispositivos móviles.',
    solution:
      'Se desarrolló una marca personal digital con jerarquía de contenidos clara, una navegación sencilla y una presentación visual consistente en todas las secciones, pensada para comunicar confianza y facilitar el contacto.',
    technologies: ['Vue 3', 'Vite', 'TypeScript', 'GSAP', 'ScrollTrigger'],
    features: [
      'Identidad visual coherente con el perfil profesional',
      'Estructura de contenidos orientada a la propuesta de valor',
      'Navegación intuitiva y adaptable a móviles',
      'Animaciones de entrada y scroll cuidadas',
      'Llamados a la acción para establecer contacto',
    ],
    image: '/images/projects/elizabeth-cover.webp',
    gallery: [
      '/images/projects/elizabeth-01.webp',
      '/images/projects/elizabeth-02.webp',
      '/images/projects/elizabeth-03.webp',
    ],
    liveUrl: 'https://elizabeth-page.netlify.app/',
    regionId: 'WEB',
    featured: true,
  },
  {
    id: 'mayte-montero',
    title: 'Mayte Montero',
    category: 'Sitio web · Promoción artística · Booking',
    description:
      'Sitio web oficial desarrollado para fortalecer la presencia digital de Mayte Montero y promocionar su trayectoria y propuesta artística. La plataforma permite que visitantes, organizadores y posibles contratantes conozcan su perfil musical, exploren su contenido y encuentren un canal directo para solicitar presentaciones.',
    problem:
      'La artista necesitaba convertir su presencia digital en una herramienta comercial capaz de presentar su trayectoria, organizar contenido multimedia y facilitar solicitudes de contratación para eventos.',
    solution:
      'Se construyó una plataforma bilingüe de promoción y booking con narrativa visual inmersiva, galería multimedia, flujo de contacto para eventos y una estructura de contenidos optimizada para buscadores.',
    technologies: [
      'Vue 3',
      'Vite',
      'TypeScript',
      'Three.js',
      'GSAP',
      'Lenis',
      'vue-i18n',
      'Prerender SEO',
    ],
    features: [
      'Experiencia visual con animaciones e interacción 3D',
      'Contenido bilingüe español e inglés',
      'Galería multimedia y presentación de trayectoria',
      'Flujo de solicitud de contratación con datos del evento',
      'SEO técnico con prerender y datos estructurados',
      'Navegación fluida con scroll suavizado',
    ],
    image: '/images/projects/mayte-cover.webp',
    gallery: [
      '/images/projects/mayte-01.webp',
      '/images/projects/mayte-02.webp',
      '/images/projects/mayte-03.webp',
    ],
    liveUrl: 'https://maytemontero.com/',
    regionId: 'WEB',
    featured: true,
  },
  {
    id: 'tracking',
    title: 'TracKing',
    category: 'Plataforma SaaS · Logística',
    description:
      'Plataforma digital concebida para centralizar y optimizar las operaciones de empresas de mensajería y domicilios. El ecosistema contempla la administración de empresas, usuarios, clientes, mensajeros y servicios desde un entorno integrado, con creación y asignación de pedidos, seguimiento de servicios, registro de evidencias de entrega, gestión de jornadas y generación de liquidaciones e informes.',
    problem:
      'Las empresas de mensajería operaban con procesos dispersos: asignaciones manuales, poca visibilidad de la ubicación de los mensajeros, liquidaciones propensas a errores y dificultad para mantener trazabilidad de cada entrega.',
    solution:
      'Se diseñó una plataforma SaaS multiempresa con backend NestJS, base de datos PostgreSQL gestionada con Prisma y una aplicación móvil en React Native para mensajeros. La operación se centraliza en un ciclo de vida de pedidos con seguimiento GPS, evidencias de entrega, liquidaciones configurables y reportes operativos y financieros.',
    technologies: [
      'Next.js',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'React Native',
      'REST API',
      'WebSocket',
      'JWT',
    ],
    features: [
      'Arquitectura multiempresa con aislamiento de datos',
      'Tracking GPS en tiempo real actualizado cada 15 segundos',
      'Ciclo de vida completo de pedidos con historial de estados',
      'Aplicación móvil para mensajeros con evidencias fotográficas',
      'Liquidaciones por porcentaje o monto fijo con historial',
      'Reportes financieros y operativos por período',
      'Autenticación con JWT y API REST',
    ],
    image: '/images/projects/tracking-cover.webp',
    gallery: [
      '/images/projects/tracking-01.webp',
      '/images/projects/tracking-02.webp',
      '/images/projects/tracking-03.webp',
    ],
    liveUrl: 'https://tracking-landing.netlify.app/#cta',
    regionId: 'BUSINESS',
    featured: true,
  },
]

export const projectsById = new Map(projects.map((project) => [project.id, project]))

export function getProjectById(id: string | null | undefined): Project | undefined {
  if (!id) return undefined
  return projectsById.get(id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
