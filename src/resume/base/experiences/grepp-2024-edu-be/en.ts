import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: 'KDT Competency Diagnostic Report — Sole Backend Owner',
    period: '2024.07 ~ 2025.02',
    impact: 'Sole backend owner (6 months) · PM/planning/design/QA collaboration',
    subContents: [
      'Designed the full pipeline (grading → normalized scoring → report/notification) and shipped in staged releases',
      'Delegated percentile ranking to PostgreSQL window functions instead of Ruby array sorting; drove seq scan → bitmap index scan for batch jobs',
    ],
  },
  {
    content: 'Wanted KDT (wantedlms) Multi-tenant Branching',
    period: '2024.07 ~ 2024.11',
    impact:
      'Multi-tenant operation from a single codebase · preserved shared-maintenance atomicity vs. fork alternative',
    subContents: [
      'Toggled Programmers/wantedlms features per environment via YAML settings',
      'Avoided repository-fork cost by keeping one codebase with environment separation',
    ],
  },
  {
    content: 'Programmers Project LMS V1 API + Service Object Refactor',
    period: '2024.08 ~ 2025.02',
    impact:
      'Replaced legacy with domain-specific V1 APIs · extracted service objects · eased hand-off',
    subContents: [
      'Legacy /api/school/* → domain-specific /api/v1/lms/*, split school domain into lms/learn for easier hand-off',
      'Unified error response schema (single error string → code + message object) to simplify frontend parsing',
      'Extracted certificate issuance / student re-invitation as service objects + added admin bulk re-invite feature',
      'Landed apipie-based API documentation inside every feature PR and extracted shared responses into reusable Definitions modules',
    ],
  },
  {
    content: 'Company-wide PR Review Notification Bot Expansion',
    period: '2024.07 ~ 2024.08',
    impact:
      'Generalized a single-team tool to 4 teams · inherited and modernized in-house automation',
    subContents: [
      "Replaced hard-coded member info by dynamically resolving Slack user groups API + members' GitHub Username profile field",
      "Auto-computed D-Day from PR 'desired review completion date' text → weekday 10:00 Slack alerts per team channel",
    ],
  },
  {
    content: 'Programmers School / Campus LMS Maintenance & Feature Work',
    period: '2024.07 ~ 2025.03',
    impact: 'Root-caused LMS operational issues + fixed alongside regression specs',
    subContents: [
      'Traced Sentry/Slack-reported issues to root cause and shipped fixes with regression coverage',
      'Resolved admin search column-name mismatch via alias_attribute instead of renaming — avoided migration downtime',
    ],
  },
]
