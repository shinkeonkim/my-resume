import { computed, ref } from 'vue'

export type Locale = 'ko' | 'en'

export const SUPPORTED_LOCALES: { code: Locale; label: string }[] = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
]

const STORAGE_KEY = 'resume-locale'

const detectInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'ko'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'ko' || stored === 'en') return stored
  const navLang = window.navigator?.language?.toLowerCase() ?? ''
  if (navLang.startsWith('ko')) return 'ko'
  return 'ko'
}

const currentLocale = ref<Locale>(detectInitialLocale())

const messages: Record<Locale, Record<string, string>> = {
  ko: {
    'app.print': '인쇄 / PDF',
    'app.language': '언어',
    'section.about': '자기소개',
    'section.timeline': '타임라인',
    'section.education': '학력',
    'section.skills': '기술 스택',
    'section.workExperiences': '경력',
    'section.projects': '프로젝트',
    'section.activities': '활동',
    'section.awards': '수상',
    'section.certificates': '자격증',
    'document.title': '이력서 - 김신건',
  },
  en: {
    'app.print': 'Print / PDF',
    'app.language': 'Language',
    'section.about': 'About',
    'section.timeline': 'Timeline',
    'section.education': 'Education',
    'section.skills': 'Skills',
    'section.workExperiences': 'Work Experiences',
    'section.projects': 'Projects',
    'section.activities': 'Activities',
    'section.awards': 'Awards',
    'section.certificates': 'Certificates',
    'document.title': 'Resume - Shinkeon Kim',
  },
}

const applyLocaleSideEffects = (locale: Locale) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale
    const title = messages[locale]['document.title']
    if (title) document.title = title
  }
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, locale)
  }
}

applyLocaleSideEffects(currentLocale.value)

export const setLocale = (locale: Locale) => {
  currentLocale.value = locale
  applyLocaleSideEffects(locale)
}

export const t = (key: string): string => {
  return messages[currentLocale.value][key] ?? key
}

export function useLocale() {
  const locale = computed<Locale>(() => currentLocale.value)
  const tRef = (key: string) => computed(() => messages[currentLocale.value][key] ?? key)
  return { locale, setLocale, t, tRef }
}

export function useLocalized<T>(data: Record<Locale, T>) {
  return computed<T>(() => data[currentLocale.value])
}
