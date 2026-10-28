<script setup lang="ts">
import type { CaseStudy } from '~/data/cases'

defineProps<{ item: CaseStudy; compact?: boolean; headingLevel?: 'h2' | 'h3'; reversed?: boolean }>()
</script>

<!-- The whole card is clickable: the title link stretches over it (see .card__link::after) -->
<template>
  <article class="card" :class="{ 'card--compact': compact, 'card--reversed': reversed }">
    <div class="card__media">
      <AppImage :name="item.cover" :alt="item.coverAlt" />
    </div>

    <div class="card__body">
      <div class="card__heading">
        <DecorCircle v-if="!compact" color="pink" size="3.25rem" />
        <component :is="headingLevel ?? 'h3'" class="card__title">
          <NuxtLink :to="`/case-studies/${item.slug}`" class="card__link">{{ item.name }}</NuxtLink>
        </component>
      </div>

      <dl class="card__meta">
        <div>
          <dt>Role</dt>
          <dd>{{ item.role }}</dd>
        </div>
        <div v-if="!compact">
          <dt class="visually-hidden">Summary</dt>
          <dd class="card__summary">{{ item.summary }}</dd>
        </div>
        <div>
          <dt :class="{ 'visually-hidden': compact }">Tools and technologies</dt>
          <dd>
            <ul role="list" class="chips">
              <li v-for="tool in item.tools" :key="tool" class="chip">{{ tool }}</li>
            </ul>
          </dd>
        </div>
      </dl>

      <span class="card__more" aria-hidden="true">
        Read case study
        <Icon name="ph:arrow-right" />
      </span>
    </div>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3.5rem);
  padding: clamp(1.5rem, 4vw, 3.5rem);
  background: var(--bg-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.card:focus-within {
  box-shadow: var(--shadow-hover);
}

.card__media {
  order: 2;
}

.card--reversed .card__media {
  order: 0;
}

.card__media img {
  width: 100%;
  transition: transform 0.4s ease;
}

.card:hover .card__media img {
  transform: scale(1.03);
}

.card__heading {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.card__title {
  font-size: clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem);
  color: var(--pink-text);
}

.card__link {
  text-decoration: none;
  color: inherit;
}

.card__link::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

.card__link:focus-visible {
  outline: none;
}

.card__link:focus-visible::after {
  outline: 3px solid var(--blue-text);
  outline-offset: 4px;
}

.card__meta {
  display: grid;
  gap: 1rem;
}

.card__meta dt {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-strong);
  margin-bottom: 0.35rem;
}

.card__meta dd {
  margin: 0;
}

.card__summary {
  max-width: 44ch;
}

.card__more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-strong);
  border-bottom: 2px solid var(--pink);
  padding-bottom: 0.15rem;
}

.card__more svg {
  transition: transform 0.25s ease;
}

.card:hover .card__more svg {
  transform: translateX(4px);
}

/* Compact (home page) */
.card--compact {
  grid-template-columns: 1fr;
  align-items: start;
  align-content: start;
  gap: 1.5rem;
  padding: 1.5rem;
}

.card--compact .card__media {
  order: 0;
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 10;
  padding: 1rem;
  background: var(--bg);
  border-radius: var(--radius);
  overflow: hidden;
}

.card--compact .card__media img {
  max-height: 100%;
  object-fit: contain;
}

.card--compact .card__heading {
  margin-bottom: 0.75rem;
}

.card--compact .card__title {
  font-size: 1.375rem;
}

.card--compact .card__more {
  margin-top: 1.25rem;
}

@media (max-width: 55rem) {
  .card {
    grid-template-columns: 1fr;
  }

  .card__media,
  .card--reversed .card__media {
    order: 0;
  }
}
</style>
