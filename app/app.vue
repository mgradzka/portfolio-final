<script setup lang="ts">
const siteName = 'Martyna Grądzka'

useHead({
  // Page titles get the name appended, unless they already contain it (home page)
  titleTemplate: (title) => (!title ? siteName : title.includes(siteName) ? title : `${title} · ${siteName}`),
})
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <AppHeader />
  <main id="main" tabindex="-1">
    <NuxtPage />
  </main>
  <AppFooter />
  <BackToTop />
</template>

<style>
#main {
  min-height: calc(100vh - var(--header-height));
  outline: none;
}
</style>
