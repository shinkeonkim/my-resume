import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '이력서 모델 jsonb → 정규화 무중단 마이그레이션 + schema 방법론 확립',
    period: '2022.05 ~ 2022.10',
    impact: 'JSONB 인덱싱 병목 해소 · 무중단 4단계 마이그레이션 표준 확립 · 다도메인 확산',
    subContents: [
      '이력서 6개 도메인(경력/프로젝트/교육/수상/활동/논문) jsonb 컬럼 → 필터·정렬·집계 요구 증가로 인덱싱 한계·저장 공간 낭비 병목화',
      'GIN 인덱스 부분 튜닝 vs 정규화 대안 검토 후 도메인 별 모델로 정규화',
      '무중단 4단계 (ignored_columns → 사용처 이관 → 컬럼 drop → 테이블 drop) 로 앱 서버 병행 배포 구간 스키마 캐시 miss 500 원천 차단',
      '이후 회사/채용공고/대회/프로필 등 다도메인 표준 방식으로 확장, API 응답·데이터 분석 활용도 개선',
    ],
  },
  {
    content: '전사 본인인증 프로젝트 신규 구축 + 프로그래머스 프로젝트 통합',
    period: '2022.07 ~ 2022.09',
    impact:
      '사내 공용 인증 서비스 신규 구축 · 서비스별 NICE 통합 부담 제거',
    subContents: [
      'Python · Flask · AWS Lambda (Container Image) · API Gateway · DynamoDB · Terraform · Terragrunt 기반, 3개 환경 (alpha/beta/production) 별 디렉토리 분리',
      'DynamoDB 단일 테이블 (token_version_id HASH + TTL) 로 만료 키 자동 제거, RDBMS + cron 대안 대비 운영 요소 최소화',
      'Lambda Container Image 로 ZIP 250MB 제한 우회 + 개발/배포 환경 일관성 확보',
      '프로그래머스 통합: ActionCable WebSocket 인증 흐름 + 계정 관리 페이지 본인인증 화면 개발',
    ],
  },
  {
    content: '채용 도메인 SSR → SPA 전환 (개발자 검색 + 채용공고)',
    period: '2021.01 ~ 2022.07',
    impact:
      'Rails SSR + CoffeeScript 강결합 스택 → Vue Composition API + TypeScript SPA 전환',
    subContents: [
      '개발자 검색 리팩토링 (800+ files 규모): SSR 컨트롤러 → 백엔드 API + Vue 컴포넌트로 분리, 이후 필터 확장 원활',
      '채용공고 페이지 Vue SPA 전환: vue-router + Composition API + TypeScript 도메인 모델',
      '검색 하이브리드 설계: ElasticSearch (텍스트/랭킹) + PostgreSQL (정확 매칭·접근 제어)',
      '회사 관점 접근 제어 (열람/차단/북마크/제안/인재풀/제외) 를 조합 가능한 scope 체인으로 설계해 신규 화면 재사용, 여러 컨트롤러 중복 필터 로직 concern 으로 통합',
      'ransack scope 화이트리스트 + Arel 바인드 파라미터로 SQL Injection 원천 차단, RSpec/Jest 테스트 다수 보강',
    ],
  },
  {
    content: '이력서 GitHub 분석기 정밀도·운영 안정성 개선',
    period: '2021.07 ~ 2021.09, 2022.03 후속 대응',
    impact: '미분석 커밋 0건 달성 · 알람 노이즈 제거 · PAT 토큰 유출 차단',
    subContents: [
      'Rugged::Walker 정렬 옵션 명시화 + 단일 커밋 레포 엣지 케이스 대응',
      'Timeout / HTTPError 를 별도 상태 (banned/error) 로 분리, clone URL 에 노출된 PAT 토큰 제거',
      'git:// 프로토콜 deprecation 즉시 https:// 마이그레이션, octokit 페이지네이션 안정화',
    ],
  },
  {
    content: '추천 채용공고 ElasticSearch → AWS Personalize 개인화 추천 전환',
    period: '2021.04 PoC · 2021.07 ~ 2021.12 안정화',
    impact:
      '자체 랭킹 → 관리형 개인화 서비스 위임 · 클릭률·지원율 향상 · 적용 영역 확장',
    subContents: [
      'ES 기반 고정 추천 → AWS Personalize Campaign - 스코어링/A/B/재훈련 파이프라인 운영 부담을 관리형 서비스에 위임',
      'API client 싱글톤화 + rails console PoC + Action tracking (클릭/put_item/URL) + 랜덤 노출 모니터링',
      '과제테스트 연습 페이지 내 추천 채용공고 노출로 적용 영역 확장',
    ],
  },
  {
    content: '대회 도메인 확장 + 서비스 품질 개선 (커버리지·에러 알림)',
    period: '2020.12 ~ 2022.10',
    impact:
      '대회 시스템 신규 확장 + <strong>테스트 커버리지 70% → 80%</strong> · 사업부별 에러 알림 라우팅',
    subContents: [
      '대회 시스템 어드민/상세/등록 엑셀/통계/반응형 + V1 API (상세/지원/리더보드/취소) 확장, 종료 대회 페이지네이션 선제 적용',
      '기업 대량 등록 activerecord-import + on_duplicate_key_ignore 로 왕복 횟수 상수화 (find_or_create_by 루프 대비)',
      '어드민 무거운 select box (전체 collection 로딩) 와 커스텀 ransacker 복붙 패턴을 AJAX 원격 검색 + 네이티브 ransack 연관 필터로 일괄 정리',
      'Test Suite let_it_be 전면 전환 (40+ 회 분할), 채용 도메인에 dept.career 태그 부착 → 에러 핸들러가 채용사업부 Slack 채널로 라우팅',
    ],
  },
]
