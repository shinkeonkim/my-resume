<script setup lang="ts">
import ResumeContent from './components/ResumeContent.vue'

const printResume = () => {
  window.print()
}
</script>

<template>
  <div class="resume-wrapper">
    <div class="print-controls no-print">
      <button class="button is-black" @click="printResume">
        <span class="icon is-small">
          <i class="fas fa-print"></i>
        </span>
        <span>Print / PDF</span>
      </button>
    </div>

    <div class="a4-page box">
      <ResumeContent />
    </div>
  </div>
</template>

<style scoped>

.resume-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.a4-page {
  width: var(--a4-width);
  min-height: var(--a4-min-height);
  background: white;
  padding: 0; /* Layout handled inside ResumeContent */
  margin: 0 auto;
  box-shadow:
    0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
}

@media print {
  .a4-page {
    box-shadow: none;
    width: 100%;
    min-height: auto;
  }
}
</style>
