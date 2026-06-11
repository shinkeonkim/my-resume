import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '<strong>KDT 수강생 역량진단리포트 백엔드 단독 개발</strong>',
    period: '2024.07 ~ 2025.02',
    subContents: [
      'Ruby on Rails + ActiveAdmin 기반 백엔드 단독 개발 (PM · 기획 · 디자인 · QA 협업, 약 6개월간)',
      '시험 결과 기반 분야별 역량 도출·통계 제공 서비스. 모든 문제 타입마다 역량 정보를 도출하기 위한 설계·모델링 수행',
      '도메인 모델 1차 출시 후 운영 요구 변경에 따라 폐기 → 2차 재설계 의사결정. feature flag로 1차/2차 병행 운영 후 점진 전환',
      '2차 도메인으로 코스 단위 통합 리포트 모델링 (Course ↔ CompetencyTagGroup ↔ CompetencyTag ↔ CompetencyStandard ↔ LessonCompetencyReport ↔ CourseCompetencyReport)',
      '비동기 처리 흐름: GradeWorker → UserLesson#finish concern → feature flag 가드 → 정규화 점수·평가 기준 매칭 → 리포트 생성',
      '학생 / 코스 관리자 / 어드민 3축 API 분리, 5차 시리즈 릴리즈로 운영팀 QA 합의 기반 점진 출시',
      '무중단 schema 정리 방법론(사용처 → 컬럼 → 테이블 drop 순) 일관 적용',
    ],
  },
  {
    content: '<strong>원티드 KDT 서비스 (wantedlms) 멀티 테넌트 분기 작업</strong>',
    period: '2024.07 ~ 2024.11',
    subContents: [
      '동일 코드베이스에서 프로그래머스 / wantedlms 환경을 분기 운영하기 위한 멀티 테넌트 작업',
      '환경별 feature flag(Settings.features)로 기능 활성·비활성 분기, 어드민 대시보드 / role 관리 / 알림 경로 별도 분기',
      '월요일·목요일 오전 자동 배포 cron 일정 운영',
    ],
  },
  {
    content: '<strong>프로그래머스 프로젝트 LMS V1 API 신규 도입 + service object 분리</strong>',
    period: '2024.08 ~ 2025.02',
    subContents: [
      '레거시 /api/school/* → /api/v1/lms/* 도메인별 신규 V1 API (게시판, 알림, 학습활동, 학습이력 등)',
      '에러 응답 양식 통일 (단일 error string → code + message 객체)로 프론트가 일관된 인터페이스로 처리',
      '수료증 발급 / 학생 재초대 로직을 service object 패턴으로 분리 + 어드민 bulk 재초대 기능 추가',
      '레거시 school 도메인을 lms / learn 도메인으로 분리하여 후임자 인계 용이성 확보',
    ],
  },
  {
    content: '<strong>사내 PR 리뷰 알림 봇 전사 확장 (단일팀 → 4팀)</strong>',
    period: '2024.07 ~ 2024.08',
    subContents: [
      '레거시 사내 도구(Python · slack_sdk · PyGithub · GitHub Actions cron)를 인계받아 단일팀 → 4개 팀으로 범용화',
      '팀원 정보 하드코딩 제거: Slack 사용자그룹 API + 멤버 GitHub Username 필드 동적 조회',
      'PR 본문의 "희망 리뷰 완료일"에서 D-Day 자동 계산 + 평일 오전 10시 팀별 Slack 알림 cron',
    ],
  },
  {
    content: '<strong>프로그래머스 스쿨 / 캠퍼스 LMS 유지보수 및 신규 기능 개발</strong>',
    period: '2024.07 ~ 2025.03',
    subContents: ['Ruby on Rails + Django 기반 LMS 서비스 유지보수 및 기능 개선'],
  },
]
