<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { useEducations } from '@/composables/useResumeData'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const educations = useEducations()
</script>

<template>
  <ResumeSectionLayout :title="t('section.education')">
    <div v-for="(edu, index) in educations" :key="index" class="edu-item">
      <div class="columns is-vcentered mb-0">
        <div class="column pb-0">
          <h3 class="title is-6 is-size-6-mobile mb-0 has-text-black has-text-weight-bold">{{ edu.school }}</h3>
          <p class="subtitle is-7 has-text-black mb-1 mt-0">{{ edu.major }}</p>
          <div class="content is-small mt-0 mb-0" v-if="edu.details.length">
            <ul class="edu-detail-list">
              <li v-for="det in edu.details" :key="det">{{ det }}</li>
            </ul>
          </div>
        </div>
        <div class="column is-narrow has-text-right-tablet pt-0">
          <p class="is-size-7 has-text-grey">{{ edu.period }}</p>
        </div>
      </div>
    </div>
  </ResumeSectionLayout>
</template>

<style scoped>
.edu-item {
  margin-bottom: 0.35rem;
  break-inside: avoid;
  page-break-inside: avoid;
}
.edu-detail-list {
  margin: 0.1rem 0 0 1.15rem !important;
  padding: 0;
  line-height: 1.3;
}
.edu-detail-list li {
  margin-bottom: 0.05rem;
}
</style>
