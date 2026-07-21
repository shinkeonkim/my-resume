<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { useCertificates } from '@/composables/useResumeData'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const certificates = useCertificates()
</script>

<template>
  <ResumeSectionLayout :title="t('section.certificates')">
    <div class="content is-small">
      <ul class="two-col-list">
        <li v-for="(certificate, index) in certificates" :key="index" class="two-col-item">
          <div class="row-line">
            <strong class="name">{{ certificate.name }}</strong>
            <span class="has-text-grey is-size-7 date">{{ certificate.date }}</span>
          </div>
          <div v-if="certificate.issuer" class="has-text-grey is-size-7 issuer">
            {{ certificate.issuer }}
          </div>
        </li>
      </ul>
    </div>
  </ResumeSectionLayout>
</template>

<style scoped>
.two-col-list {
  list-style: none;
  margin: 0 !important;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.25rem;
  row-gap: 0.35rem;
}

.two-col-item {
  break-inside: avoid;
  page-break-inside: avoid;
  margin: 0 !important;
  line-height: 1.25;
}

.row-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
}

.name {
  flex: 1 1 auto;
  min-width: 0;
}

.date {
  flex: 0 0 auto;
  white-space: nowrap;
}

.issuer {
  margin-top: 0.05rem;
  line-height: 1.2;
}

@media screen and (max-width: 768px) {
  .two-col-list {
    grid-template-columns: 1fr;
  }
}
</style>
