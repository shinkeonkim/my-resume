<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import ExperienceItem from '../ExperienceItem.vue'
import { useProjects } from '@/composables/useResumeData'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const projects = useProjects()
</script>

<template>
  <ResumeSectionLayout :title="t('section.projects')">
    <ExperienceItem
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :period="project.period"
      :techStack="project.techStack"
      :details="project.details"
      :links="project.links"
    />
  </ResumeSectionLayout>
</template>
