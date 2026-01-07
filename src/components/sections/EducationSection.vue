<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { educations } from '../data/educations'
</script>

<template>
  <ResumeSectionLayout title="Education">
    <div v-for="(edu, index) in educations" :key="index" class="mb-4">
      <div class="columns is-vcentered mb-0">
        <div class="column pb-0">
          <h3 class="title is-5 is-size-6-mobile mb-1 has-text-black has-text-weight-bold">{{ edu.school }}</h3>
          <p class="subtitle is-7 has-text-black mb-1">{{ edu.major }}</p>
          <div class="content is-small mt-1" v-if="edu.details.length">
            <ul class="ml-4 mt-0">
              <li v-for="det in edu.details" :key="det">{{ det }}</li>
            </ul>
          </div>
        </div>
        <div class="column is-narrow has-text-right-tablet pt-0">
          <p class="is-size-7 has-text-grey">{{ edu.period }}</p>
        </div>
      </div>
    </div>
  </ResumeSectionLayout>
</template>
