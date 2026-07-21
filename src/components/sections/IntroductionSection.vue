<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { useIntroductions } from '@/composables/useResumeData'
import { useLocale } from '@/composables/useLocale'

const introductions = useIntroductions()
const { t } = useLocale()
</script>

<template>
  <ResumeSectionLayout :title="t('section.about')">
    <div class="content has-text-grey-dark is-small">
      <ul class="intro-list">
        <li v-for="(introduction, index) in introductions" :key="index" class="intro-item">
          <strong>{{ introduction.title }}</strong>
          <template v-if="introduction.description">
            <br />
            <span class="intro-desc">{{ introduction.description }}</span>
          </template>
        </li>
      </ul>
    </div>
  </ResumeSectionLayout>
</template>

<style scoped>
.intro-list {
  margin: 0 0 0 1.1rem !important;
  padding: 0;
  line-height: 1.35;
}
.intro-item {
  margin-bottom: 0.35rem;
}
.intro-item strong {
  color: #0a0a0a;
}
.intro-desc {
  display: inline-block;
  margin-top: 0.05rem;
}
</style>
