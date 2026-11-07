export const FALLBACK_PROJECT_IMAGE = '/images/projects/fallback.svg'

export function handleImageError(event: Event): void {
  const image = event.target
  if (!(image instanceof HTMLImageElement)) return
  if (image.src.endsWith('fallback.svg')) return
  image.src = FALLBACK_PROJECT_IMAGE
}
