# Resume Variant Integration Guide

이 문서는 [`my-resume`](.) 프로젝트의 **이력서 Variant 시스템** 계약(contract)을 정의합니다. 외부 도구 — 특히 [`my-jd-helper`](../my-jd-helper) — 가 이 계약을 따르면, JD/회사별로 맞춤화된 이력서를 자동으로 생성·배포할 수 있습니다.

## 개요

| 항목 | 값 |
|---|---|
| Schema 버전 | `ResumeVariant.v1` |
| 입력 | Variant JSON 1개 (`<id>/variant.json`) |
| 출력 | GitHub Pages 하위 경로 `https://<user>.github.io/my-resume/v/<id>/` |
| Locale | variant 당 1개 (`ko` 또는 `en`) |
| Visibility | `public` / `private` / `draft` (기본 `draft`) |

Variant는 **delta** 입니다. base 이력서 데이터(존재하는 entity의 ID 목록)에 대해 **선택/정렬/일부 bullet 교체/요약 교체**만 수행합니다. identity, 학력, 자격증 같은 핵심 정보는 variant로 변경할 수 없습니다.

## 데이터 흐름

```
[my-jd-helper] (LLM이 JD 분석 + base profile + conversation 결과로 생성)
    ↓
   ResumeVariant.v1 JSON 파일 emit (예: data/exports/acme-backend-en.json)
    ↓
[user] cd ../my-resume && bun run import-variant <path>
    ↓
   schema + base-id 검증 통과 → src/resume/variants/<id>/variant.json 작성
    ↓
[user] git add + commit + push
    ↓
[GitHub Actions deploy.yml]
    ├─ discover 변수 디렉토리 스캔
    ├─ visibility=public (push) 또는 public+draft (workflow_dispatch+include_drafts=true)
    ├─ base + variant 각각 빌드
    └─ /my-resume/ + /my-resume/v/<id>/ 로 통합 배포
```

## Schema (ResumeVariant.v1)

```ts
type Locale = 'ko' | 'en'
type Visibility = 'public' | 'private' | 'draft'

interface ResumeVariantV1 {
  schema: 'ResumeVariant.v1'        // 고정값
  id: string                        // kebab-case URL-safe (정규식: /^[a-z0-9][a-z0-9-]*[a-z0-9]$/)
  meta: {
    label: string                   // human-readable 표시명 (필수)
    visibility: Visibility          // 'public' | 'private' | 'draft' (필수, 기본 'draft' 권장)
    locale: Locale                  // 'ko' | 'en' (필수, variant 당 단일)
    jdRef?: {                       // 선택: 원본 JD 추적 정보
      jdId?: string                 //   my-jd-helper의 JD id
      company?: string              //   회사명
      role?: string                 //   포지션 명
    }
    source?: 'manual' | 'jd-helper' // 출처. jd-helper면 import 시 안전상 draft로 강제됨
    updatedAt: string               // ISO 8601 (예: '2026-06-11T09:00:00Z')
  }
  overrides: {
    summary?: string                // About 섹션 맨 위에 prepend
    headline?: string               // 헤더의 role 라인 교체 (예: 'Backend Engineer')
    include?: {                     // 표시할 base entity 화이트리스트. 안 쓰면 base 전체 표시
      experienceIds?: string[]
      projectIds?: string[]
      skillIds?: string[]
    }
    order?: {                       // 정렬 순서. 안 쓰면 base 순서 유지
      experienceIds?: string[]      //   리스트에 없는 entity는 뒤에 base 순서로 따라옴
      projectIds?: string[]
      skillIds?: string[]
    }
    customBullets?: Array<{         // 특정 entity의 bullet을 교체 (첫 번째 detail의 subContents)
      targetType: 'experienceRole' | 'project'
      targetId: string              // base entity ID (validation 시 존재 확인)
      bullets: string[]             // 전체 교체 (append 없음, deep-merge 없음)
    }>
  }
}
```

## 예시 페이로드

