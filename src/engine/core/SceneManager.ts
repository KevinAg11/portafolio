import * as THREE from 'three'
import type { QualityProfile } from '@/types/portfolio'
import { FOG_COLOR, FOG_FAR, FOG_NEAR, SKY_COLOR } from '@/engine/theme'

export interface SceneGroups {
  terrain: THREE.Group
  roads: THREE.Group
  regions: THREE.Group
  structures: THREE.Group
  markers: THREE.Group
  vegetation: THREE.Group
}

export class SceneManager {
  readonly scene = new THREE.Scene()
  readonly groups: SceneGroups = {
    terrain: new THREE.Group(),
    roads: new THREE.Group(),
    regions: new THREE.Group(),
    structures: new THREE.Group(),
    markers: new THREE.Group(),
    vegetation: new THREE.Group(),
  }

  private readonly disposables: Array<THREE.Object3D> = []

  constructor(quality: QualityProfile) {
    this.scene.background = new THREE.Color(SKY_COLOR)
    this.scene.fog = new THREE.Fog(FOG_COLOR, FOG_NEAR, FOG_FAR)

    this.groups.terrain.name = 'terrain'
    this.groups.roads.name = 'roads'
    this.groups.regions.name = 'regions'
    this.groups.structures.name = 'structures'
    this.groups.markers.name = 'markers'
    this.groups.vegetation.name = 'vegetation'

    for (const group of Object.values(this.groups)) {
      this.scene.add(group)
      this.disposables.push(group)
    }

    this.setupLights(quality)
  }

  private setupLights(quality: QualityProfile): void {
    const hemisphere = new THREE.HemisphereLight('#e8f6ff', '#586a45', 1.25)
    hemisphere.position.set(0, 70, 0)
    this.scene.add(hemisphere)
    this.disposables.push(hemisphere)

    const ambient = new THREE.AmbientLight('#ffffff', 0.22)
    this.scene.add(ambient)
    this.disposables.push(ambient)

    const sun = new THREE.DirectionalLight('#fff2d2', 2.15)
    sun.position.set(-48, 74, 36)
    if (quality.shadows) {
      sun.castShadow = true
      sun.shadow.mapSize.set(
        quality.tier === 'high' ? 2048 : 1024,
        quality.tier === 'high' ? 2048 : 1024,
      )
      sun.shadow.camera.left = -88
      sun.shadow.camera.right = 88
      sun.shadow.camera.top = 88
      sun.shadow.camera.bottom = -88
      sun.shadow.camera.near = 12
      sun.shadow.camera.far = 210
      sun.shadow.bias = -0.0004
      sun.shadow.normalBias = 0.025
    }
    this.scene.add(sun)
    this.disposables.push(sun)

    const fill = new THREE.DirectionalLight('#bcd9ff', 0.42)
    fill.position.set(34, 26, -42)
    this.scene.add(fill)
    this.disposables.push(fill)
  }

  add(object: THREE.Object3D, group: keyof SceneGroups = 'structures'): void {
    this.groups[group].add(object)
  }

  dispose(): void {
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) {
        object.geometry?.dispose()
        const material = object.material
        if (Array.isArray(material)) {
          material.forEach((entry) => entry.dispose())
        } else {
          material?.dispose()
        }
      }
    })

    for (const object of this.disposables) {
      this.scene.remove(object)
    }

    this.disposables.length = 0
    this.scene.clear()
  }
}
