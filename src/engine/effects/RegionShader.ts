import * as THREE from 'three'
import regionVertexShader from '@/shaders/region.vert?raw'
import regionFragmentShader from '@/shaders/region.frag?raw'
import { FOG_COLOR, FOG_FAR, FOG_NEAR } from '@/engine/theme'

export function createRegionMaterial(color: string): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: regionVertexShader,
    fragmentShader: regionFragmentShader,
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uFogColor: { value: new THREE.Color(FOG_COLOR) },
      uFogNear: { value: FOG_NEAR },
      uFogFar: { value: FOG_FAR },
      uTime: { value: 0 },
      uHover: { value: 0 },
      uSelected: { value: 0 },
      uDim: { value: 0 },
      uIntro: { value: 1 },
      uOpacity: { value: 0.5 },
    },
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  })
}
