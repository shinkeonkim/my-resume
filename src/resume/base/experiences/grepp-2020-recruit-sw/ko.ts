import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '<strong>이력서 모델 jsonb → 정규화 무중단 마이그레이션</strong>',
    period: '2022.05 ~ 2022.10',
    subContents: [
      '이력서 6개 도메인 (경력/프로젝트/교육/수상/활동/논문) 이 jsonb 컬럼에 저장 → 필터·정렬·집계 요구 증가로 JSONB 인덱싱 한계 · 저장 공간 낭비 병목화',
      'GIN 인덱스 부분 튜닝 vs 정규화 대안 검토 후 도메인 별 모델 (ResumeExperience 외 5종) 로 정규화',
      '무중단 4단계 (ignored_columns → 사용처 이관 → 컬럼 drop → 테이블 drop) 로 앱 서버 병행 배포 구간 스키마 캐시 miss 500 원천 차단',
      '이후 회사/채용공고/대회/프로필 등 다도메인 표준 방식으로 확장, API 응답 속도 · 데이터 분석 활용도 개선',
    ],
  },
  {
    content: '<strong>전사 본인인증 프로젝트 신규 구축 + 프로그래머스 프로젝트 통합</strong>',
    period: '2022.07 ~ 2022.09',
    subContents: [
      'Python · Flask · AWS Lambda (Container Image) · API Gateway · DynamoDB · Terraform · Terragrunt 기반 공용 인증 서비스 신규 구축 (사내 여러 서비스가 NICE 본인인증을 각자 통합하지 않도록 분리)',
      '3개 환경 (alpha/beta/production) 별 ECR · Lambda · SSO · terragrunt 디렉토리 분리',
      'DynamoDB 단일 테이블 (token_version_id HASH + TTL) 로 만료 키 자동 제거, RDBMS + cron 대안 대비 운영 요소 최소화',
      'Lambda Container Image 로 ZIP 250MB 제한 우회 + 개발/배포 환경 일관성 확보',
      '프로그래머스 프로젝트 통합: ActionCable WebSocket 인증 흐름 + 계정 관리 페이지 본인인증 화면 개발',
    ],
  },
  {
    content: '<strong>비즈니스 프로그래머스 — 개발자 검색 SSR → SPA 전환 + 어드민 개선</strong>',
    period: '2021.01 ~ 2022.04',
    subContents: [
      'Ruby on Rails SSR + CoffeeScript 강결합 컨트롤러를 백엔드 API 분리 + Vue.js Composition API + TypeScript SPA 로 전환',
      '검색 백엔드 하이브리드 설계: 텍스트/랭킹은 ElasticSearch (한국어 analyzer · bool 쿼리), 정확 매칭/접근 제어는 PostgreSQL (배열 연산자 · ransack scope) - RDB 단독 처리 대안 대비 형태소 분석 인프라 자체 구축 회피',
      '회사 관점 접근 제어 (열람/차단/북마크/제안/인재풀/이미 본 프로필 제외) 를 조합 가능한 scope 체인으로 설계해 새 화면 추가 시 재사용',
      'ransack scope 화이트리스트 + Arel 바인드 파라미터로 SQL Injection 원천 차단, 컴포넌트 단위 RSpec/Jest 테스트 다수 보강',
    ],
  },
  {
    content: '<strong>채용공고 페이지 SSR → SPA 전환 (Vue + Composition API + TypeScript)</strong>',
    period: '2021.03 ~ 2022.07',
    subContents: [
      '채용공고 #index 부터 Vue SPA (vue-router + Composition API + TypeScript 도메인 모델) 로 전환',
      '필터 시스템 컴포넌트화 (Tag/Company/Location/MinSalary 등 + URL 동기화 · AutoComplete · sticky), 컨트롤러 if 체인 → 명명된 scope + ransack 화이트리스트 이관',
      '여러 컨트롤러 (일반/대회 채용공고) 중복 필터 로직을 concern 으로 통합해 인덱스 튜닝 지점 수렴',
      '회사 필터 순서 정렬은 Ruby sort_by 대신 SQL CASE 위임 - 페이지네이션과 자연스러운 결합 + 기존 company_ids 순서 재사용해 API 계약 단순 유지',
    ],
  },
  {
    content:
      '<strong>이력서 GitHub 분석기 정밀도·운영 안정성 개선 + 프로그래머스 프로젝트 통합</strong>',
    period: '2021.07 ~ 2021.09, 2022.03 후속 대응',
    subContents: [
      'Ruby · Rugged · github-linguist · ActionCable · AWS ECS · Sentry 기반 이력서 GitHub 분석기 개선',
      'Rugged::Walker 정렬 옵션 명시화 + 단일 커밋 레포 엣지 케이스 대응으로 커밋 미분석 건수 0건 달성',
      'Timeout / Rugged::HTTPError 를 별도 상태 (banned/error) 로 분리해 운영 알람 노이즈 제거, clone URL 에 노출된 PAT 토큰 제거',
      'git:// 프로토콜 deprecation 즉시 https:// 마이그레이션, 프로그래머스 프로젝트 통합에서 octokit 페이지네이션 안정화 + git_stat 통계 화면 개선',
    ],
  },
  {
    content: '<strong>추천 채용공고 ES → AWS Personalize 개인화 추천 전환</strong>',
    period: '2021.04 PoC · 2021.07 ~ 2021.12 안정화',
    subContents: [
      'ElasticSearch 기반 고정 추천을 AWS Personalize Campaign 개인화 추천으로 전환 - Rails 자체 랭킹 구현의 스코어링/A/B/재훈련 파이프라인 운영 부담을 관리형 서비스에 위임',
      'API client 싱글톤화 + rails console PoC 명령어 초기 검증, Action tracking (클릭/put_item/URL) + 랜덤 노출 비율로 모니터링',
      '채용공고 클릭률 · 지원율 향상 확인, 과제테스트 연습 페이지 내 추천 채용공고 노출로 적용 영역 확장',
    ],
  },
  {
    content: '<strong>대회 / 과제테스트 연습 도메인 확장</strong>',
    period: '2021.09 ~ 2022.09',
    subContents: [
      '대회 시스템 어드민 / 상세 검색 / 등록 엑셀 / 통계 / 반응형 레이아웃 점진 출시 + 대회 V1 API (상세/지원/리더보드/취소) 확장',
      '대회 참가 기업 대량 등록: activerecord-import 배치 삽입 + on_duplicate_key_ignore 로 왕복 횟수를 상수 수준으로 축소 (find_or_create_by 루프 대비)',
      '"대회 → 참여 회사" 집합은 has_many :through + distinct association 으로 DB 위임, 방치 지원서 만료는 revoke_at 컬럼 사전 계산으로 배치 조건 단순화',
      '종료된 대회 목록에 페이지네이션 선제 적용 (응답 크기 상수 유지), 검증 로직은 counter_cache 배제하고 실측 count 사용',
    ],
  },
  {
    content:
      '<strong>서비스 품질 개선: 테스트 커버리지 70 → 80% + 에러 알림 채널 분리 + 무중단 schema 방법론</strong>',
    period: '2020.12 ~ 2022.10',
    subContents: [
      '테스트 커버리지 70% → 80% 개선 기여 (컨트롤러/모델/정책/팩토리 spec 보강)',
      'Test Suite let_it_be 전면 전환 (파일 단위 40+회 나눠 진행) 으로 매 example 재생성 팩토리 → describe 그룹당 1회로 감소',
      '채용 도메인 컨트롤러/채널/잡에 dept.career 태그 부착 → 에러 핸들러가 채용사업부 Slack 채널로 라우팅해 응답 책임자 명확화 + 알람 노이즈 감소',
      '어드민 무거운 select box (전체 collection 로딩) 와 커스텀 ransacker 복붙 패턴을 AJAX 원격 검색 + 네이티브 ransack 연관 필터로 일괄 정리',
      '무중단 schema 정리 방법론 확립 (ignored_columns → 사용처 삭제 → 컬럼/테이블 drop), 이력서/채용공고/회사/대회/인재 프로필 등 다도메인 일관 적용',
    ],
  },
]
