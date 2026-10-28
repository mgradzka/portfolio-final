<script setup lang="ts">
import { caseStudies } from '~/data/cases'

useHead({ title: 'Case studies' })
useSeoMeta({
  description:
    'Case studies by Martyna Grądzka: a custom Shopify webshop, a full-stack task portal and a React ordering app.',
})
</script>

<template>
  <div class="cases container">
    <header class="cases__header">
      <p class="eyebrow">Case studies</p>
      <h1>Things I have built</h1>
      <p>From research and database design to the last line of frontend code. Pick a project to see how it was made.</p>
    </header>

    <ul role="list" class="cases__list">
      <li v-for="(item, index) in caseStudies" :key="item.slug" v-reveal>
        <CaseCard :item="item" heading-level="h2" :reversed="index % 2 === 1" />
      </li>
    </ul>

    <div class="cta cases__cta">
      <h2>Let’s start working together!</h2>
      <BaseButton to="/contact">Contact me</BaseButton>
    </div>
  </div>
</template>

<style scoped>
.cases {
  padding-block: clamp(3rem, 8vw, 6rem) var(--section-space);
}

.cases__header {
  max-width: 40rem;
  margin-bottom: clamp(2.5rem, 6vw, 4rem);
}

.cases__header h1 {
  font-size: clamp(2.25rem, 1.6rem + 3vw, 3.5rem);
  margin-block: 0.5rem 1rem;
}

.cases__header p:last-child {
  font-size: 1.0625rem;
}

.cases__list {
  display: grid;
  gap: clamp(1.5rem, 4vw, 3rem);
}

.cases__cta {
  margin-top: var(--section-space);
}
</style>
