export type Locale = 'ko' | 'en'

export interface LinkItem {
  icon?: string
  url: string
}

export interface TimelineSegment {
  start: string
  end: string | 'Present'
}

export interface TimelineItem {
  id: number
  name: string
  segments: TimelineSegment[]
  type: 'school' | 'activity' | 'career' | 'project'
  paddingLeft?: number
}

export interface DetailItem {
  content: string
  period?: string
  impact?: string
  techStack?: string[]
  subContents?: string[]
}

export interface ExperienceMeta {
  id: string
  company: Record<Locale, string>
  roleTitle: Record<Locale, string>
  period: string
  techStack?: string[]
}

export interface ExperienceEntity extends ExperienceMeta {
  details: Record<Locale, DetailItem[]>
}

export interface ResolvedExperience {
  id: string
  company: string
  roleTitle: string
  period: string
  techStack?: string[]
  details: DetailItem[]
}

export interface ExperienceGroup {
  name: string
  roles: ResolvedRole[]
}

export interface ResolvedRole {
  id: string
  title: string
  period: string
  techStack?: string[]
  details: DetailItem[]
}

export interface ProjectMeta {
  id: string
  title: Record<Locale, string>
  period: string
  techStack: string[]
  links?: LinkItem[]
}

export interface ProjectEntity extends ProjectMeta {
  details: Record<Locale, DetailItem[]>
}

export interface ResolvedProject {
  id: string
  title: string
  period: string
  techStack: string[]
  details: DetailItem[]
  links?: LinkItem[]
}

export interface Introduction {
  title: string
  description: string
}

export interface SkillDescription {
  title: string
  items: string[]
}

export interface SkillsData {
  skills: Record<string, string[]>
  skill_descriptions: SkillDescription[]
}

export interface Education {
  school: string
  major: string
  period: string
  details: string[]
}

export interface Award {
  name: string
  date: string
  issuer: string
}

export interface Certificate {
  name: string
  date: string
  issuer: string
}

export interface ActivityDetail {
  content: string
}

export interface Activity {
  title: string
  period: string
  details: ActivityDetail[]
}


