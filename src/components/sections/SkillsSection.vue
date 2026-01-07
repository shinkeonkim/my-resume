<script setup lang="ts">
import TechnicalStackTag from '../TechnicalStackTag.vue'
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { skills, skill_descriptions } from '../data/skills'
</script>

<template>
  <ResumeSectionLayout title="Skills">
    <!-- Tags -->
    <div v-for="(items, category) in skills" :key="category" class="mb-4">
      <h3 class="title is-size-6 is-size-7-mobile has-text-black has-text-weight-bold mb-2">{{ category }}</h3>
      <div class="tags">
        <TechnicalStackTag v-for="skill in items" :key="skill" :name="skill" />
      </div>
    </div>

    <div class="content is-small">
      <!-- Descriptions -->
      <div class="mt-4">
        <div v-for="(desc, idx) in skill_descriptions" :key="idx" class="mb-3">
          <strong class="is-size-6 is-size-7-mobile">{{ desc.title }}</strong>
          <ul class="mt-1 ml-0" style="list-style-position: inside">
            <li v-for="(item, i) in desc.items" :key="i" class="is-size-7-mobile">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </ResumeSectionLayout>
</template>

<style scoped>
.tags {
  margin-bottom: 0 !important;
  vertical-align: middle;
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 768px) {
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
}
</style>
