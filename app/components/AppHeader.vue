<script setup lang="ts">
import { navigation } from '~/data/site'

const route = useRoute()
const menuOpen = ref(false)

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

watch(
  () => route.fullPath,
  () => (menuOpen.value = false),
)

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') menuOpen.value = false
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="header" :class="{ 'header--open': menuOpen }">
    <div class="header__inner container">
      <NuxtLink to="/" class="logo" aria-label="Martyna Grądzka, home">
        <span class="logo__mark" aria-hidden="true">MG</span>
        <span class="logo__name">Martyna Grądzka</span>
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="site-nav"
        @click="menuOpen = !menuOpen"
      >
        <Icon :name="menuOpen ? 'ph:x' : 'ph:list'" size="1.75rem" />
        <span class="visually-hidden">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
      </button>

      <nav id="site-nav" class="nav" aria-label="Main">
        <ul role="list" class="nav__list">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="nav__link"
              :class="{ 'nav__link--active': isActive(item.to) }"
              :aria-current="isActive(item.to) ? 'page' : undefined"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgb(235 235 235 / 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgb(210 213 216 / 0.6);
}

.header__inner {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  font-weight: 700;
  color: var(--text-strong);
}

.logo__mark {
  position: relative;
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  isolation: isolate;
}

/* The filled + outlined circle motif from the original design */
.logo__mark::before,
.logo__mark::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  z-index: -1;
}

.logo__mark::before {
  inset: 0.25rem -0.15rem -0.15rem 0.25rem;
  background: var(--pink-light);
}

.logo__mark::after {
  inset: 0;
  border: 1.5px solid var(--text-strong);
}

.nav__list {
  display: flex;
  gap: clamp(1.5rem, 4vw, 3.5rem);
}

.nav__link {
  position: relative;
  display: inline-block;
  padding-block: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text);
  transition: color 0.2s;
}

.nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.15rem;
  height: 2px;
  background: var(--pink);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.nav__link:hover,
.nav__link--active {
  color: var(--text-strong);
}

.nav__link:hover::after,
.nav__link--active::after {
  transform: scaleX(1);
}

.menu-toggle {
  display: none;
  padding: 0.5rem;
  margin-right: -0.5rem;
  background: none;
  border: 0;
  border-radius: var(--radius);
  color: var(--text-strong);
  cursor: pointer;
}

@media (max-width: 47.99rem) {
  .logo__name {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: calc(100dvh - var(--header-height));
    background: var(--bg);
    visibility: hidden;
    opacity: 0;
    transform: translateY(-0.5rem);
    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      visibility 0.25s;
  }

  .header--open .nav {
    visibility: visible;
    opacity: 1;
    transform: none;
  }

  .nav__list {
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem var(--gutter);
  }

  .nav__link {
    font-size: 1.375rem;
  }
}
</style>
