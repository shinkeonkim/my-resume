<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import ExperienceItem from '../ExperienceItem.vue'
import { experiences } from '../data/experiences'
</script>

<template>
  <ResumeSectionLayout title="Work Experiences">
    <div v-for="(experience, index) in experiences" :key="index" class="company-block mb-5">
      <h3 class="title is-5 mb-3 has-text-black has-text-weight-bold">
        {{ experience.name }}
      </h3>

      <div class="experience-items-list ml-4">
        <ExperienceItem
          v-for="(role, rIndex) in experience.roles"
          :key="rIndex"
          :title="role.title"
          :period="role.period"
          :techStack="role.techStack"
          :details="role.details"
        />
      </div>
    </div>
  </ResumeSectionLayout>
</template>

<style scoped>
.experience-items-list {
  border-left: 2px solid #f5f5f5;
  padding-left: 1rem;
  padding-top: 0.2rem;
}
</style>
