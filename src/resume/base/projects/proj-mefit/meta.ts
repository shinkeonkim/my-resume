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
    'DRF',
    'Python',
    'PostgreSQL',
    'pgvector',
    'Redis',
    'Celery',
    'Django Channels',
    'k3s',
    'AWS EC2',
    'AWS S3',
    'AWS Lambda',
    'AWS SNS/SQS',
    'AWS Bedrock',
    'LiteLLM',
    'LangChain',
    'Grafana Cloud',
    'Github Actions',
    'Traefik',
    'React.js',
    'TypeScript',
    'Zustand',
    'MediaPipe',
    'opencode',
  ],
  links: [
    { icon: 'fab fa-github', url: 'https://github.com/kmu-aws-capstone-team-4/' },
  ],
}
