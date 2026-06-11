import type { Locale } from '../base/types'

export const VARIANT_SCHEMA_VERSION = 'ResumeVariant.v1'

export type Visibility = 'public' | 'private' | 'draft'

export interface CustomBullet {
  targetType: 'experienceRole' | 'project'
  targetId: string
  bullets: string[]
}

export interface VariantOverrides {
  summary?: string
  headline?: string
  include?: {
    experienceIds?: string[]
    projectIds?: string[]
    skillIds?: string[]
  }
  order?: {
    experienceIds?: string[]
    projectIds?: string[]
    skillIds?: string[]
  }
  customBullets?: CustomBullet[]
}

export interface VariantMeta {
  label: string
  visibility: Visibility
  locale: Locale
  jdRef?: { jdId?: string; company?: string; role?: string }
  source?: 'manual' | 'jd-helper'
  updatedAt: string
}

export interface ResumeVariantV1 {
  schema: typeof VARIANT_SCHEMA_VERSION
  id: string
  meta: VariantMeta
  overrides: VariantOverrides
}

export interface ValidationOk {
  ok: true
  variant: ResumeVariantV1
  warnings: string[]
}

export interface ValidationErr {
  ok: false
  errors: string[]
}

const ID_PATTERN = /^[a-z0-9][a-z0-9-]*[a-z0-9]$/
const ISO_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/

const ALLOWED_VISIBILITY: Visibility[] = ['public', 'private', 'draft']
const ALLOWED_LOCALE: Locale[] = ['ko', 'en']
const ALLOWED_TARGET_TYPE: CustomBullet['targetType'][] = ['experienceRole', 'project']

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === 'string')
}

function pushIfBadId(errors: string[], path: string, value: string) {
  if (!ID_PATTERN.test(value)) errors.push(`${path}: invalid id "${value}" (kebab-case required)`)
}

function validateOverrides(raw: unknown, errors: string[]): VariantOverrides {
  if (!isRecord(raw)) {
    errors.push('overrides: must be an object')
    return {}
  }
  const out: VariantOverrides = {}

  if (raw.summary !== undefined) {
    if (typeof raw.summary !== 'string') errors.push('overrides.summary: must be string')
    else out.summary = raw.summary
  }
  if (raw.headline !== undefined) {
    if (typeof raw.headline !== 'string') errors.push('overrides.headline: must be string')
    else out.headline = raw.headline
  }

  for (const key of ['include', 'order'] as const) {
    const value = raw[key]
    if (value === undefined) continue
    if (!isRecord(value)) {
      errors.push(`overrides.${key}: must be an object`)
      continue
    }
    const result: Record<string, string[]> = {}
    for (const field of ['experienceIds', 'projectIds', 'skillIds']) {
      const list = value[field]
      if (list === undefined) continue
      if (!isStringArray(list)) {
        errors.push(`overrides.${key}.${field}: must be string[]`)
        continue
      }
      list.forEach((id) => pushIfBadId(errors, `overrides.${key}.${field}`, id))
      result[field] = list
    }
    out[key] = result
  }

  if (raw.customBullets !== undefined) {
    if (!Array.isArray(raw.customBullets)) {
      errors.push('overrides.customBullets: must be array')
    } else {
      out.customBullets = raw.customBullets.map((cb, i) => {
        if (!isRecord(cb)) {
          errors.push(`overrides.customBullets[${i}]: must be object`)
          return { targetType: 'project', targetId: '', bullets: [] } as CustomBullet
        }
        const tt = cb.targetType
        const ti = cb.targetId
        const bl = cb.bullets
        if (typeof tt !== 'string' || !ALLOWED_TARGET_TYPE.includes(tt as CustomBullet['targetType'])) {
          errors.push(`overrides.customBullets[${i}].targetType: must be one of ${ALLOWED_TARGET_TYPE.join('|')}`)
        }
        if (typeof ti !== 'string') {
          errors.push(`overrides.customBullets[${i}].targetId: must be string`)
        } else {
          pushIfBadId(errors, `overrides.customBullets[${i}].targetId`, ti)
        }
        if (!isStringArray(bl)) {
          errors.push(`overrides.customBullets[${i}].bullets: must be string[]`)
        }
        return {
          targetType: tt as CustomBullet['targetType'],
          targetId: typeof ti === 'string' ? ti : '',
          bullets: isStringArray(bl) ? bl : [],
        }
      })
    }
  }

  return out
}

function validateMeta(raw: unknown, errors: string[]): VariantMeta {
  if (!isRecord(raw)) {
    errors.push('meta: must be an object')
    return {
      label: '',
      visibility: 'draft',
      locale: 'ko',
      updatedAt: new Date().toISOString(),
    }
  }
  const label = typeof raw.label === 'string' ? raw.label : ''
  if (!label) errors.push('meta.label: required string')

  const visibility = ALLOWED_VISIBILITY.includes(raw.visibility as Visibility)
    ? (raw.visibility as Visibility)
    : 'draft'
  if (!ALLOWED_VISIBILITY.includes(raw.visibility as Visibility)) {
    errors.push(`meta.visibility: must be one of ${ALLOWED_VISIBILITY.join('|')}`)
  }

  const locale = ALLOWED_LOCALE.includes(raw.locale as Locale) ? (raw.locale as Locale) : 'ko'
  if (!ALLOWED_LOCALE.includes(raw.locale as Locale)) {
    errors.push(`meta.locale: must be one of ${ALLOWED_LOCALE.join('|')}`)
  }

  const updatedAt = typeof raw.updatedAt === 'string' ? raw.updatedAt : ''
  if (!ISO_PATTERN.test(updatedAt)) {
    errors.push('meta.updatedAt: must be ISO 8601 datetime string')
  }

  const meta: VariantMeta = { label, visibility, locale, updatedAt }
  if (isRecord(raw.jdRef)) {
    meta.jdRef = {}
    for (const k of ['jdId', 'company', 'role'] as const) {
      if (typeof raw.jdRef[k] === 'string') meta.jdRef[k] = raw.jdRef[k] as string
    }
  }
  if (raw.source === 'manual' || raw.source === 'jd-helper') meta.source = raw.source
  return meta
}

export function validateResumeVariant(input: unknown): ValidationOk | ValidationErr {
  const errors: string[] = []
  if (!isRecord(input)) return { ok: false, errors: ['root: must be an object'] }
  if (input.schema !== VARIANT_SCHEMA_VERSION) {
    return { ok: false, errors: [`schema: must equal "${VARIANT_SCHEMA_VERSION}"`] }
  }
  const id = typeof input.id === 'string' ? input.id : ''
  if (!id || !ID_PATTERN.test(id)) errors.push('id: kebab-case URL-safe string required')

  const meta = validateMeta(input.meta, errors)
  const overrides = validateOverrides(input.overrides, errors)

  if (errors.length) return { ok: false, errors }
  return {
    ok: true,
    variant: { schema: VARIANT_SCHEMA_VERSION, id, meta, overrides },
    warnings: [],
  }
}
