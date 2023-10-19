<template>
  <section class="case-study flex">
    <div class="case-study--container flex">
      <slot name="info"></slot>
      <div class="btn--container flex" id="here">
        <slot></slot>
      </div>
    </div>
    <slot name="img"></slot>
  </section>
</template>

<style scoped>
.case-study--container {
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.cases {
  justify-content: center;
  gap: 10rem;
  padding-bottom: 0;
}

.case-study {
  flex-direction: row;
  padding: 10rem 20rem;
  gap: 10rem;
}

.case-study a,
.case-study img {
  margin-bottom: 10rem;
}
.case-study--container {
  flex-direction: column;
}

@media (max-width: 1200px) {
  .case-study {
    flex-direction: column-reverse;
    padding: 10rem 20rem;
  }
  .case-study img {
    max-width: 25rem;
  }
}

@media (max-width: 944px) {
  .case-study {
    flex-direction: column-reverse;
    padding: 5rem;
  }
}
@media (max-width: 544px) {
  .case-study {
    padding: 5rem;
  }
}
</style>
