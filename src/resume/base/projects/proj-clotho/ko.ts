import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '역할: 기획, 설계 및 단독 개발',
  },
  {
    content: '<strong>선언형 시각화 애니메이션 엔진 설계 및 npm 패키지 배포</strong>',
    subContents: [
      '명령형 렌더링 코드 대신 <strong>JSON 문서와 절대 시각만으로 매 프레임을 계산</strong>하는 결정론적 scene graph 설계',
      '공통 렌더링 규칙을 React·Vue·DOM·SVG 어댑터로 분리해 프레임워크가 달라도 동일한 문서를 재사용하도록 구현',
      'Zod 기반 v1 스키마와 참조 무결성 검증, legacy 문서 마이그레이션, SVG·GIF·스토리보드 내보내기 지원',
      'core와 렌더러를 독립 entry point로 분리하고 core gzip 크기를 <strong>25KB</strong>로 관리하여 <strong>@kokoa/clotho v0.5.0</strong> 공개',
    ],
  },
  {
    content: '<strong>재사용 가능한 React 시각 편집기 및 확장 구조 개발</strong>',
    subContents: [
      '요소·키프레임·이펙트·챕터를 편집하고 실제 DOM player로 결과를 확인하는 타임라인 기반 편집 환경 구현',
      '저장소·이미지 업로드·문서 import pipeline을 host에서 주입하도록 설계해 독립 실행형 앱과 기존 관리 화면에서 같은 패키지를 사용',
      '명시적 권한을 부여받은 도구만 문서·selection에 접근하는 plugin host를 구현해 application별 확장 기능을 core와 분리',
    ],
  },
  {
    content: '<strong>사용자 문서·실행 예제 구축 및 배포 자동화</strong>',
    subContents: [
      '공개 npm 패키지를 직접 사용하는 React·Vue·Vanilla·MDX 예제와 전체 JSON Schema 레퍼런스를 Astro 문서로 구성',
      '라이브러리·편집기 release check와 문서 link 검증을 CI에 연결하고 Cloudflare Workers Static Assets로 배포',
    ],
  },
]
