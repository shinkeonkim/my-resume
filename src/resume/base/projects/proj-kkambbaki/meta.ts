import type { ProjectMeta } from '../../types'

export const meta: ProjectMeta = {
  id: 'proj-kkambbaki',
  title: {
    ko: '깜빡이 - 아동 집중력 향상을 위한 AI 기반 게임 교육 플랫폼',
    en: "Kkambbaki — AI-powered Educational Game Platform for Children's Focus",
  },
  period: '2025.10 ~ 2025.11',
  techStack: [
    'Django',
    'Python',
    'PostgreSQL',
    'Redis',
    'Celery',
    'k8s',
    'ArgoCD',
    'AWS EC2',
    'Nginx',
    'Github Actions',
  ],
  links: [
    { icon: 'fab fa-github', url: 'https://github.com/kkambbaki/backend' },
    { icon: 'fab fa-github', url: 'https://github.com/kkambbaki/infra' },
  ],
}
