<script setup lang="ts">
import sizes from '~/data/image-sizes.json'

const props = withDefaults(defineProps<{ name: string; alt: string; eager?: boolean }>(), {
  eager: false,
})

// Width and height come from scripts/optimize-images.mjs, so the browser can reserve space (no layout shift)
const size = computed(() => (sizes as Record<string, [number, number]>)[props.name])
</script>

<template>
  <img
    :src="`/images/${name}.webp`"
    :alt="alt"
    :width="size?.[0]"
    :height="size?.[1]"
    :loading="eager ? 'eager' : 'lazy'"
    :fetchpriority="eager ? 'high' : undefined"
    decoding="async"
  />
</template>
