<script setup lang="ts">
import ResumeHeader from './ResumeHeader.vue'
import IntroductionSection from './sections/IntroductionSection.vue'
import TimelineSection from './sections/TimelineSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import ProjectSection from './sections/ProjectSection.vue'
import ActivitySection from './sections/ActivitySection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import EducationSection from './sections/EducationSection.vue'
import AwardsSection from './sections/AwardsSection.vue'
import CertificatesSection from './sections/CertificatesSection.vue'
import PageBreak from './PageBreak.vue'
</script>

<template>
  <div class="resume-content p-6">
    <ResumeHeader />

    <div class="single-column">
      <IntroductionSection />
      <TimelineSection />
      <ExperienceSection />
      <PageBreak />
      <SkillsSection />
      <ProjectSection />
      <ActivitySection />
      <EducationSection />
      <AwardsSection />
      <PageBreak />
      <CertificatesSection />
    </div>
  </div>
</template>

<style scoped>
.resume-content {
  height: 100%;
  color: #363636;
}
</style>
