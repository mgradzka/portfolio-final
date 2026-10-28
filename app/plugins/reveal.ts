// v-reveal: fades an element in when it scrolls into view.
// Elements that are already on screen, and users who prefer reduced motion, get no animation.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement>('reveal', {
    getSSRProps: () => ({}),
    mounted(el) {
      if (
        !('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        el.getBoundingClientRect().top < window.innerHeight
      ) {
        return
      }
      el.classList.add('reveal')
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            el.classList.add('reveal--in')
            observer.disconnect()
          }
        },
        { rootMargin: '0px 0px -10% 0px' },
      )
      observer.observe(el)
    },
  })
})
