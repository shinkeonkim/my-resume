import type { ExperienceEntity, ProjectEntity } from '../base/types'
import type { ResumeVariantV1 } from './schema'

export interface ApplyResult<T> {
  items: T[]
  unknownIds: string[]
}

function reorder<T extends { id: string }>(
  items: T[],
  orderIds: readonly string[] | undefined,
): { ordered: T[]; unknown: string[] } {
  if (!orderIds || orderIds.length === 0) return { ordered: items, unknown: [] }
  const indexById = new Map(items.map((x, i) => [x.id, i]))
  const used = new Set<number>()
  const ordered: T[] = []
  const unknown: string[] = []
  for (const id of orderIds) {
    const idx = indexById.get(id)
    if (idx === undefined) {
      unknown.push(id)
      continue
    }
    const item = items[idx]
    if (item === undefined) continue
    used.add(idx)
    ordered.push(item)
  }
  items.forEach((item, i) => {
    if (!used.has(i)) ordered.push(item)
  })
  return { ordered, unknown }
}

function filter<T extends { id: string }>(
  items: T[],
  includeIds: readonly string[] | undefined,
): { kept: T[]; unknown: string[] } {
  if (!includeIds) return { kept: items, unknown: [] }
  const include = new Set(includeIds)
  const found = new Set<string>()
  const kept = items.filter((x) => {
    if (include.has(x.id)) {
      found.add(x.id)
      return true
    }
    return false
  })
  const unknown = includeIds.filter((id) => !found.has(id))
  return { kept, unknown }
}

export function applyExperienceVariant(
  base: ExperienceEntity[],
  variant: ResumeVariantV1 | null,
): ApplyResult<ExperienceEntity> {
  if (!variant) return { items: base, unknownIds: [] }
  const include = variant.overrides.include?.experienceIds
  const order = variant.overrides.order?.experienceIds
  const customs = (variant.overrides.customBullets ?? []).filter(
    (c) => c.targetType === 'experienceRole',
  )
  const locale = variant.meta.locale

  const filtered = filter(base, include)
  const reordered = reorder(filtered.kept, order)

  const customMap = new Map(customs.map((c) => [c.targetId, c.bullets] as const))
  const unknownCustom: string[] = []
  const items = reordered.ordered.map((e) => {
    const bullets = customMap.get(e.id)
    if (!bullets) return e
    customMap.delete(e.id)
    const newDetails = e.details[locale].map((d, i) =>
      i === 0
        ? { ...d, subContents: bullets }
        : d,
    )
    return { ...e, details: { ...e.details, [locale]: newDetails } }
  })
  customMap.forEach((_, id) => unknownCustom.push(id))

  return {
    items,
    unknownIds: [...filtered.unknown, ...reordered.unknown, ...unknownCustom],
  }
}

export function applyProjectVariant(
  base: ProjectEntity[],
  variant: ResumeVariantV1 | null,
): ApplyResult<ProjectEntity> {
  if (!variant) return { items: base, unknownIds: [] }
  const include = variant.overrides.include?.projectIds
  const order = variant.overrides.order?.projectIds
  const customs = (variant.overrides.customBullets ?? []).filter(
    (c) => c.targetType === 'project',
  )
  const locale = variant.meta.locale

  const filtered = filter(base, include)
  const reordered = reorder(filtered.kept, order)

  const customMap = new Map(customs.map((c) => [c.targetId, c.bullets] as const))
  const unknownCustom: string[] = []
  const items = reordered.ordered.map((p) => {
    const bullets = customMap.get(p.id)
    if (!bullets) return p
    customMap.delete(p.id)
    const newDetails = p.details[locale].map((d, i) =>
      i === 0
        ? { ...d, subContents: bullets }
        : d,
    )
    return { ...p, details: { ...p.details, [locale]: newDetails } }
  })
  customMap.forEach((_, id) => unknownCustom.push(id))

  return {
    items,
    unknownIds: [...filtered.unknown, ...reordered.unknown, ...unknownCustom],
  }
}
