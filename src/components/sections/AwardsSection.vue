<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { awards } from '../data/awards'
</script>

<template>
  <ResumeSectionLayout title="Awards">
    <div class="content is-small">
      <ul style="list-style: none; margin-left: 0">
        <li v-for="(award, index) in awards" :key="index" class="mb-2">
          <div class="columns is-vcentered mb-0">
            <div class="column pb-0">
              <span class="has-text-weight-medium">{{ award.name }}</span>
              <div v-if="award.issuer" class="has-text-grey is-size-7 mt-0">
                {{ award.issuer }}
              </div>
            </div>
            <div class="column is-narrow pt-0 has-text-right-tablet">
              <span class="has-text-grey is-size-7">{{ award.date }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </ResumeSectionLayout>
</template>
