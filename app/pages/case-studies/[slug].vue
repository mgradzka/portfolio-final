<script setup lang="ts">
import { caseStudies, findCaseStudy } from '~/data/cases'

const route = useRoute()
const item = findCaseStudy(String(route.params.slug))

if (!item) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
}

const index = caseStudies.indexOf(item)
const next = caseStudies[(index + 1) % caseStudies.length]!

useHead({ title: item.name })
useSeoMeta({
  description: item.summary,
  ogTitle: `${item.name} · Martyna Grądzka`,
  ogDescription: item.summary,
  ogImage: `/images/${item.cover}.webp`,
})

// Highlight the section currently in view in the table of contents
const activeSection = ref(item.sections[0]?.id)
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (visible.length) activeSection.value = visible[0]!.target.id
    },
    { rootMargin: '-30% 0px -60% 0px' },
  )
  item.sections.forEach((section) => {
    const el = document.getElementById(section.id)
    if (el) observer!.observe(el)
  })
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <article v-if="item" class="case">
    <!-- Intro -->
    <header class="case__intro">
      <div class="container">
        <nav aria-label="Breadcrumb">
          <ol role="list" class="breadcrumb">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/case-studies">Case studies</NuxtLink></li>
            <li><span aria-current="page">{{ item.name }}</span></li>
          </ol>
        </nav>

        <div class="case__intro-grid">
          <div class="case__intro-text">
            <div class="case__title">
              <DecorCircle color="pink" size="3.5rem" />
              <h1>{{ item.name }}</h1>
            </div>
            <p class="case__overview">{{ item.overview }}</p>

            <dl class="case__facts">
              <div>
                <dt>Role</dt>
                <dd>{{ item.role }}</dd>
              </div>
              <div>
                <dt>Tools and technologies</dt>
                <dd>
                  <ul role="list" class="chips">
                    <li v-for="tool in item.tools" :key="tool" class="chip">{{ tool }}</li>
                  </ul>
                </dd>
              </div>
            </dl>

            <p v-if="item.note" class="case__note">
              <Icon name="ph:key" size="1.25rem" aria-hidden="true" />
              {{ item.note }}
            </p>

            <div class="button-row">
              <BaseButton
                v-for="(link, i) in item.links"
                :key="link.href"
                :href="link.href"
                :icon="link.icon"
                :variant="i === 0 ? 'primary' : 'secondary'"
              >
                {{ link.label }}
              </BaseButton>
            </div>
          </div>

          <AppImage :name="item.cover" :alt="item.coverAlt" class="case__cover" eager />
        </div>
      </div>
    </header>

    <!-- Content -->
    <div class="case__body container">
      <nav v-if="item.sections.length > 1" class="toc" aria-label="On this page">
        <p class="toc__title">On this page</p>
        <ol role="list" class="toc__list">
          <li v-for="section in item.sections" :key="section.id">
            <a
              :href="`#${section.id}`"
              class="toc__link"
              :class="{ 'toc__link--active': activeSection === section.id }"
              :aria-current="activeSection === section.id ? 'true' : undefined"
            >
              {{ section.title }}
            </a>
          </li>
        </ol>
      </nav>

      <div class="case__sections" :class="{ 'case__sections--full': item.sections.length <= 1 }">
        <section v-for="section in item.sections" :id="section.id" :key="section.id" class="case-section">
          <h2 class="case-section__title">{{ section.title }}</h2>

          <div v-for="(group, g) in section.groups" :key="g" class="case-group">
            <h3 v-if="group.heading" class="case-group__heading">{{ group.heading }}</h3>
            <template v-for="(block, b) in group.blocks" :key="b">
              <p v-if="block.type === 'text'" class="case-group__text">{{ block.text }}</p>
              <figure v-else class="shot" v-reveal>
                <a :href="`/images/${block.src}.webp`" target="_blank" rel="noopener" class="shot__link">
                  <AppImage :name="block.src" :alt="block.alt" />
                  <span class="visually-hidden">(open full size in a new tab)</span>
                </a>
                <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
              </figure>
            </template>
          </div>
        </section>
      </div>
    </div>

    <!-- Next project -->
    <footer class="case__next">
      <div class="container case__next-inner">
        <NuxtLink :to="`/case-studies/${next.slug}`" class="next-card">
          <span class="eyebrow">Next case study</span>
          <span class="next-card__name">{{ next.name }}</span>
          <span class="next-card__role">{{ next.role }}</span>
          <Icon name="ph:arrow-right" class="next-card__arrow" aria-hidden="true" />
        </NuxtLink>

        <div class="cta">
          <h2>Let’s work together on a new project!</h2>
          <div class="button-row">
            <BaseButton to="/contact">Contact me</BaseButton>
            <BaseButton to="/case-studies" variant="secondary">All case studies</BaseButton>
          </div>
        </div>
      </div>
    </footer>
  </article>
</template>

<style scoped>
/* Intro */
.case__intro {
  background: linear-gradient(var(--bg), var(--surface));
  padding-block: 2rem clamp(3rem, 7vw, 5rem);
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.5rem;
  font-size: 0.875rem;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
}

