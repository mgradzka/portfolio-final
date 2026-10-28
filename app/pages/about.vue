<script setup lang="ts">
useHead({ title: 'About' })
useSeoMeta({
  description:
    'Get to know Martyna Grądzka: a multimedia design graduate who fell in love with coding, and who loves travelling and ski jumping.',
})
</script>

<template>
  <div class="about container">
    <header class="about__header">
      <p class="eyebrow">About</p>
      <h1>Nice to meet you!</h1>
    </header>

    <section class="about__block" aria-labelledby="background-title" v-reveal>
      <div class="about__heading">
        <DecorCircle color="pink" size="3.5rem" />
        <div>
          <h2 id="background-title">Background</h2>
          <p class="about__subtitle">Something about myself</p>
        </div>
      </div>
      <div class="prose">
        <p>
          Hi! My name is Martyna and <strong>I have been working as a frontend developer for the last three
          years</strong>. Most of my time goes into building websites and web applications, and from time to time I
          also help out with UX/UI design.
        </p>
        <p>
          I like working where design meets code: turning a design into an interface that looks good, works well
          and is easy to use. Thanks to my design background, I also notice the details that make a product feel
          right for the people using it.
        </p>
        <p>
          My adventure with programming started when I studied Multimedia Design at UCN in Aalborg. I chose it
          because of design, but quickly became fascinated with coding. During my studies I also completed a
          six-month internship as a frontend developer, working mainly with React.
        </p>
      </div>
    </section>

    <section class="about__block" aria-labelledby="passion-title" v-reveal>
      <div class="about__heading">
        <DecorCircle color="blue" size="3.5rem" />
        <div>
          <h2 id="passion-title">Passion</h2>
          <p class="about__subtitle">Because what is life without it? ;)</p>
        </div>
      </div>
      <div class="prose">
        <p>
          My biggest passion in life is travelling. I love how free you can feel when you travel and how it shapes
          your personality. My favourite kind of trip is being close to nature, especially in the mountains, without
          any special plan, just following the adventure.
        </p>
        <p>
          I also love ski jumping! I am happiest on a ski jumping hill, supporting my favourite athletes and having
          fun with my friends. Because that’s what ski jumping is all about: being part of the community and enjoying
          the sport.
        </p>
      </div>
    </section>

    <div class="about__photos" v-reveal>
      <figure>
        <AppImage name="about1" alt="Martyna holding a Norwegian flag in front of a ski jumping hill" />
        <figcaption>Cheering at a ski jumping competition</figcaption>
      </figure>
      <figure>
        <AppImage name="about2" alt="Martyna looking at snowy mountain peaks over a green valley" />
        <figcaption>Somewhere in the mountains</figcaption>
      </figure>
    </div>

    <div class="cta about__cta">
      <h2>Now you know me better, right? :)</h2>
      <div class="button-row">
        <BaseButton to="/case-studies">Case studies</BaseButton>
        <BaseButton to="/contact" variant="secondary">Contact me</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding-block: clamp(3rem, 8vw, 6rem) var(--section-space);
}

.about__header {
  margin-bottom: clamp(2.5rem, 6vw, 4rem);
}

.about__header h1 {
  font-size: clamp(2.25rem, 1.6rem + 3vw, 3.5rem);
  margin-top: 0.5rem;
}

.about__block + .about__block {
  margin-top: clamp(3rem, 7vw, 5rem);
}

.about__heading {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.about__heading h2 {
  font-size: clamp(1.75rem, 1.4rem + 1.4vw, 2.25rem);
}

.about__subtitle {
  font-weight: 600;
  font-size: 1.0625rem;
  color: var(--text-strong);
}

.about .prose {
  font-size: 1.0625rem;
}

.about strong {
  color: var(--text-strong);
}

.about__photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: 1.5rem;
  max-width: 44rem;
  margin-top: clamp(3rem, 7vw, 5rem);
}

.about__photos img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}

.about__photos figcaption {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.about__cta {
  margin-top: var(--section-space);
}
</style>
