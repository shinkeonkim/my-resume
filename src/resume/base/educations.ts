import type { Education, Locale } from './types'

export const educations: Record<Locale, Education[]> = {
  ko: [
    {
      school: '국민대학교',
      major: '소프트웨어전공 학사',
      period: '2019.03 ~ 2026.08 (졸업 예정)',
      details: [
        '전체 학점: 4.42 / 4.5',
        '전공 학점: 4.46 / 4.5',
        '웹·정보보호 트랙 이수',
        '소프트웨어 특기자 전형',
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
      period: '2019.03 ~ 2026.08 (Expected)',
      details: [
        'Overall GPA: 4.42 / 4.5',
        'Major GPA: 4.46 / 4.5',
        'Web · Information Security Track',
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
