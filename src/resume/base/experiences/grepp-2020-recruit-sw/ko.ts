import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '<strong>이력서 모델 jsonb → 정규화 무중단 마이그레이션</strong>',
    period: '2022.05 ~ 2022.10',
    subContents: [
      '개선 전: 경력 / 프로젝트 / 교육 / 수상 / 활동 / 논문 6개 도메인이 jsonb 컬럼에 저장. 필터링 · 정렬 · 통계가 모두 jsonb 내부 파싱이라 성능·유지보수성 저하',
      '개선 후: 6개 도메인 별 모델로 정규화 (ResumeExperience / ResumeProject / ResumeEducation / ResumeAward / ResumeActivity / ResumePublication)',
      '무중단 4단계: ignore_columns → 사용처 코드 마이그레이션 → 컬럼 삭제 → 테이블 drop',
      '데이터 분석·활용 용이성 확보 + 필터링 / API 응답 속도 개선 + 정규화로 검색 인덱스 가능',
    ],
  },
  {
    content: '<strong>전사 본인인증 프로젝트 신규 구축 + 프로그래머스 프로젝트 통합</strong>',
    period: '2022.07 ~ 2022.09',
    subContents: [
      '기술 스택: Python · Flask · Docker · AWS Lambda(Container Image) · API Gateway · DynamoDB · ECR · Terraform · Terragrunt',
      '사내 여러 서비스에서 NICE 본인인증을 공통으로 사용하도록 공용 인증 서비스로 분리하여 신규 구축',
      'DynamoDB 단일 테이블 모델링: token_version_id HASH + TTL attribute로 만료 키 자동 제거',
      '3개 환경 분리 (alpha / beta / production) + Lambda Container Image 채택으로 ZIP 250MB 제한 우회',
      '프로그래머스 프로젝트 통합: ActionCable WebSocket 기반 본인인증 흐름 + authenticated_infos 모델 + 계정 관리 페이지 본인인증 화면',
    ],
  },
  {
    content:
      '<strong>비즈니스 프로그래머스 SSR → SPA 전환 (개발자 검색 + 채용공고 + 어드민 개선)</strong>',
    period: '2021.01 ~ 2022.07',
    subContents: [
      '개선 전: Ruby on Rails SSR + CoffeeScript 강결합 컨트롤러. 페이지 리로드 + 컴포넌트 재사용 곤란',
      '개선 후: 백엔드 API 분리 + Vue.js Composition API + TypeScript 모델로 SPA 전환',
      '비즈니스 채용 사이트 + 채용공고 #index 전반의 SPA 전환 메인 작업: vue-router / 스켈레톤 UI / 북마크 그룹 / 제안 관리 / 페이지네이션 / 필터 시스템 컴포넌트화 (Tag · Company · Location · MinSalary 등 + URL 동기화 + AutoComplete + sticky)',
      'CoffeeScript 잔재(.coffee.erb) 제거 → Vue app 대체, jbuilder API 마이그레이션',
      'rubocop 정적 분석 / SQL Injection refactor / 쿼리 최적화, 컴포넌트 단위 RSpec / Jest 테스트 다수 보강',
    ],
  },
  {
    content:
      '<strong>이력서 GitHub 분석기 정밀도·운영 안정성 개선 + 프로그래머스 프로젝트 통합</strong>',
    period: '2021.07 ~ 2021.09, 2022.03 후속 대응',
    subContents: [
      '기술 스택: Ruby · Rugged · github-linguist · ActionCable WebSocket · Docker · AWS ECS · Sentry',
      'Rugged::Walker 정렬 옵션 명시화 + 단일 커밋 레포 엣지 케이스 대응으로 커밋 미분석 건수 0건 달성',
      '분석 로직을 별도 클래스로 분리 + 로컬 단독 실행 스크립트 추가로 디버깅 환경 마련',
      'Timeout / Rugged::HTTPError를 별도 상태(banned / error)로 분리해 운영 알람 노이즈 제거, clone URL 노출된 PAT 토큰 제거',
      '2022.03 GitHub git:// 프로토콜 deprecation 즉시 대응 (https:// 마이그레이션)',
    ],
  },
  {
    content: '<strong>추천 채용공고 ES → AWS Personalize 개인화 추천 전환</strong>',
    period: '2021.04 PoC · 2021.07 ~ 2021.12 안정화',
    subContents: [
      '개선 전: ElasticSearch 기반 고정 추천 → 개선 후: AWS Personalize Campaign 기반 개인화 추천',
      'API client / runtime_client 싱글톤화 + rails console 테스트 명령어로 PoC',
      'Action tracking 도입 (클릭 이벤트 / put_item key 정책 / URL tracking)',
      '추천 적용 영역 확장: 채용공고 추천 → 오픈 챌린지 추천 포지션 영역까지 personalized',
      '랜덤 노출 비율 도입과 함께 모니터링 진행 후, 채용공고 클릭률 / 지원율 향상 확인',
    ],
  },
  {
    content:
      '<strong>비즈니스 채용 — 신규 도메인 구축 (코딩테스트 과제 / 대회) + V1 API</strong>',
    period: '2021.09 ~ 2022.09',
    subContents: [
      '코딩테스트 과제(skill_check_assignment) 도메인 신규 도입: 회사 어드민 / 필터 / 추가 영역 / 레이아웃 / 태그 / 태그 필터 / 반응형 레이아웃 (점진 출시)',
      '비즈니스 대회(competition) 시스템: 인덱스 / 상세 검색 / 등록 엑셀 다운로드 / 통계 지원',
      '대회 V1 API 신설: 대회 상세 / 대회 지원 V1 / 리더보드 탭 / registration#destroy / 대회 참가 기업 bulk create 어드민',
      '비즈니스 회원가입 form locale dropdown, 회사 정보 us 페이지 / 다국어 등 i18n 확장',
    ],
  },
  {
    content:
      '<strong>서비스 품질 개선: 테스트 커버리지 70 → 80% + 에러 알림 채널 분리 + 무중단 schema 정리 방법론</strong>',
    period: '2020.12 ~ 2022.10',
    subContents: [
      '테스트 커버리지 70% → 80% 개선 기여 (컨트롤러 / 모델 / 정책 / 팩토리 spec 보강)',
      '백오피스 모니터링으로 발견된 N+1, 인덱스 누락, 비효율 쿼리 개선 + ActiveAdmin ransack 쿼리 개선 + bulk action 도입',
      '채용 도메인 전반에 dept.career 분류 태그 일괄 부착 → 에러 핸들러에서 채용사업부 / 다른 부서 Slack 채널 라우팅 (다른 부서 알람 노이즈 감소)',
      '무중단 schema 정리 방법론 확립: ignore_columns → 사용처 삭제 → 컬럼 삭제 → 테이블 drop. 다수 도메인 일관 적용',
    ],
  },
]
