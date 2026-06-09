<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { useIntroductions } from '../data/introductions'
import { useLocale } from '@/composables/useLocale'

const introductions = useIntroductions()
const { t } = useLocale()
</script>

<template>
  <ResumeSectionLayout :title="t('section.about')">
    <div class="content has-text-grey-dark is-small">
      <ul>
        <li v-for="(introduction, index) in introductions" :key="index" class="">
          <strong>{{ introduction.title }}</strong>
          <br />
          {{ introduction.description }}
        </li>
      </ul>
    </div>
  </ResumeSectionLayout>
</template>
