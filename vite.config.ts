import { fileURLToPath, URL } from 'node:url'
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

function loadVariant(): {
  data: unknown
  id: string | null
  basePath: string | null
} {
  const id = process.env.VARIANT_ID
  if (!id || id === 'base') return { data: null, id: null, basePath: null }
  const filePath = resolve(__dirname, `src/resume/variants/${id}/variant.json`)
  if (!existsSync(filePath)) {
    throw new Error(`[vite.config] VARIANT_ID=${id} but ${filePath} not found`)
  }
  const data = JSON.parse(readFileSync(filePath, 'utf-8'))
  return { data, id, basePath: `v/${id}/` }
}

const variant = loadVariant()
const base = variant.basePath ? `/${variant.basePath}` : '/'

export default defineConfig({
  base,
  define: {
    __VARIANT__: JSON.stringify(variant.data),
  },
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
