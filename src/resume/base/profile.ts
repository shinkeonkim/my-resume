import type { Locale } from './types'

export interface ProfileText {
  name: string
  role: string
}

export interface ProfileContact {
  email: string
  github: string
  portfolio: string
  linkedin: string
  website: string
}

export const profileText: Record<Locale, ProfileText> = {
  ko: { name: '김신건', role: 'SW 엔지니어' },
  en: { name: 'Shinkeon Kim', role: 'SW Engineer' },
}

export const profileContact: ProfileContact = {
  email: 'dev.shinkeonkim@gmail.com',
  github: 'https://github.com/shinkeonkim',
  portfolio: 'https://shinkeonkim.github.io/my-portfolio/',
  linkedin: 'https://www.linkedin.com/in/shinkeonkim',
  website: 'https://shinkeonkim.com',
}
