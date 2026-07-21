<script setup lang="ts">
import { computed } from 'vue'
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import ExperienceItem from '../ExperienceItem.vue'
import { useActivities, useEducations } from '@/composables/useResumeData'
import { useLocale } from '@/composables/useLocale'

interface DetailItem {
  content: string
  period?: string
  subContents?: string[]
}

interface UnifiedItem {
  kind: 'education' | 'activity'
  title: string
  period: string
  details: DetailItem[]
}

const { t } = useLocale()
const activities = useActivities()
const educations = useEducations()

const items = computed<UnifiedItem[]>(() => {
  const edus = educations.value
  const result: UnifiedItem[] = []

  // Combine all education entries into a single card so that it occupies
  // exactly one slot in the 2x2 activity grid (top-left).
  if (edus.length) {
    const eduDetails: DetailItem[] = edus.map((edu) => ({
      content: edu.major
        ? `${edu.school} · ${edu.major}<br><span class="has-text-grey is-size-7">${edu.period}</span>`
        : `${edu.school} <span class="has-text-grey is-size-7">· ${edu.period}</span>`,
      subContents: edu.details.length ? edu.details : undefined,
    }))

    result.push({
      kind: 'education',
      title: t('section.education'),
      period: '',
      details: eduDetails,
    })
  }

  for (const a of activities.value) {
    result.push({
      kind: 'activity',
      title: a.title,
      period: a.period,
      details: a.details,
    })
  }

  return result
})
</script>

<template>
  <ResumeSectionLayout :title="t('section.activities')">
    <div class="activity-grid">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="activity-col"
      >
        <ExperienceItem
          :title="item.title"
          :period="item.period"
          :details="item.details"
        />
      </div>
    </div>
  </ResumeSectionLayout>
</template>

<style scoped>
.activity-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 0;
  align-items: start;
}

.activity-col {
  break-inside: avoid;
  page-break-inside: avoid;
  min-width: 0;
}

@media screen and (max-width: 768px) {
  .activity-grid {
    grid-template-columns: 1fr;
  }
}
</style>
