<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="resume-section mb-5">
    <h2 class="section-title title is-4 has-text-weight-bold mb-3">
      <span class="title-text">{{ title }}</span>
    </h2>
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.resume-section {
  position: relative;
}

.section-container {
  break-inside: avoid;
}
.section-title {
  border-bottom: 2px solid #dbdbdb;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  color: #363636;
}

.title-text {
  display: inline-block;
}
</style>
