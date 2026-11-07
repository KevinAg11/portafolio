uniform vec3 uColor;
uniform vec3 uHighlight;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uTime;
uniform float uOffset;
uniform float uSpeed;
uniform float uOpacity;

varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  float edge = smoothstep(0.0, 0.16, vUv.y) * smoothstep(1.0, 0.84, vUv.y);

  float flow = fract(vUv.x * 3.4 - uTime * uSpeed + uOffset);
  float dash = smoothstep(0.0, 0.08, flow) * smoothstep(0.42, 0.2, flow);
  float core = smoothstep(0.18, 0.5, flow) * smoothstep(0.82, 0.56, flow);

  vec3 color = mix(uColor, uHighlight, clamp(dash * 0.8 + core * 0.4, 0.0, 1.0));
  float alpha = (0.14 + dash * 0.5 + core * 0.22) * edge * uOpacity;

  float distanceToCamera = distance(cameraPosition, vWorldPosition);
  float fogFactor = smoothstep(uFogNear, uFogFar, distanceToCamera);
  alpha *= 1.0 - fogFactor;
  color = mix(color, uFogColor, fogFactor * 0.6);

  if (alpha < 0.005) discard;

  gl_FragColor = vec4(color, alpha);
}
