<script setup lang="ts">
withDefaults(defineProps<{ color?: 'pink' | 'blue'; icon?: string; size?: string }>(), {
  color: 'pink',
  size: '3.5rem',
})
</script>

<!-- The filled circle with an offset outline, a signature element of the original design -->
<template>
  <span class="circle" :class="`circle--${color}`" :style="{ '--size': size }" aria-hidden="true">
    <Icon v-if="icon" :name="icon" class="circle__icon" />
  </span>
</template>

<style scoped>
.circle {
  position: relative;
  flex: none;
  display: grid;
  place-items: center;
  width: var(--size);
  height: var(--size);
  isolation: isolate;
}

.circle::before,
.circle::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  z-index: -1;
}

.circle::before {
  inset: 12% -4% -4% 12%;
  background: var(--fill);
}

.circle::after {
  inset: 0 8% 8% 0;
  border: 1.5px solid var(--text-strong);
}

.circle--pink {
  --fill: var(--pink-light);
}

.circle--blue {
  --fill: var(--blue-light);
}

.circle__icon {
  width: 45%;
  height: 45%;
  color: var(--text-strong);
  transform: translate(4%, 4%);
}
</style>
