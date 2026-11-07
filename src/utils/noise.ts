function hash2D(x: number, y: number): number {
  let h = x * 374761393 + y * 668265263
  h = (h ^ (h >>> 13)) * 1274126177
  h = h ^ (h >>> 16)
  return (h >>> 0) / 4294967295
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t)
}

export function valueNoise(x: number, y: number): number {
  const xi = Math.floor(x)
  const yi = Math.floor(y)
  const xf = x - xi
  const yf = y - yi

  const topLeft = hash2D(xi, yi)
  const topRight = hash2D(xi + 1, yi)
  const bottomLeft = hash2D(xi, yi + 1)
  const bottomRight = hash2D(xi + 1, yi + 1)

  const u = smoothstep(xf)
  const v = smoothstep(yf)

  const top = topLeft + (topRight - topLeft) * u
  const bottom = bottomLeft + (bottomRight - bottomLeft) * u

  return top + (bottom - top) * v
}

export function fbm(x: number, y: number, octaves = 4): number {
  let value = 0
  let amplitude = 0.5
  let frequency = 1
  let total = 0

  for (let i = 0; i < octaves; i += 1) {
    value += valueNoise(x * frequency, y * frequency) * amplitude
    total += amplitude
    amplitude *= 0.5
    frequency *= 2.03
  }

  return value / total
}
