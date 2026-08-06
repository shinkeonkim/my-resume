<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import ExperienceItem from '../ExperienceItem.vue'
import { useActivities } from '@/composables/useResumeData'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const activities = useActivities()
</script>

<template>
  <ResumeSectionLayout :title="t('section.activities')">
    <div class="activity-grid">
      <div v-for="(activity, index) in activities" :key="index" class="activity-col">
        <ExperienceItem
          :title="activity.title"
          :period="activity.period"
          :details="activity.details"
        />
      </div>
    </div>
  </ResumeSectionLayout>
</template>

<style scoped>
.activity-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 0;
  align-items: start;
}

.activity-col {
  break-inside: avoid;
  page-break-inside: avoid;
  min-width: 0;
}

@media screen and (max-width: 768px) {
  .activity-grid {
    grid-template-columns: 1fr;
  }
}
</style>
