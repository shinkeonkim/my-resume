import type { Activity, Locale } from './types'

export const activities: Record<Locale, Activity[]> = {
  ko: [
    {
      title: '국민대학교 멋쟁이사자처럼',
      period: '2020.03 ~ 2025.12',
      details: [
        { content: '<strong>13기 운영진</strong> (2025.01 ~ 2025.12)' },
        { content: '<strong>12기 운영진</strong> (2024.01 ~ 2024.12)' },
        { content: '<strong>10기 운영진</strong> (2022.01 ~ 2022.12)' },
        {
          content:
            '<strong>9기 운영진 대표</strong> (2021.01 ~ 2021.12)<br>' +
            '- 동아리 세션 진행 및 Git/Github 심화 강의<br>' +
            '- Algorithm 스터디 운영<br>' +
            '- 12개 대학 연합 해커톤 운영진 (배포 119 부서 - 서비스 배포 업무 수행)',
        },
        {
          content:
            '<strong>8기 아기사자</strong> (2020.03 ~ 2020.12)<br>' +
            '- Web 교육 수강 (Python, Django, HTML/CSS/JS) 및 해커톤 참가',
        },
      ],
    },
    {
      title: '국민대학교 소프트웨어학부 헬퍼',
      period: '',
      details: [
        {
          content:
            '<strong>소프트웨어프로젝트2 헬퍼</strong> (2025.09 ~ 2025.12)<br>' +
            '- 수강생 질문 답변 및 이슈 해결을 위한 학부 조교 <br>' +
            '- Arduino를 활용한 회로 및 기초 프로그래밍에 대한 지원 <br>' +
            '- Arduino를 활용한 PID 제어 프로젝트에 대한 지원 ',
        },
        {
          content:
            '<strong>소프트웨어프로젝트1 헬퍼</strong> (2025.04 ~ 2025.06 / 2020.04 ~ 2020.06)<br>' +
            '- 수강생 질문 답변 및 이슈 해결을 위한 학부 조교 <br>' +
            '- Git, 라즈베리파이, Ubuntu 등에 대한 지원',
        },
        {
          content:
            '<strong>LabAnywhere Supporter</strong> (2020.09 ~ 2020.12)<br>' +
            '- 학부 실습 환경 설정 지원 및 Ubuntu에 대한 강의 진행',
        },
      ],
    },
    {
      title: '강사 / 교육 봉사',
      period: '2019.01 ~ 2020.12',
      details: [
        {
          content:
            '<strong>구일고등학교 연합형 교육과정 보조강사</strong> (2020.09 ~ 2020.12)<br>' +
            '- 정보 수업 보조 강사 (Python3, 데이터 과학)',
        },
        {
          content:
            '<strong>제21기 하계 대학생 재능봉사 캠프</strong> (2020.08)<br>' +
            '- 한국장학재단 주관, 마이크로비트/엔트리 활용 강의',
        },
        {
          content:
            '<strong>구로고등학교 연합형 교육과정 보조강사</strong> (2019.09 ~ 2019.12)<br>' +
            '- 정보 수업 보조 강사 (Python3, 데이터 과학)',
        },
        {
          content:
            '<strong>한민고 겨울방학 코딩캠프 강사</strong> (2019.01)<br>' +
            '- 군인 중학생 자녀 대상 C언어 기초 문법 강의 (4박 5일)',
        },
      ],
    },
  ],
  en: [
    {
      title: 'LikeLion at Kookmin University',
      period: '2020.03 ~ 2025.12',
      details: [
        { content: '<strong>13th Generation Staff</strong> (2025.01 ~ 2025.12)' },
        { content: '<strong>12th Generation Staff</strong> (2024.01 ~ 2024.12)' },
        { content: '<strong>10th Generation Staff</strong> (2022.01 ~ 2022.12)' },
        {
          content:
            '<strong>9th Generation President</strong> (2021.01 ~ 2021.12)<br>' +
            '- Led club sessions and advanced Git/GitHub lectures<br>' +
            '- Ran the algorithm study group<br>' +
            '- Organizer for a 12-university joint hackathon (Deployment 119 squad — owned service deployment)',
        },
        {
          content:
            '<strong>8th Generation Member</strong> (2020.03 ~ 2020.12)<br>' +
            '- Completed web curriculum (Python, Django, HTML/CSS/JS) and participated in hackathons',
        },
      ],
    },
    {
      title: 'Teaching Assistant — Kookmin Univ. School of Software',
      period: '',
      details: [
        {
          content:
            '<strong>Software Project 2 Helper</strong> (2025.09 ~ 2025.12)<br>' +
            '- Undergraduate TA answering student questions and resolving issues<br>' +
            '- Supported circuit and basic programming work with Arduino<br>' +
            '- Supported a PID control project built on Arduino',
        },
        {
          content:
            '<strong>Software Project 1 Helper</strong> (2025.04 ~ 2025.06 / 2020.04 ~ 2020.06)<br>' +
            '- Undergraduate TA answering student questions and resolving issues<br>' +
            '- Supported Git, Raspberry Pi, and Ubuntu environments',
        },
        {
          content:
            '<strong>LabAnywhere Supporter</strong> (2020.09 ~ 2020.12)<br>' +
            '- Helped set up the undergraduate lab environment and lectured on Ubuntu',
        },
      ],
    },
    {
      title: 'Instructor / Education Volunteer',
      period: '2019.01 ~ 2020.12',
      details: [
        {
          content:
            '<strong>Guil High School Joint Curriculum Assistant Instructor</strong> (2020.09 ~ 2020.12)<br>' +
            '- Assistant instructor for the Informatics class (Python 3, data science)',
        },
        {
          content:
            '<strong>21st Summer University Talent Volunteer Camp</strong> (2020.08)<br>' +
            '- Hosted by the Korea Student Aid Foundation, lectured on micro:bit and Entry',
        },
        {
          content:
            '<strong>Guro High School Joint Curriculum Assistant Instructor</strong> (2019.09 ~ 2019.12)<br>' +
            '- Assistant instructor for the Informatics class (Python 3, data science)',
        },
        {
          content:
            '<strong>Hanmin High School Winter Coding Camp Instructor</strong> (2019.01)<br>' +
            '- 5-day C language fundamentals course for middle-school children of service members',
        },
      ],
    },
  ],
}
