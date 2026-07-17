import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '<strong>Resume Model jsonb → Normalized Schema, Zero-downtime Migration</strong>',
    period: '2022.05 ~ 2022.10',
    subContents: [
      'Six resume sub-domains (careers / projects / education / awards / activities / publications) lived in a jsonb column → JSONB indexing limits and wasted storage became a bottleneck as filter / sort / aggregation demand grew.',
      'Reviewed GIN-index tuning vs. normalization, chose normalization into per-domain models (ResumeExperience + 5 others).',
      'Ran a 4-step zero-downtime playbook (ignored_columns → caller migration → column drop → table drop) so the parallel-deploy window never hit a schema-cache-miss 500.',
      'Later reused as the standard playbook across company / job posting / competition / profile domains; API response times and analytics fit improved.',
    ],
  },
  {
    content:
      '<strong>Company-wide Identity Verification Service + Programmers Project Integration</strong>',
    period: '2022.07 ~ 2022.09',
    subContents: [
      'Built a shared internal identity verification service on Python · Flask · AWS Lambda (Container Image) · API Gateway · DynamoDB · Terraform · Terragrunt so multiple products no longer integrated with NICE individually.',
      'Isolated three environments (alpha / beta / production) with per-environment ECR, Lambda, SSO, and terragrunt directories.',
      'Single-table DynamoDB (token_version_id HASH + TTL) for automatic key expiration — minimized ops surface vs. an RDBMS + cron alternative.',
      'Adopted Lambda Container Image to bypass the 250MB ZIP limit and keep local/deploy environments consistent.',
      'Programmers Project integration: built the ActionCable WebSocket-based verification flow + identity-verification screen inside the account settings page.',
    ],
  },
  {
    content:
      '<strong>Business Programmers — Developer Search SSR → SPA Migration + Admin Improvements</strong>',
    period: '2021.01 ~ 2022.04',
    subContents: [
      'Migrated a tightly-coupled Ruby on Rails SSR + CoffeeScript controller stack into a backend-API + Vue.js Composition API + TypeScript SPA.',
      'Hybrid search backend: ElasticSearch (Korean analyzer, bool queries) for text/ranking and PostgreSQL (array operators, ransack scopes) for exact matching / access control — avoiding an in-house morphological analysis stack that RDB-only would require.',
      'Modeled company-side access control (viewed / blocked / bookmarked / offered / talent pool / already-seen exclusion) as composable scope chains so new screens compose existing scopes.',
      'Locked down SQL injection with a ransack scope allowlist + Arel bind parameters and significantly expanded component-level RSpec / Jest tests.',
    ],
  },
  {
    content:
      '<strong>Job Posting Page SSR → SPA Migration (Vue + Composition API + TypeScript)</strong>',
    period: '2021.03 ~ 2022.07',
    subContents: [
      'Migrated the Rails ERB SSR + CoffeeScript stack — starting from job posting #index — into a Vue SPA (vue-router + Composition API + TypeScript).',
      'Componentized the filter system (Tag / Company / Location / MinSalary, etc. with URL sync · AutoComplete · sticky) and moved controller if-chains into named domain-model scopes + ransack allowlists.',
      'Consolidated duplicated filter logic across controllers (general / competition job postings) into a shared concern so indexing / query optimization has a single source of truth.',
      'Reflected company-filter array order via SQL CASE ordering (delegated to DB) instead of Ruby sort_by — composes naturally with pagination and reuses existing company_ids order for API-contract simplicity.',
    ],
  },
  {
    content:
      '<strong>Resume GitHub Analyzer — Precision & Operational Reliability + Programmers Project Integration</strong>',
    period: '2021.07 ~ 2021.09, 2022.03 follow-up',
    subContents: [
      'Improved the resume GitHub analyzer on Ruby · Rugged · github-linguist · ActionCable · AWS ECS · Sentry.',
      'Made Rugged::Walker sort options explicit and handled the single-commit-repo edge case, driving un-analyzed commits to zero.',
      'Split Timeout / Rugged::HTTPError into distinct states (banned / error) to remove alarm noise; stripped PAT tokens leaking into clone URLs.',
      "Responded immediately to GitHub's git:// deprecation with an https:// migration; for the Programmers Project integration, stabilized octokit pagination and hardened the git_stat statistics screen.",
    ],
  },
  {
    content: '<strong>Job Recommendation — ES → AWS Personalize Personalization</strong>',
    period: '2021.04 PoC · 2021.07 ~ 2021.12 stabilization',
    subContents: [
      'Migrated static ElasticSearch-based recommendations to AWS Personalize Campaign-based personalization — delegating scoring infra, A/B setup, and retraining pipeline ops to a managed service rather than building them in Rails.',
      'Made the API client a singleton, shipped a rails console PoC command, and added action tracking (clicks / put_item / URL) with random-exposure monitoring.',
      'Confirmed lifts in job-posting CTR and apply rate; extended personalization onto the coding-test practice page.',
    ],
  },
  {
    content: '<strong>Competition / Coding-test Practice — Domain Expansion</strong>',
    period: '2021.09 ~ 2022.09',
    subContents: [
      'Progressively shipped competition system admin / detail search / registration Excel / statistics / responsive layout + expanded the competition V1 API (detail / application / leaderboard / cancellation).',
      'For bulk registration of participating companies, replaced iterative create loops with activerecord-import batch insert + on_duplicate_key_ignore, collapsing round trips to a constant (vs. find_or_create_by loops).',
      "Computed 'competition → participating companies' as has_many :through + distinct associations (DB-delegated); precomputed a revoke_at column for dormant-application expiration to simplify batch scan conditions.",
      'Applied pagination to the completed-competitions list proactively to keep response size constant; excluded counter_cache from validation logic in favor of real-time count.',
    ],
  },
  {
    content:
      '<strong>Service Quality — Test Coverage 70 → 80% + Error Alert Channel Routing + Zero-downtime Schema Playbook</strong>',
    period: '2020.12 ~ 2022.10',
    subContents: [
      'Raised test coverage from 70% to 80% by strengthening controller / model / policy / factory specs.',
      'Rolled out let_it_be across 40+ reviewable file-sized PRs — factories previously rebuilt per example dropped to once per describe group.',
      'Tagged hiring-domain controllers / channels / jobs with dept.career so the error handler routes exceptions to the hiring-division Slack channel — clarifying incident ownership and reducing noise for other teams.',
      'Consolidated copy-pasted patterns across admin resources (heavy select boxes loading full collections, custom ransackers) into AJAX-backed remote search + native ransack association filters.',
      'Established a zero-downtime schema cleanup playbook (ignored_columns → caller removal → column/table drop) and applied it consistently across resumes / job postings / companies / competitions / talent profiles.',
    ],
  },
]
