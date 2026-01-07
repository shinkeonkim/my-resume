import type { TimelineItem } from '../types/TimeLineItem'

const minDate = new Date('2016-01-01')
const maxDate = new Date('2026-12-31')

const timeLineItems: TimelineItem[] = [
  {
    id: 1,
    name: '한민고등학교',
    type: 'school',
    paddingLeft: 0,
    segments: [{ start: '2016.03', end: '2019.02' }],
  },
  {
    id: 2,
    name: '국민대학교',
    type: 'school',
    paddingLeft: 0,
    segments: [{ start: '2019.03', end: 'Present' }],
  },
  {
    id: 3,
    name: '(주) 그렙',
    type: 'career',
    paddingLeft: 90,
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
    name: '군복무 (특전사)',
    type: 'career',
    paddingLeft: 0,
    segments: [{ start: '2022.11', end: '2024.05' }],
  },
  {
    id: 10,
    name: '국민대학교 멋쟁이사자처럼',
    type: 'activity',
    paddingLeft: 0,
    segments: [
      { start: '2020.03', end: '2022.12' },
      { start: '2024.01', end: '2025.12' },
    ],
  },
  {
    id: 11,
    name: 'SIPE 4기',
    type: 'activity',
    paddingLeft: 0,
    segments: [{ start: '2025.04', end: '2025.08' }],
  },
]

export { minDate, maxDate, timeLineItems };