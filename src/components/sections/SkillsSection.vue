<script setup lang="ts">
import TechnicalStackTag from '../TechnicalStackTag.vue'
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { skills, skill_descriptions } from '../data/skills'
</script>

<template>
  <ResumeSectionLayout title="Skills">
    <div class="content is-small">
      <!-- Tags -->
      <div v-for="(items, category) in skills" :key="category" class="mb-4">
        <div class="has-text-grey-dark has-text-weight-bold mb-2 is-size-6">{{ category }}</div>
        <div class="tags">
          <TechnicalStackTag v-for="skill in items" :key="skill" :name="skill" />
        </div>
      </div>

      <!-- Descriptions -->
      <div class="mt-4">
        <div v-for="(desc, idx) in skill_descriptions" :key="idx" class="mb-3">
          <strong class="is-size-6">{{ desc.title }}</strong>
          <ul class="mt-1 ml-0" style="list-style-position: inside">
            <li v-for="(item, i) in desc.items" :key="i">{{ item }}</li>
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
  display: inline;
}
</style>
