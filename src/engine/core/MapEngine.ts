import type {
  HoverState,
  MapSelection,
  QualityProfile,
  RegionId,
} from '@/types/portfolio'
import { overviewView, getRegion } from '@/data/regions'
import { cities, getCity, getCityForProject } from '@/data/cities'
import { getProjectById, projects } from '@/data/projects'
import { regions } from '@/data/regions'
import { SceneManager } from './SceneManager'
import { CameraManager } from './CameraManager'
import { RenderManager } from './RenderManager'
import { LabelManager } from './LabelManager'
import { TerrainLayer } from '@/engine/terrain/TerrainLayer'
import { RegionLayer } from '@/engine/terrain/RegionLayer'
import { RoadLayer } from '@/engine/terrain/RoadLayer'
import { CityLayer } from '@/engine/cities/CityLayer'
import { VegetationLayer } from '@/engine/environment/VegetationLayer'
import { RaycastManager, type RayHit } from '@/engine/interaction/RaycastManager'
import { SelectionManager } from '@/engine/interaction/SelectionManager'

export interface MapEngineCallbacks {
  onReady?: () => void
  onHoverChange?: (hover: HoverState) => void
  onSelectionChange?: (selection: MapSelection) => void
  onTransitionChange?: (active: boolean) => void
  onError?: (error: Error) => void
}

interface MapEngineOptions {
  container: HTMLElement
  canvas: HTMLCanvasElement
  quality: QualityProfile
  reducedMotion: boolean
  callbacks?: MapEngineCallbacks
}

export class MapEngine {
  private readonly callbacks: MapEngineCallbacks
  private readonly sceneManager: SceneManager
  private readonly cameraManager: CameraManager
  private readonly renderManager: RenderManager
  private readonly labelManager: LabelManager
  private readonly terrainLayer: TerrainLayer
  private readonly regionLayer: RegionLayer
  private readonly roadLayer: RoadLayer
  private readonly cityLayer: CityLayer
  private readonly vegetationLayer: VegetationLayer
  private readonly raycastManager: RaycastManager
  private readonly selectionManager = new SelectionManager()

  private hover: HoverState = { regionId: null, projectId: null }
  private elapsed = 0
  private lastFrameTime = performance.now()
  private frameId = 0
  private isVisible = true
  private disposed = false
  private resizeObserver: ResizeObserver | null = null
  private intersectionObserver: IntersectionObserver | null = null

  constructor(private readonly options: MapEngineOptions) {
    this.callbacks = options.callbacks ?? {}
    const { container, canvas, quality, reducedMotion } = options

    this.sceneManager = new SceneManager(quality)

    const width = Math.max(container.clientWidth, 1)
    const height = Math.max(container.clientHeight, 1)

    this.cameraManager = new CameraManager(canvas, width / height, reducedMotion)
    this.cameraManager.onTransitionChange = (active) => {
      this.callbacks.onTransitionChange?.(active)
    }

    this.renderManager = new RenderManager(canvas, quality)
    this.renderManager.setSize(width, height, quality)
    this.renderManager.setupPostProcessing(
      this.sceneManager.scene,
      this.cameraManager.camera,
      quality,
    )

    this.terrainLayer = new TerrainLayer(quality)
    this.regionLayer = new RegionLayer(regions, quality, reducedMotion)
    this.roadLayer = new RoadLayer(regions, reducedMotion)
    this.cityLayer = new CityLayer(cities, regions, projects, quality, reducedMotion)
    this.vegetationLayer = new VegetationLayer(quality, reducedMotion)

    this.sceneManager.groups.terrain.add(this.terrainLayer.mesh)
    this.sceneManager.groups.regions.add(this.regionLayer.group)
    this.sceneManager.groups.roads.add(this.roadLayer.group)
    this.sceneManager.groups.structures.add(this.cityLayer.group)
    this.sceneManager.groups.vegetation.add(this.vegetationLayer.group)

    this.labelManager = new LabelManager(
      container,
      this.sceneManager.scene,
      regions,
      cities,
      projects,
      reducedMotion,
    )

    for (const project of projects) {
      const position = this.cityLayer.getProjectAnchor(project.id)
      if (position) this.labelManager.updateProjectLabelPosition(project.id, position)
    }

    this.raycastManager = new RaycastManager(
      this.cameraManager.camera,
      canvas,
      {
        getObjects: () => [
          ...this.regionLayer.meshes,
          ...this.cityLayer.getInteractiveObjects(),
        ],
        onHover: (hit) => this.handleHover(hit),
        onClick: (hit) => this.handleClick(hit),
        onPointerDown: () => this.cameraManager.cancelTransition(),
      },
    )

    this.selectionManager.subscribe((selection) => {
      this.callbacks.onSelectionChange?.(selection)
    })

    this.setupObservers(width, height)
    this.startIntro()
    this.startLoop()
    this.callbacks.onReady?.()
  }

