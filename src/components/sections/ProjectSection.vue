<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import ExperienceItem from '../ExperienceItem.vue'
import { projects } from '../data/projects'
</script>

<template>
  <ResumeSectionLayout title="Projects">
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
