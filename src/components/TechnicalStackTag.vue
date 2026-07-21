<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <span class="tag tech-stack-tag">
    {{ name }}
  </span>
</template>

<style scoped>
.tech-stack-tag {
  background-color: #f8f8f8;
  color: #7a7a7a;
  border: 1px solid #e8e8e8;
  font-size: 0.68rem;
  font-weight: 500;
  margin-right: 0.2rem;
  margin-bottom: 0.15rem;
  padding: 0.05rem 0.35rem;
  border-radius: 3px;
  height: auto;
  line-height: 1.3;
}

@media screen and (max-width: 768px) {
  .tech-stack-tag {
    font-size: 0.65rem;
    padding: 0.05rem 0.3rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }
}
</style>
