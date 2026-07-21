import type { Locale, TimelineItem } from './types'

const minDate = new Date('2019-01-01')
const maxDate = new Date('2026-12-31')

export const timelineRange = { minDate, maxDate }

export const timelineItems: Record<Locale, TimelineItem[]> = {
  ko: [
    {
      id: 2,
      name: '국민대학교',
      type: 'school',
      paddingLeft: 0,
      segments: [
        { start: '2019.03', end: '2020.12' },
        { start: '2025.03', end: '2026.08' },
      ],
    },
    {
      id: 3,
      name: '(주) 그렙',
      type: 'career',
      paddingLeft: 130,
      segments: [
        { start: '2019.06', end: '2019.08' },
        { start: '2019.12', end: '2020.02' },
        { start: '2020.06', end: '2020.08' },
        { start: '2020.12', end: '2022.10' },
        { start: '2024.07', end: '2025.03' },
      ],
    },
    {
      id: 4,
      name: '군 복무',
      type: 'career',
      paddingLeft: 0,
      segments: [{ start: '2022.11', end: '2024.05' }],
    },
  ],
  en: [
    {
      id: 2,
      name: 'Kookmin University',
      type: 'school',
      paddingLeft: 0,
      segments: [
        { start: '2019.03', end: '2020.12' },
        { start: '2025.03', end: '2026.08' },
      ],
    },
    {
      id: 3,
      name: 'Grepp Inc.',
      type: 'career',
      paddingLeft: 100,
      segments: [
        { start: '2019.06', end: '2019.08' },
        { start: '2019.12', end: '2020.02' },
        { start: '2020.06', end: '2020.08' },
        { start: '2020.12', end: '2022.10' },
        { start: '2024.07', end: '2025.03' },
      ],
    },
    {
      id: 4,
      name: 'Military Service',
      type: 'career',
      paddingLeft: 0,
      segments: [{ start: '2022.11', end: '2024.05' }],
    },
  ],
}
