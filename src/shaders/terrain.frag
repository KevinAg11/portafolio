uniform vec3 uGrassLow;
uniform vec3 uGrassHigh;
uniform vec3 uGrassDry;
uniform vec3 uDirt;
uniform vec3 uRock;
uniform vec3 uContourColor;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uSunDirection;
uniform float uTime;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
varying float vHeight;

float terrainHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float terrainNoise(vec2 p) {
  vec2 cell = floor(p);
  vec2 local = fract(p);
  local = local * local * (3.0 - 2.0 * local);

  float a = terrainHash(cell);
  float b = terrainHash(cell + vec2(1.0, 0.0));
  float c = terrainHash(cell + vec2(0.0, 1.0));
  float d = terrainHash(cell + vec2(1.0, 1.0));

  return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
}

float fbmTerrain(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int index = 0; index < 4; index += 1) {
    value += terrainNoise(p) * amplitude;
    p *= 2.03;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec3 normal = normalize(vWorldNormal);
  float diffuse = max(dot(normal, normalize(uSunDirection)), 0.0);
  float slope = 1.0 - clamp(normal.y, 0.0, 1.0);

  float broad = fbmTerrain(vWorldPosition.xz * 0.045);
  float detail = fbmTerrain(vWorldPosition.xz * 0.22);
  float heightMix = smoothstep(0.5, 13.0, vHeight);
  float dryMix = smoothstep(0.55, 0.92, broad) * 0.45;

  vec3 grass = mix(uGrassLow, uGrassHigh, clamp(heightMix * 0.7 + broad * 0.45, 0.0, 1.0));
  grass = mix(grass, uGrassDry, dryMix);

  float dirtMask = smoothstep(0.34, 0.68, slope) * 0.75 + smoothstep(0.68, 0.9, detail) * 0.08;
  vec3 color = mix(grass, uDirt, clamp(dirtMask, 0.0, 1.0));

  float rockMask = smoothstep(0.5, 0.86, slope) + smoothstep(10.5, 17.0, vHeight) * 0.75;
  color = mix(color, uRock, clamp(rockMask, 0.0, 1.0));

  color *= 0.52 + diffuse * 0.72;
  color += vec3(0.03, 0.045, 0.02) * broad;

  float contour = abs(fract(vHeight * 1.35) - 0.5);
  contour = 1.0 - smoothstep(0.0, 0.055, contour);
  color += uContourColor * contour * 0.12 * (1.0 - slope);

  float distanceToCamera = distance(cameraPosition, vWorldPosition);
  float fogFactor = smoothstep(uFogNear, uFogFar, distanceToCamera);
  color = mix(color, uFogColor, fogFactor);

  gl_FragColor = vec4(color, 1.0);
}
