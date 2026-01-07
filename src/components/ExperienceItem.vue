<script setup lang="ts">
import TechnicalStackTag from './TechnicalStackTag.vue'
import type { LinkItem } from './types/LinkItem'

interface DetailItem {
  content: string
  period?: string
  subContents?: string[]
}

defineProps<{
  title: string
  period: string
  techStack?: string[]
  details?: DetailItem[]
  links?: LinkItem[]
}>()
</script>

<template>
  <div class="experience-item mb-5">
    <div class="columns is-gapless is-mobile is-vcentered mb-2">
      <div class="column">
        <h3 class="title is-6 mb-0 has-text-black has-text-weight-bold">{{ title }}</h3>
      </div>
      <div class="column is-narrow">
        <span class="is-size-7 has-text-grey">{{ period }}</span>
      </div>
    </div>

    <div v-if="techStack && techStack.length" class="tags mb-1">
      <TechnicalStackTag v-for="tech in techStack" :key="tech" :name="tech" />
    </div>

    <div v-if="details && details.length" class="content is-small mb-2">
      <ul class="detail-list">
        <li v-for="(detail, index) in details" :key="index" class="detail-item">
          <div class="is-flex is-align-items-baseline">
            <span v-html="detail.content"></span>
            <span v-if="detail.period" class="has-text-grey-light is-size-7 ml-2"
              >({{ detail.period }})</span
            >
          </div>
          <ul
            v-if="detail.subContents && detail.subContents.length"
            class="ml-4 mt-1"
            style="list-style-type: circle"
          >
            <li v-for="(sub, sIdx) in detail.subContents" :key="sIdx" class="mb-0">
              <span v-html="sub"></span>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div v-if="links && links.length" class="project-links mt-2">
      <div v-for="link in links" :key="link.url" class="mb-1">
        <a
          :href="link.url"
          target="_blank"
          class="icon-text is-size-7 has-text-grey-dark is-flex is-align-items-center"
          style="width: fit-content"
        >
          <span class="icon is-small mr-2">
            <i :class="link.icon" v-if="link.icon"></i>
            <i class="fab fa-github" v-else-if="link.url.includes('github')"></i>
            <i class="fas fa-link" v-else></i>
          </span>
          <span style="word-break: break-all">{{ link.url }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-item {
  margin-bottom: 2rem;
  break-inside: avoid;
}

.detail-list {
  margin-top: 0.5rem;
  margin-left: 1.5rem;
}

.tags {
  gap: 0.1rem;
}
</style>
