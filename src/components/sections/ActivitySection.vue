<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import ExperienceItem from '../ExperienceItem.vue'
import { activities } from '../data/activities'

</script>

<template>
  <ResumeSectionLayout title="Activities">
    <ExperienceItem
      v-for="(activity, index) in activities"
      :key="index"
      :title="activity.title"
      :period="activity.period"
      :details="activity.details"
    />
  </ResumeSectionLayout>
</template>
