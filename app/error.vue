<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const notFound = computed(() => props.error.statusCode === 404)

useHead({ title: `${notFound.value ? 'Page not found' : 'Something went wrong'} · Martyna Grądzka` })
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <AppHeader />
  <main id="main" tabindex="-1" class="error container">
    <DecorCircle color="pink" icon="ph:compass" size="5rem" />
    <p class="eyebrow">Error {{ error.statusCode }}</p>
    <h1>{{ notFound ? 'This page does not exist' : 'Something went wrong' }}</h1>
    <p>
      {{
        notFound
          ? 'The page may have moved, or the link might be broken. Let me show you around instead.'
          : 'Please try again in a moment.'
      }}
    </p>
    <div class="button-row">
      <BaseButton to="/" @click="clearError()">Go to home page</BaseButton>
      <BaseButton to="/case-studies" variant="secondary" @click="clearError()">See case studies</BaseButton>
    </div>
  </main>
  <AppFooter />
</template>

<style scoped>
.error {
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 1rem;
  min-height: calc(100vh - var(--header-height) - 4.5rem);
  padding-block: 4rem;
  text-align: center;
}

.error h1 {
  font-size: clamp(2rem, 1.5rem + 2.5vw, 3rem);
}

.error .button-row {
  justify-content: center;
  margin-top: 1rem;
}
</style>
