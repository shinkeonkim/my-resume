<script setup lang="ts">
const profile = {
  name: '김신건',
  role: 'Backend Engineer',
  email: 'dev.shinkeonkim@gmail.com',
  github: 'https://github.com/shinkeonkim',
  website: 'https://코드.kr',
}
</script>

<template>
  <header class="resume-header mb-5">
    <div class="columns is-vcentered">
      <!-- Image on Left -->
      <div class="column is-narrow has-text-centered-mobile">
        <figure class="image is-128x128 photo-container is-inline-block-mobile">
          <img
            src="@/assets/shinkeonkim.jpg"
            alt="Profile Photo"
            style="border-radius: 4px; object-fit: scale-down; height: 100%; width: 100%"
          />
        </figure>
      </div>

      <!-- Info on Right -->
      <div class="column has-text-centered-mobile">
        <h1 class="title is-2 is-size-3-mobile mb-1 has-text-black">{{ profile.name }}</h1>
        <h2 class="subtitle is-4 is-size-5-mobile has-text-black mb-3">{{ profile.role }}</h2>

        <div class="contact-info is-small is-size-6-mobile is-flex is-flex-direction-column is-align-items-flex-start-tablet is-align-items-center-mobile">
          <div class="contact-item mb-1">
            <a
              :href="'mailto:' + profile.email"
              class="icon-text has-text-black is-flex is-align-items-center"
            >
              <span class="icon is-small mr-2"><i class="fas fa-envelope"></i></span>
              <span class="url-text">{{ profile.email }}</span>
            </a>
          </div>
          <div class="contact-item mb-1">
            <a
              :href="profile.github"
              target="_blank"
              class="icon-text has-text-black is-flex is-align-items-center"
            >
              <span class="icon is-small mr-2"><i class="fab fa-github"></i></span>
              <span class="url-text">{{ profile.github }}</span>
            </a>
          </div>
          <div class="contact-item mb-1">
            <a
              :href="profile.website"
              target="_blank"
              class="icon-text has-text-black is-flex is-align-items-center"
            >
              <span class="icon is-small mr-2"><i class="fas fa-globe"></i></span>
              <span class="url-text">{{ profile.website }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  
.url-text {
  word-break: break-all;
  overflow-wrap: break-word;
}
</style>
