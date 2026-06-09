<script setup lang="ts">
import ResumeContent from './components/ResumeContent.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()

const printResume = () => {
  window.print()
}
</script>

<template>
  <div class="resume-wrapper">
    <div class="print-controls no-print">
      <LanguageSwitcher />
      <button class="button is-black" @click="printResume">
        <span class="icon is-small">
          <i class="fas fa-print"></i>
        </span>
        <span>{{ t('app.print') }}</span>
      </button>
    </div>

    <div class="a4-page box">
      <ResumeContent />
    </div>
  </div>
</template>

<style scoped>

.resume-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.print-controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.a4-page {
  width: var(--a4-width);
  min-height: var(--a4-min-height);
  background: white;
  padding: 0; /* Layout handled inside ResumeContent */
  margin: 0 auto;
  box-shadow:
    0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
}

@media screen and (max-width: 768px) {
  .a4-page {
    width: 100% !important;
    max-width: 100% !important;
    box-shadow: none;
    border-radius: 0;
  }
}

@media print {
  .a4-page {
    box-shadow: none;
    width: 100%;
    min-height: auto;
  }
}
</style>
