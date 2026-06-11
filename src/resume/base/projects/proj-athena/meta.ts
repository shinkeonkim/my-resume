import type { ProjectMeta } from '../../types'

export const meta: ProjectMeta = {
  id: 'proj-athena',
  title: {
    ko: 'Athena - 문제 해결과 학습을 위한 AI 알고리즘 학습 플랫폼',
    en: 'Athena — AI Algorithm Learning Platform for Problem-Solving and Study',
  },
  period: '2025.04 ~ 2025.06',
  techStack: [
    'Django',
    'Python',
    'Rust',
    'Docker',
    'gRPC',
    'PostgreSQL',
    'Redis',
    'Celery',
    'Nginx',
    'LLM',
  ],
  links: [
    { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/AD_project_athena/' },
    { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/code-judger/' },
    { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/code-executor/' },
    { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/code-testcase-generator/' },
  ],
}
