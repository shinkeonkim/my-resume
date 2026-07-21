import type { ProjectMeta } from '../../types'

export const meta: ProjectMeta = {
  id: 'proj-mefit',
  title: {
    ko: '미핏 - AI 가상면접 훈련 플랫폼',
    en: 'MeFit — AI Virtual Interview Training Platform',
  },
  period: '2026.03 ~ 2026.06',
  techStack: [
    'Django',
    'PostgreSQL',
    'Redis',
    'Celery',
    'k3s',
    'AWS',
    'LiteLLM',
    'Github Actions',
    'React.js',
    'opencode',
  ],
  links: [
    { icon: 'fab fa-github', url: 'https://github.com/kmu-aws-capstone-team-4/' },
  ],
}
