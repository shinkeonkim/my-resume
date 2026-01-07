# Cloudflare Workers Builds 배포 가이드 (Vite + Bun)

이 문서는 Cloudflare의 최신 **Workers Builds (Unified UI)** 환경에서 Vite 프로젝트를 배포하는 방법을 설명합니다. 이 환경에서는 모든 프로젝트가 Worker로 관리되며, `npx wrangler deploy`가 필수 배포 명령으로 사용됩니다.

## 1. 프로젝트 설정 (`wrangler.json`)

Vite의 빌드 결과물(`dist`)을 서빙하기 위해 프로젝트 루트의 `wrangler.json` 설정이 다음과 같아야 합니다.

```json
{
  "name": "my-resume",
  "compatibility_date": "2026-01-07",
  "assets": {
    "directory": "dist"
  }
}
```

## 2. Cloudflare Dashboard 빌드 설정

Cloudflare 대시보드의 **Settings > Build & deployments** 섹션에서 다음과 같이 설정합니다. (모든 값이 필수 입력 항목인 경우)

| 설정 항목 | 값 | 설명 |
| :--- | :--- | :--- |
| **Build command** | `bun run build` | Vite 빌드 실행 (dist 폴더 생성) |
| **Deploy command** | `npx wrangler deploy` | `wrangler.json` 설정을 읽어 배포 실행 |
| **Non-production... deploy command** | `npx wrangler versions upload` or `npx wrangler deploy` | 테스트/프리뷰 배포 명령 |
| **Build output directory** | (대시보드에 따라 생략 가능) | `wrangler.json`의 `assets.directory`가 우선됨 |

## 3. 주의 사항
- **인증**: 통합 대시보드 환경에서는 `CLOUDFLARE_API_TOKEN` 환경 변수가 필요할 수 있습니다. (설정 > 환경 변수에서 확인)
- **SPA 라우팅**: 만약 리프레시 시 404가 발생한다면 `wrangler.json` 내 `assets` 섹션에 `"not_found_handling": "single-page-application"`을 추가할 수 있습니다.

---
**배포 완료 후**: Cloudflare에서 제공하는 Worker 주소를 통해 이력서를 확인할 수 있습니다.
