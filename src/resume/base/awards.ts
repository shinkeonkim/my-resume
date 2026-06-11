import type { Award, Locale } from './types'

export const awards: Record<Locale, Award[]> = {
  ko: [
    { name: '국민대학교 캡스톤디자인 금상', date: '2026.05', issuer: '국민대학교' },
    { name: '멋쟁이사자처럼 10기 전체 해커톤 동상', date: '2022.08', issuer: '멋쟁이사자처럼' },
    { name: '롯데 x 멋쟁이사자처럼 연계 해커톤 동상', date: '2020.10', issuer: '멋쟁이사자처럼' },
    {
      name: '제3회 국민대학교 알고리즘 대회 장려상',
      date: '2018.08',
      issuer: '국민대학교 SW중심대학사업단',
    },
    {
      name: '2018 ICT 어워드코리아 이산수학 장려상',
      date: '2018.07',
      issuer: '한국정보과학진흥협회, 성결대학교',
    },
    {
      name: '2017 Robocup 机器人世界杯中国赛华南公开赛 三等奖',
      date: '2017.12',
      issuer: 'RoboCup China Open',
    },
    {
      name: '2017 ICT 어워드코리아 C언어 알고리즘 프로그래밍 동상',
      date: '2017.11',
      issuer: '한국정보과학진흥협회, 안양대학교',
    },
    {
      name: '2017 제 5회 한국로보컵오픈대회 Soccer Light Weight 부문 2위',
      date: '2017.02',
      issuer: '한국로보컵협회',
    },
  ],
  en: [
    {
      name: 'Kookmin Univ. Capstone Design Gold Award',
      date: '2026.05',
      issuer: 'Kookmin University',
    },
    { name: 'LikeLion 10th Generation Hackathon — Bronze', date: '2022.08', issuer: 'LikeLion' },
    { name: 'Lotte × LikeLion Joint Hackathon — Bronze', date: '2020.10', issuer: 'LikeLion' },
    {
      name: '3rd Kookmin Univ. Algorithm Contest — Encouragement Award',
      date: '2018.08',
      issuer: 'Kookmin Univ. SW-Centered University Program',
    },
    {
      name: '2018 ICT Award Korea Discrete Math — Encouragement Award',
      date: '2018.07',
      issuer: 'Korea Information Science Society & Sungkyul University',
    },
    {
      name: '2017 RoboCup China Open (South China) — 3rd Place',
      date: '2017.12',
      issuer: 'RoboCup China Open',
    },
    {
      name: '2017 ICT Award Korea C Algorithm Programming — Bronze',
      date: '2017.11',
      issuer: 'Korea Information Science Society & Anyang University',
    },
    {
      name: '2017 5th Korea RoboCup Open — Soccer Light Weight Division, 2nd Place',
      date: '2017.02',
      issuer: 'Korea RoboCup Association',
    },
  ],
}
