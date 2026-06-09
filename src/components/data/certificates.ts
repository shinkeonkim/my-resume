import { useLocalized } from '@/composables/useLocale'

interface Certificate {
  name: string
  date: string
  issuer: string
}

const data: Record<'ko' | 'en', Certificate[]> = {
  ko: [
    {
      name: '정보처리기사',
      date: '2025.09',
      issuer: '한국산업인력공단',
    },
    {
      name: 'ADsP',
      date: '2025.09',
      issuer: '한국데이터산업진흥원',
    },
    {
      name: '제한무선통신사',
      date: '2025.06',
      issuer: '한국방송통신전파진흥원',
    },
    {
      name: 'PCCP Lv. 4 Python',
      date: '2025.05',
      issuer: '그렙(Grepp)',
    },
    {
      name: 'SQLD',
      date: '2024.06',
      issuer: '한국데이터산업진흥원',
    },
    {
      name: '네트워크 관리사 2급',
      date: '2024.04',
      issuer: '한국정보통신자격협회',
    },
    {
      name: 'Coding Specialist Professional 1급 (C++)',
      date: '2022.01',
      issuer: '㈜와이비엠',
    },
    {
      name: '코딩지도사 1급',
      date: '2020.03',
      issuer: '한국직업능력진흥원',
    },
  ],
  en: [
    {
      name: 'Engineer Information Processing',
      date: '2025.09',
      issuer: 'Human Resources Development Service of Korea',
    },
    {
      name: 'ADsP (Advanced Data Semi-Professional)',
      date: '2025.09',
      issuer: 'Korea Data Agency',
    },
    {
      name: 'Restricted Radio Operator',
      date: '2025.06',
      issuer: 'Korea Communications Agency',
    },
    {
      name: 'PCCP Lv. 4 Python',
      date: '2025.05',
      issuer: 'Grepp',
    },
    {
      name: 'SQLD (SQL Developer)',
      date: '2024.06',
      issuer: 'Korea Data Agency',
    },
    {
      name: 'Network Manager Level 2',
      date: '2024.04',
      issuer: 'Korea Information & Communication Qualification Association',
    },
    {
      name: 'Coding Specialist Professional Level 1 (C++)',
      date: '2022.01',
      issuer: 'YBM Co., Ltd.',
    },
    {
      name: 'Coding Instructor Level 1',
      date: '2020.03',
      issuer: 'Korea Vocational Ability Development Institute',
    },
  ],
}

export function useCertificates() {
  return useLocalized(data)
}
