import { useLocalized } from '@/composables/useLocale'
import type { LinkItem } from '../types/LinkItem'

interface ProjectDetail {
  content: string
  subContents?: string[]
}

interface Project {
  title: string
  period: string
  techStack: string[]
  details: ProjectDetail[]
  links?: LinkItem[]
}

const data: Record<'ko' | 'en', Project[]> = {
  ko: [
    {
      title: '미핏 - AI 가상면접 훈련 플랫폼',
      period: '2025.03 ~ 2025.06',
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
      details: [
        {
          content: '역할: 4인 팀 PM / Backend·Infra Lead / AI 분석 파이프라인 및 Frontend 개발',
        },
        {
          content: 'Django 6 기반 도메인 분리 백엔드 설계 및 LLM 통합',
          subContents: [
            '14개 도메인 앱을 도메인/API 레이어로 물리 분리하고 BaseService + execute() 서비스 레이어 패턴을 도입하여 fat models/views 안티패턴 회피',
            'JWT 인증(Access 5분/Refresh 7일, Connection Fencing) 및 구독·티켓 이중 차감 + Celery Beat daily reset 시스템 구현',
            'LangChain RAG 기반 면접 질문 생성, pgvector 이중 임베딩(원문 청크 + 구조화 JSON) 전략 및 TokenUsage 비용 추적 도입',
            'Factory Boy + @patch 모킹 기반 정상/예외 케이스 테스트 206개 작성',
          ],
        },
        {
          content: 'K3s 기반 자체 호스팅 인프라 및 비용 최적화',
          subContents: [
            'EC2 위 K3s 2노드 클러스터(nodepool 분리, PDB, RollingUpdate) 구성으로 EKS 대비 컨트롤 플레인 월 ~$73 절감',
            'LiteLLM Proxy 도입으로 6개 Pod의 LLM 호출을 중앙화하고 OpenAI/Bedrock/Gemini 자동 폴백 + 가상키 Spend 추적 구축',
            'iptables NAT로 Pod → EC2 메타데이터 라우팅 구성, AWS Secret 관리 제거 및 IAM Role 자격증명 자동 사용 전환',
            'Grafana Cloud + Loki 모니터링과 비업무 시간 정지 전략으로 전체 운영비 월 ~$80-100 달성',
          ],
        },
        {
          content: '서버리스 영상 분석 파이프라인 및 AI 시스템 구축',
          subContents: [
            'S3 → SNS fan-out → 3 SQS → Lambda 4+1개(video/frame/audio/face/voice) 영상 처리 파이프라인 설계 및 Lambda Layer 공통 모듈화',
            'MediaPipe blendshape 규칙 기반 표정 분류 + OpenCV solvePnP 시선 추정을 Lambda 250MB 제약 내에 최적화',
            '이력서 분석을 Celery chord 패턴으로 병렬 처리하여 처리 시간 30-60초/이력서 $0.006 달성, SSE로 실시간 진행 상황 스트리밍',
          ],
        },
        {
          content: 'React 19 기반 Frontend 및 실시간 통신 구현',
          subContents: [
            'FSD 6레이어 단방향 의존 아키텍처와 Zustand 12개 store로 14개 features 모듈을 병렬 개발 가능하게 구성',
            'MediaPipe FaceLandmarker GPU 가속 실시간 얼굴/시선 분석 및 S3 5MB 청크 멀티파트 직접 업로드(presigned URL) 구현',
            '메모리 Access Token + HttpOnly Refresh Cookie 보안 강화 인증, WebSocket(면접 세션) / SSE(분석 진행) 이원화 및 Connection Fencing(code 4409) 다중 탭 충돌 처리',
          ],
        },
        {
          content: 'PM 역할 및 기술 의사결정 주도',
          subContents: [
            '4인 팀 PM으로 모노레포 12개 서브 프로젝트 책임 분배 및 9건의 핵심 기술 의사결정 리드 (Django vs FastAPI, K3s vs EKS, edge-tts vs 유료 TTS 등)',
            '241페이지 최종보고서 원안 작성과 비즈니스 모델(Free/Premium 구독 + 1회성 티켓) 설계',
            'RDS 커넥션 풀 고갈, STT Silent Failure 등 운영 인시던트 대응 및 Slack 알림 기반 인시던트 대응 체계 수립',
          ],
        },
      ],
    },
    {
      title: '깜빡이 - 아동 집중력 향상을 위한 AI 기반 게임 교육 플랫폼',
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
      details: [
        {
          content: '역할: 백엔드 개발 및 인프라 구축',
        },
        {
          content: '분산 아키텍처 및 AI 리포트 시스템 구축',
          subContents: [
            'Celery를 활용하여 AI 집중력 분석 리포트 생성 및 이메일 발송 등 무거운 작업을 비동기 처리 시스템으로 구축',
            'LLM(Large Language Model) 연동을 통한 게임 플레이 데이터 기반 맞춤형 학습 조언 자동 생성 기능 구현',
            'Github Actions, Ruff, MyPy를 활용한 정적 분석 및 백엔드 테스트 커버리지 자동 측정 환경 구성',
          ],
        },
        {
          content: '하이브리드 멀티 인프라(K8s/AWS) 전략 및 GitOps 구현',
          subContents: [
            '홈랩 환경에 k8s 클러스터를 구축하고 ArgoCD를 활용한 GitOps 기반 배포 자동화(Alpha) 환경 운영',
            'AWS RDS와 AWS EC2를 활용하여 데이터 안정성과 확장성을 확보한 프로덕션 환경 구축',
            'GitHub Actions를 통한 CI/CD 파이프라인 구축 및 Swagger(OpenAPI 3.0) 문서 추출 자동화',
          ],
        },
      ],
      links: [
        { icon: 'fab fa-github', url: 'https://github.com/kkambbaki/backend' },
        { icon: 'fab fa-github', url: 'https://github.com/kkambbaki/infra' },
      ],
    },
    {
      title: 'Athena - 문제 해결과 학습을 위한 AI 알고리즘 학습 플랫폼',
      period: '2025.04 ~ 2025.06',
      techStack: ['Django', 'Python', 'Rust', 'Docker', 'gRPC', 'PostgreSQL', 'Redis', 'Celery', 'Nginx', 'LLM'],
      details: [
        {
          content: '역할: 기획, 단독 개발',
        },
        {
          content: 'AI 기반 코드 피드백 및 격리된 실행 시스템 구축',
          subContents: [
            'LLM을 활용한 소스 코드 분석 및 실시간 맞춤형 피드백 시스템 구현',
            'Docker 컨테이너를 활용하여 다양한 언어(C++, Python, Ruby, Java 등)를 지원하는 안전한 격리 실행 환경 구축',
          ],
        },
        {
          content: '분산 처리 기반 데이터 수집 및 시맨틱 검색 엔진 구현',
          subContents: [
            'Celery를 활용하여 solved.ac API 및 웹 파싱 기반의 문제/게시글 수집 자동화 파이프라인 구축',
          ],
        },
        {
          content: '마이크로서비스 아키텍처(MSA) 설계',
          subContents: [
            'Code Executor, Judger, Testcase Generator 등 핵심 모듈을 gRPC 기반으로 연동하여 시스템 확장성 및 통신 효율성 확보',
          ],
        },
      ],
      links: [
        { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/AD_project_athena/' },
        { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/code-judger/' },
        { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/code-executor/' },
        { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/code-testcase-generator/' },
      ],
    },
  ],
  en: [
    {
      title: 'MeFit — AI Virtual Interview Training Platform',
      period: '2025.03 ~ 2025.06',
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
      details: [
        {
          content: 'Role: PM of a 4-person team / Backend·Infra Lead / AI analytics pipeline and Frontend developer',
        },
        {
          content: 'Domain-segregated backend on Django 6 with LLM integration',
          subContents: [
            'Physically split 14 domain apps into domain and API layers and introduced a BaseService + execute() service layer pattern to avoid fat models/views anti-patterns.',
            'Implemented JWT authentication (Access 5min / Refresh 7 days, Connection Fencing) and a subscription·ticket dual-deduction model with Celery Beat-driven daily resets.',
            'Built LangChain RAG-based interview question generation, a pgvector dual embedding strategy (raw chunks + structured JSON), and TokenUsage cost tracking.',
            'Authored 206 tests (Factory Boy + @patch mocking) covering both happy paths and edge cases.',
          ],
        },
        {
          content: 'Self-hosted infrastructure on K3s with cost optimization',
          subContents: [
            'Composed a 2-node K3s cluster on EC2 (nodepool isolation, PDB, RollingUpdate), saving ~$73/month versus an EKS control plane.',
            'Introduced LiteLLM Proxy to centralize LLM calls across 6 pods with automatic OpenAI/Bedrock/Gemini fallback and virtual-key spend tracking.',
            'Routed Pod → EC2 metadata traffic via iptables NAT, eliminating AWS Secret management in favor of automatic IAM Role credentials.',
            'Operated Grafana Cloud + Loki monitoring with off-hours shutdown to keep total infra cost around $80–100/month.',
          ],
        },
        {
          content: 'Serverless video analysis pipeline and AI systems',
          subContents: [
            'Designed an S3 → SNS fan-out → 3 SQS → Lambda 4+1 (video/frame/audio/face/voice) processing pipeline and shared common modules through a Lambda Layer.',
            'Optimized MediaPipe blendshape rule-based facial classification and OpenCV solvePnP gaze estimation to fit within the 250MB Lambda limit.',
            'Parallelized resume analysis with the Celery chord pattern, reaching 30–60 seconds and ~$0.006 per resume while streaming progress through SSE.',
          ],
        },
        {
          content: 'React 19 frontend and real-time communication',
          subContents: [
            'Structured 14 feature modules with FSD 6-layer one-way dependency architecture and 12 Zustand stores to enable parallel development.',
            'Implemented MediaPipe FaceLandmarker GPU-accelerated real-time face/gaze analysis and direct multipart S3 uploads (5MB chunks, presigned URLs).',
            'Hardened auth with an in-memory Access Token plus HttpOnly Refresh Cookie, split realtime channels between WebSocket (interview session) and SSE (analysis progress), and handled multi-tab conflicts via Connection Fencing (code 4409).',
          ],
        },
        {
          content: 'PM responsibilities and technical decision leadership',
          subContents: [
            'Led a 4-person team as PM, distributing ownership across 12 monorepo sub-projects and driving 9 key technical decisions (Django vs FastAPI, K3s vs EKS, edge-tts vs paid TTS, etc.).',
            'Authored a 241-page final report and designed the business model (Free/Premium subscriptions + single-use tickets).',
            'Responded to operational incidents (RDS connection pool exhaustion, STT silent failures) and established a Slack alert-based incident response process.',
          ],
        },
      ],
    },
    {
      title: 'Kkambbaki — AI-powered Educational Game Platform for Children\'s Focus',
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
      details: [
        {
          content: 'Role: Backend development and infrastructure setup',
        },
        {
          content: 'Distributed architecture and AI report system',
          subContents: [
            'Built an asynchronous pipeline on Celery for heavy work such as AI focus-analysis report generation and email delivery.',
            'Implemented automated, gameplay-driven personalized study advice via LLM (Large Language Model) integration.',
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
      ],
      links: [
        { icon: 'fab fa-github', url: 'https://github.com/kkambbaki/backend' },
        { icon: 'fab fa-github', url: 'https://github.com/kkambbaki/infra' },
      ],
    },
    {
      title: 'Athena — AI Algorithm Learning Platform for Problem-Solving and Study',
      period: '2025.04 ~ 2025.06',
      techStack: ['Django', 'Python', 'Rust', 'Docker', 'gRPC', 'PostgreSQL', 'Redis', 'Celery', 'Nginx', 'LLM'],
      details: [
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
      ],
      links: [
        { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/AD_project_athena/' },
        { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/code-judger/' },
        { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/code-executor/' },
        { icon: 'fab fa-github', url: 'https://github.com/shinkeonkim/code-testcase-generator/' },
      ],
    },
  ],
}

export function useProjects() {
  return useLocalized(data)
}
