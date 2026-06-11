import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
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
    content: '<strong>Programmers Project LMS V1 API Rollout + Service Object Refactor</strong>',
    period: '2024.08 ~ 2025.02',
    subContents: [
      'Replaced the legacy /api/school/* surface with domain-specific /api/v1/lms/* APIs (boards, notifications, learning activities, learning history, etc.).',
      'Unified error responses (single error string → code + message object) so the frontend handles errors consistently.',
      'Extracted certificate issuance and student re-invitation flows into service objects and added an admin bulk re-invitation feature.',
      'Split the legacy school domain into lms / learn so subsequent maintainers can onboard easily.',
    ],
  },
  {
    content: '<strong>Company-wide PR Review Notification Bot Expansion (1 → 4 teams)</strong>',
    period: '2024.07 ~ 2024.08',
    subContents: [
      'Inherited a legacy in-house tool (Python · slack_sdk · PyGithub · GitHub Actions cron) and generalized it from a single team to four teams.',
      "Removed hard-coded member info by dynamically resolving Slack user groups and members' GitHub Username profile field.",
      'Auto-computed D-Day from PR descriptions and posted weekday 10:00 cron alerts to each team\'s Slack channel.',
    ],
  },
  {
    content: '<strong>Programmers School / Campus LMS Maintenance and New Features</strong>',
    period: '2024.07 ~ 2025.03',
    subContents: [
      'Maintained the Ruby on Rails + Django-based LMS and shipped continuous feature improvements.',
    ],
  },
]
