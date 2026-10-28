<script setup lang="ts">
const visible = ref(false)

const onScroll = () => (visible.value = window.scrollY > 800)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

const scrollToTop = () => {
  window.scrollTo({ top: 0 })
  document.getElementById('main')?.focus({ preventScroll: true })
}
</script>

<template>
  <Transition name="fade">
    <button v-if="visible" type="button" class="to-top" @click="scrollToTop">
      <Icon name="ph:arrow-up" size="1.5rem" aria-hidden="true" />
      <span class="visually-hidden">Back to top</span>
    </button>
  </Transition>
</template>

<style scoped>
.to-top {
  position: fixed;
  right: clamp(1rem, 3vw, 2.5rem);
  bottom: clamp(1rem, 3vw, 2.5rem);
  z-index: 90;
  display: grid;
  place-items: center;
  width: 3.25rem;
  height: 3.25rem;
  border: 1.5px solid var(--text-strong);
  border-radius: 50%;
  background: var(--surface);
  color: var(--pink-text);
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.to-top:hover {
  transform: translateY(-3px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
