export const experiences = [
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
              '시험 응시 후에 Sidekiq을 활용한 task를 통해 리포트 생성 및 통계 갱신이 수행되도록 구성했습니다.'
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
              '<strong>개선 전</strong>: 경력, 프로젝트 등 이력서 데이터가 모두 jsonb 컬럼에 저장되어 필터링 조회 성능 저하 및 유지보수 어려움.',
              '<strong>개선 후</strong>: 항목별 모델링 및 정규화 진행. 데이터 분석/활용 용이성 확보 및 API 응답 속도 개선, 서비스 품질 향상.',
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
              '개선 후 :  계열사 정보를 이용하여 연관 회사 정보를 노출하였으며, 필터와 추천 포지션 노출 과정을 추가했습니다.'
            ],
          },
          {
            content: '<strong>이력서 Github 분석 기능 개선</strong>',
            period: '2021.08 ~ 2021.09',
            subContents: [
              '사용 기술: Ruby, Docker, Rugged, AWS ECS',
              'Github 분석 기능은 개발자가 자신의 Github 계정을 연결하고, Github에 올려놓은 Repository 들의 분석결과를 확인하는 기능입니다.',
              '분석하는 과정에서 특정 언어, 특정 레포지터리에 대한 엣지 케이스를 분석하고 분석 오류를 줄여 정확도를 높였습니다.',
              '분석 관련 기능에 대한 리팩토링과 bundler를 적용하는 등의 유지보수를 쉽게 할 수 있도록 하는 개선 작업을 병행했습니다.',
            ],
          },
          {
            content: '<strong>추천 채용공고 모듈 개선</strong>',
            period: '2021.07',
            subContents: [
              '사용 기술: Ruby on Rails, AWS Personalize',
              'ElasticSearch 기반의 고정 추천을 AWS Personalize 기반의 개인화 추천 시스템으로 고도화',
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
        ],
      },
      {
        title: '알고리즘 컨텐츠 제작자',
        period: '2019.06 ~ 2019.08 / 2019.12 ~ 2020.02 / 2020.06 ~ 2020.08',
        techStack: ['C/C++', 'Python', 'Java'],
        details: [{ content: '프로그래머스 서비스 알고리즘 문제 출제 및 검수' }],
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
]
