import * as THREE from 'three'
import terrainVertexShader from '@/shaders/terrain.vert?raw'
import terrainFragmentShader from '@/shaders/terrain.frag?raw'
import { FOG_COLOR, FOG_FAR, FOG_NEAR, SUN_DIRECTION } from '@/engine/theme'

export function createTerrainMaterial(): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: terrainVertexShader,
    fragmentShader: terrainFragmentShader,
    uniforms: {
      uGrassLow: { value: new THREE.Color('#4d7f3f') },
      uGrassHigh: { value: new THREE.Color('#7da85a') },
      uGrassDry: { value: new THREE.Color('#9a9a5f') },
      uDirt: { value: new THREE.Color('#7b6749') },
      uRock: { value: new THREE.Color('#8c877c') },
      uContourColor: { value: new THREE.Color('#3c6537') },
      uFogColor: { value: new THREE.Color(FOG_COLOR) },
      uFogNear: { value: FOG_NEAR },
      uFogFar: { value: FOG_FAR },
      uSunDirection: {
        value: new THREE.Vector3(SUN_DIRECTION.x, SUN_DIRECTION.y, SUN_DIRECTION.z).normalize(),
      },
      uTime: { value: 0 },
    },
  })
}
