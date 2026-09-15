import type { DetailItem } from '../../types'

export const details: DetailItem[] = [
  {
    content: 'Role: Product planning, architecture, and solo development',
  },
  {
    content: '<strong>Declarative visualization engine and public npm package</strong>',
    subContents: [
      'Designed a deterministic scene graph that derives every frame from a <strong>JSON document and absolute time</strong> instead of imperative rendering code.',
      'Separated shared rendering rules from React, Vue, DOM, and SVG adapters so one document produces consistent output across frameworks.',
      'Implemented a Zod-based v1 schema, reference-integrity validation, legacy migration, and SVG, GIF, and storyboard export.',
      'Split core and renderers into independent entry points, kept the core at <strong>25KB gzip</strong>, and published <strong>@kokoa/clotho v0.5.0</strong>.',
    ],
  },
  {
    content: '<strong>Reusable React visual editor and extension architecture</strong>',
    subContents: [
      'Built a timeline-based editor for elements, keyframes, effects, and chapters with previews rendered by the production DOM player.',
      'Designed host-injected repositories, image uploads, and document import pipelines so the same package runs standalone or inside an existing admin application.',
      'Added a capability-gated plugin host that keeps application-specific tools out of the editor core while controlling document and selection access.',
    ],
  },
  {
    content: '<strong>Documentation, runnable examples, and automated delivery</strong>',
    subContents: [
      'Created Astro documentation with React, Vue, Vanilla, and MDX examples consuming the public npm package, plus a complete JSON Schema reference.',
      'Connected library/editor release checks and documentation link validation to CI and deployed the site with Cloudflare Workers Static Assets.',
    ],
  },
]
