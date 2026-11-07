import * as THREE from 'three'
import type { RegionId } from '@/types/portfolio'

export interface RayHit {
  kind: 'region' | 'city' | 'building' | 'marker'
  regionId: RegionId
  cityId?: string
  projectId?: string
  object: THREE.Object3D
}

interface RaycastCallbacks {
  getObjects: () => THREE.Object3D[]
  onHover: (hit: RayHit | null) => void
  onClick: (hit: RayHit | null) => void
  onPointerDown?: () => void
}

function resolveHit(object: THREE.Object3D): RayHit | null {
  let current: THREE.Object3D | null = object

  while (current) {
    const data = current.userData as {
      kind?: string
      regionId?: RegionId
      cityId?: string
      projectId?: string
    }

    if (
      (data.kind === 'building' || data.kind === 'marker') &&
      data.projectId &&
      data.regionId
    ) {
      return {
        kind: data.kind,
        regionId: data.regionId,
        projectId: data.projectId,
        object: current,
      }
    }

    if (data.kind === 'city' && data.cityId && data.regionId) {
      return {
        kind: 'city',
        regionId: data.regionId,
        cityId: data.cityId,
        object: current,
      }
    }

    if (data.kind === 'region' && data.regionId) {
      return {
        kind: 'region',
        regionId: data.regionId,
        object: current,
      }
    }

    current = current.parent
  }

  return null
}

export class RaycastManager {
  private readonly raycaster = new THREE.Raycaster()
  private readonly pointer = new THREE.Vector2()
  private readonly callbacks: RaycastCallbacks
  private downPosition = { x: 0, y: 0 }
  private downTime = 0
  private pointerInside = false

  constructor(
    private readonly camera: THREE.PerspectiveCamera,
    private readonly domElement: HTMLElement,
    callbacks: RaycastCallbacks,
  ) {
    this.callbacks = callbacks
    this.domElement.addEventListener('pointermove', this.handlePointerMove)
    this.domElement.addEventListener('pointerdown', this.handlePointerDown)
    this.domElement.addEventListener('pointerup', this.handlePointerUp)
    this.domElement.addEventListener('pointerleave', this.handlePointerLeave)
    this.domElement.addEventListener('pointercancel', this.handlePointerLeave)
  }

  private updatePointer(event: PointerEvent): void {
    const rect = this.domElement.getBoundingClientRect()
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  }

  private pick(): RayHit | null {
    const objects = this.callbacks.getObjects()
    if (objects.length === 0) return null

    this.raycaster.setFromCamera(this.pointer, this.camera)
    const intersections = this.raycaster.intersectObjects(objects, true)

    let cityHit: RayHit | null = null
    let regionHit: RayHit | null = null

    for (const intersection of intersections) {
      const hit = resolveHit(intersection.object)
      if (!hit) continue
      if (hit.kind === 'building' || hit.kind === 'marker') return hit
      if (hit.kind === 'city') {
        if (!cityHit) cityHit = hit
        continue
      }
      if (!regionHit) regionHit = hit
    }

    return cityHit ?? regionHit
  }

  private handlePointerMove = (event: PointerEvent): void => {
    if (event.pointerType !== 'mouse') return
    this.pointerInside = true
    this.updatePointer(event)
    const hit = this.pick()
    this.callbacks.onHover(hit)
    this.domElement.style.cursor = hit ? 'pointer' : 'grab'
  }

  private handlePointerDown = (event: PointerEvent): void => {
    this.downPosition = { x: event.clientX, y: event.clientY }
    this.downTime = performance.now()
    this.callbacks.onPointerDown?.()
  }

  private handlePointerUp = (event: PointerEvent): void => {
    const moved = Math.hypot(
      event.clientX - this.downPosition.x,
      event.clientY - this.downPosition.y,
    )
    const elapsed = performance.now() - this.downTime
    if (moved > 7 || elapsed > 900) return

    this.updatePointer(event)
    this.callbacks.onClick(this.pick())
  }

  private handlePointerLeave = (): void => {
    if (!this.pointerInside) return
    this.pointerInside = false
    this.callbacks.onHover(null)
    this.domElement.style.cursor = 'grab'
  }

  setEnabled(enabled: boolean): void {
    this.domElement.style.pointerEvents = enabled ? 'auto' : 'none'
  }

  dispose(): void {
    this.domElement.removeEventListener('pointermove', this.handlePointerMove)
    this.domElement.removeEventListener('pointerdown', this.handlePointerDown)
    this.domElement.removeEventListener('pointerup', this.handlePointerUp)
    this.domElement.removeEventListener('pointerleave', this.handlePointerLeave)
    this.domElement.removeEventListener('pointercancel', this.handlePointerLeave)
  }
}
