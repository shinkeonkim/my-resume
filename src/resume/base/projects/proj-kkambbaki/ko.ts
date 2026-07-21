import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '역할: 백엔드 개발 및 인프라 구축',
  },
  {
    content: '분산 아키텍처 및 AI 리포트 시스템 구축',
    subContents: [
      'Celery를 활용하여 AI 집중력 분석 리포트 생성 및 이메일 발송 등 무거운 작업을 비동기 처리 시스템으로 구축',
      'LLM 연동을 통한 게임 플레이 데이터 기반 맞춤형 학습 조언 자동 생성 기능 구현',
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
]
