export function isSafeExternalUrl(value: string | undefined | null): boolean {
  if (!value) return false
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

export const externalLinkAttrs = {
  target: '_blank',
  rel: 'noopener noreferrer nofollow',
}
