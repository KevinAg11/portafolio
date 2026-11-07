import type { CameraView, MapRegion, RegionId, Vec3 } from '@/types/portfolio'
import { densifyClosedPolygon, type Point2 } from '@/utils/geometry'
import { getProjectById, projects } from './projects'

const CAMERA_DISTANCE = 46

function boundaryFrom(anchors: Point2[], seed: number): Point2[] {
  return densifyClosedPolygon(anchors, 4, 0.55, seed)
}

function isoCamera(target: Vec3, distance = CAMERA_DISTANCE): Vec3 {
  const offset = distance * 0.72
  return {
    x: target.x,
    y: target.y + offset,
    z: target.z + offset,
  }
}

type RegionSeed = Omit<MapRegion, 'projectIds' | 'cameraPosition' | 'cameraTarget'> & {
  target: Vec3
}

const regionSeeds: RegionSeed[] = [
  {
    id: 'WEB',
    name: 'Desarrollo Web',
    shortName: 'WEB',
    tagline: 'Interfaces y plataformas que se sienten naturales',
    description:
      'Territorio dedicado a sitios web, landing pages, portafolios, tiendas virtuales y aplicaciones web. Cada proyecto se construye con una estructura clara, rendimiento cuidado y una experiencia consistente en todos los dispositivos.',
    position: { x: -26, y: 2.8, z: -15 },
    target: { x: -26, y: 3.2, z: -15 },
    zoom: 1,
    color: '#14B8A6',
    services: [
      'Landing pages',
      'Sitios corporativos',
      'Portafolios',
      'Tiendas virtuales',
      'Aplicaciones web',
      'Interfaces administrativas',
    ],
    boundary: boundaryFrom(
      [
        [-15, -6],
        [-13, -12],
        [-7, -14],
        [-2, -12],
        [2, -15],
        [9, -11],
        [14, -5],
        [12, 0],
        [15, 5],
        [9, 9],
        [3, 12],
        [-3, 10],
        [-7, 13],
        [-12, 8],
        [-15, 2],
      ],
      1,
    ),
  },
  {
    id: 'MOBILE',
    name: 'Aplicaciones Móviles',
    shortName: 'MOBILE',
    tagline: 'Productos que acompañan al usuario',
    description:
      'Espacio reservado para aplicaciones Android, desarrollos multiplataforma, herramientas empresariales y experiencias diseñadas para dispositivos móviles. Este territorio se encuentra en exploración activa.',
    position: { x: 26, y: 2.6, z: -17 },
    target: { x: 26, y: 3, z: -17 },
    zoom: 1,
    color: '#3B82F6',
    services: [
      'Aplicaciones Android',
      'Aplicaciones multiplataforma',
      'Aplicaciones empresariales',
      'Aplicaciones de gestión',
      'Interfaces móviles',
      'Integración con servicios externos',
    ],
    boundary: boundaryFrom(
      [
        [-14, -7],
        [-10, -12],
        [-4, -14],
        [1, -11],
        [6, -14],
        [12, -9],
        [15, -3],
        [13, 2],
        [15, 7],
        [9, 11],
        [3, 10],
        [-2, 13],
        [-8, 10],
        [-13, 5],
        [-15, -1],
      ],
      2,
    ),
  },
  {
    id: 'SYSTEMS',
    name: 'Sistemas Digitales',
    shortName: 'SYSTEMS',
    tagline: 'Estructura, procesos y operación',
    description:
      'Región enfocada en sistemas administrativos, plataformas de gestión, automatización de procesos e integración de bases de datos. Aquí la organización y la trazabilidad son el centro de cada solución.',
    position: { x: 29, y: 3, z: 18 },
    target: { x: 29, y: 3.4, z: 18 },
    zoom: 1,
    color: '#8B5CF6',
    services: [
      'Sistemas administrativos',
      'Sistemas de gestión',
      'Plataformas de seguimiento',
      'Gestión de usuarios',
      'Automatización de procesos',
      'Integración de bases de datos',
    ],
    boundary: boundaryFrom(
      [
        [-14, -4],
        [-11, -10],
        [-5, -13],
        [0, -11],
        [5, -14],
        [11, -8],
        [14, -2],
        [12, 3],
        [15, 7],
        [10, 11],
        [4, 9],
        [-1, 13],
        [-7, 10],
        [-12, 6],
        [-15, 1],
      ],
      3,
    ),
  },
  {
    id: 'EXPERIENCE',
    name: 'Experiencias Digitales',
    shortName: 'EXPERIENCE',
    tagline: 'Cuando la interfaz se convierte en experiencia',
    description:
      'Territorio destinado a experiencias 3D, animaciones web, visualizaciones gráficas, efectos visuales y experimentación con WebGL. Este territorio se encuentra en exploración activa.',
    position: { x: -28, y: 2.9, z: 20 },
    target: { x: -28, y: 3.3, z: 20 },
    zoom: 1,
    color: '#F97316',
    services: [
      'Experiencias 3D',
      'Animaciones web',
      'Interfaces interactivas',
      'Visualizaciones gráficas',
      'Experiencias inmersivas',
      'Experimentación con WebGL',
    ],
    boundary: boundaryFrom(
      [
        [-15, -2],
        [-12, -8],
        [-6, -12],
        [-1, -10],
        [4, -13],
        [10, -9],
        [14, -4],
        [12, 1],
        [15, 6],
        [9, 10],
        [4, 8],
        [-1, 12],
        [-7, 10],
        [-12, 6],
        [-15, 2],
      ],
      4,
    ),
  },
  {
    id: 'BUSINESS',
    name: 'Soluciones Empresariales',
    shortName: 'BUSINESS',
    tagline: 'Tecnología que responde a necesidades reales',
    description:
      'Núcleo del territorio. Reúne plataformas personalizadas, digitalización de procesos, automatización empresarial, logística e integraciones entre sistemas. Los proyectos aquí pueden combinar varias especialidades.',
    position: { x: 0, y: 3.4, z: 0 },
    target: { x: 0, y: 3.8, z: 0 },
    zoom: 1,
    color: '#EAB308',
    services: [
      'Plataformas personalizadas',
      'Digitalización de procesos',
      'Sistemas de administración',
      'Automatización empresarial',
      'Soluciones de logística',
      'Integraciones entre plataformas',
    ],
    boundary: boundaryFrom(
      [
        [-15, -6],
        [-12, -11],
        [-6, -14],
        [-1, -12],
        [4, -15],
        [10, -11],
        [14, -5],
        [12, 0],
        [15, 5],
        [11, 9],
        [6, 8],
        [2, 13],
        [-4, 12],
        [-9, 14],
        [-13, 9],
        [-15, 3],
      ],
      5,
    ),
  },
]

