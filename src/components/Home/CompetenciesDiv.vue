<template>
  <div class="competencies-div flex">
    <div>
      <div class="flex">
        <div class="flex">
          <h3 class="blue">{{ name }}</h3>
          <h4>{{ description }}</h4>
          <ul>
            <li>{{ one }}</li>
            <li>{{ two }}</li>
            <li>{{ three }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
div {
  /* flex-direction: column; */
  padding-left: 1rem;
  gap: 0.5rem;
}

div li {
  margin-bottom: 1rem;
  justify-self: end;
}

@media (max-width: 544px){

}
</style>
