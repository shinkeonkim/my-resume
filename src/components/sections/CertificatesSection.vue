<script setup lang="ts">
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { certificates } from '../data/certificates';
</script>

<template>
  <ResumeSectionLayout title="Certificates">
    <div class="content is-small">
      <ul style="list-style: none; margin-left: 0">
        <li v-for="(certificate, index) in certificates" :key="index" class="mb-2">
          <div class="columns is-mobile is-vcentered mb-0">
            <div class="column">
              <span class="has-text-weight-medium">{{ certificate.name }}</span>
              <div v-if="certificate.issuer" class="has-text-grey is-size-7 mt-0">
                {{ certificate.issuer }}
              </div>
            </div>
            <div class="column is-narrow">
              <span class="has-text-grey is-size-7">{{ certificate.date }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </ResumeSectionLayout>
</template>
