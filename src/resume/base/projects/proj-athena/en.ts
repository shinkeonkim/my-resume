import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: 'Role: Product planning and solo development',
  },
  {
    content: 'AI code feedback and isolated execution system',
    subContents: [
      'Implemented LLM-based source code analysis and a real-time tailored feedback system.',
      'Built a safe, isolated execution environment supporting multiple languages (C++, Python, Ruby, Java, etc.) via Docker containers.',
    ],
  },
  {
    content: 'Distributed data collection and semantic search engine',
    subContents: [
      'Built a Celery-based automated ingestion pipeline that collects problems and posts via the solved.ac API and web parsing.',
    ],
  },
  {
    content: 'Microservice architecture (MSA) design',
    subContents: [
      'Connected core modules (Code Executor, Judger, Testcase Generator) over gRPC for scalability and efficient inter-service communication.',
    ],
  },
]
