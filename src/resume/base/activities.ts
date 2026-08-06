import type { Activity, Locale } from './types'

export const activities: Record<Locale, Activity[]> = {
  ko: [
    {
      title: '국민대학교 멋쟁이사자처럼',
      period: '2020.03 ~ 2025.12',
      details: [
        {
          content:
            '<strong>운영진 이력</strong>: 2025 (13기) · 2024 (12기) · 2022 (10기) · <strong>2021 (9기 대표)</strong> · 2020 (8기 아기사자)',
        },
        {
          content:
            '<strong>9기 운영진 대표</strong> 주요 활동: Git/GitHub 심화 강의 · Algorithm 스터디 운영 · 12개 대학 연합 해커톤 배포 담당 (배포 119 부서)',
        },
      ],
    },
    {
      title: '국민대학교 소프트웨어학부 헬퍼',
      period: '',
      details: [
        {
          content:
            '<strong>지원 학기</strong>: 2025-2 소프트웨어프로젝트2 · 2025-1 소프트웨어프로젝트1 · ' +
            '2020-2 LabAnywhere Supporter · 2020-1 소프트웨어프로젝트1',
        },
        {
          content:
            '<strong>지원 범위</strong>: 학부 조교로 수강생 질문 답변과 실습 이슈 해결 · ' +
            'Git / 라즈베리파이 / Ubuntu / Arduino (회로 · 기초 프로그래밍 · PID 제어) · 실습 환경 설정 및 Ubuntu 강의',
        },
      ],
    },
  ],
  en: [
    {
      title: 'LikeLion at Kookmin University',
      period: '2020.03 ~ 2025.12',
      details: [
        {
          content:
            '<strong>Staff timeline</strong>: 2025 (13th) · 2024 (12th) · 2022 (10th) · <strong>2021 (9th, President)</strong> · 2020 (8th, Member)',
        },
        {
          content:
            '<strong>9th Generation President</strong> highlights: advanced Git/GitHub lectures · ran the algorithm study group · deployment lead at a 12-university joint hackathon (Deployment 119 squad)',
        },
      ],
    },
    {
      title: 'Teaching Assistant — Kookmin Univ. School of Software',
      period: '',
      details: [
        {
          content:
            '<strong>Terms served</strong>: 2025-2 Software Project 2 · 2025-1 Software Project 1 · ' +
            '2020-2 LabAnywhere Supporter · 2020-1 Software Project 1',
        },
        {
          content:
            '<strong>Scope</strong>: undergraduate TA answering student questions and resolving lab issues · ' +
            'Git / Raspberry Pi / Ubuntu / Arduino (circuits · basic programming · PID control) · lab environment setup and Ubuntu lectures',
        },
      ],
    },
  ],
}
