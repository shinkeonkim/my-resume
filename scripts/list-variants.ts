import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { validateResumeVariant } from '../src/resume/variants/schema'

const VARIANTS_DIR = resolve(__dirname, '..', 'src', 'resume', 'variants')

interface Entry {
  id: string
  label: string
  locale: string
  visibility: string
  path: string
}

function listVariants(): Entry[] {
  if (!existsSync(VARIANTS_DIR)) return []
  const dirs = readdirSync(VARIANTS_DIR).filter((name) => {
    const p = resolve(VARIANTS_DIR, name)
    return statSync(p).isDirectory()
  })
  const entries: Entry[] = []
  for (const id of dirs) {
    const file = resolve(VARIANTS_DIR, id, 'variant.json')
    if (!existsSync(file)) continue
    let raw: unknown
    try {
      raw = JSON.parse(readFileSync(file, 'utf-8'))
    } catch (err) {
      console.error(`[list-variants] ${id}: invalid JSON — ${(err as Error).message}`)
      continue
    }
    const result = validateResumeVariant(raw)
    if (!result.ok) {
      console.error(`[list-variants] ${id}: schema errors:\n  - ${result.errors.join('\n  - ')}`)
      continue
    }
    if (result.variant.id !== id) {
      console.error(`[list-variants] dir name "${id}" must match variant.id "${result.variant.id}"`)
      continue
    }
    entries.push({
      id: result.variant.id,
      label: result.variant.meta.label,
      locale: result.variant.meta.locale,
      visibility: result.variant.meta.visibility,
      path: `v/${result.variant.id}/`,
    })
  }
  return entries
}

const args = process.argv.slice(2)
const visibilityFilter = args.find((a) => a.startsWith('--visibility='))?.split('=')[1] ?? null
const format = args.find((a) => a.startsWith('--format='))?.split('=')[1] ?? 'json'

const all = listVariants()
const filtered = visibilityFilter
  ? all.filter((e) => visibilityFilter.split(',').includes(e.visibility))
  : all

if (format === 'matrix') {
  process.stdout.write(JSON.stringify({ include: filtered.map((e) => ({ variant_id: e.id })) }))
} else if (format === 'ids') {
  process.stdout.write(filtered.map((e) => e.id).join('\n'))
} else {
  process.stdout.write(JSON.stringify(filtered, null, 2))
}
