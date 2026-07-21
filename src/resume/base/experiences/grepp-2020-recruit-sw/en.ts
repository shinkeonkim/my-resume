import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content:
      'Resume Model jsonb → Normalized Schema + Zero-downtime Migration Playbook',
    period: '2022.05 ~ 2022.10',
    impact:
      'Eliminated JSONB indexing bottleneck · Established 4-step zero-downtime playbook · Rolled out across multi-domain',
    subContents: [
      'Six resume sub-domains (careers/projects/education/awards/activities/publications) lived in a jsonb column → JSONB indexing limits and wasted storage became a bottleneck as filter/sort/aggregation demand grew',
      'Reviewed GIN-index partial tuning vs. normalization; chose normalization into per-domain models (ResumeExperience + 5 others)',
      'Ran a 4-step zero-downtime playbook (ignored_columns → caller migration → column drop → table drop) — <strong>eliminated 500 schema-cache-miss errors</strong> during parallel deploy',
      'Later reused as the standard playbook across company / job posting / competition / profile domains; API response and analytics improved',
    ],
  },
  {
    content:
      'Company-wide Identity Verification Service + Programmers Project Integration',
    period: '2022.07 ~ 2022.09',
    impact:
      "Built a shared identity verification service · removed per-service NICE integration burden · introduced company's first Container Image Lambda",
    subContents: [
      'Built on Python · Flask · AWS Lambda (Container Image) · API Gateway · DynamoDB · Terraform · Terragrunt, with per-env directories for 3 environments (alpha/beta/production)',
      'Single-table DynamoDB (token_version_id HASH + TTL) for automatic key expiration — minimized ops surface vs. RDBMS + cron',
      'Lambda Container Image bypassed the 250MB ZIP limit and kept local/deploy environments consistent',
      'Programmers integration: ActionCable WebSocket verification flow + identity verification screen inside account settings page',
    ],
  },
  {
    content: 'Recruitment Domain SSR → SPA Migration (Dev Search + Job Postings) + Subdomain Split',
    period: '2021.01 ~ 2022.07',
    impact:
      'Migrated tightly-coupled Rails SSR + CoffeeScript stack → Vue Composition API + TypeScript SPA · split hiring domain into career.programmers.co.kr subdomain + dedicated job server',
    subContents: [
      'Developer search refactor (807 files): decoupled SSR controllers into backend APIs + Vue components, enabling easy filter extensions afterwards',
      'Job posting page Vue SPA: vue-router + Composition API + TypeScript domain models; componentized filters (Tag/Company/Location/MinSalary/MinCareer + URL sync + AutoComplete + sticky)',
      'Hybrid search: ElasticSearch (text/ranking) + PostgreSQL (exact matching · access control) — avoided in-house morphological analysis stack',
      'Modeled company-side access control (viewed/blocked/bookmarked/offered/talent pool/exclusion) as composable scope chains reused across new screens; consolidated duplicated filter logic into a shared concern',
      '2022 follow-up: split into career.programmers.co.kr subdomain + dedicated Sidekiq job server (job_career) + integrated hera-client SPA repo — achieving resource isolation and deployment independence',
      'Locked down SQL injection with ransack scope allowlist + Arel bind parameters; expanded RSpec/Jest coverage',
    ],
  },
  {
    content: 'Resume GitHub Analyzer — Precision & Operational Reliability',
    period: '2021.07 ~ 2021.09, 2022.03 follow-up',
    impact:
      'Drove <strong>un-analyzed commits to zero</strong> · removed alarm noise · stripped leaked PAT tokens',
    subContents: [
      'Made Rugged::Walker sort options explicit + handled single-commit-repo edge case',
      'Split Timeout / HTTPError into distinct states (banned/error); stripped PAT tokens leaking into clone URLs',
      "Migrated to https:// upon git:// deprecation; stabilized octokit pagination",
    ],
  },
  {
    content: 'Job Recommendation — ES → AWS Personalize Personalization',
    period: '2021.04 PoC · 2021.07 ~ 2021.12 stabilization',
    impact:
      'In-house ranking → managed personalization service · lifted CTR/apply rate · expanded surface',
    subContents: [
      'Static ES recommendations → AWS Personalize Campaign — delegated scoring/A-B/retraining pipeline ops to a managed service',
      'API client singleton + rails console PoC + Action tracking (click/put_item/URL) + random-exposure monitoring',
      'Extended personalization onto the coding-test practice page',
    ],
  },
  {
    content: 'Competition Domain Expansion + Service Quality (Coverage & Error Alerts)',
    period: '2020.12 ~ 2022.10',
    impact:
      'New competition system + <strong>Test coverage 70% → 80%</strong> · Per-division error alert routing',
    subContents: [
      'Competition admin/detail/registration Excel/statistics/responsive layout + V1 API (detail/application/leaderboard/cancellation), applied pagination to completed-competitions list proactively',
      'Bulk company registration via activerecord-import + on_duplicate_key_ignore — constant round trips vs. find_or_create_by loops',
      'Consolidated heavy admin select boxes (loading full collections) and custom-ransacker copy-paste patterns into AJAX remote search + native ransack association filters',
      'Test Suite let_it_be full transition (40+ split PRs); tagged hiring-domain controllers/channels/jobs with dept.career → error handler routes to hiring-division Slack channel',
    ],
  },
]
