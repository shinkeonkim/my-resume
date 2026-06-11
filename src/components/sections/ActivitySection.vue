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
    <ExperienceItem
      v-for="(activity, index) in activities"
      :key="index"
      :title="activity.title"
      :period="activity.period"
      :details="activity.details"
    />
  </ResumeSectionLayout>
</template>
