<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary'
    icon?: string
    type?: 'button' | 'submit'
    disabled?: boolean
  }>(),
  { variant: 'primary', type: 'button' },
)

const isExternal = computed(() => !!props.href && /^https?:/.test(props.href))
</script>

<template>
  <NuxtLink v-if="to" :to="to" class="btn" :class="`btn--${variant}`">
    <slot />
    <Icon v-if="icon" :name="icon" aria-hidden="true" />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    class="btn"
    :class="`btn--${variant}`"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener' : undefined"
  >
    <slot />
    <Icon v-if="icon" :name="icon" aria-hidden="true" />
    <span v-if="isExternal" class="visually-hidden">(opens in a new tab)</span>
  </a>
  <button v-else :type="type" class="btn" :class="`btn--${variant}`" :disabled="disabled">
    <slot />
    <Icon v-if="icon" :name="icon" aria-hidden="true" />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 3rem;
  padding: 0.75rem 1.4rem;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text-strong);
  border: 1.5px solid var(--text-strong);
  border-radius: 0.375rem;
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.btn--primary {
  background: var(--yellow-light);
  box-shadow: 3px 3px 0 var(--text-strong);
}

.btn--primary:hover {
  background: var(--yellow);
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0 var(--text-strong);
}

.btn--primary:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--text-strong);
}

.btn--secondary {
  background: transparent;
}

.btn--secondary:hover {
  background: var(--blue-light);
}

.btn:disabled {
  opacity: 0.6;
  cursor: progress;
}
</style>
