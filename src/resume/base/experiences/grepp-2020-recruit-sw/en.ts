import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: '<strong>Resume Model jsonb → Normalized Schema, Zero-downtime Migration</strong>',
    period: '2022.05 ~ 2022.10',
    subContents: [
      'Before: six resume sub-domains (careers / projects / education / awards / activities / publications) crammed into a single jsonb column; every filter, sort, and metric required parsing the jsonb, hurting performance and maintainability.',
      'After: normalized each sub-domain into its own model (ResumeExperience / ResumeProject / ResumeEducation / ResumeAward / ResumeActivity / ResumePublication).',
      'Followed a 4-step zero-downtime playbook (ignore_columns → caller migration → column drop → table drop).',
      'Unlocked analytics-friendly access, faster filtered queries / APIs, and searchable indexes via normalization.',
    ],
  },
  {
    content:
      '<strong>Company-wide Identity Verification Service + Programmers Project Integration</strong>',
    period: '2022.07 ~ 2022.09',
    subContents: [
      'Stack: Python · Flask · Docker · AWS Lambda (Container Image) · API Gateway · DynamoDB · ECR · Terraform · Terragrunt',
      'Extracted NICE identity verification into a shared internal service so multiple products no longer integrate with it directly.',
      'Single-table DynamoDB modeling: token_version_id HASH + TTL attribute for automatic key expiration.',
      'Three isolated environments (alpha / beta / production); adopted Lambda Container Image to bypass the 250MB ZIP limit.',
      'Integrated with Programmers Project: ActionCable WebSocket-based verification flow, authenticated_infos model, and an account-management verification screen.',
    ],
  },
  {
    content:
      '<strong>Business Programmers SSR → SPA Migration (Developer Search + Job Posting + Admin)</strong>',
    period: '2021.01 ~ 2022.07',
    subContents: [
      'Before: Rails SSR + CoffeeScript with tightly coupled controllers; full page reloads and zero component reuse.',
      'After: extracted a dedicated backend API and migrated the UI to a Vue.js Composition API + TypeScript SPA.',
      'Led SPA migration across the business hiring site and job posting #index: vue-router / skeleton UI / bookmark groups / offer management / pagination / componentized filter system (Tag · Company · Location · MinSalary, etc., with URL sync, AutoComplete, sticky).',
      'Removed legacy CoffeeScript artifacts (.coffee.erb) by replacing them with Vue apps and migrated jbuilder APIs.',
      'Adopted rubocop, refactored SQL-injection-prone code, optimized queries, and significantly expanded component-level RSpec / Jest tests.',
    ],
  },
  {
    content:
      '<strong>Resume GitHub Analyzer — Accuracy & Operational Reliability + Programmers Project Integration</strong>',
    period: '2021.07 ~ 2021.09, 2022.03 follow-up',
    subContents: [
      'Stack: Ruby · Rugged · github-linguist · ActionCable WebSocket · Docker · AWS ECS · Sentry',
      'Made the Rugged::Walker sort options explicit and handled single-commit repositories so the number of un-analyzed commits dropped to zero.',
      'Extracted the analysis logic into its own class and added a local standalone script for a debuggable workflow.',
      'Separated Timeout / Rugged::HTTPError into distinct states (banned / error) to reduce ops alarm noise and stripped PAT tokens that had leaked into clone URLs.',
      "In March 2022, responded immediately to GitHub's git:// protocol deprecation by migrating to https://.",
    ],
  },
  {
    content: '<strong>Job Posting Recommendation — ES → AWS Personalize Personalization</strong>',
    period: '2021.04 PoC · 2021.07 ~ 2021.12 stabilization',
    subContents: [
      'Before: static ElasticSearch-based recommendations → After: AWS Personalize Campaign-based personalized recommendations.',
      'Made the API client / runtime_client singletons and shipped a rails console command for PoC.',
      'Introduced action tracking (click events / put_item key policy / URL tracking).',
      'Extended personalization beyond job postings to recommended positions on the open-challenge surface.',
      'Rolled out with a random-exposure split for monitoring and validated lifts in click-through and apply rates.',
    ],
  },
  {
    content:
      '<strong>Business Hiring — New Domains (Coding Test Assignments / Competitions) + V1 API</strong>',
    period: '2021.09 ~ 2022.09',
    subContents: [
      'Introduced the new skill_check_assignment domain (company admin / filters / detail areas / layout / tags & tag filters / responsive layout) via a staged rollout.',
      'Built the business competition system: index / detail search / registration Excel download / statistics.',
      'Shipped competition V1 APIs: detail, V1 application, leaderboard tab, registration#destroy, and an admin bulk-create for participating companies.',
      'Expanded i18n: locale dropdown in the business signup form and the company-info US page.',
    ],
  },
  {
    content:
      '<strong>Service Quality — Test Coverage 70 → 80% + Error Channel Routing + Zero-downtime Schema Playbook</strong>',
    period: '2020.12 ~ 2022.10',
    subContents: [
      'Contributed to raising test coverage from 70% to 80% by strengthening controller / model / policy / factory specs.',
      'Resolved N+1s, missing indexes, and inefficient queries via back-office monitoring; refactored ActiveAdmin ransack queries and introduced bulk actions.',
      'Tagged controllers / channels / jobs across the hiring domain with dept.career and routed errors to the hiring-division Slack channel (reduced alarm noise for unrelated departments).',
      'Established a zero-downtime schema cleanup playbook (ignore_columns → caller removal → column drop → table drop) and applied it consistently across domains.',
    ],
  },
]
