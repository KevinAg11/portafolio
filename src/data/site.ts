export interface SocialLink {
  label: string
  url: string
}

export const siteConfig = {
  name: 'Desarrollador de Software',
  initials: 'DS',
  role: 'Desarrollo web · Móvil · Sistemas digitales',
  location: 'Colombia',
  availability: 'Disponible para nuevos proyectos',
  email: 'contacto@ejemplo.com',
  summary:
    'Construyo experiencias y plataformas digitales con foco en rendimiento, claridad visual y arquitecturas mantenibles. Este portafolio es, en sí mismo, una demostración de esas capacidades.',
  socials: [] as SocialLink[],
}

export const navigationItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'mapa', label: 'Mapa' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'contacto', label: 'Contacto' },
] as const

export type NavigationSection = (typeof navigationItems)[number]['id']