.breadcrumb li + li::before {
  content: '/';
  margin-right: 0.5rem;
  color: var(--text-muted);
}

.breadcrumb a {
  color: var(--text);
  text-underline-offset: 0.2em;
}

.breadcrumb [aria-current] {
  font-weight: 600;
  color: var(--text-strong);
}

.case__intro-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);
}

.case__title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.case__title h1 {
  font-size: clamp(2.25rem, 1.6rem + 3vw, 3.5rem);
}

.case__overview {
  font-size: 1.125rem;
  max-width: 50ch;
}

.case__facts {
  display: grid;
  gap: 1.25rem;
  margin-block: 2rem;
}

.case__facts dt {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-strong);
  margin-bottom: 0.4rem;
}

.case__facts dd {
  margin: 0;
}

.case__note {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.9rem;
  margin-bottom: 2rem;
  background: var(--yellow-light);
  border-radius: 0.5rem;
  font-weight: 600;
  color: var(--text-strong);
}

.case__cover {
  width: 100%;
}

@media (max-width: 55rem) {
  .case__intro-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .case__cover {
    order: -1;
    max-width: 36rem;
    justify-self: center;
  }
}

/* Body */
.case__body {
  display: grid;
  grid-template-columns: 13rem minmax(0, 1fr);
  align-items: start;
  gap: clamp(2rem, 5vw, 4rem);
  padding-block: var(--section-space);
}

.case__sections--full {
  grid-column: 1 / -1;
  max-width: 56rem;
  margin-inline: auto;
}

.toc {
  position: sticky;
  top: calc(var(--header-height) + 2rem);
}

.toc__title {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-strong);
  margin-bottom: 0.75rem;
}

.toc__list {
  display: grid;
  gap: 0.25rem;
  border-left: 2px solid var(--border);
}

.toc__link {
  display: block;
  margin-left: -2px;
  padding: 0.4rem 0 0.4rem 1rem;
  border-left: 2px solid transparent;
  font-weight: 600;
  text-decoration: none;
  color: var(--text);
  transition:
    color 0.2s,
    border-color 0.2s;
}

.toc__link:hover {
  color: var(--text-strong);
}

.toc__link--active {
  color: var(--pink-text);
  border-left-color: var(--pink);
}

.case-section + .case-section {
  margin-top: clamp(4rem, 9vw, 6rem);
  padding-top: clamp(3rem, 7vw, 4.5rem);
  border-top: 1px solid var(--border);
}

.case-section__title {
  font-size: clamp(1.75rem, 1.4rem + 1.4vw, 2.25rem);
  margin-bottom: 2rem;
}

.case-group + .case-group {
  margin-top: 3rem;
}

.case-group__heading {
  font-size: 1.25rem;
  color: var(--pink-text);
  margin-bottom: 1rem;
}

.case-group__text {
  max-width: 68ch;
  font-size: 1.0625rem;
  margin-bottom: 1.5rem;
}

.shot {
  margin-block: 0 2rem;
}

/* Small screenshots keep their natural size instead of being blurred by upscaling */
.shot__link {
  display: inline-block;
  max-width: 100%;
  vertical-align: top;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--surface);
  box-shadow: var(--shadow);
  transition: box-shadow 0.3s ease;
}

.shot__link:hover {
  box-shadow: var(--shadow-hover);
}

.shot__link img {
  width: auto;
}

.shot figcaption {
  margin-top: 0.6rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

@media (max-width: 55rem) {
  .case__body {
    grid-template-columns: minmax(0, 1fr);
    padding-top: 0;
  }

  /* On small screens the table of contents becomes a sticky, scrollable bar */
  .toc {
    top: var(--header-height);
    z-index: 10;
    margin-inline: calc(-1 * var(--gutter));
    padding: 0.75rem var(--gutter);
    background: rgb(235 235 235 / 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .toc__title {
    display: none;
  }

  .toc__list {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    border-left: 0;
    scrollbar-width: none;
  }

  .toc__link {
    margin: 0;
    padding: 0.4rem 0.9rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--surface);
    white-space: nowrap;
    font-size: 0.875rem;
  }

  .toc__link--active {
    border-color: var(--pink);
    background: var(--pink-light);
    color: var(--text-strong);
  }

  .case__sections {
    padding-top: 2rem;
  }
}

/* Next project */
.case__next {
  padding-block: 0 var(--section-space);
}

.case__next-inner {
  display: grid;
  gap: var(--section-space);
}

.next-card {
  position: relative;
  display: grid;
  gap: 0.25rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  padding-right: 5rem;
  background: var(--bg-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  text-decoration: none;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.next-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}

.next-card__name {
  font-size: clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem);
  font-weight: 700;
  color: var(--text-strong);
}

.next-card__role {
  color: var(--text);
}

.next-card__arrow {
  position: absolute;
  right: clamp(1.5rem, 4vw, 2.5rem);
  top: 50%;
  width: 2rem;
  height: 2rem;
  color: var(--pink-text);
  transform: translateY(-50%);
  transition: transform 0.25s ease;
}

.next-card:hover .next-card__arrow {
  transform: translate(6px, -50%);
}
</style>
