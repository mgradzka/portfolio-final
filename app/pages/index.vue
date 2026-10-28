<script setup lang="ts">
import { caseStudies } from "~/data/cases";
import { competencies, tools } from "~/data/site";

useHead({ title: "Martyna Grądzka · Frontend Developer & UX/UI Designer" });
useSeoMeta({
  description:
    "Portfolio of Martyna Grądzka, a frontend developer and UX/UI designer who builds things for the web. See case studies, skills and tools.",
  ogTitle: "Martyna Grądzka · Frontend Developer & UX/UI Designer",
  ogDescription:
    "I build things for the web and I enjoy it! See my case studies, skills and tools.",
});
</script>

<template>
  <!-- Hero -->
  <section class="hero">
    <div class="hero__inner container">
      <div class="hero__text">
        <p class="hero__hello">Hi! My name is</p>
        <h1 class="hero__name">Martyna Grądzka</h1>
        <p class="hero__tagline">I build things for the web and I enjoy it!</p>

        <ul role="list" class="hero__tags" aria-label="Specialisations">
          <li><AppImage name="frontend1" alt="Frontend" eager /></li>
          <li><AppImage name="uxui1" alt="UX/UI" eager /></li>
        </ul>

        <p class="hero__intro">
          Multimedia design graduate based in Gdańsk. I combine frontend
          development with a designer’s eye for users, so the things I build
          look good and are easy to use.
        </p>

        <div class="button-row">
          <BaseButton to="/case-studies">See case studies</BaseButton>
          <BaseButton to="/contact" variant="secondary"
            >Get in touch</BaseButton
          >
        </div>
      </div>

      <AppImage
        name="portfolio"
        alt="Portrait of Martyna Grądzka on a pink brush-stroke shape"
        class="hero__photo"
        eager
      />
    </div>
  </section>

  <!-- Competencies -->
  <section class="section" aria-labelledby="competencies-title">
    <div class="container">
      <header class="section-header">
        <h2 id="competencies-title" class="section-title">My competencies</h2>
        <p>See how I can contribute to your company</p>
      </header>

      <ul role="list" class="competencies">
        <li
          v-for="item in competencies"
          :key="item.title"
          v-reveal
          class="competency"
        >
          <DecorCircle :color="item.color" :icon="item.icon" size="4rem" />
          <div>
            <h3
              class="competency__title"
              :class="`competency__title--${item.color}`"
            >
              {{ item.title }}
            </h3>
            <p class="competency__description">{{ item.description }}</p>
            <ul role="list" class="competency__points">
              <li v-for="point in item.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- Selected work -->
  <section class="section section--white" aria-labelledby="work-title">
    <div class="container">
      <header class="section-header">
        <h2 id="work-title" class="section-title">Selected work</h2>
        <p>A closer look at how I plan, design and build</p>
      </header>

      <ul role="list" class="work-grid">
        <li v-for="item in caseStudies" :key="item.slug" v-reveal>
          <CaseCard :item="item" compact />
        </li>
      </ul>
    </div>
  </section>

  <!-- Tools -->
  <section class="section" aria-labelledby="tools-title">
    <div class="container">
      <header class="section-header">
        <h2 id="tools-title" class="section-title">Tools</h2>
        <p>… and the technologies I use</p>
      </header>

      <ul role="list" class="tools" v-reveal>
        <li v-for="tool in tools" :key="tool.name" class="tool">
          <Icon :name="tool.icon" class="tool__icon" aria-hidden="true" />
          <span>{{ tool.name }}</span>
        </li>
      </ul>

      <div class="cta home-cta">
        <h2>Let’s get to know each other!</h2>
        <div class="button-row">
          <BaseButton to="/about">Get to know me</BaseButton>
          <BaseButton to="/contact" variant="secondary">Contact me</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero */
.hero {
  background: linear-gradient(var(--bg), var(--surface));
  overflow: hidden;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);
  padding-block: clamp(3rem, 8vw, 6.5rem);
}

.hero__hello {
  font-size: clamp(1.25rem, 1rem + 1vw, 1.75rem);
  font-weight: 600;
  color: var(--text-strong);
}

.hero__name {
  font-size: clamp(2.5rem, 1.6rem + 4.2vw, 4.25rem);
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
}

.hero__tagline {
  font-size: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  font-weight: 600;
  color: var(--text-strong);
}

.hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-block: 1.25rem;
}

.hero__tags img {
  width: clamp(7rem, 5rem + 6vw, 9rem);
}

.hero__intro {
  max-width: 34rem;
  margin-bottom: 2rem;
}

.hero__photo {
  justify-self: center;
  width: min(100%, 26rem);
}

@media (max-width: 47.99rem) {
  .hero__inner {
    grid-template-columns: 1fr;
  }

  .hero__photo {
    order: -1;
    width: min(65%, 15rem);
  }
}

/* Competencies */
.competencies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
  gap: 1.5rem;
}

.competency {
  display: flex;
  gap: 1.5rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background: var(--bg-soft);
  border-radius: var(--radius-lg);
}

.competency__title {
  font-size: clamp(1.5rem, 1.2rem + 1vw, 1.875rem);
  margin-bottom: 0.25rem;
}

.competency__title--pink {
  color: var(--pink-text);
}

.competency__title--blue {
  color: var(--blue-text);
}

.competency__description {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-strong);
  margin-bottom: 1rem;
}

.competency__points {
  display: grid;
  gap: 0.4rem;
}

.competency__points li {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
}

.competency__points li::before {
  content: "";
  flex: none;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--pink);
  transform: translateY(-0.1rem);
}

/* Selected work */
.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 19rem), 1fr));
  gap: 1.5rem;
}

.work-grid > li {
  display: grid;
}

/* Tools */
.tools {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(6.5rem, 1fr));
  gap: 2rem 1rem;
  max-width: 52rem;
  margin-inline: auto;
}

.tool {
  display: grid;
  justify-items: center;
  gap: 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
}

.tool__icon {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--text);
  transition:
    color 0.2s,
    transform 0.2s;
}

.tool:hover .tool__icon {
  color: var(--pink-text);
  transform: translateY(-3px);
}

.home-cta {
  margin-top: var(--section-space);
}
</style>
