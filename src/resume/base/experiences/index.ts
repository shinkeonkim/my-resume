import type { ExperienceEntity } from '../types'

import { meta as grepp2024EduBeMeta } from './grepp-2024-edu-be/meta'
import { details as grepp2024EduBeKo } from './grepp-2024-edu-be/ko'
import { details as grepp2024EduBeEn } from './grepp-2024-edu-be/en'

import { meta as grepp2020RecruitSwMeta } from './grepp-2020-recruit-sw/meta'
import { details as grepp2020RecruitSwKo } from './grepp-2020-recruit-sw/ko'
import { details as grepp2020RecruitSwEn } from './grepp-2020-recruit-sw/en'

import { meta as grepp2019AlgoMeta } from './grepp-2019-algo/meta'
import { details as grepp2019AlgoKo } from './grepp-2019-algo/ko'
import { details as grepp2019AlgoEn } from './grepp-2019-algo/en'

import { meta as armySpecial2022Meta } from './army-special-2022/meta'
import { details as armySpecial2022Ko } from './army-special-2022/ko'
import { details as armySpecial2022En } from './army-special-2022/en'

export const experienceEntities: ExperienceEntity[] = [
  {
    ...grepp2024EduBeMeta,
    details: { ko: grepp2024EduBeKo, en: grepp2024EduBeEn },
  },
  {
    ...grepp2020RecruitSwMeta,
    details: { ko: grepp2020RecruitSwKo, en: grepp2020RecruitSwEn },
  },
  {
    ...grepp2019AlgoMeta,
    details: { ko: grepp2019AlgoKo, en: grepp2019AlgoEn },
  },
  {
    ...armySpecial2022Meta,
    details: { ko: armySpecial2022Ko, en: armySpecial2022En },
  },
]

export const experienceIds = experienceEntities.map((e) => e.id)