```json
{
  "schema": "ResumeVariant.v1",
  "id": "acme-backend-en",
  "meta": {
    "label": "Acme Backend Engineer",
    "visibility": "draft",
    "locale": "en",
    "jdRef": {
      "jdId": "jd_2026_06_11_001",
      "company": "Acme Corp",
      "role": "Senior Backend Engineer"
    },
    "source": "jd-helper",
    "updatedAt": "2026-06-11T09:00:00Z"
  },
  "overrides": {
    "summary": "Backend-focused engineer with 3 yrs Rails/Django delivery, k3s/AWS infra ops, and LLM integration record.",
    "headline": "Backend Engineer · Distributed Systems",
    "include": {
      "experienceIds": ["grepp-2024-edu-be", "grepp-2020-recruit-sw"],
      "projectIds": ["proj-mefit", "proj-athena"]
    },
    "order": {
      "experienceIds": ["grepp-2020-recruit-sw", "grepp-2024-edu-be"]
    },
    "customBullets": [
      {
        "targetType": "experienceRole",
        "targetId": "grepp-2020-recruit-sw",
        "bullets": [
          "Migrated resume model from jsonb to a fully normalized schema with zero downtime.",
          "Shipped AWS Personalize-based recommendation, lifting CTR and apply rate.",
          "Extracted NICE identity verification into a Flask + Lambda + DynamoDB shared service."
        ]
      }
    ]
  }
}
```

## Base entity ID 목록

Variant가 참조할 수 있는 ID는 **base에 존재하는 entity의 stable ID** 입니다. 최신 목록은 다음 명령으로 조회:

```sh
bun run list-base-ids                # JSON 출력
bun run list-base-ids --format=ids   # 줄바꿈 ID 목록
```

현재 시점 ID 카테고리:
- `experiences[].id` — 경력 (예: `grepp-2024-edu-be`, `grepp-2020-recruit-sw`, `grepp-2019-algo`, `army-special-2022`)
- `projects[].id` — 프로젝트 (예: `proj-mefit`, `proj-kkambbaki`, `proj-athena`)

**중요:** ID는 안정적입니다. base entity가 추가/제거될 때 새 ID가 부여되며, 이미 사용 중인 ID는 보존됩니다. variant는 존재하지 않는 ID를 참조할 수 없습니다 (import 시 거부).

## CLI: variant import

```sh
cd /path/to/my-resume
bun run import-variant <path-to-variant.json>
bun run import-variant <path> --visibility=public            # 명시적 visibility 지정
bun run import-variant <path> --visibility=public --force    # jd-helper source의 draft 강제 해제
```

동작:
1. `<path>`의 JSON 파일을 읽고 `ResumeVariant.v1` schema validation
2. `overrides.include` / `order` / `customBullets`의 모든 ID가 base에 존재하는지 확인
3. **`meta.source === 'jd-helper'`이고 `visibility === 'public'`일 때 안전 정책으로 `draft`로 강제** (`--force --visibility=public`로 우회 가능)
4. `src/resume/variants/<id>/variant.json` 작성
5. 다음 단계 안내 (review → commit → push)

검증 실패 시 stderr로 에러 목록을 출력하고 exit code 1로 종료. 파일은 작성되지 않습니다.

## 빌드 동작

- **VARIANT_ID 미지정**: base 이력서 빌드. `import.meta.env`의 base URL은 `GITHUB_PAGES_BASE` 값 그대로.
- **`VARIANT_ID=<id> bun run build`**: 해당 variant의 JSON을 빌드 시점에 `__VARIANT__` global로 inline. base URL은 `${GITHUB_PAGES_BASE}v/<id>/`.

런타임에는 `useVariant()` composable이 `__VARIANT__`를 노출하며, `useExperiences()` · `useProjects()` 등의 데이터 composable이 자동으로 variant를 적용합니다. Variant 활성 시:
- 페이지 상단 `LanguageSwitcher`는 숨겨짐 (variant는 단일 locale)
- 헤더의 role 라인은 `overrides.headline`으로 교체 가능
- About 섹션 맨 위에 `overrides.summary` prepend

## GitHub Actions 동작

`.github/workflows/deploy.yml` 는 다음과 같이 작동:

| 트리거 | 빌드 대상 |
|---|---|
| `push to main` | base + visibility=`public` variant 전체 |
| `workflow_dispatch` (`include_drafts=false`) | base + visibility=`public` variant 전체 |
| `workflow_dispatch` (`include_drafts=true`) | base + visibility=`public` 또는 `draft` variant 전체 |
| (어느 트리거든) | visibility=`private` variant는 **절대 빌드 안 함** |

배포 URL 모양:
- base: `https://<user>.github.io/my-resume/`
- variant: `https://<user>.github.io/my-resume/v/<id>/`

## Validation 에러 카탈로그

