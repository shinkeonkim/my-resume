import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, isAbsolute } from 'node:path'
import { validateResumeVariant, type ResumeVariantV1 } from '../src/resume/variants/schema'
import { experienceIds } from '../src/resume/base/experiences'
import { projectIds } from '../src/resume/base/projects'

const VARIANTS_DIR = resolve(__dirname, '..', 'src', 'resume', 'variants')

function fail(message: string): never {
  console.error(`[import-variant] ${message}`)
  process.exit(1)
}

function resolveBaseTargetIds(variant: ResumeVariantV1): string[] {
  const issues: string[] = []
  const expSet = new Set(experienceIds)
  const projSet = new Set(projectIds)
  const checkList = (
    field: string,
    ids: readonly string[] | undefined,
    targetSet: Set<string>,
  ) => {
    if (!ids) return
    for (const id of ids) {
      if (!targetSet.has(id)) issues.push(`${field}: unknown id "${id}"`)
    }
  }
  checkList('overrides.include.experienceIds', variant.overrides.include?.experienceIds, expSet)
  checkList('overrides.order.experienceIds', variant.overrides.order?.experienceIds, expSet)
  checkList('overrides.include.projectIds', variant.overrides.include?.projectIds, projSet)
  checkList('overrides.order.projectIds', variant.overrides.order?.projectIds, projSet)
  for (const cb of variant.overrides.customBullets ?? []) {
    const set = cb.targetType === 'experienceRole' ? expSet : projSet
    if (!set.has(cb.targetId)) {
      issues.push(`overrides.customBullets[${cb.targetType}:${cb.targetId}]: unknown base id`)
    }
  }
  return issues
}

const inputPath = process.argv[2]
if (!inputPath) fail('usage: bun run import-variant <path-to-variant.json>')
const absolute = isAbsolute(inputPath) ? inputPath : resolve(process.cwd(), inputPath)
if (!existsSync(absolute)) fail(`file not found: ${absolute}`)

let raw: unknown
try {
  raw = JSON.parse(readFileSync(absolute, 'utf-8'))
} catch (err) {
  fail(`invalid JSON: ${(err as Error).message}`)
}

const result = validateResumeVariant(raw)
if (!result.ok) fail(`schema errors:\n  - ${result.errors.join('\n  - ')}`)
const variant = result.variant

const baseIssues = resolveBaseTargetIds(variant)
if (baseIssues.length) fail(`base-id references invalid:\n  - ${baseIssues.join('\n  - ')}`)

const forceFlag = process.argv.includes('--force')
const visibilityFlag = process.argv.find((a) => a.startsWith('--visibility='))?.split('=')[1]
if (visibilityFlag === 'public' || visibilityFlag === 'private' || visibilityFlag === 'draft') {
  variant.meta.visibility = visibilityFlag
} else if (variant.meta.source === 'jd-helper' && variant.meta.visibility === 'public' && !forceFlag) {
  console.warn(
    `[import-variant] jd-helper source defaulted public → forced to draft (use --visibility=public --force to override)`,
  )
  variant.meta.visibility = 'draft'
}

const outDir = resolve(VARIANTS_DIR, variant.id)
mkdirSync(outDir, { recursive: true })
const outFile = resolve(outDir, 'variant.json')
writeFileSync(outFile, JSON.stringify(variant, null, 2) + '\n', 'utf-8')

console.log(`[import-variant] wrote ${outFile}`)
console.log(
  `  id=${variant.id}  locale=${variant.meta.locale}  visibility=${variant.meta.visibility}  label="${variant.meta.label}"`,
)
console.log('  next: review, commit, push → GH Actions will deploy if visibility=public.')
