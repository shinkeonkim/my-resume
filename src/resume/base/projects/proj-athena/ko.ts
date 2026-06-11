import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '역할: 기획, 단독 개발',
  },
  {
    content: 'AI 기반 코드 피드백 및 격리된 실행 시스템 구축',
    subContents: [
      'LLM을 활용한 소스 코드 분석 및 실시간 맞춤형 피드백 시스템 구현',
      'Docker 컨테이너를 활용하여 다양한 언어(C++, Python, Ruby, Java 등)를 지원하는 안전한 격리 실행 환경 구축',
    ],
  },
  {
    content: '분산 처리 기반 데이터 수집 및 시맨틱 검색 엔진 구현',
    subContents: [
      'Celery를 활용하여 solved.ac API 및 웹 파싱 기반의 문제/게시글 수집 자동화 파이프라인 구축',
    ],
  },
  {
    content: '마이크로서비스 아키텍처(MSA) 설계',
    subContents: [
      'Code Executor, Judger, Testcase Generator 등 핵심 모듈을 gRPC 기반으로 연동하여 시스템 확장성 및 통신 효율성 확보',
    ],
  },
]
