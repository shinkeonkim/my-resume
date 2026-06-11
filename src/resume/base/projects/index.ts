import type { ProjectEntity } from '../types'

import { meta as mefitMeta } from './proj-mefit/meta'
import { details as mefitKo } from './proj-mefit/ko'
import { details as mefitEn } from './proj-mefit/en'

import { meta as kkambbakiMeta } from './proj-kkambbaki/meta'
import { details as kkambbakiKo } from './proj-kkambbaki/ko'
import { details as kkambbakiEn } from './proj-kkambbaki/en'

import { meta as athenaMeta } from './proj-athena/meta'
import { details as athenaKo } from './proj-athena/ko'
import { details as athenaEn } from './proj-athena/en'

export const projectEntities: ProjectEntity[] = [
  { ...mefitMeta, details: { ko: mefitKo, en: mefitEn } },
  { ...kkambbakiMeta, details: { ko: kkambbakiKo, en: kkambbakiEn } },
  { ...athenaMeta, details: { ko: athenaKo, en: athenaEn } },
]

export const projectIds = projectEntities.map((p) => p.id)
