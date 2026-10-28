<script setup lang="ts">
import { contact } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <p>© {{ year }} Martyna Grądzka</p>
      <ul role="list" class="footer__links">
        <li><a :href="contact.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a :href="contact.github" target="_blank" rel="noopener">GitHub</a></li>
        <li><a :href="`mailto:${contact.email}`">Mail</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--text);
  color: #fff;
  font-size: 0.8125rem;
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 2rem;
  padding-block: 1.5rem;
}

.footer__links {
  display: flex;
  gap: 2rem;
}

.footer a {
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  text-underline-offset: 0.3em;
}

.footer a:hover {
  text-decoration: underline;
}

.footer :focus-visible {
  outline-color: var(--yellow-light);
}
</style>
