import * as THREE from 'three'
import { CSS2DObject, CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js'
import gsap from 'gsap'
import type { MapCity, MapRegion, Project, RegionId } from '@/types/portfolio'
import { terrainHeight } from '@/engine/terrain/height'

interface RegionLabel {
  regionId: RegionId
  object: CSS2DObject
  element: HTMLDivElement
}

interface CityLabel {
  cityId: string
  regionId: RegionId
  object: CSS2DObject
  element: HTMLDivElement
}

interface ProjectLabel {
  projectId: string
  object: CSS2DObject
  element: HTMLDivElement
}

export class LabelManager {
  private readonly renderer: CSS2DRenderer
  private readonly regionLabels = new Map<RegionId, RegionLabel>()
  private readonly cityLabels = new Map<string, CityLabel>()
  private readonly projectLabels = new Map<string, ProjectLabel>()
  private selectedRegionId: RegionId | null = null
  private selectedCityId: string | null = null

  constructor(
    container: HTMLElement,
    private readonly scene: THREE.Scene,
    regions: MapRegion[],
    cities: MapCity[],
    projects: Project[],
    private readonly instant = false,
  ) {
    this.renderer = new CSS2DRenderer()
    this.renderer.domElement.className = 'label-layer'
    Object.assign(this.renderer.domElement.style, {
      position: 'absolute',
      inset: '0',
      pointerEvents: 'none',
      overflow: 'hidden',
    })
    container.appendChild(this.renderer.domElement)

    for (const region of regions) {
      const element = document.createElement('div')
      element.className = 'region-name'
      element.textContent = region.name
      element.style.opacity = this.instant ? '1' : '0'

      const object = new CSS2DObject(element)
      object.position.set(
        region.position.x,
        terrainHeight(region.position.x, region.position.z) + 2.6,
        region.position.z,
      )
      this.scene.add(object)
      this.regionLabels.set(region.id, { regionId: region.id, object, element })
    }

    for (const city of cities) {
      const element = document.createElement('div')
      element.className = 'city-name'
      element.textContent = city.name
      element.style.opacity = '0'

      const object = new CSS2DObject(element)
      object.position.set(
        city.position.x,
        terrainHeight(city.position.x, city.position.z) + 8,
        city.position.z,
      )
      object.visible = false
      this.scene.add(object)
      this.cityLabels.set(city.id, {
        cityId: city.id,
        regionId: city.regionId,
        object,
        element,
      })
    }

    for (const project of projects) {
      const region = regions.find((entry) => entry.id === project.regionId)
      if (!region) continue

      const element = document.createElement('div')
      element.className = 'marker-label'
      element.textContent = project.title
      element.style.opacity = '0'
      element.style.transition = 'opacity 220ms ease'

      const object = new CSS2DObject(element)
      object.position.set(
        region.position.x,
        terrainHeight(region.position.x, region.position.z) + 3.15,
        region.position.z,
      )
      object.visible = false
      this.scene.add(object)
      this.projectLabels.set(project.id, { projectId: project.id, object, element })
    }
  }

  playIntro(): void {
    if (this.instant) return
    const labels = [...this.regionLabels.values()]
    labels.forEach((label, index) => {
      gsap.fromTo(
        label.element,
        { opacity: 0, y: 6 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1 + index * 0.1,
          ease: 'power2.out',
        },
      )
    })
  }

  setProjectLabelsVisible(visible: boolean): void {
    for (const label of this.projectLabels.values()) {
      label.object.visible = visible
      if (!visible) label.element.style.opacity = '0'
    }
  }

  setHoveredProject(projectId: string | null): void {
    for (const [id, label] of this.projectLabels) {
      const active = id === projectId
      label.object.visible = active
      label.element.style.opacity = active ? '1' : '0'
    }
  }

  setSelectedRegion(regionId: RegionId | null): void {
    this.selectedRegionId = regionId
    this.selectedCityId = null

    for (const [id, label] of this.regionLabels) {
      const visible = regionId === null || id === regionId
      gsap.to(label.element, {
        opacity: visible ? (regionId === null ? 1 : 0.95) : 0.25,
        duration: 0.4,
        overwrite: true,
      })
    }

    for (const label of this.cityLabels.values()) {
      const visible = regionId !== null && label.regionId === regionId
      label.object.visible = visible
      gsap.to(label.element, {
        opacity: visible ? 0.82 : 0,
        duration: visible ? 0.45 : 0.25,
        overwrite: true,
      })
    }
  }

  setSelectedCity(cityId: string | null): void {
    this.selectedCityId = cityId

    for (const label of this.cityLabels.values()) {
      const visible =
        this.selectedRegionId !== null && label.regionId === this.selectedRegionId
      label.object.visible = visible
      const opacity = !visible
        ? 0
        : this.selectedCityId === null
          ? 0.82
          : label.cityId === this.selectedCityId
            ? 1
            : 0.42
      gsap.to(label.element, {
        opacity,
        duration: visible ? 0.32 : 0.2,
        overwrite: true,
      })
    }
  }

  setSelectedProject(projectId: string | null, title?: string): void {
    for (const [id, label] of this.projectLabels) {
      const active = id === projectId
      label.object.visible = active
      label.element.style.opacity = active ? '1' : '0'
      if (active && title) label.element.textContent = title
    }
  }

  updateProjectLabelPosition(projectId: string, position: THREE.Vector3): void {
    const label = this.projectLabels.get(projectId)
    if (!label) return
    label.object.position.copy(position).add(new THREE.Vector3(0, 1.15, 0))
  }

  resize(width: number, height: number): void {
    this.renderer.setSize(width, height)
  }

  render(camera: THREE.PerspectiveCamera): void {
    this.renderer.render(this.scene, camera)
  }

  dispose(): void {
    for (const label of this.regionLabels.values()) {
      this.scene.remove(label.object)
      label.element.remove()
    }
    for (const label of this.projectLabels.values()) {
      this.scene.remove(label.object)
      label.element.remove()
    }
    for (const label of this.cityLabels.values()) {
      this.scene.remove(label.object)
      label.element.remove()
    }
    this.regionLabels.clear()
    this.cityLabels.clear()
    this.projectLabels.clear()
    this.renderer.domElement.remove()
  }
}
