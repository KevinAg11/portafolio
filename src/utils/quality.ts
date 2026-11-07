import type { QualityProfile } from '@/types/portfolio'

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function supportsWebGL(): boolean {
  if (typeof document === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    const context =
      canvas.getContext('webgl2') ??
      canvas.getContext('webgl') ??
      canvas.getContext('experimental-webgl')
    return Boolean(context)
  } catch {
    return false
  }
}

export function detectQuality(): QualityProfile {
  if (typeof window === 'undefined') {
    return {
      tier: 'medium',
      pixelRatio: 1.25,
      bloom: false,
      shadows: true,
      terrainSegments: 140,
      structureDensity: 0.6,
      vegetationDensity: 0.8,
      treeVariants: 3,
      labelDensity: 0.8,
    }
  }

  const isMobile = window.matchMedia('(max-width: 768px)').matches
  const isTablet = window.matchMedia('(max-width: 1180px)').matches
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4
  const cores = navigator.hardwareConcurrency ?? 4
  const dpr = window.devicePixelRatio || 1

  if (isMobile || memory <= 3 || cores <= 3) {
    return {
      tier: 'low',
      pixelRatio: Math.min(dpr, 1.35),
      bloom: false,
      shadows: false,
      terrainSegments: 96,
      structureDensity: 0.32,
      vegetationDensity: 0.42,
      treeVariants: 2,
      labelDensity: 0.55,
    }
  }

  if (isTablet || memory <= 6 || cores <= 6) {
    return {
      tier: 'medium',
      pixelRatio: Math.min(dpr, 1.5),
      bloom: false,
      shadows: true,
      terrainSegments: 140,
      structureDensity: 0.6,
      vegetationDensity: 0.78,
      treeVariants: 3,
      labelDensity: 0.8,
    }
  }

  return {
    tier: 'high',
    pixelRatio: Math.min(dpr, 1.8),
    bloom: false,
    shadows: true,
    terrainSegments: 190,
    structureDensity: 1,
    vegetationDensity: 1,
    treeVariants: 3,
    labelDensity: 1,
  }
}
