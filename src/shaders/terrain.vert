varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
varying float vHeight;

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  vHeight = worldPosition.y;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
