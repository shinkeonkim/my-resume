export const projects = [
  {
    title: '미핏 - AI 가상면접 훈련 플랫폼',
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
    details: [
      {
        content: '역할: 4인 팀 PM / Backend·Infra Lead / AI 분석 파이프라인 및 Frontend 개발',
      },
      {
        content: 'Django 기반 도메인 분리 백엔드 설계 및 LLM 통합',
        subContents: [
          '도메인 앱을 도메인/API 레이어로 분리하고 BaseService + execute() 자체 서비스 레이어 패턴을 도입하여 fat models/views 안티패턴 회피',
          'LangChain RAG 기반 면접 질문 생성, pgvector 이중 임베딩(원문 청크 + 구조화 JSON) 전략 및 TokenUsage 비용 추적 도입',
        ],
      },
      {
        content: 'K3s 기반 자체 호스팅 인프라 및 비용 최적화',
        subContents: [
          'EC2 위 K3s 2노드 클러스터(nodepool 분리, RollingUpdate) 구성으로 EKS 대비 컨트롤 플레인 월 비용 절감',
          'LiteLLM Proxy 도입으로 6개 Pod의 LLM 호출을 중앙화하고 OpenAI/Bedrock 자동 폴백 + 가상키 Spend 추적 구축',
          'Github Secrets 및 Github Actions를 활용한 CI/CD 구축 및 비밀값 관리',
        ],
      },
      {
        content: '서버리스 영상 분석 파이프라인 및 AI 시스템 구축',
        subContents: [
          'S3 → SNS fan-out → 3 SQS → Lambda 기반 영상 처리 파이프라인 설계 및 Lambda Layer 공통 모듈화',
          '이력서 분석을 Celery chord 패턴으로 병렬 처리하여 처리 시간 30-60초, 이력서 분석 비용 $0.006 달성',
          'SSE로 실시간 진행 상황 스트리밍',
        ],
      },
      // {
      //   content: 'React 19 기반 Frontend 및 실시간 통신 구현',
      //   subContents: [
      //     'FSD 6레이어 단방향 의존 아키텍처와 Zustand 12개 store로 14개 features 모듈을 병렬 개발 가능하게 구성',
      //     'MediaPipe FaceLandmarker GPU 가속 실시간 얼굴/시선 분석 및 S3 5MB 청크 멀티파트 직접 업로드(presigned URL) 구현',
      //     '메모리 Access Token + HttpOnly Refresh Cookie 보안 강화 인증, WebSocket(면접 세션) / SSE(분석 진행) 이원화 및 Connection Fencing(code 4409) 다중 탭 충돌 처리',
      //   ],
      // },
      {
        content: 'PM 역할 및 기술 의사결정 주도',
        subContents: [
          '4인 팀 PM으로 12개 서브 프로젝트 책임 분배 및 핵심 기술 의사결정 리드',
          '비즈니스 모델(Free/Premium 구독 + 1회성 티켓) 설계',
          'RDS 커넥션 풀 고갈, EC2 메모리 자원 부족 등 운영 인시던트 대응 및 Slack 알림 기반 대응 체계 수립',
        ],
      },
    ]
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
]
