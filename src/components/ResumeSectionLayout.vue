<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="resume-section pb-2">
    <h2 class="section-title title is-4 has-text-weight-bold mb-3">
      <span class="title-text">{{ title }}</span>
    </h2>
    <div class="section-content is-small">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.resume-section {
  position: relative;
}

.section-title {
  border-bottom: 2px solid #dbdbdb;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  color: #363636;
  line-height: 1.2;
}

.title-text {
  display: inline-block;
}

@media screen and (max-width: 768px) {
  .resume-section {
    margin-bottom: 2rem !important;
  }
  .section-title {
    font-size: 1.15rem !important; /* Standardized for mobile */
    margin-bottom: 0.75rem !important;
  }
}
</style>
