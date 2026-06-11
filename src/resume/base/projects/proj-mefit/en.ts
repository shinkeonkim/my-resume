import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content:
      'Role: PM of a 4-person team / Backend·Infra Lead / AI analytics pipeline and Frontend developer',
  },
  {
    content: 'Domain-segregated backend on Django 6 with LLM integration',
    subContents: [
      'Split domain apps into domain and API layers and introduced a custom Service and Task layer pattern to avoid the fat models/views anti-pattern.',
      'Implemented subscription-based billing plus a ticket-based pricing model, along with a Celery Beat-driven daily ticket system.',
      'Built LangChain RAG-based interview question generation, a pgvector dual embedding strategy (raw chunks + structured JSON), and LiteLLM-based cost tracking.',
      'Reached 91% test coverage by writing happy-path and edge-case tests with Factory Boy + @patch mocking.',
    ],
  },
  {
    content: 'Self-hosted infrastructure on K3s with cost optimization',
    subContents: [
      'Composed a 2-node K3s cluster on EC2 (nodepool isolation, RollingUpdate), saving ~$73/month versus an EKS control plane.',
      'Introduced LiteLLM Proxy to centralize LLM calls across 6 pods with automatic OpenAI/Bedrock fallback.',
    ],
  },
  {
    content: 'Serverless video analysis pipeline and AI systems',
    subContents: [
      'Designed an S3 → SNS fan-out → 3 SQS → Lambda 4+1 (video/frame/audio/face/voice) processing pipeline and shared common modules through a Lambda Layer.',
      'Parallelized resume analysis to reach 30–60 seconds per resume at ~$0.006 each, streaming live progress through SSE.',
    ],
  },
  {
    content: 'PM responsibilities and technical decision leadership',
    subContents: [
      'Led a 4-person team as PM, distributing ownership across 12 monorepo sub-projects and driving 9 key technical decisions (Django vs FastAPI, k3s vs k8s, edge-tts vs paid TTS, etc.).',
      'Designed the business model (Free/Premium subscriptions + single-use tickets).',
      'Responded to operational incidents such as RDS connection pool exhaustion and established a Slack alert-based incident response process.',
    ],
  },
]
