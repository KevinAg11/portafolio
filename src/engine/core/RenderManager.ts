import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import type { QualityProfile } from '@/types/portfolio'

export class RenderManager {
  readonly renderer: THREE.WebGLRenderer
  private composer: EffectComposer | null = null
  private bloomPass: UnrealBloomPass | null = null
  private width = 1
  private height = 1

  constructor(canvas: HTMLCanvasElement, quality: QualityProfile) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: quality.tier !== 'low',
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
    })
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.02
    this.renderer.shadowMap.enabled = quality.shadows
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.renderer.setPixelRatio(quality.pixelRatio)
  }

  setupPostProcessing(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    quality: QualityProfile,
  ): void {
    if (!quality.bloom) return

    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(scene, camera))

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.width, this.height),
      0.62,
      0.55,
      0.86,
    )
    this.composer.addPass(this.bloomPass)
    this.composer.addPass(new OutputPass())
    this.composer.setSize(this.width, this.height)
  }

  setSize(width: number, height: number, quality: QualityProfile): void {
    this.width = Math.max(width, 1)
    this.height = Math.max(height, 1)
    this.renderer.setPixelRatio(quality.pixelRatio)
    this.renderer.setSize(this.width, this.height, false)
    this.composer?.setSize(this.width, this.height)
  }

  render(scene: THREE.Scene, camera: THREE.PerspectiveCamera): void {
    if (this.composer) {
      this.composer.render()
    } else {
      this.renderer.render(scene, camera)
    }
  }

  dispose(): void {
    this.composer?.dispose()
    this.composer = null
    this.bloomPass = null
    this.renderer.dispose()
    this.renderer.forceContextLoss()
  }
}
