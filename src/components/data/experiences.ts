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
      name: '(주) 그렙',
      roles: [
        {
          title: '교육솔루션팀 / BE Engineer',
          period: '2024.07 ~ 2025.03',
          techStack: ['Ruby on Rails', 'Django'],
          details: [
            {
              content: '<strong>KDT 수강생 역량진단리포트 개발</strong>',
              period: '2024.08 ~ 2024.12',
              subContents: [
                'Ruby on Rails 기반의 백엔드 API 개발을 단독으로 진행했습니다.',
                '역량 진단 리포트는 수강생이 응시한 시험 결과에 따른 분야별 역량 도출 및 통계 제공 서비스입니다.',
                '프로그래머스 내에서 제공하는 모든 문제 타입마다 역량 정보를 도출하기 위한 설계 및 모델링을 수행했습니다.',
                '시험 응시 후에 Sidekiq을 활용한 task를 통해 리포트 생성 및 통계 갱신이 수행되도록 구성했습니다.',
              ],
            },
            {
              content: '<strong>프로그래머스 스쿨 / 캠퍼스 LMS 기능 개선 업무</strong>',
              period: '2024.07 ~ 2025.03',
              subContents: [
                '사용 기술: Ruby on Rails, Django',
                '프로그래머스 LMS 서비스 유지보수 및 기능 개선',
              ],
            },
          ],
        },
        {
          title: '채용서비스팀 / SW Engineer',
          period: '2020.12 ~ 2022.10',
          techStack: ['Ruby on Rails', 'Vue.js', 'Flask', 'AWS', 'Terraform'],
          details: [
            {
              content: '<strong>이력서 모델 구조 개편</strong>',
              period: '2022.09 ~ 2022.10',
              subContents: [
                '프로그래머스 서비스의 이력서 데이터를 정규화 과정을 거쳐 새롭게 설계하고 마이그레이션했습니다.',
                '개선 전: 경력, 프로젝트 등 이력서 데이터가 모두 jsonb 컬럼에 저장되어 필터링 조회 성능 저하 및 유지보수 어려움.',
                '개선 후: 항목별 모델링 및 정규화 진행. 데이터 분석/활용 용이성 확보 및 API 응답 속도 개선, 서비스 품질 향상.',
              ],
            },
            {
              content: '<strong>NICE API 연동 본인 인증 내부 서비스 개발</strong>',
              period: '2022.07 ~ 2022.08',
              subContents: [
                '사용 기술: Flask, Terraform, AWS ECR, AWS Lambda, DynamoDB',
                'NICE 본인인증을 쉽게 사용할 수 있도록 내부 서비스를 구축했습니다.',
              ],
            },
            {
              content: '<strong>과제관 / 코딩테스트 연습 페이지 개선</strong>',
              period: '2021.09 ~ 2021.10',
              subContents: [
                '사용 기술: Ruby on Rails',
                '문제 목록 페이지에 연관 회사 정보 및 추천 포지션 노출 개선',
                '개선 전 : 과제관 / 코딩테스트 연습 페이지에는 문제 목록만 주어지고 있었습니다.',
                '개선 후 :  계열사 정보를 이용하여 연관 회사 정보를 노출하였으며, 필터와 추천 포지션 노출 과정을 추가했습니다.',
              ],
            },
            {
              content: '<strong>이력서 Github 분석 기능 개선</strong>',
              period: '2021.08 ~ 2021.09',
              subContents: [
                '사용 기술: Ruby, Docker, Rugged, AWS ECS',
                'Github 분석 기능은 개발자가 자신의 Github 계정을 연결하고, Github에 올려놓은 Repository 들의 분석결과를 확인하는 기능입니다.',
                '엣지 케이스에 대한 분석 및 대응으로 커밋 미분석 건수 0건 달성',
                '특정 언어, 특정 레포지터리에 대한 엣지 케이스를 분석하고 분석 오류를 줄여 정확도를 높였습니다.',
                '분석 모듈 분리 및 bundler 적용으로 유지보수 용이성을 위한 개선 작업을 병행했습니다.',
              ],
            },
            {
              content: '<strong>추천 채용공고 모듈 개선</strong>',
              period: '2021.07',
              subContents: [
                '사용 기술: Ruby on Rails, AWS Personalize',
                'ElasticSearch 기반의 고정 추천을 AWS Personalize 기반의 개인화 추천 시스템으로 고도화',
                '기존 채용공고 추천 시스템에 비해 개인화된 추천 결과 제공으로 채용공고 클릭률 2배 증가',
              ],
            },
            {
              content: '<strong>채용공고 Vue.js 포팅 (SSR → SPA)</strong>',
              period: '2021.06 ~ 2021.07',
              subContents: [
                '사용 기술: Ruby on Rails, Vue.js, Vue Composition API',
                '채용공고 목록은 B2C 기능으로, 사용자가 채용공고를 검색하고, 채용공고에 대한 정보를 확인할 수 있도록 하는 기능입니다.',
                '개선 전 : Ruby on Rails의 SSR 코드로 CoffeeScript로 작성되어있었으며, 백엔드 로직과 프론트엔드 로직이 모두 강결합되어 있었습니다.',
                '개선 후 : 레거시 SSR 코드를 제거하고 Backend API를 별도로 구성했습니다. Vue 2.7 Composition API를 활용하면서 컴포넌트 로직을 더욱 명확하게 구분하여 유지보수 용이성을 높였습니다. 그리고 SPA로 전환하며 사용자 경험을 개선했습니다.',
              ],
            },
            {
              content: '<strong>비즈니스 프로그래머스 - 개발자 검색 기능 리팩토링</strong>',
              period: '2019.12 ~ 2021.03',
              subContents: [
                '사용 기술: Ruby on Rails, Apipie',
                '개발자 검색 기능은 B2B 기능으로, 개발자 사용자가 등록한 프로필/이력서 정보를 검색한 후, 채용 제안을 할 수 있도록 하는 기능입니다.',
                '개선 전 : Ruby on Rails의 SSR 코드로 CoffeeScript로 작성되어있었으며, 백엔드 로직과 프론트엔드 로직이 모두 강결합되어 있었습니다.',
                '개선 후 : 레거시 SSR 코드를 제거하고 백엔드 API를 별도로 구성했습니다.유지보수 용이성이 크게 개선되었으며, 이후 기능 추가 및 개선 작업이 원활하게 수행되었습니다.',
              ],
            },
            {
              content: '<strong>서비스 품질 개선</strong>',
              period: '2020.12 ~ 2022.10',
              subContents: [
                '테스트 커버리지 70% -> 80% 개선에 기여',
                '백오피스 사이트 모니터링 후 발견된 N+1 쿼리, 인덱스 누락, 비효율적인 쿼리 개선으로 운영 사용자의 경험 개선',
                'ActiveAdmin 내의 ransack 기반의 쿼리 개선으로 코드 유지보수성 개선',
              ],
            },
          ],
        },
        {
          title: '알고리즘 컨텐츠 제작자',
          period: '2019.06 ~ 2019.08 / 2019.12 ~ 2020.02 / 2020.06 ~ 2020.08',
          techStack: ['C/C++', 'Python', 'Java'],
          details: [
            {
              content: '프로그래머스 서비스 알고리즘 문제 출제 및 검수',
              subContents: [
                '프로그래머스 서비스에서 제공하는 알고리즘 문제의 출제 및 검수 업무를 담당했습니다.',
                '다양한 난이도와 유형의 문제를 출제하였고, 문제의 정확성과 품질을 검수했습니다.',
                '타서비스의 유사 문제와의 중복 여부까지 검수해서 품질 높은 문제를 제공하기 위해 노력했습니다.',
                '문제 출제 과정에서 반복되는 아이디어 도출, 테스트 케이스 작성, 예제/정답 코드 작성 업무를 자동화하여 효율성을 높였습니다.',
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
      name: 'Grepp Inc.',
      roles: [
        {
          title: 'Education Solution Team / Backend Engineer',
          period: '2024.07 ~ 2025.03',
          techStack: ['Ruby on Rails', 'Django'],
          details: [
            {
              content: '<strong>KDT Bootcamp Competency Diagnostic Report</strong>',
              period: '2024.08 ~ 2024.12',
              subContents: [
                'Solely owned the backend API development on Ruby on Rails.',
                'The diagnostic report derives per-domain competency from each bootcamp student\'s exam results and provides statistical insights.',
                'Designed and modeled competency metadata for every problem type offered in Programmers.',
                'Built a Sidekiq-driven task pipeline that generates reports and refreshes statistics right after each exam submission.',
              ],
            },
            {
              content: '<strong>Programmers School / Campus LMS Feature Improvements</strong>',
              period: '2024.07 ~ 2025.03',
              subContents: [
                'Stack: Ruby on Rails, Django',
                'Maintained the Programmers LMS service and shipped continuous feature improvements.',
              ],
            },
          ],
        },
        {
          title: 'Hiring Service Team / SW Engineer',
          period: '2020.12 ~ 2022.10',
          techStack: ['Ruby on Rails', 'Vue.js', 'Flask', 'AWS', 'Terraform'],
          details: [
            {
              content: '<strong>Resume Data Model Redesign</strong>',
              period: '2022.09 ~ 2022.10',
              subContents: [
                'Redesigned and migrated the resume data of Programmers through a full normalization process.',
                'Before: career, project and other resume fields were all crammed into a jsonb column, hurting filtered query performance and maintainability.',
                'After: each item became its own normalized model, enabling analytics-friendly access, faster API responses, and overall service quality improvements.',
              ],
            },
            {
              content: '<strong>NICE API-based Identity Verification Internal Service</strong>',
              period: '2022.07 ~ 2022.08',
              subContents: [
                'Stack: Flask, Terraform, AWS ECR, AWS Lambda, DynamoDB',
                'Built an internal service that lets other products easily consume the NICE identity verification flow.',
              ],
            },
            {
              content: '<strong>Assignment Hall / Coding Test Practice Page Improvements</strong>',
              period: '2021.09 ~ 2021.10',
              subContents: [
                'Stack: Ruby on Rails',
                'Improved problem listings to surface related company information and recommended positions.',
                'Before: the practice page only listed problems without any extra context.',
                'After: leveraged affiliate metadata to surface related companies, added filtering, and surfaced recommended positions on the listing.',
              ],
            },
            {
              content: '<strong>Resume GitHub Analysis Improvements</strong>',
              period: '2021.08 ~ 2021.09',
              subContents: [
                'Stack: Ruby, Docker, Rugged, AWS ECS',
                'The GitHub analysis feature lets developers connect their GitHub account and review analysis results across their repositories.',
                'Reduced the number of un-analyzed commits to zero by identifying and handling edge cases.',
                'Investigated language- and repository-specific edge cases to lower analysis errors and raise accuracy.',
                'Separated the analyzer module and adopted Bundler in parallel to improve maintainability.',
              ],
            },
            {
              content: '<strong>Job Posting Recommendation Module Improvement</strong>',
              period: '2021.07',
              subContents: [
                'Stack: Ruby on Rails, AWS Personalize',
                'Upgraded the static ElasticSearch-based recommendation into a personalized AWS Personalize-driven system.',
                'Doubled the job posting click-through rate by serving personalized recommendations versus the previous system.',
              ],
            },
            {
              content: '<strong>Job Posting Vue.js Migration (SSR → SPA)</strong>',
              period: '2021.06 ~ 2021.07',
              subContents: [
                'Stack: Ruby on Rails, Vue.js, Vue Composition API',
                'The job posting listing is a B2C surface where users search for postings and review their details.',
                'Before: Rails SSR code written in CoffeeScript with tightly coupled backend and frontend logic.',
                'After: removed the legacy SSR code, extracted a dedicated backend API, and rebuilt the UI with Vue 2.7 Composition API for clearer component boundaries. Improved user experience by moving to a SPA architecture.',
              ],
            },
            {
              content: '<strong>Business Programmers — Developer Search Refactor</strong>',
              period: '2019.12 ~ 2021.03',
              subContents: [
                'Stack: Ruby on Rails, Apipie',
                'Developer Search is a B2B feature that lets recruiters search developer profiles and resumes, then send hiring offers.',
                'Before: Rails SSR code written in CoffeeScript with backend and frontend logic deeply coupled.',
                'After: removed legacy SSR code and extracted a dedicated backend API, which greatly improved maintainability and enabled smooth follow-up feature additions.',
              ],
            },
            {
              content: '<strong>Service Quality Improvements</strong>',
              period: '2020.12 ~ 2022.10',
              subContents: [
                'Contributed to raising test coverage from 70% to 80%.',
                'Resolved N+1 queries, missing indexes and inefficient queries discovered through back-office monitoring, improving the operator experience.',
                'Improved code maintainability by refactoring ransack-based queries inside ActiveAdmin.',
              ],
            },
          ],
        },
        {
          title: 'Algorithm Content Creator',
          period: '2019.06 ~ 2019.08 / 2019.12 ~ 2020.02 / 2020.06 ~ 2020.08',
          techStack: ['C/C++', 'Python', 'Java'],
          details: [
            {
              content: 'Authored and reviewed algorithm problems for the Programmers service',
              subContents: [
                'Owned authoring and review of algorithm problems offered on Programmers.',
                'Created problems spanning a wide range of difficulty levels and types, while reviewing their correctness and quality.',
                'Cross-checked similar problems on other services to guarantee originality and high quality.',
                'Automated the recurring steps of ideation, test case generation, and sample/solution code preparation to boost authoring efficiency.',
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
