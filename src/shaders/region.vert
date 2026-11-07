varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
varying vec3 vLocalPosition;

void main() {
  vLocalPosition = position;
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