export const regions: MapRegion[] = regionSeeds.map(({ target, ...seed }) => {
  const projectIds = projects
    .filter((project) => project.regionId === seed.id)
    .map((project) => project.id)

  return {
    ...seed,
    projectIds,
    cameraTarget: target,
    cameraPosition: isoCamera(target),
  }
})

export const regionsById = new Map<RegionId, MapRegion>(
  regions.map((region) => [region.id, region]),
)

export const overviewView: CameraView = {
  position: { x: 0, y: 69, z: 73 },
  target: { x: 0, y: 1.5, z: 0 },
}

export function getRegion(id: RegionId | null | undefined): MapRegion | undefined {
  if (!id) return undefined
  return regionsById.get(id)
}

export function getRegionProjects(regionId: RegionId) {
  const region = regionsById.get(regionId)
  if (!region) return []
  return region.projectIds
    .map((projectId) => getProjectById(projectId))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
}

export function getRegionForProject(projectId: string | null | undefined): MapRegion | undefined {
  if (!projectId) return undefined
  const project = getProjectById(projectId)
  return project ? regionsById.get(project.regionId) : undefined
}

export function getProjectCount(regionId: RegionId): number {
  return regionsById.get(regionId)?.projectIds.length ?? 0
}

export const populatedRegions = regions.filter((region) => region.projectIds.length > 0)

export const emptyRegions = regions.filter((region) => region.projectIds.length === 0)
