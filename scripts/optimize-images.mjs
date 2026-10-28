// Converts screenshots/mockups to resized WebP files in public/images
// and records their dimensions in app/data/image-sizes.json (used to prevent layout shift).
// Usage: npm run images -- <folder with original images>
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const sourceDir = process.argv[2]
if (!sourceDir) {
  console.error('Usage: npm run images -- <folder with original images>')
  process.exit(1)
}

const outDir = path.resolve('public/images')
const sizesFile = path.resolve('app/data/image-sizes.json')

const maxWidth = (name) => (name.includes('mockup') || name === 'portfolio' ? 1400 : 1600)

await mkdir(outDir, { recursive: true })
// Keep the sizes of images converted earlier
const sizes = JSON.parse(await readFile(sizesFile, 'utf8').catch(() => '{}'))

for (const file of (await readdir(sourceDir)).sort()) {
  const ext = path.extname(file).toLowerCase()
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue
  const name = path.basename(file, path.extname(file)).toLowerCase()
  const { width, height } = await sharp(path.join(sourceDir, file))
    .resize({ width: maxWidth(name), withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: ext === '.png' ? 90 : 100 })
    .toFile(path.join(outDir, `${name}.webp`))
  sizes[name] = [width, height]
  console.log(`${file} -> ${name}.webp (${width}x${height})`)
}

const sorted = Object.fromEntries(Object.entries(sizes).sort(([a], [b]) => a.localeCompare(b)))
await writeFile(sizesFile, JSON.stringify(sorted, null, 2) + '\n')
