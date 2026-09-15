# my-resume

김신건 / **SW Engineer (SW 엔지니어)**의 한국어·영어 이력서입니다. Vue 3 + TypeScript + Vite 기반이며, `src/resume/base/`에서 프로필·경력·프로젝트·학력·자격증 데이터를 관리합니다.

[이력서 보기](https://resume.shinkeonkim.com/)

## Clotho

JSON 문서로 시각화 애니메이션을 정의하고 재생·편집·내보내기까지 연결하는 오픈소스 프로젝트입니다.

- **[Clotho](https://github.com/shinkeonkim/clotho)** — TypeScript 기반 엔진. 문서와 시각으로 화면을 계산하는 공통 scene graph를 React·Vue·DOM·SVG 어댑터에서 사용하며, 문서 검증과 GIF 내보내기를 제공합니다.
- **[Clotho Editor](https://github.com/shinkeonkim/clotho-editor)** — React 기반 시각 편집기. 키프레임·이펙트·챕터 편집과 JSON 입출력을 지원하고, 저장소와 이미지 업로드를 호스트 앱에서 연결할 수 있습니다.
- **[Clotho Docs](https://github.com/shinkeonkim/clotho-docs)** — Astro 기반 사용자 문서와 공개 npm 패키지를 사용하는 실행 예제입니다.

[문서 보기](https://clotho-docs.shinkeonkim.com/) · [에디터 실행](https://clotho-editor.shinkeonkim.com/)


## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```
