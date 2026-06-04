<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { introductions } from '../data/introductions'
</script>

<template>
  <ResumeSectionLayout title="About">
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
