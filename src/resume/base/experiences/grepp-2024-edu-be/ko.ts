import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: 'KDT 수강생 역량진단리포트 백엔드 단독 개발',
    period: '2024.07 ~ 2025.02',
    impact: '백엔드 단독 개발 (6개월) · PM/기획/디자인/QA 협업',
    subContents: [
      '채점 → 정규화 → 리포트/알림 파이프라인 설계, 점진 릴리즈로 출시',
      '백분위 계산은 Ruby 배열 정렬 대신 PostgreSQL 윈도우 함수로 위임, 배치 잡 seq scan → bitmap index scan 전환',
    ],
  },
  {
    content: '원티드 KDT 서비스 (wantedlms) 멀티 테넌트 분기 작업',
    period: '2024.07 ~ 2024.11',
    impact: '동일 코드베이스로 멀티 테넌트 운영 · fork 대안 대비 공통 유지보수 원자성 확보',
    subContents: [
      '환경별 YAML 설정으로 프로그래머스/wantedlms 기능 활성·비활성 분기',
      'Fork 대안 대비 공통 업데이트 원자성 유지, 저장소 이원화 비용 회피',
    ],
  },
  {
    content: '프로그래머스 프로젝트 LMS V1 API 신규 도입 + service object 분리',
    period: '2024.08 ~ 2025.02',
    impact: '레거시 → 도메인별 V1 API 전환 · service object로 로직 분리 · 후임자 인계 용이성 확보',
    subContents: [
      '레거시 /api/school/* → 도메인별 /api/v1/lms/* 도입, school 도메인을 lms/learn으로 분리',
      '에러 응답 스키마 단일 error string → code + message 객체 통일, 프론트 파싱 로직 단순화',
      '수료증 발급 / 학생 재초대 로직 service object 분리 + 어드민 bulk 재초대 기능 추가',
      'apipie 기반 API 문서화를 기능 PR 안에서 병행, 공통 응답은 Definitions 모듈로 추출해 재사용',
    ],
  },
  {
    content: '프로그래머스 스쿨 / 캠퍼스 LMS 유지보수 및 신규 기능 개발',
    period: '2024.07 ~ 2025.03',
    impact: 'LMS 운영 이슈 근본 원인 추적 + 회귀 스펙과 함께 수정',
    subContents: [
      'Sentry/Slack 보고 이슈를 근본 원인까지 추적, 회귀 스펙과 함께 수정',
      '컬럼명 불일치 어드민 검색 이슈: 실제 rename 대신 alias_attribute로 해결 → 마이그레이션 다운타임 회피',
    ],
  },
]
