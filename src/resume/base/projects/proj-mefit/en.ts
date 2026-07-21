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
      'Composed a 2-node K3s cluster on EC2 (nodepool isolation, RollingUpdate) — self-hosted the control plane within a limited budget instead of using EKS.',
      'Introduced LiteLLM Proxy to centralize LLM calls across 6 pods with automatic OpenAI/Bedrock fallback.',
    ],
  },
  {
    content: 'Serverless video analysis pipeline and AI systems',
    subContents: [
      'Designed an S3 → SNS fan-out → 3 SQS → Lambda-based video processing pipeline and shared common modules through a Lambda Layer.',
      'Parallelized resume analysis to reach 30–60 seconds per resume at ~$0.006 each, streaming live progress through SSE.',
    ],
  },
  {
    content: 'RDS Connection Exhaustion — Diagnosis & Resolution (App + Infra)',
    subContents: [
      '<strong>Symptom + Diagnosis:</strong> API latency → timeout outage. Traced an RDS connection surge from CloudWatch metrics/logs and identified root causes on both app and infra sides.',
      "<strong>App root causes:</strong> (1) Celery workers do not emit Django's request_started/finished signals, so close_old_connections() is never called and idle connections accumulate; (2) the analysis microservice had no SQLAlchemy pool configuration.",
      '<strong>Code fixes:</strong> closed inherited connections in worker_process_init after fork; added close_old_connections() signal handlers on task_prerun/postrun; pinned SQLAlchemy pool_size · max_overflow · pool_recycle.',
      '<strong>Infra fixes:</strong> set RDS idle_session_timeout=15min as a server-side safety net; wired CloudWatch DatabaseConnections two-tier alarm → Slack alerts to prevent recurrence.',
    ],
  },
]
