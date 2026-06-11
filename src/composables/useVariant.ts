import type { ResumeVariantV1 } from '@/resume/variants/schema'
import { setLocale } from './useLocale'

declare const __VARIANT__: ResumeVariantV1 | null

const variant: ResumeVariantV1 | null =
  typeof __VARIANT__ !== 'undefined' && __VARIANT__ ? __VARIANT__ : null

if (variant) {
  setLocale(variant.meta.locale)
}

export function useVariant(): ResumeVariantV1 | null {
  return variant
}

export function hasVariant(): boolean {
  return variant !== null
}
