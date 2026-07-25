<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import ExperienceItem from '../ExperienceItem.vue'
import { useExperiences } from '@/composables/useResumeData'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const experiences = useExperiences()
</script>

<template>
  <ResumeSectionLayout
    :title="t('section.workExperiences')"
    :subtitle="t('section.workExperiences.subtitle')"
  >
    <div v-for="(experience, index) in experiences" :key="index" class="company-block">
      <h3 class="company-name">{{ experience.name }}</h3>

      <div class="roles-list">
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
.company-block {
  margin-bottom: 1.1rem;
}

.company-block:last-child {
  margin-bottom: 0;
}

.company-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0a0a0a;
  margin: 0.4rem 0 0.2rem;
  line-height: 1.2;
}

.company-block:first-child > .company-name {
  margin-top: 0;
}

.roles-list {
  padding-top: 0.15rem;
}

@media screen and (max-width: 768px) {
  .company-name {
    font-size: 0.92rem;
  }
}
</style>
