import * as THREE from 'three'
import roadsVertexShader from '@/shaders/roads.vert?raw'
import roadsFragmentShader from '@/shaders/roads.frag?raw'

export interface RoadMaterialOptions {
  color: string
  highlight?: string
  offset?: number
  speed?: number
  opacity?: number
}

export function createRoadMaterial(options: RoadMaterialOptions): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: roadsVertexShader,
    fragmentShader: roadsFragmentShader,
    uniforms: {
      uColor: { value: new THREE.Color(options.color) },
      uHighlight: { value: new THREE.Color(options.highlight ?? '#bae6fd') },
      uFogColor: { value: new THREE.Color('#080B12') },
      uFogNear: { value: 78 },
      uFogFar: { value: 210 },
      uTime: { value: 0 },
      uOffset: { value: options.offset ?? 0 },
      uSpeed: { value: options.speed ?? 0.16 },
      uOpacity: { value: options.opacity ?? 0.9 },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  })
}
