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
  <div class="resume-content">
    <ResumeHeader />

    <div class="single-column">
      <IntroductionSection />
      <TimelineSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <ActivitySection />
      <PageBreak />
      <EducationSection />
      <AwardsSection />
      <CertificatesSection />
    </div>
  </div>
</template>

<style scoped>
.resume-content {
  color: #363636;
  background-color: white;
  width: 100%;
  max-width: var(--a4-width);
  min-height: var(--a4-min-height);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  box-sizing: border-box;
  padding: 3rem;
  white-space: normal;
}

@media print {
  .resume-content {
    padding: 0 !important;
    height: auto !important;
    min-height: 0 !important;
    overflow: visible !important;
  }
}

@media screen and (max-width: 768px) {
  .resume-content {
    width: 100% !important;
    max-width: 100% !important;
    padding: 1.5rem !important;
    box-shadow: none;
    min-height: auto;
  }
}
</style>
