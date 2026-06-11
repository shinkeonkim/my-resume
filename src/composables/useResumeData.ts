import { computed } from 'vue'
import { useLocale } from './useLocale'
import { useVariant } from './useVariant'
import {
  experienceEntities,
  projectEntities,
  introductions,
  skills,
  educations,
  awards,
  certificates,
  activities,
  timelineRange,
  timelineItems,
} from '@/resume/base'
import type {
  ExperienceGroup,
  Locale,
  ResolvedProject,
  ResolvedRole,
  TimelineItem,
} from '@/resume/base/types'
import { applyExperienceVariant, applyProjectVariant } from '@/resume/variants/apply-variant'

function activeLocale(localeRef: { value: Locale }): Locale {
  const variant = useVariant()
  return variant?.meta.locale ?? localeRef.value
}

export function useExperiences() {
  const { locale } = useLocale()
  const variant = useVariant()
  return computed<ExperienceGroup[]>(() => {
    const lc = activeLocale(locale)
    const { items } = applyExperienceVariant(experienceEntities, variant)
    const groups = new Map<string, ResolvedRole[]>()
    for (const e of items) {
      const company = e.company[lc]
      const list = groups.get(company) ?? []
      list.push({
        id: e.id,
        title: e.roleTitle[lc],
        period: e.period,
        techStack: e.techStack,
        details: e.details[lc],
      })
      groups.set(company, list)
    }
    return Array.from(groups.entries()).map(([name, roles]) => ({ name, roles }))
  })
}

export function useProjects() {
  const { locale } = useLocale()
  const variant = useVariant()
  return computed<ResolvedProject[]>(() => {
    const lc = activeLocale(locale)
    const { items } = applyProjectVariant(projectEntities, variant)
    return items.map((p) => ({
      id: p.id,
      title: p.title[lc],
      period: p.period,
      techStack: p.techStack,
      details: p.details[lc],
      links: p.links,
    }))
  })
}

export function useIntroductions() {
  const { locale } = useLocale()
  const variant = useVariant()
  return computed(() => {
    const lc = activeLocale(locale)
    const base = introductions[lc]
    if (!variant?.overrides.summary) return base
    return [{ title: variant.overrides.summary, description: '' }, ...base]
  })
}

export function useHeadline() {
  const variant = useVariant()
  return computed(() => variant?.overrides.headline ?? null)
}

export function useSkills() {
  const { locale } = useLocale()
  return computed(() => skills[activeLocale(locale)])
}

export function useEducations() {
  const { locale } = useLocale()
  return computed(() => educations[activeLocale(locale)])
}

export function useAwards() {
  const { locale } = useLocale()
  return computed(() => awards[activeLocale(locale)])
}

export function useCertificates() {
  const { locale } = useLocale()
  return computed(() => certificates[activeLocale(locale)])
}

export function useActivities() {
  const { locale } = useLocale()
  return computed(() => activities[activeLocale(locale)])
}

export function useTimeline() {
  const { locale } = useLocale()
  const items = computed<TimelineItem[]>(() => timelineItems[activeLocale(locale)])
  return { ...timelineRange, timeLineItems: items }
}
