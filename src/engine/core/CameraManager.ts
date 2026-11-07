import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import gsap from 'gsap'
import type { CameraView, MapRegion, Vec3 } from '@/types/portfolio'
import { clamp } from '@/utils/math'

const PAN_LIMIT = 54

function toVector3(value: Vec3): THREE.Vector3 {
  return new THREE.Vector3(value.x, value.y, value.z)
}

function quadraticBezier(
  start: THREE.Vector3,
  control: THREE.Vector3,
  end: THREE.Vector3,
  t: number,
): THREE.Vector3 {
  const inverse = 1 - t
  return new THREE.Vector3(
    inverse * inverse * start.x + 2 * inverse * t * control.x + t * t * end.x,
    inverse * inverse * start.y + 2 * inverse * t * control.y + t * t * end.y,
    inverse * inverse * start.z + 2 * inverse * t * control.z + t * t * end.z,
  )
}

export class CameraManager {
  readonly camera: THREE.PerspectiveCamera
  readonly controls: OrbitControls
  onTransitionChange?: (active: boolean) => void

  private activeTween: gsap.core.Tween | null = null
  private readonly reducedMotion: boolean

  constructor(domElement: HTMLElement, aspect: number, reducedMotion: boolean) {
    this.reducedMotion = reducedMotion
    this.camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 420)
    this.camera.position.set(0, 62, 62)

    this.controls = new OrbitControls(this.camera, domElement)
    this.controls.target.set(0, 0, 0)
    this.controls.enableRotate = false
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.075
    this.controls.enablePan = true
    this.controls.screenSpacePanning = false
    this.controls.panSpeed = 0.85
    this.controls.zoomSpeed = 0.9
    this.controls.minDistance = 16
    this.controls.maxDistance = 138
    this.controls.minPolarAngle = Math.PI * 0.29
    this.controls.maxPolarAngle = Math.PI * 0.42
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN,
    }
    this.controls.touches = {
      ONE: THREE.TOUCH.PAN,
      TWO: THREE.TOUCH.DOLLY_PAN,
    }
    this.controls.update()
  }

  get isTransitioning(): boolean {
    return this.activeTween !== null
  }

  update(): void {
    this.controls.update()
    this.controls.target.x = clamp(this.controls.target.x, -PAN_LIMIT, PAN_LIMIT)
    this.controls.target.z = clamp(this.controls.target.z, -PAN_LIMIT, PAN_LIMIT)
    this.controls.target.y = clamp(this.controls.target.y, 0, 8)
  }

  private beginTransition(): void {
    this.controls.enabled = false
    this.onTransitionChange?.(true)
  }

  private endTransition(): void {
    this.activeTween = null
    this.controls.enabled = true
    this.controls.update()
    this.onTransitionChange?.(false)
  }

  cancelTransition(): void {
    if (!this.activeTween) return
    this.activeTween.kill()
    this.endTransition()
  }

  animateTo(view: CameraView, duration = 1.8): void {
    this.cancelTransition()

    const endPosition = toVector3(view.position)
    const endTarget = toVector3(view.target)

    if (this.reducedMotion) {
      this.camera.position.copy(endPosition)
      this.controls.target.copy(endTarget)
      this.controls.update()
      return
    }

    const startPosition = this.camera.position.clone()
    const startTarget = this.controls.target.clone()
    const control = startPosition.clone().add(endPosition).multiplyScalar(0.5)
    control.y = Math.max(startPosition.y, endPosition.y) + Math.min(16, startPosition.distanceTo(endPosition) * 0.16)

    const progress = { value: 0 }
    this.beginTransition()

    this.activeTween = gsap.to(progress, {
      value: 1,
      duration,
      ease: 'power3.inOut',
      onUpdate: () => {
        this.camera.position.copy(
          quadraticBezier(startPosition, control, endPosition, progress.value),
        )
        this.controls.target.lerpVectors(startTarget, endTarget, progress.value)
        this.camera.lookAt(this.controls.target)
      },
      onComplete: () => {
        this.endTransition()
      },
    })
  }

  focusRegion(region: MapRegion): void {
    this.animateTo(
      {
        position: region.cameraPosition,
        target: region.cameraTarget,
      },
      1.9,
    )
  }

  focusPoint(position: Vec3, distance = 22): void {
    const target = toVector3(position)
    const offset = distance * 0.72
    this.animateTo(
      {
        position: {
          x: target.x,
          y: target.y + offset,
          z: target.z + offset,
        },
        target: {
          x: target.x,
          y: target.y,
          z: target.z,
        },
      },
      1.5,
    )
  }

  zoomBy(factor: number): void {
    const offset = this.camera.position.clone().sub(this.controls.target)
    const distance = clamp(
      offset.length() * factor,
      this.controls.minDistance,
      this.controls.maxDistance,
    )
    offset.setLength(distance)
    this.camera.position.copy(this.controls.target).add(offset)
    this.controls.update()
  }

  panBy(deltaX: number, deltaZ: number): void {
    this.cancelTransition()
    const forward = new THREE.Vector3()
    this.camera.getWorldDirection(forward)
    forward.y = 0
    forward.normalize()
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize()

    this.controls.target.addScaledVector(right, deltaX)
    this.controls.target.addScaledVector(forward, -deltaZ)
    this.camera.position.addScaledVector(right, deltaX)
    this.camera.position.addScaledVector(forward, -deltaZ)
    this.controls.update()
  }

  resize(width: number, height: number): void {
    this.camera.aspect = width / Math.max(height, 1)
    this.camera.updateProjectionMatrix()
  }

  dispose(): void {
    this.cancelTransition()
    this.controls.dispose()
  }
}
