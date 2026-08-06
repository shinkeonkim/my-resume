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
      'Reviewed GIN-index partial tuning vs. normalization; chose normalization into per-domain models',
      'Ran a 4-step zero-downtime playbook (ignored_columns → caller migration → column drop → table drop) — eliminated 500 schema-cache-miss errors during parallel deploy',
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
    content: 'Recruitment Domain SSR → SPA Migration (Dev Search + Job Postings)',
    period: '2021.01 ~ 2022.07',
    impact:
      'Migrated tightly-coupled Rails SSR + CoffeeScript stack → Vue Composition API + TypeScript SPA',
    subContents: [
      '<strong>Developer search SPA migration</strong>: decoupled SSR controllers into backend APIs + Vue components across 800+ files, making later filter extensions straightforward',
      '<strong>Job posting SPA migration</strong>: rebuilt on vue-router + Composition API + TypeScript domain models',
      '<strong>Search backend split</strong>: ElasticSearch (text/ranking) + PostgreSQL (exact matching · access control) hybrid design',
      '<strong>Reusable query structure</strong>: modeled company-side access control (viewed/blocked/bookmarked/offered/talent pool/exclusion) as composable scope chains and a shared concern reused across new screens',
      '<strong>Security &amp; test hardening</strong>: locked down SQL injection with ransack scope allowlist + Arel bind parameters; expanded RSpec/Jest coverage',
    ],
  },
  {
    content: 'Resume GitHub Analyzer — Precision & Operational Reliability',
    period: '2021.07 ~ 2021.09, 2022.03 follow-up',
    impact:
      'Drove un-analyzed commits to zero · removed alarm noise · stripped leaked PAT tokens',
    subContents: [
      'Made Rugged::Walker sort options explicit + handled single-commit-repo edge case',
      'Split Timeout / HTTPError into distinct states (banned/error); stripped PAT tokens leaking into clone URLs',
      "Migrated to https:// upon git:// deprecation; stabilized octokit pagination",
    ],
  },
  {
    content: 'Job Recommendation — ElasticSearch → AWS Personalize Personalization',
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
      '<strong>Domain expansion</strong>: competition admin/detail/registration Excel/statistics/responsive layout + V1 API (detail/application/leaderboard/cancellation), with proactive pagination on the completed-competitions list',
      '<strong>Bulk registration optimization</strong>: replaced find_or_create_by loops with activerecord-import + on_duplicate_key_ignore, making round trips constant',
      '<strong>Test coverage 70% → 80%</strong>: migrated the test suite to let_it_be across 40+ split PRs',
      '<strong>Error alert routing</strong>: tagged hiring-domain controllers/channels/jobs with dept.career so the error handler routes to the hiring-division Slack channel',
    ],
  },
]
