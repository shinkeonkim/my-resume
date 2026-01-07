interface TimelineSegment {  start: string
  end: string | 'Present'
}

interface TimelineItem {
  id: number
  name: string
  segments: TimelineSegment[]
  type: 'school' | 'activity' | 'career' | 'project'
  paddingLeft?: number
}

export type { TimelineItem, TimelineSegment };