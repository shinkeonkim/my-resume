export const projects = [
  {
    title: '깜빡이',
    period: '2025.10 ~ 2025.11',
    techStack: [
      'Django',
      'Python',
      'PostgreSQL',
      'Redis',
      'Celery',
      'K3s',
      'ArgoCD',
      'AWS EC2',
      'Nginx',
      'Github Actions',
    ],
    details: [
      {
        content: '아동 집중력 향상을 위한 AI 기반 게임 교육 플랫폼',
        subContents: ['<strong>역할</strong>: 백엔드 개발 및 인프라 구축'],
      },
      {
        content: '분산 아키텍처 및 AI 리포트 시스템 구축',
        subContents: [
          'Celery와 Redis를 활용하여 AI 집중력 분석 리포트 생성 및 이메일 발송 등 무거운 작업을 비동기 처리 시스템으로 구축',
          'LLM(Large Language Model) 연동을 통한 게임 플레이 데이터 기반 맞춤형 학습 조언 자동 생성 기능 구현',
          'Ruff, MyPy를 활용한 정적 분석 및 백엔드 테스트 커버리지 자동 측정 환경 구성',
        ],
      },
      {
        content: '하이브리드 멀티 인프라(K8s/AWS) 전략 및 GitOps 구현',
        subContents: [
          '홈랩 환경에 K3s 클러스터를 구축하고 ArgoCD를 활용한 GitOps 기반 배포 자동화(Alpha) 환경 운영',
          'AWS RDS와 EC2(Docker Compose)를 활용하여 데이터 안정성과 확장성을 확보한 프로덕션 환경 구축',
          'GitHub Actions를 통한 CI/CD 파이프라인 구축 및 Swagger(OpenAPI 3.0) 문서 자동화',
        ],
      },
    ],
    links: [
      { icon: 'fab fa-github', url: 'https://github.com/kkambbaki/backend' },
      { icon: 'fab fa-github', url: 'https://github.com/kkambbaki/infra' },
    ],
  },
  {
    title: 'Athena (Project)',
    period: '2025.04 ~ 2025.06',
    techStack: ['Django', 'Python', 'Rust', 'Docker', 'gRPC', 'PostgreSQL', 'Redis', 'Celery', 'Nginx', 'LLM'],
    details: [
      {
        content: '문제 해결과 학습을 위한 인터랙티브 AI 알고리즘 학습 플랫폼',
        subContents: ['<strong>역할</strong>: 기획, 단독 개발'],
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
          'Celery와 Redis를 활용하여 solved.ac API 및 웹 파싱 기반의 문제/게시글 수집 자동화 파이프라인 구축',
          '임베딩 모델(all-MiniLM-L6-v2)과 코사인 유사도를 활용한 사용자 맞춤형 반례 데이터 추천 기능 개발',
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