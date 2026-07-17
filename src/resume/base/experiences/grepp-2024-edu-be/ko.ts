import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '<strong>KDT 수강생 역량진단리포트 백엔드 단독 개발</strong>',
    period: '2024.07 ~ 2025.02',
    subContents: [
      'Ruby on Rails + ActiveAdmin 기반 백엔드 단독 개발 (PM · 기획 · 디자인 · QA 협업, 약 6개월)',
      '채점 워커 → concern → 정규화 점수 → 리포트 생성/알림/열람 추적 전체 흐름 설계, 5차 시리즈 릴리즈로 점진 출시',
      '1차 도메인 모델 폐기·2차 재설계 (Course ↔ CompetencyStandard ↔ CompetencyReport 관계), feature flag + 코스별 활성화 컬럼으로 무중단 이관',
      '백분위 계산은 Ruby 배열 정렬 대신 PostgreSQL 윈도우 함수로 위임, 배치 잡은 EXPLAIN 기반 seq scan → bitmap index scan 전환으로 앱 서버 메모리·쿼리 성능 확보',
      'N+1 은 관계 사용 형태별 도구 선택 (JOIN preload / 지연 preload / ID 비교) 로 규율화',
    ],
  },
  {
    content: '<strong>원티드 KDT 서비스 (wantedlms) 멀티 테넌트 분기 작업</strong>',
    period: '2024.07 ~ 2024.11',
    subContents: [
      '원티드 KDT LMS 서비스를 동일 코드베이스에서 멀티 테넌트로 운영하기 위한 분기',
      '환경별 YAML 설정으로 프로그래머스 / wantedlms 기능 활성·비활성 분기 - 저장소 fork 대안 대비 공통 유지보수 원자성 확보',
    ],
  },
  {
    content: '<strong>프로그래머스 프로젝트 LMS V1 API 신규 도입 + service object 분리</strong>',
    period: '2024.08 ~ 2025.02',
    subContents: [
      '레거시 /api/school/* → 도메인별 /api/v1/lms/* V1 API 도입 (게시판/알림/학습활동/이력), school 도메인을 lms/learn 으로 분리해 후임자 인계 용이성 확보',
      '에러 응답 스키마를 단일 error string → code + message 객체로 통일해 프론트 파싱 로직 단순화',
      '수료증 발급 / 학생 재초대 로직 service object 분리 + 어드민 bulk 재초대 기능 추가',
      'apipie 기반 API 문서화를 기능 PR 안에서 병행, 공통 응답은 Definitions 모듈로 추출해 재사용',
    ],
  },
  {
    content: '<strong>사내 PR 리뷰 알림 봇 전사 확장 (단일팀 → 4팀)</strong>',
    period: '2024.07 ~ 2024.08',
    subContents: [
      'Python · slack_sdk · PyGithub · GitHub Actions cron 기반 사내 도구를 인계받아 단일팀 → 4개 팀으로 범용화',
      '팀원 정보 하드코딩을 Slack 사용자그룹 API + GitHub Username 프로필 필드 동적 조회로 대체',
      'PR "희망 리뷰 완료일" 텍스트에서 D-Day 자동 계산 → 평일 오전 10시 팀별 Slack 알림 cron',
    ],
  },
  {
    content: '<strong>프로그래머스 스쿨 / 캠퍼스 LMS 유지보수 및 신규 기능 개발</strong>',
    period: '2024.07 ~ 2025.03',
    subContents: [
      'Ruby on Rails + Django 기반 LMS 유지보수 및 신규 기능 개발',
      '운영 이슈 (Sentry · Slack 보고) 를 근본 원인까지 추적해 회귀 스펙과 함께 수정',
      '컬럼명 불일치 어드민 검색 이슈는 실제 rename 대신 alias_attribute 로 해결해 마이그레이션 다운타임 회피',
    ],
  },
]
