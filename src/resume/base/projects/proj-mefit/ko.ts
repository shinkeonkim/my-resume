import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '역할: 4인 팀 PM / Backend·Infra Lead / AI 분석 파이프라인 및 Frontend 개발',
  },
  {
    content: 'Django 6 기반 도메인 분리 백엔드 설계 및 LLM 통합',
    subContents: [
      '도메인 앱을 도메인/API 레이어로 분리하고 Service, Task 레이어 자체 패턴을 도입하여 fat models/views 안티패턴 회피',
      '구독제 및 티켓 기반 요금제 구현, Celery Beat 기반 일일 티켓 시스템 구현',
      'LangChain RAG 기반 면접 질문 생성, pgvector 이중 임베딩(원문 청크 + 구조화 JSON) 전략 및 LiteLLM 기반 비용 추적 도입',
      'Factory Boy + @patch 모킹 기반 정상/예외 케이스 테스트 작성으로 테스트 커버리지 91% 달성',
    ],
  },
  {
    content: 'K3s 기반 자체 호스팅 인프라 및 비용 최적화',
    subContents: [
      'EC2 위 K3s 2노드 클러스터(nodepool 분리, RollingUpdate) 구성으로 EKS 대비 컨트롤 플레인 월 ~$73 절감',
      'LiteLLM Proxy 도입으로 6개 Pod의 LLM 호출을 중앙화하고 OpenAI/Bedrock 자동 폴백',
    ],
  },
  {
    content: '서버리스 영상 분석 파이프라인 및 AI 시스템 구축',
    subContents: [
      'S3 → SNS fan-out → 3 SQS → Lambda 4+1개(video/frame/audio/face/voice) 영상 처리 파이프라인 설계 및 Lambda Layer 공통 모듈화',
      '이력서 분석을 병렬 처리하여 처리 시간 30-60초 / 이력서 개당 분석 비용 $0.006 달성 / SSE로 실시간 진행 상황 스트리밍',
    ],
  },
  {
    content: 'PM 역할 및 기술 의사결정 주도',
    subContents: [
      '4인 팀 PM으로 모노레포 12개 서브 프로젝트 책임 분배 및 9건의 핵심 기술 의사결정 리드 (Django vs FastAPI, k3s vs k8s, edge-tts vs 유료 TTS 등)',
      '비즈니스 모델(Free/Premium 구독 + 1회성 티켓) 설계',
      'RDS 커넥션 풀 고갈 등 운영 인시던트 대응 및 Slack 알림 기반 인시던트 대응 체계 수립',
    ],
  },
]