  private setupObservers(width: number, height: number): void {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.resize(width, height)
      })
      this.resizeObserver.observe(this.options.container)
    }

    if (typeof IntersectionObserver !== 'undefined') {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (entry) this.isVisible = entry.isIntersecting
        },
        { threshold: 0.05 },
      )
      this.intersectionObserver.observe(this.options.container)
    }
  }

  private startIntro(): void {
    const { reducedMotion } = this.options

    if (reducedMotion) {
      this.cameraManager.camera.position.set(
        overviewView.position.x,
        overviewView.position.y,
        overviewView.position.z,
      )
      this.cameraManager.controls.target.set(
        overviewView.target.x,
        overviewView.target.y,
        overviewView.target.z,
      )
      this.cameraManager.controls.update()
      return
    }

    this.cameraManager.camera.position.set(2, 88, 100)
    this.cameraManager.controls.target.set(0, 1.5, 0)
    this.cameraManager.controls.update()

    this.regionLayer.playIntro()
    this.roadLayer.playIntro()
    this.cityLayer.playIntro()
    this.vegetationLayer.playIntro()
    this.labelManager.playIntro()

    window.setTimeout(() => {
      if (this.disposed) return
      if (this.selectionManager.current.mode !== 'overview') return
      this.cameraManager.animateTo(overviewView, 2.7)
    }, 320)
  }

  private startLoop(): void {
    this.lastFrameTime = performance.now()

    const animate = (): void => {
      if (this.disposed) return
      this.frameId = requestAnimationFrame(animate)

      const now = performance.now()
      const delta = Math.min((now - this.lastFrameTime) / 1000, 0.05)
      this.lastFrameTime = now
      this.elapsed += delta

      if (!this.isVisible || document.hidden) return

      this.cameraManager.update()
      this.updateLayers()
      this.renderManager.render(this.sceneManager.scene, this.cameraManager.camera)
      this.labelManager.render(this.cameraManager.camera)
    }

    this.frameId = requestAnimationFrame(animate)
  }

  private updateLayers(): void {
    this.terrainLayer.update(this.elapsed)
    this.regionLayer.update(this.elapsed)
    this.roadLayer.update(this.elapsed)
    this.cityLayer.update(this.elapsed, this.cameraManager.camera)
    this.vegetationLayer.update(this.elapsed)
  }

  private handleHover(hit: RayHit | null): void {
    const regionId = hit?.regionId ?? null
    const projectId =
      hit?.kind === 'building' || hit?.kind === 'marker' ? (hit.projectId ?? null) : null
    const cityId = hit?.kind === 'city' ? (hit.cityId ?? null) : null

    this.cityLayer.setHoveredCity(cityId)

    if (this.hover.regionId === regionId && this.hover.projectId === projectId) return

    this.hover = { regionId, projectId }
    this.regionLayer.setHover(regionId)
    this.cityLayer.setHover(projectId)
    this.labelManager.setHoveredProject(projectId)

    const selection = this.selectionManager.current
    if (selection.mode === 'project' && selection.projectId) {
      const project = getProjectById(selection.projectId)
      this.labelManager.setSelectedProject(selection.projectId, project?.title)
    }

    this.callbacks.onHoverChange?.(this.hover)
  }

  private handleClick(hit: RayHit | null): void {
    if (!hit) return

    if ((hit.kind === 'building' || hit.kind === 'marker') && hit.projectId) {
      this.selectProject(hit.projectId)
      return
    }

    if (hit.kind === 'city' && hit.cityId) {
      this.selectCity(hit.cityId)
      return
    }

    if (hit.kind === 'region') {
      this.selectRegion(hit.regionId)
    }
  }

  private applyRegionFocus(
    regionId: RegionId,
    projectId: string | null = null,
    cityId: string | null = null,
  ): void {
    this.regionLayer.setSelection(regionId)
    this.regionLayer.setLabelEmphasis(regionId)
    this.roadLayer.setEmphasis(regionId)
    this.cityLayer.setActiveRegion(regionId)
    this.cityLayer.setActiveCity(cityId)
    this.cityLayer.setSelection(projectId)
    this.labelManager.setSelectedRegion(regionId)
    this.labelManager.setSelectedCity(cityId)
    this.labelManager.setProjectLabelsVisible(true)
  }

  selectRegion(regionId: RegionId): void {
    const region = getRegion(regionId)
    if (!region) return

    this.cameraManager.cancelTransition()
    this.selectionManager.selectRegion(regionId)
    this.applyRegionFocus(regionId)
    this.labelManager.setSelectedProject(null)
    this.cameraManager.focusRegion(region)
  }

  selectCity(cityId: string): void {
    const city = getCity(cityId)
    if (!city) return
    const region = getRegion(city.regionId)
    if (!region) return

    this.cameraManager.cancelTransition()
    this.selectionManager.selectCity(city.regionId, city.id)
    this.applyRegionFocus(city.regionId, null, city.id)
    this.labelManager.setSelectedProject(null)

    const focus = this.cityLayer.getCityFocus(city.id)
    if (focus) {
      this.cameraManager.focusPoint(focus.position, focus.distance)
      return
    }

    this.cameraManager.focusRegion(region)
  }

  selectProject(projectId: string): void {
    const project = getProjectById(projectId)
    if (!project) return
    const region = getRegion(project.regionId)
    if (!region) return
    const city = getCityForProject(projectId)

    this.cameraManager.cancelTransition()
    this.selectionManager.selectProject(project.regionId, projectId, city?.id ?? null)
    this.applyRegionFocus(project.regionId, projectId, city?.id ?? null)
    this.labelManager.setSelectedProject(projectId, project.title)

    const focus = this.cityLayer.getProjectFocus(projectId)
    if (focus) {
      this.cameraManager.focusPoint(focus.position, focus.distance)
      return
    }

    this.cameraManager.focusRegion(region)
  }

  goUp(): void {
    const selection = this.selectionManager.current

    if (selection.mode === 'project') {
      if (selection.cityId) {
        this.selectCity(selection.cityId)
        return
      }
      if (selection.regionId) this.selectRegion(selection.regionId)
      return
    }

    if (selection.mode === 'city') {
      if (selection.regionId) this.selectRegion(selection.regionId)
      return
    }

    if (selection.mode === 'region') {
      this.goOverview()
    }
  }

  goOverview(): void {
    this.cameraManager.cancelTransition()
    this.selectionManager.goOverview()
    this.regionLayer.setSelection(null)
    this.regionLayer.setLabelEmphasis(null)
    this.roadLayer.setEmphasis(null)
    this.cityLayer.setActiveRegion(null)
    this.cityLayer.setActiveCity(null)
    this.cityLayer.setSelection(null)
    this.cityLayer.setHoveredCity(null)
    this.labelManager.setSelectedRegion(null)
    this.labelManager.setSelectedCity(null)
    this.labelManager.setProjectLabelsVisible(false)
    this.cityLayer.setHover(null)
    this.regionLayer.setHover(null)
    this.hover = { regionId: null, projectId: null }
    this.callbacks.onHoverChange?.(this.hover)
    this.cameraManager.animateTo(overviewView, 1.9)
  }

  zoomIn(): void {
    this.cameraManager.zoomBy(0.82)
  }

  zoomOut(): void {
    this.cameraManager.zoomBy(1.22)
  }

  resetView(): void {
    this.goOverview()
  }

  panBy(deltaX: number, deltaZ: number): void {
    this.cameraManager.panBy(deltaX, deltaZ)
  }

  focusNextRegion(direction: 1 | -1): void {
    const currentIndex = regions.findIndex(
      (region) => region.id === this.selectionManager.current.regionId,
    )
    const base = currentIndex >= 0 ? currentIndex : 0
    const nextIndex = (base + direction + regions.length) % regions.length
    const next = regions[nextIndex]
    if (next) this.selectRegion(next.id)
  }

  resize(width: number, height: number): void {
    const actualWidth = Math.max(this.options.container.clientWidth || width, 1)
    const actualHeight = Math.max(this.options.container.clientHeight || height, 1)
    this.cameraManager.resize(actualWidth, actualHeight)
    this.renderManager.setSize(actualWidth, actualHeight, this.options.quality)
    this.labelManager.resize(actualWidth, actualHeight)
  }

  get selection(): MapSelection {
    return this.selectionManager.current
  }

  throwError(error: unknown): void {
    const normalized = error instanceof Error ? error : new Error(String(error))
    this.callbacks.onError?.(normalized)
  }

  dispose(): void {
    if (this.disposed) return
    this.disposed = true

    cancelAnimationFrame(this.frameId)
    this.resizeObserver?.disconnect()
    this.intersectionObserver?.disconnect()
    this.raycastManager.dispose()
    this.labelManager.dispose()
    this.regionLayer.dispose()
    this.roadLayer.dispose()
    this.cityLayer.dispose()
    this.vegetationLayer.dispose()
    this.terrainLayer.dispose()
    this.cameraManager.dispose()
    this.renderManager.dispose()
    this.sceneManager.dispose()
  }
}
