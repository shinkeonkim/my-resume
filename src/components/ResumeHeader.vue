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
      <div class="column is-narrow">
        <figure class="image is-128x128 photo-container">
          <img
            src="../assets/shinkeonkim.jpg"
            alt="Profile Photo"
            style="border-radius: 4px; object-fit: scale-down; height: 100%; width: 100%"
          />
        </figure>
      </div>

      <!-- Info on Right -->
      <div class="column">
        <h1 class="title is-2 mb-1 has-text-black">{{ profile.name }}</h1>
        <h2 class="subtitle is-4 has-text-black mb-3">{{ profile.role }}</h2>

        <div class="contact-info is-size-6">
          <div class="mb-1">
            <a
              :href="'mailto:' + profile.email"
              class="icon-text has-text-black is-flex is-align-items-center"
            >
              <span class="icon is-small mr-2"><i class="fas fa-envelope"></i></span>
              <span>{{ profile.email }}</span>
            </a>
          </div>
          <div class="mb-1">
            <a
              :href="profile.github"
              target="_blank"
              class="icon-text has-text-black is-flex is-align-items-center"
            >
              <span class="icon is-small mr-2"><i class="fab fa-github"></i></span>
              <span>{{ profile.github }}</span>
            </a>
          </div>
          <div class="mb-1">
            <a
              :href="profile.website"
              target="_blank"
              class="icon-text has-text-black is-flex is-align-items-center"
            >
              <span class="icon is-small mr-2"><i class="fas fa-globe"></i></span>
              <span>{{ profile.website }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.resume-header {
  border-bottom: 2px solid #dbdbdb;
  padding-bottom: 1rem;
}

.fixed-width-icon {
  width: 20px; /* Ensure uniform width for vertical alignment */
  text-align: center;
}
</style>
