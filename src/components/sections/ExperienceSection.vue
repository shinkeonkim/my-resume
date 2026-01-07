<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import ExperienceItem from '../ExperienceItem.vue'
import { experiences } from '../data/experiences'
</script>

<template>
  <ResumeSectionLayout title="Work Experiences">
    <div v-for="(experience, index) in experiences" :key="index" class="company-block mb-5">
      <h3 class="title is-5 is-size-6-mobile mb-3 has-text-black has-text-weight-bold">
        {{ experience.name }}
      </h3>

      <div class="experience-items-list">
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
  padding-top: 0.2rem;
}

@media screen and (max-width: 768px) {
  .experience-items-list {
    margin-left: 0;
  }
}

.experience-items-list :deep(.experience-item-title) {
  /* Shrink role titles to is-6 equivalent */
  font-size: 1rem;
}

@media screen and (max-width: 768px) {
  .experience-items-list :deep(.experience-item-title) {
    font-size: 0.9rem; /* is-7 equivalent */
  }
}
</style>