| 에러 | 원인 | 해결 |
|---|---|---|
| `schema: must equal "ResumeVariant.v1"` | `schema` 필드 누락/오타 | `"schema": "ResumeVariant.v1"` 명시 |
| `id: kebab-case URL-safe string required` | id에 대문자/공백/특수문자 | 영소문자+숫자+`-`만 사용 |
| `meta.label: required string` | label 누락 | 비어있지 않은 string 추가 |
| `meta.visibility: must be one of public\|private\|draft` | 다른 값 | 3종 중 하나 |
| `meta.locale: must be one of ko\|en` | 다른 값 | `ko` 또는 `en` |
| `meta.updatedAt: must be ISO 8601 datetime string` | timestamp 형식 오류 | `2026-06-11T09:00:00Z` 형식 |
| `overrides.include.experienceIds: must be string[]` | 배열 형식 오류 | string 배열로 |
| `overrides.customBullets[i].targetType: must be one of experienceRole\|project` | 다른 값 | 2종 중 하나 |
| `[import-variant] base-id references invalid` | base에 없는 ID 참조 | `bun run list-base-ids`로 현재 ID 확인 |

## 버전 정책

- **v1 (현재)**: 이 문서에 명시된 schema. 새 필드 추가는 v1 내 minor change로 가능 (기존 필드는 무시되지 않음). 기존 필드 의미 변경은 v2 필요.
- **알 수 없는 필드**: validator는 무시 (warnings로 노출 가능). v1 consumer는 unknown field 그대로 보존.
- **v2 예상 변경**: 사용 후 피드백 받아 결정. 예시: multi-locale per variant, append-bullets, education subset 등.

## my-jd-helper 사용 가이드

### 1. .env 설정

`my-jd-helper/.env`:

```env
RESUME_PATH=../my-resume
```

### 2. base ID 캐싱 (선택)

jd-helper의 agent가 variant를 emit할 때 정확한 ID를 참조해야 합니다. 부팅 시 1회:

```sh
cd ../my-resume
bun run list-base-ids > ../my-jd-helper/data/resume-base-ids.json
```

이후 `resume-coach.md` 프롬프트에 base ID 목록을 inject하면, agent가 잘못된 ID를 생성할 가능성이 줄어듭니다.

### 3. Variant 생성 흐름 (권장)

jd-helper 측 의사 코드:

```ts
async function exportVariant(jd: JD, conversation: Message[]): Promise<string> {
  // 1. resume-coach agent에게 JD + base profile + conversation 전달
  //    → ResumeVariant.v1 JSON 형식 출력 강제 (system prompt에 schema 명시)
  const variantJson = await runResumeCoach({ jd, conversation, baseIds })

  // 2. validation은 my-resume에서 수행 — 여기서는 그냥 파일로 emit
  const outPath = `data/exports/${variantJson.id}.json`
  await Bun.write(outPath, JSON.stringify(variantJson, null, 2))

  // 3. 사용자에게 다음 단계 안내
  return `Variant emitted: ${outPath}\n  → cd ../my-resume && bun run import-variant ${outPath}`
}
```

### 4. 권장 ID 명명 규칙

- `<company-slug>-<role-slug>-<locale>` 패턴 권장
- 예: `acme-backend-en`, `globex-platform-ko`, `tesla-mlops-en`
- 같은 회사 다른 포지션은 role 부분으로 구분

### 5. 안전 정책

- jd-helper가 emit하는 variant는 `source: 'jd-helper'`로 표시 → import 시 자동 draft 강제
- public 발행은 사람이 reviewing 후 의도적으로 수행 (`--visibility=public --force`)
- `private` variant는 deploy되지 않음 (로컬 dev로만 검토)

## 로컬에서 variant 미리보기

```sh
cd /path/to/my-resume
VARIANT_ID=acme-backend-en bun dev
# 또는 빌드 후 확인
VARIANT_ID=acme-backend-en bun run build
bun run preview
```

## 문제 해결

| 증상 | 확인 |
|---|---|
| `[vite.config] VARIANT_ID=X but src/resume/variants/X/variant.json not found` | 디렉토리 이름이 `variant.id`와 다른지 확인 |
| GH Actions에서 variant가 빌드되지 않음 | `visibility`가 `public`인지 확인. `private`는 배포 안 됨. `draft`는 `workflow_dispatch + include_drafts=true` 필요 |
| Variant 페이지에서 LanguageSwitcher가 보임 | `__VARIANT__`가 null. vite 빌드 시 `VARIANT_ID` env 누락 |
| `unknown ids` 에러 | base ID가 변경됨. `bun run list-base-ids`로 최신 ID 재확인 후 variant 수정 |

## 변경 이력

- **v1.0 (2026-06-11)**: 초기 schema 정의 (`summary`, `headline`, `include`, `order`, `customBullets`).
