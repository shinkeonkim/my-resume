<script setup lang="ts">
import { SUPPORTED_LOCALES, useLocale, type Locale } from '@/composables/useLocale'

const { locale, setLocale } = useLocale()

const handleChange = (code: Locale) => {
  if (locale.value !== code) setLocale(code)
}
</script>

<template>
  <div class="language-switcher buttons has-addons mb-0">
    <button
      v-for="option in SUPPORTED_LOCALES"
      :key="option.code"
      type="button"
      class="button is-small"
      :class="locale === option.code ? 'is-black is-selected' : 'is-light'"
      :aria-pressed="locale === option.code"
      @click="handleChange(option.code)"
    >
      <span>{{ option.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.language-switcher {
  margin-bottom: 0 !important;
}

.language-switcher .button {
  font-weight: 600;
}
</style>
