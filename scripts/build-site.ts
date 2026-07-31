import { build } from 'vite'
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { validateResumeVariant } from '../src/resume/variants/schema'

const ROOT = resolve(__dirname, '..')
const VARIANTS_DIR = resolve(ROOT, 'src', 'resume', 'variants')
const CONFIG_FILE = resolve(ROOT, 'vite.config.ts')
const OUT_BASE = resolve(ROOT, 'dist')
const OUT_VARIANT = resolve(ROOT, '.variant-build')

interface VariantEntry {
  id: string
}

/**
 * public variant만 대상으로, 유효하지 않은 variant.json은 건너뛰되
 * public으로 선언된 variant가 잘못된 경우에는 배포 누락을 방지하기 위해 실패시킨다.
 */
function listPublicVariants(): VariantEntry[] {
  if (!existsSync(VARIANTS_DIR)) return []
  const entries: VariantEntry[] = []
  for (const id of readdirSync(VARIANTS_DIR)) {
    const dir = resolve(VARIANTS_DIR, id)
    if (!statSync(dir).isDirectory()) continue
    const file = resolve(dir, 'variant.json')
    if (!existsSync(file)) continue

    let raw: unknown
    try {
      raw = JSON.parse(readFileSync(file, 'utf-8'))
    } catch (err) {
      console.warn(`[build-site] ${id}: variant.json 파싱 실패 — skip (${(err as Error).message})`)
      continue
    }

    const rawVisibility = (raw as { meta?: { visibility?: string } })?.meta?.visibility
    const result = validateResumeVariant(raw)
    if (!result.ok) {
      const message = `[build-site] ${id}: schema 오류\n  - ${result.errors.join('\n  - ')}`
      if (rawVisibility === 'public') {
        throw new Error(message)
      }
      console.warn(message)
      continue
    }
    if (result.variant.meta.visibility === 'public') {
      entries.push({ id: result.variant.id })
    }
  }
  return entries
}

async function main(): Promise<void> {
  // 1. base build (dist)
  delete process.env.VARIANT_ID
  await build({ configFile: CONFIG_FILE })
  console.log('[build-site] base build 완료 -> dist/')

  // 2. public variant build + dist/v/<id>/ 병합
  const variants = listPublicVariants()
  console.log(
    `[build-site] public variant: ${variants.length > 0 ? variants.map((v) => v.id).join(', ') : '(없음)'}`,
  )
  for (const { id } of variants) {
    process.env.VARIANT_ID = id
    const variantOut = resolve(OUT_VARIANT, id)
    rmSync(variantOut, { recursive: true, force: true })
    await build({ configFile: CONFIG_FILE, outDir: variantOut })
    const target = resolve(OUT_BASE, 'v', id)
    mkdirSync(target, { recursive: true })
    cpSync(variantOut, target, { recursive: true })
    console.log(`[build-site] variant ${id} 병합 완료 -> dist/v/${id}/`)
  }
  rmSync(OUT_VARIANT, { recursive: true, force: true })
  console.log('[build-site] 완료')
}

main().catch((err) => {
  console.error('[build-site] 실패:', err)
  process.exit(1)
})
