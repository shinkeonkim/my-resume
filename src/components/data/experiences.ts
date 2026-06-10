import { useLocalized } from '@/composables/useLocale'

interface DetailItem {
  content: string
  period?: string
  subContents?: string[]
}

interface Role {
  title: string
  period: string
  techStack?: string[]
  details: DetailItem[]
}

interface Experience {
  name: string
  roles: Role[]
}

const data: Record<'ko' | 'en', Experience[]> = {
  ko: [
    {
      name: '(주) 그렙 (프로그래머스)',
      roles: [
        {
          title: '교육솔루션팀 / Backend Engineer',
          period: '2024.07 ~ 2025.03',
          techStack: [
            'Ruby on Rails',
            'ActiveAdmin',
            'Sidekiq',
            'PostgreSQL',
            'RSpec',
            'Python',
            'GitHub Actions',
            'Django',
          ],
          details: [
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
                '기술 스택: Python · slack_sdk · PyGithub · GitHub Actions cron',
                '레거시 사내 도구를 인계받아 단일팀 → 4개 팀(교육솔루션 / 모니터링 / 평가솔루션 / 공통플랫폼)으로 범용화',
                '팀원 정보 하드코딩 제거: Slack 사용자그룹 API + 멤버 GitHub Username 필드 동적 조회',
                'PR 본문의 "희망 리뷰 완료일" 텍스트에서 D-Day 자동 계산 + 매일 D-Day 갱신 cron',
                '평일 오전 10시 cron으로 팀별 Slack 채널에 오늘 리뷰 대상 PR 자동 알림',
              ],
            },
            {
              content: '<strong>프로그래머스 스쿨 / 캠퍼스 LMS 유지보수 및 신규 기능 개발</strong>',
              period: '2024.07 ~ 2025.03',
              subContents: ['Ruby on Rails + Django 기반 LMS 서비스 유지보수 및 기능 개선'],
            },
          ],
        },
        {
          title: '채용서비스팀 / SW Engineer',
          period: '2020.12 ~ 2022.10',
          techStack: [
            'Ruby on Rails',
            'Vue.js',
            'TypeScript',
            'Composition API',
            'Python',
            'Flask',
            'AWS Lambda',
            'DynamoDB',
            'Terraform',
            'AWS Personalize',
            'ActionCable',
            'PostgreSQL',
            'Sidekiq',
            'ActiveAdmin',
            'RSpec',
            'Rugged',
            'Docker',
          ],
          details: [
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
                '<strong>비즈니스 프로그래머스 — 개발자 검색 SSR → SPA 전환 + 어드민 개선</strong>',
              period: '2021.01 ~ 2022.04',
              subContents: [
                '개선 전: Ruby on Rails SSR + CoffeeScript 강결합 컨트롤러. 페이지 리로드 + 컴포넌트 재사용 곤란',
                '개선 후: 백엔드 API 분리 + Vue.js Composition API + TypeScript 모델로 SPA 전환',
                '비즈니스 채용 사이트 전반의 SPA 전환 메인 작업: vue-router 전환 / 스켈레톤 UI / 북마크 그룹 / 제안 관리 / 페이지네이션 일괄 정리',
                'CoffeeScript 잔재(.coffee.erb) 제거 → Vue app 대체, jbuilder API 마이그레이션',
                'rubocop 정적 분석 활용 / SQL Injection refactor / 쿼리 최적화, 컴포넌트 단위 RSpec / Jest 테스트 다수 보강',
              ],
            },
            {
              content:
                '<strong>채용공고 페이지 SSR → SPA 전환 (Vue + Composition API + TypeScript)</strong>',
              period: '2021.03 ~ 2022.07',
              subContents: [
                '개선 전: Rails ERB SSR + CoffeeScript. 필터 변경 시 페이지 리로드',
                '개선 후: 채용공고 #index를 Vue SPA로 전환. vue-router + Composition API + TypeScript 도메인 모델',
                '필터 시스템 컴포넌트화: Tag / Company / Location / MinEmployees / MinSalary / MinCareer 분리 + chip 렌더링 + URL 동기화 + AutoComplete + sticky 등 UX 개선',
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
              content: '<strong>채용사업부 에러 알림 채널 분리 + 운영 안정성</strong>',
              period: '2022.06',
              subContents: [
                '채용 도메인 전반의 컨트롤러 / 채널 / 잡에 dept.career 분류 태그 일괄 부착',
                '에러 핸들러에서 분류 태그 기반으로 채용사업부 / 다른 부서 Slack 채널 라우팅',
                '응답 책임자 명확화 + 다른 부서 알람 노이즈 감소',
              ],
            },
            {
              content:
                '<strong>서비스 품질 개선: 테스트 커버리지 70 → 80% + 무중단 schema 정리 방법론</strong>',
              period: '2020.12 ~ 2022.10',
              subContents: [
                '테스트 커버리지 70% → 80% 개선 기여 (컨트롤러 / 모델 / 정책 / 팩토리 spec 보강)',
                '백오피스 모니터링으로 발견된 N+1, 인덱스 누락, 비효율 쿼리 개선',
                'ActiveAdmin ransack 기반 쿼리 개선 + bulk action 도입 → 코드 유지보수성 개선',
                '무중단 schema 정리 방법론 확립: ignore_columns → 사용처 삭제 → 컬럼 삭제 → 테이블 drop. 다수 도메인 일관 적용',
              ],
            },
          ],
        },
        {
          title: '알고리즘 컨텐츠팀 / 알고리즘 컨텐츠 제작자',
          period: '2019.06 ~ 2019.08 · 2019.12 ~ 2020.02 · 2020.06 ~ 2020.08 (인턴 3차)',
          techStack: ['C/C++', 'Python', 'Java'],
          details: [
            {
              content: '<strong>프로그래머스 알고리즘 문제 출제 / 검수 / 워크플로 자동화</strong>',
              subContents: [
                '다양한 난이도·유형의 알고리즘 문제 출제 및 정확성·품질 검수',
                '타 서비스 유사 문제와의 중복 여부까지 검수해 품질 높은 문제 제공',
                '검수 워크플로 정착: 출제 → 검수 → 피드백 → 수정 → 최종 검수 → 출제 완료',
                '반복되는 작업 자동화 도구 제작 (랜덤 단어 조합 기반 아이디어 발굴 / 문제 템플릿 / 테스트 케이스 랜덤 생성)',
                '인턴 3차례에 걸쳐 책임 범위 확장: 초기 출제 → 검수 → 자동화 도구 개발 병행',
              ],
            },
          ],
        },
      ],
    },
    {
      name: '대한민국 육군 특전사령부',
      roles: [
        {
          title: '11공수특전여단 / 정보체계운용정비병',
          period: '2022.11 ~ 2024.05',
          techStack: undefined,
          details: [
            { content: '인트라넷 (NAC, 방화벽) 및 전산 장비 관리' },
            { content: '서버 및 부대 웹 페이지 관리' },
            { content: '내부망 및 전산 장비 유지보수' },
          ],
        },
      ],
    },
  ],
  en: [
    {
      name: 'Grepp Inc. (Programmers)',
      roles: [
        {
          title: 'Education Solution Team / Backend Engineer',
          period: '2024.07 ~ 2025.03',
          techStack: [
            'Ruby on Rails',
            'ActiveAdmin',
            'Sidekiq',
            'PostgreSQL',
            'RSpec',
            'Python',
            'GitHub Actions',
            'Django',
          ],
          details: [
            {
              content: '<strong>KDT Competency Diagnostic Report — Sole Backend Owner</strong>',
              period: '2024.07 ~ 2025.02',
              subContents: [
                'Solely owned the Ruby on Rails + ActiveAdmin backend for ~6 months, collaborating with PM, design, and QA.',
                'Service derives per-domain competency from exam results and provides statistics; modeled competency metadata for every problem type offered.',
                'After the first domain model shipped, drove the decision to deprecate v1 and redesign v2; ran v1/v2 in parallel behind a feature flag for a gradual rollover.',
                'Designed the v2 course-level aggregated report (Course ↔ CompetencyTagGroup ↔ CompetencyTag ↔ CompetencyStandard ↔ LessonCompetencyReport ↔ CourseCompetencyReport).',
                'Async flow: GradeWorker → UserLesson#finish concern → feature-flag gating → normalized scoring & standard matching → report generation.',
                'Split APIs across three audiences (student / course manager / admin) and shipped via 5 staged releases aligned with the operations QA team.',
                'Consistently applied a zero-downtime schema cleanup playbook (callers → columns → tables drop order).',
              ],
            },
            {
              content: '<strong>Wanted KDT (wantedlms) Multi-tenant Branching</strong>',
              period: '2024.07 ~ 2024.11',
              subContents: [
                'Branched the same codebase to operate both Programmers and wantedlms as multi-tenant deployments.',
                'Toggled features per environment with Settings.features and separated the admin dashboard, role management, and notification routes.',
                'Operated automated Monday/Thursday morning deploy crons.',
              ],
            },
            {
              content:
                '<strong>Programmers Project LMS V1 API Rollout + Service Object Refactor</strong>',
              period: '2024.08 ~ 2025.02',
              subContents: [
                'Replaced the legacy /api/school/* surface with domain-specific /api/v1/lms/* APIs (boards, notifications, learning activities, learning history, etc.).',
                'Unified error responses (single error string → code + message object) so the frontend handles errors consistently.',
                'Extracted certificate issuance and student re-invitation flows into service objects and added an admin bulk re-invitation feature.',
                'Split the legacy school domain into lms / learn so subsequent maintainers can onboard easily.',
              ],
            },
            {
              content:
                '<strong>Company-wide PR Review Notification Bot Expansion (1 → 4 teams)</strong>',
              period: '2024.07 ~ 2024.08',
              subContents: [
                'Stack: Python · slack_sdk · PyGithub · GitHub Actions cron',
                'Inherited a legacy in-house tool and generalized it from a single team to four teams (Education Solution / Monitoring / Assessment Solution / Common Platform).',
                "Removed hard-coded member info by dynamically resolving Slack user groups and members' GitHub Username profile field.",
                'Auto-computed D-Day from the "target review-by" line of PR descriptions and refreshed daily via cron.',
                "Posted today's review-target PRs to each team's Slack channel via a weekday 10:00 cron.",
              ],
            },
            {
              content:
                '<strong>Programmers School / Campus LMS Maintenance and New Features</strong>',
              period: '2024.07 ~ 2025.03',
              subContents: [
                'Maintained the Ruby on Rails + Django-based LMS and shipped continuous feature improvements.',
              ],
            },
          ],
        },
        {
          title: 'Hiring Service Team / SW Engineer',
          period: '2020.12 ~ 2022.10',
          techStack: [
            'Ruby on Rails',
            'Vue.js',
            'TypeScript',
            'Composition API',
            'Python',
            'Flask',
            'AWS Lambda',
            'DynamoDB',
            'Terraform',
            'AWS Personalize',
            'ActionCable',
            'PostgreSQL',
            'Sidekiq',
            'ActiveAdmin',
            'RSpec',
            'Rugged',
            'Docker',
          ],
          details: [
            {
              content:
                '<strong>Resume Model jsonb → Normalized Schema, Zero-downtime Migration</strong>',
              period: '2022.05 ~ 2022.10',
              subContents: [
                'Before: six resume sub-domains (careers / projects / education / awards / activities / publications) crammed into a single jsonb column; every filter, sort, and metric required parsing the jsonb, hurting performance and maintainability.',
                'After: normalized each sub-domain into its own model (ResumeExperience / ResumeProject / ResumeEducation / ResumeAward / ResumeActivity / ResumePublication).',
                'Followed a 4-step zero-downtime playbook (ignore_columns → caller migration → column drop → table drop).',
                'Unlocked analytics-friendly access, faster filtered queries / APIs, and searchable indexes via normalization.',
              ],
            },
            {
              content:
                '<strong>Company-wide Identity Verification Service + Programmers Project Integration</strong>',
              period: '2022.07 ~ 2022.09',
              subContents: [
                'Stack: Python · Flask · Docker · AWS Lambda (Container Image) · API Gateway · DynamoDB · ECR · Terraform · Terragrunt',
                'Extracted NICE identity verification into a shared internal service so multiple products no longer integrate with it directly.',
                'Single-table DynamoDB modeling: token_version_id HASH + TTL attribute for automatic key expiration.',
                'Three isolated environments (alpha / beta / production); adopted Lambda Container Image to bypass the 250MB ZIP limit.',
                'Integrated with Programmers Project: ActionCable WebSocket-based verification flow, authenticated_infos model, and an account-management verification screen.',
              ],
            },
            {
              content:
                '<strong>Business Programmers — Developer Search SSR → SPA + Admin Improvements</strong>',
              period: '2021.01 ~ 2022.04',
              subContents: [
                'Before: Rails SSR + CoffeeScript with tightly coupled controllers; full page reloads and zero component reuse.',
                'After: extracted a dedicated backend API and migrated the UI to a Vue.js Composition API + TypeScript SPA.',
                'Led the SPA migration across the business hiring site: vue-router, skeleton UI, bookmark groups, offer management, and pagination cleanup.',
                'Removed legacy CoffeeScript artifacts (.coffee.erb) by replacing them with Vue apps and migrated jbuilder APIs.',
                'Adopted rubocop static analysis, refactored SQL-injection-prone code, optimized queries, and significantly expanded component-level RSpec / Jest tests.',
              ],
            },
            {
              content:
                '<strong>Job Posting Page SSR → SPA (Vue + Composition API + TypeScript)</strong>',
              period: '2021.03 ~ 2022.07',
              subContents: [
                'Before: Rails ERB SSR + CoffeeScript; every filter change forced a full page reload.',
                'After: migrated the job posting #index to a Vue SPA with vue-router + Composition API + TypeScript domain models.',
                'Componentized the filter system (Tag / Company / Location / MinEmployees / MinSalary / MinCareer) and added chip rendering, URL syncing, AutoComplete, and sticky filters.',
              ],
            },
            {
              content:
                '<strong>Resume GitHub Analyzer — Accuracy & Operational Reliability + Programmers Project Integration</strong>',
              period: '2021.07 ~ 2021.09, 2022.03 follow-up',
              subContents: [
                'Stack: Ruby · Rugged · github-linguist · ActionCable WebSocket · Docker · AWS ECS · Sentry',
                'Made the Rugged::Walker sort options explicit and handled single-commit repositories so the number of un-analyzed commits dropped to zero.',
                'Extracted the analysis logic into its own class and added a local standalone script for a debuggable workflow.',
                'Separated Timeout / Rugged::HTTPError into distinct states (banned / error) to reduce ops alarm noise and stripped PAT tokens that had leaked into clone URLs.',
                "In March 2022, responded immediately to GitHub's git:// protocol deprecation by migrating to https://.",
              ],
            },
            {
              content:
                '<strong>Job Posting Recommendation — ES → AWS Personalize Personalization</strong>',
              period: '2021.04 PoC · 2021.07 ~ 2021.12 stabilization',
              subContents: [
                'Before: static ElasticSearch-based recommendations → After: AWS Personalize Campaign-based personalized recommendations.',
                'Made the API client / runtime_client singletons and shipped a rails console command for PoC.',
                'Introduced action tracking (click events / put_item key policy / URL tracking).',
                'Extended personalization beyond job postings to recommended positions on the open-challenge surface.',
                'Rolled out with a random-exposure split for monitoring and validated lifts in click-through and apply rates.',
              ],
            },
            {
              content:
                '<strong>Business Hiring — New Domains (Coding Test Assignments / Competitions) + V1 API</strong>',
              period: '2021.09 ~ 2022.09',
              subContents: [
                'Introduced the new skill_check_assignment domain (company admin / filters / detail areas / layout / tags & tag filters / responsive layout) via a staged rollout.',
                'Built the business competition system: index / detail search / registration Excel download / statistics.',
                'Shipped competition V1 APIs: detail, V1 application, leaderboard tab, registration#destroy, and an admin bulk-create for participating companies.',
                'Expanded i18n: locale dropdown in the business signup form and the company-info US page.',
              ],
            },
            {
              content:
                '<strong>Hiring Division Error Channel Routing + Operational Reliability</strong>',
              period: '2022.06',
              subContents: [
                'Tagged controllers / channels / jobs across the hiring domain with a dept.career classification tag.',
                'Routed Slack channels for the hiring division and other departments based on these tags inside the error handler.',
                'Clarified responders and reduced alarm noise for unrelated departments.',
              ],
            },
            {
              content:
                '<strong>Service Quality — Test Coverage 70 → 80% + Zero-downtime Schema Playbook</strong>',
              period: '2020.12 ~ 2022.10',
              subContents: [
                'Contributed to raising test coverage from 70% to 80% by strengthening controller / model / policy / factory specs.',
                'Resolved N+1s, missing indexes, and inefficient queries discovered through back-office monitoring.',
                'Refactored ActiveAdmin ransack-based queries and introduced bulk actions for better maintainability.',
                'Established a zero-downtime schema cleanup playbook (ignore_columns → caller removal → column drop → table drop) and applied it consistently across domains.',
              ],
            },
          ],
        },
        {
          title: 'Algorithm Content Team / Algorithm Content Creator',
          period: '2019.06 ~ 2019.08 · 2019.12 ~ 2020.02 · 2020.06 ~ 2020.08 (3 internships)',
          techStack: ['C/C++', 'Python', 'Java'],
          details: [
            {
              content:
                '<strong>Programmers Algorithm Authoring / Review / Workflow Automation</strong>',
              subContents: [
                'Authored algorithm problems across a wide range of difficulty levels and types and reviewed them for correctness and quality.',
                'Cross-checked similar problems on other services to guarantee originality and high quality.',
                'Established the authoring workflow: author → review → feedback → revise → final review → publish.',
                'Built automation tools for recurring work (random-word-driven ideation, problem templates, randomized test case generation).',
                'Expanded responsibilities across three internships: authoring → review → automation tooling, all in parallel by the final term.',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Republic of Korea Army Special Warfare Command',
      roles: [
        {
          title: '11th Airborne Special Forces Brigade / IT Systems Operations & Maintenance',
          period: '2022.11 ~ 2024.05',
          techStack: undefined,
          details: [
            { content: 'Operated the intranet (NAC, firewall) and IT equipment.' },
            { content: 'Managed unit servers and the internal web pages.' },
            { content: 'Maintained the internal network and IT equipment.' },
          ],
        },
      ],
    },
  ],
}

export function useExperiences() {
  return useLocalized(data)
}
