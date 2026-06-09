import { useLocalized } from '@/composables/useLocale'

interface Education {
  school: string
  major: string
  period: string
  details: string[]
}

const data: Record<'ko' | 'en', Education[]> = {
  ko: [
    {
      school: '국민대학교',
      major: '소프트웨어전공 학사',
      period: '2019.03 ~ 2020.12, 2025.03 ~ 2026.08 (졸업 예정)',
      details: [
        '전체 학점: 4.42 / 4.5',
        '전공 학점: 4.46 / 4.5',
        '소프트웨어 특기자 전형 입학',
      ],
    },
    {
      school: '한민고등학교',
      major: '',
      period: '2016.03 ~ 2019.02',
      details: [],
    },
  ],
  en: [
    {
      school: 'Kookmin University',
      major: 'B.S. in Software',
      period: '2019.03 ~ 2020.12, 2025.03 ~ 2026.08 (Expected)',
      details: [
        'Overall GPA: 4.42 / 4.5',
        'Major GPA: 4.46 / 4.5',
        'Admitted through the Software Talent special admission track',
      ],
    },
    {
      school: 'Hanmin High School',
      major: '',
      period: '2016.03 ~ 2019.02',
      details: [],
    },
  ],
}

export function useEducations() {
  return useLocalized(data)
}
