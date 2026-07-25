<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="resume-section">
    <h2 class="section-title title is-5 has-text-weight-bold">
      <span class="title-text">{{ title }}</span>
      <span v-if="subtitle" class="section-subtitle">{{ subtitle }}</span>
    </h2>
    <div class="section-content is-small">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.resume-section {
  position: relative;
  padding-bottom: 0.15rem;
}

.section-title {
  border-bottom: 1.5px solid #dbdbdb;
  padding-bottom: 0.15rem;
  color: #363636;
  line-height: 1.15;
  font-size: 1.1rem;
  margin: 0.6rem 0 0.35rem !important;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.resume-section:first-child .section-title {
  margin-top: 0 !important;
}

.title-text {
  display: inline-block;
}

.section-subtitle {
  font-size: 0.75rem;
  font-weight: 500;
  color: #7a7a7a;
  letter-spacing: -0.01em;
}

@media screen and (max-width: 768px) {
  .resume-section {
    margin-bottom: 2rem !important;
  }
  .section-title {
    font-size: 1.15rem !important; /* Standardized for mobile */
    margin-bottom: 0.75rem !important;
  }
  .section-subtitle {
    font-size: 0.78rem;
  }
}
</style>
