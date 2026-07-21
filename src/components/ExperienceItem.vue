<script setup lang="ts">
import TechnicalStackTag from './TechnicalStackTag.vue'
import type { DetailItem, LinkItem } from '@/resume/base/types'

defineProps<{
  title: string
  period: string
  techStack?: string[]
  details?: DetailItem[]
  links?: LinkItem[]
}>()

const isProjectCard = (d: DetailItem): boolean => Boolean(d.impact)
</script>

<template>
  <div class="experience-item">
    <div class="item-header">
      <h3 class="item-title" v-html="title"></h3>
      <span v-if="period" class="item-period">{{ period }}</span>
    </div>

    <div v-if="techStack && techStack.length" class="role-tags">
      <TechnicalStackTag v-for="tech in techStack" :key="tech" :name="tech" />
    </div>

    <div v-if="details && details.length" class="details">
      <template v-for="(detail, index) in details" :key="index">
        <article v-if="isProjectCard(detail)" class="project-card">
          <header class="project-header">
            <h4 class="project-title" v-html="detail.content"></h4>
            <span v-if="detail.period" class="project-period">{{ detail.period }}</span>
          </header>
          <p v-if="detail.impact" class="project-impact" v-html="detail.impact"></p>
          <ul
            v-if="detail.subContents && detail.subContents.length"
            class="project-subs"
          >
            <li
              v-for="(sub, sIdx) in detail.subContents"
              :key="sIdx"
              v-html="sub"
            ></li>
          </ul>
        </article>

        <div v-else class="plain-detail">
          <div class="plain-header">
            <span v-html="detail.content"></span>
            <span v-if="detail.period" class="plain-period"> ({{ detail.period }})</span>
          </div>
          <ul
            v-if="detail.subContents && detail.subContents.length"
            class="plain-subs"
          >
            <li v-for="(sub, sIdx) in detail.subContents" :key="sIdx">
              <span v-html="sub"></span>
            </li>
          </ul>
        </div>
      </template>
    </div>

    <div v-if="links && links.length" class="links">
      <div v-for="link in links" :key="link.url">
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
  margin-bottom: 0.9rem;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.15rem;
}

.item-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #363636;
  margin: 0;
  line-height: 1.25;
  flex: 1 1 auto;
  min-width: 0;
}

.item-period {
  font-size: 0.72rem;
  color: #7a7a7a;
  white-space: nowrap;
  flex: 0 0 auto;
}

.role-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
  margin-bottom: 0.3rem;
}

.details {
  display: flex;
  flex-direction: column;
}

.project-card {
  padding: 0.5rem 0 0.5rem 0;
  border-top: 1px solid #ececec;
  break-inside: avoid;
  page-break-inside: avoid;
}

.project-card:first-child {
  border-top: none;
  padding-top: 0.1rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.1rem;
}

.project-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #0a0a0a;
  margin: 0;
  line-height: 1.25;
  flex: 1 1 auto;
  min-width: 0;
}

.project-period {
  font-size: 0.72rem;
  color: #7a7a7a;
  white-space: nowrap;
  flex: 0 0 auto;
  line-height: 1.2;
}

.project-impact {
  font-size: 0.82rem;
  color: #363636;
  line-height: 1.3;
  margin: 0 0 0.15rem 0;
}

.project-impact :deep(strong) {
  color: #0a0a0a;
  font-weight: 600;
}

.project-subs {
  margin: 0.05rem 0 0 1.1rem !important;
  padding: 0;
  list-style: disc;
  line-height: 1.3;
  color: #4a4a4a;
  font-size: 0.82rem;
}

.project-subs li {
  margin-bottom: 0.05rem;
}

.project-subs :deep(strong) {
  color: #0a0a0a;
  font-weight: 600;
}

.plain-detail {
  padding-left: 1.1rem;
  position: relative;
  line-height: 1.5;
  font-size: 0.82rem;
  margin-bottom: 0.2rem;
}

.plain-detail:last-child {
  margin-bottom: 0;
}

.plain-detail::before {
  content: '•';
  position: absolute;
  left: 0.3rem;
  color: #4a4a4a;
  line-height: 1.3;
}

.plain-header {
  line-height: 1.3;
}

.plain-period {
  color: #b5b5b5;
  font-size: 0.72rem;
}

.plain-subs {
  margin: 0.05rem 0 0.05rem 1rem !important;
  padding-top: 0 !important;
  list-style: circle;
  line-height: 1.3;
  font-size: 0.82rem;
}

.plain-subs li {
  margin-bottom: 0 !important;
}

.plain-subs :deep(strong) {
  color: #0a0a0a;
  font-weight: 600;
}

.links {
  margin-top: 0.35rem;
}

@media screen and (max-width: 768px) {
  .item-title {
    font-size: 0.88rem;
  }
  .project-title {
    font-size: 0.82rem;
  }
}
</style>
