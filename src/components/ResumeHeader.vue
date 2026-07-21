<script setup lang="ts">
import { computed } from 'vue'
import { useLocalized } from '@/composables/useLocale'
import { useHeadline } from '@/composables/useResumeData'
import { profileText as profileTextData, profileContact } from '@/resume/base/profile'

const profileText = useLocalized(profileTextData)

const headlineOverride = useHeadline()

const profile = computed(() => ({
  name: profileText.value.name,
  role: headlineOverride.value ?? profileText.value.role,
  email: profileContact.email,
  github: profileContact.github,
  portfolio: profileContact.portfolio,
  websites: profileContact.websites,
  linkedin: profileContact.linkedin,
}))
</script>

<template>
  <header class="resume-header mb-3">
    <div class="columns is-vcentered">
      <div class="column is-narrow has-text-centered-mobile">
        <figure class="image is-96x96 photo-container is-inline-block-mobile">
          <img
            src="@/assets/shinkeonkim.jpg"
            alt="Profile Photo"
            style="border-radius: 4px; object-fit: scale-down; height: 100%; width: 100%"
          />
        </figure>
      </div>

      <div class="column has-text-centered-mobile">
        <h1 class="title is-3 is-size-3-mobile mb-1 has-text-black">{{ profile.name }}</h1>
        <h2 class="subtitle is-5 is-size-5-mobile has-text-black mb-2">{{ profile.role }}</h2>

        <div class="contact-info is-small is-size-6-mobile">
          <div class="contact-item">
            <a
              :href="'mailto:' + profile.email"
              class="icon-text has-text-black is-flex is-align-items-center"
            >
              <span class="icon is-small mr-2"><i class="fas fa-envelope"></i></span>
              <span class="url-text">{{ profile.email }}</span>
            </a>
          </div>
          <div class="contact-item">
            <a
              :href="profile.github"
              target="_blank"
              class="icon-text has-text-black is-flex is-align-items-center"
            >
              <span class="icon is-small mr-2"><i class="fab fa-github"></i></span>
              <span class="url-text">{{ profile.github }}</span>
            </a>
          </div>
          <div class="contact-item">
            <a
              :href="profile.portfolio"
              target="_blank"
              class="icon-text has-text-black is-flex is-align-items-center"
            >
              <span class="icon is-small mr-2"><i class="fas fa-briefcase"></i></span>
              <span class="url-text">{{ profile.portfolio }}</span>
            </a>
          </div>
          <div class="contact-item">
            <a
              :href="profile.linkedin"
              target="_blank"
              class="icon-text has-text-black is-flex is-align-items-center"
            >
              <span class="icon is-small mr-2"><i class="fab fa-linkedin"></i></span>
              <span class="url-text">{{ profile.linkedin }}</span>
            </a>
          </div>
          <v-for
            v-for="(website, index) in profile.websites"
            :key="index"
          >
            <div class="contact-item">
              <a
                :href="website"
                target="_blank"
                class="icon-text has-text-black is-flex is-align-items-center"
              >
                <span class="icon is-small mr-2"><i class="fas fa-globe"></i></span>
                <span class="url-text">{{ website }}</span>
              </a>
            </div>
          </v-for>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.25rem;
  row-gap: 0.15rem;
  align-items: center;
}
.contact-item {
  line-height: 1.35;
}
.url-text {
  word-break: break-all;
  overflow-wrap: break-word;
  font-size: 0.82rem;
}

@media screen and (max-width: 768px) {
  .contact-info {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}
</style>
