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
      'EC2 위 K3s 2노드 클러스터(nodepool 분리, RollingUpdate) 구성으로 EKS 대신 제한된 비용 내 자체 컨트롤 플레인 운영',
      'LiteLLM Proxy 도입으로 6개 Pod의 LLM 호출을 중앙화하고 OpenAI/Bedrock 자동 폴백',
    ],
  },
  {
    content: '서버리스 영상 분석 파이프라인 및 AI 시스템 구축',
    subContents: [
      'S3 → SNS fan-out → 3개의 SQS → Lambda 기반 영상 처리 파이프라인 설계 및 Lambda Layer 공통 모듈화',
      '이력서 분석을 병렬 처리하여 처리 시간 30-60초 / 이력서 개당 분석 비용 $0.006 달성 / SSE로 실시간 진행 상황 스트리밍',
    ],
  },
  {
    content: 'RDS 커넥션 고갈 문제 진단·해결 (앱 + 인프라)',
    subContents: [
      '<strong>증상 + 진단:</strong> API 지연 → 타임아웃 장애 발생. CloudWatch 메트릭/로그에서 RDS 커넥션 수 이상 급증 확인, 앱·인프라 양쪽에 원인 있음을 추적',
      '<strong>앱 근본 원인:</strong> (1) Celery 워커가 Django의 request_started/finished 시그널을 발생시키지 않아 close_old_connections() 미호출로 유휴 커넥션 누적, (2) 분석 마이크로서비스의 SQLAlchemy 풀 설정 부재',
      '<strong>코드 조치:</strong> worker_process_init에서 fork 직후 부모 상속 커넥션 close, task_prerun/postrun에 close_old_connections() 시그널 핸들러 추가, SQLAlchemy pool_size·max_overflow·pool_recycle 고정',
      '<strong>인프라 조치:</strong> RDS idle_session_timeout=15분 서버측 안전장치 지정, CloudWatch DatabaseConnections 2단계 알람 → Slack 알림으로 재발 방지',
    ],
  },
]
