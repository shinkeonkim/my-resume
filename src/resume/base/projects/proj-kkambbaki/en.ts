import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: 'Role: Backend development and infrastructure setup',
  },
  {
    content: 'Distributed architecture and AI report system',
    subContents: [
      'Built an asynchronous pipeline on Celery for heavy work such as AI focus-analysis report generation and email delivery.',
      'Implemented automated, gameplay-driven personalized study advice via LLM integration.',
      'Set up static analysis with Ruff and MyPy on GitHub Actions and automated backend test coverage measurement.',
    ],
  },
  {
    content: 'Hybrid multi-infra (K8s/AWS) strategy and GitOps',
    subContents: [
      'Built a homelab Kubernetes cluster and operated an ArgoCD-driven GitOps deployment workflow (Alpha).',
      'Established a production environment on AWS RDS and EC2 with data durability and scalability in mind.',
      'Built a CI/CD pipeline on GitHub Actions and automated Swagger (OpenAPI 3.0) document extraction.',
    ],
  },
]
