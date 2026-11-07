uniform vec3 uColor;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uTime;
uniform float uHover;
uniform float uSelected;
uniform float uDim;
uniform float uIntro;
uniform float uOpacity;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
varying vec3 vLocalPosition;

float regionHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float regionNoise(vec2 p) {
  vec2 cell = floor(p);
  vec2 local = fract(p);
  local = local * local * (3.0 - 2.0 * local);

  float a = regionHash(cell);
  float b = regionHash(cell + vec2(1.0, 0.0));
  float c = regionHash(cell + vec2(0.0, 1.0));
  float d = regionHash(cell + vec2(1.0, 1.0));

  return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
}

void main() {
  vec3 normal = normalize(vWorldNormal);
  vec3 lightDirection = normalize(vec3(-0.42, 0.82, 0.38));
  float diffuse = max(dot(normal, lightDirection), 0.0);
  float topMask = smoothstep(0.5, 1.0, normal.y);

  float variation = regionNoise(vWorldPosition.xz * 0.18) * 0.65 +
    regionNoise(vWorldPosition.xz * 0.55) * 0.35;
  vec3 natural = mix(vec3(0.2, 0.33, 0.17), vec3(0.38, 0.52, 0.27), variation);

  float identity = 0.36 + uHover * 0.12 + uSelected * 0.16;
  vec3 color = mix(natural, uColor, identity);
  color += uColor * (uHover * 0.16 + uSelected * 0.24) * (0.45 + variation * 0.55);
  color *= 0.68 + diffuse * 0.48 + topMask * 0.12;
  color *= 1.0 - uDim * 0.45;

  float alpha = (uOpacity + uHover * 0.1 + uSelected * 0.14) *
    (0.72 + topMask * 0.28) *
    clamp(uIntro, 0.0, 1.0) *
    (1.0 - uDim * 0.42);

  float distanceToCamera = distance(cameraPosition, vWorldPosition);
  float fogFactor = smoothstep(uFogNear, uFogFar, distanceToCamera);
  color = mix(color, uFogColor, fogFactor);
  alpha *= 1.0 - fogFactor * 0.65;

  gl_FragColor = vec4(color, alpha);
}
