import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputDirectory = path.join(root, 'public', 'images', 'projects')

const targets = [
  { id: 'elizabeth', url: 'https://elizabeth-page.netlify.app/' },
  { id: 'mayte', url: 'https://maytemontero.com/' },
  { id: 'tracking', url: 'https://tracking-landing.netlify.app/#cta' },
]

const viewport = { width: 1440, height: 900 }
const scrollStops = [0, 0.34, 0.62, 0.86]

async function dismissOverlays(page) {
  const candidates = [
    /aceptar/i,
    /accept/i,
    /entendido/i,
    /got it/i,
    /cerrar/i,
    /close/i,
  ]

  for (const pattern of candidates) {
    const button = page.getByRole('button', { name: pattern }).first()
    if (await button.count()) {
      try {
        await button.click({ timeout: 1200 })
        await page.waitForTimeout(350)
        return
      } catch {
        // The overlay may be decorative or blocked; continue without failing.
      }
    }
  }
}

async function captureTarget(browser, target) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 })
  const failures = []

  try {
    await page.goto(target.url, { waitUntil: 'networkidle', timeout: 60000 })
    await page.waitForTimeout(1800)
    await page.evaluate(() => document.fonts.ready)
    await dismissOverlays(page)

    const positions = []
    for (const stop of scrollStops) {
      await page.evaluate((ratio) => {
        const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0)
        window.scrollTo({ top: Math.round(max * ratio), behavior: 'instant' })
      }, stop)
      await page.waitForTimeout(1200)
      const buffer = await page.screenshot({ type: 'png', animations: 'disabled' })
      positions.push(buffer)
    }

    const [coverSource, ...gallerySources] = positions
    const cover = await sharp(coverSource)
      .resize(1440, 900, { fit: 'cover', position: 'top', withoutEnlargement: true })
      .webp({ quality: 84 })
      .toBuffer()
    await writeFile(path.join(outputDirectory, `${target.id}-cover.webp`), cover)

    for (const [index, source] of gallerySources.entries()) {
      const galleryImage = await sharp(source)
        .resize(1200, 750, { fit: 'cover', position: 'top', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer()
      await writeFile(
        path.join(outputDirectory, `${target.id}-${String(index + 1).padStart(2, '0')}.webp`),
        galleryImage,
      )
    }

    console.log(`✓ ${target.id}: capturas reales guardadas`)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    failures.push({ id: target.id, message })
    console.error(`✗ ${target.id}: ${message}`)
  } finally {
    await page.close()
  }

  return failures
}

await mkdir(outputDirectory, { recursive: true })

const browser = await chromium.launch({ channel: 'chrome', headless: true })
const failures = []

for (const target of targets) {
  failures.push(...(await captureTarget(browser, target)))
}

await browser.close()

if (failures.length) {
  console.error(`\n${failures.length} captura(s) fallaron. Las imágenes existentes no se modificaron.`)
  process.exitCode = 1
} else {
  console.log('\nCapturas completadas.')
}
