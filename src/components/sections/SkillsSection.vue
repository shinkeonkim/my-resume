<script setup lang="ts">
import { computed } from 'vue'
import TechnicalStackTag from '../TechnicalStackTag.vue'
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { useSkills } from '@/composables/useResumeData'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const skillsData = useSkills()
const skills = computed(() => skillsData.value.skills)
const skill_descriptions = computed(() => skillsData.value.skill_descriptions)
</script>

<template>
  <ResumeSectionLayout :title="t('section.skills')">
    <div class="skill-tags-block">
      <div v-for="(items, category) in skills" :key="category" class="skill-row">
        <span class="skill-category">{{ category }}</span>
        <div class="tags">
          <TechnicalStackTag v-for="skill in items" :key="skill" :name="skill" />
        </div>
      </div>
    </div>

    <div class="content is-small">
      <div class="skill-desc-grid">
        <div v-for="(desc, idx) in skill_descriptions" :key="idx" class="skill-desc-item">
          <strong class="skill-desc-title">{{ desc.title }}</strong>
          <ul class="skill-desc-list">
            <li v-for="(item, i) in desc.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </ResumeSectionLayout>
</template>

<style scoped>
.skill-tags-block {
  margin-bottom: 0.4rem;
}

.skill-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.2rem;
  flex-wrap: wrap;
}

.skill-category {
  font-weight: 700;
  color: #0a0a0a;
  font-size: 0.85rem;
  min-width: 6.5rem;
  flex-shrink: 0;
}

.tags {
  margin-bottom: 0 !important;
  vertical-align: middle;
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
  flex: 1 1 auto;
}

.skill-desc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 0.35rem;
  margin-top: 0.35rem;
}

.skill-desc-item {
  break-inside: avoid;
  page-break-inside: avoid;
}

.skill-desc-title {
  font-size: 0.9rem;
  color: #0a0a0a;
  display: block;
  margin-bottom: 0.05rem;
}

.skill-desc-list {
  margin: 0 0 0 1rem !important;
  padding: 0;
  list-style: disc;
  line-height: 1.3;
}

.skill-desc-list li {
  margin-bottom: 0.05rem;
}

@media screen and (max-width: 768px) {
  .skill-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  .skill-category {
    min-width: 0;
  }
  .skill-desc-grid {
    grid-template-columns: 1fr;
  }
}
</style>
