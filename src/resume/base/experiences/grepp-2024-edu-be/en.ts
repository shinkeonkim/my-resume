import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '<strong>KDT Competency Diagnostic Report — Sole Backend Owner</strong>',
    period: '2024.07 ~ 2025.02',
    subContents: [
      'Solely owned the Ruby on Rails + ActiveAdmin backend for ~6 months, collaborating with PM, planning, design, and QA.',
      'Designed the full flow (grading worker → concern → normalized scoring → report generation / notification / view tracking) and shipped in 5 staged releases.',
      'Deprecated v1 domain model and redesigned v2 (Course ↔ CompetencyStandard ↔ CompetencyReport), rolled over via feature flag + per-course enablement column with zero downtime.',
      'Delegated percentile ranking to PostgreSQL window functions instead of Ruby array sorting; drove seq scan → bitmap index scan transitions for daily batch jobs via EXPLAIN-based tuning.',
      'Chose N+1 tactics per relationship shape (JOIN preload / deferred preload / ID comparison) and enforced it through code review.',
    ],
  },
  {
    content: '<strong>Wanted KDT (wantedlms) Multi-tenant Branching</strong>',
    period: '2024.07 ~ 2024.11',
    subContents: [
      "Branched the same codebase to operate Wanted's KDT LMS alongside Programmers as multi-tenant deployments.",
      'Toggled features per environment via YAML settings — a separate-repo fork would have been cheap up front but expensive per shared update; single codebase + env separation preserves shared-maintenance atomicity.',
    ],
  },
  {
    content: '<strong>Programmers Project LMS V1 API Rollout + Service Object Refactor</strong>',
    period: '2024.08 ~ 2025.02',
    subContents: [
      'Replaced legacy /api/school/* with domain-specific /api/v1/lms/* APIs (boards / notifications / learning activities / history); split the legacy school domain into lms / learn for easier hand-off.',
      'Unified error responses (single error string → code + message object) to simplify frontend parsing logic.',
      'Extracted certificate issuance and student re-invitation into service objects and added an admin bulk re-invitation feature.',
      'Landed apipie-based API documentation inside every feature PR and extracted shared response fragments into reusable Definitions modules.',
    ],
  },
  {
    content: '<strong>Company-wide PR Review Notification Bot Expansion (1 → 4 teams)</strong>',
    period: '2024.07 ~ 2024.08',
    subContents: [
      'Inherited a legacy in-house tool (Python · slack_sdk · PyGithub · GitHub Actions cron) and generalized it from one team to four.',
      "Removed hard-coded member info by dynamically resolving Slack user groups + members' GitHub Username profile field.",
      "Auto-computed D-Day from a 'Desired review completion date' field in PR descriptions and posted a daily 10:00 (weekdays) Slack alert per team channel.",
    ],
  },
  {
    content: '<strong>Programmers School / Campus LMS Maintenance and New Features</strong>',
    period: '2024.07 ~ 2025.03',
    subContents: [
      'Maintained the Ruby on Rails + Django-based LMS and shipped continuous feature improvements.',
      'Tracked Sentry / Slack-reported issues down to root cause and fixed them alongside regression specs.',
      'Resolved an admin search bug from a column-name mismatch via application-layer alias_attribute instead of renaming the column, avoiding migration downtime risk.',
    ],
  },
]
