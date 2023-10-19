<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  text-transform: uppercase;
  font-family: inherit;
  background-color: #ffea98;
  /* background-color: var(--yellow); */
  
  color: var(--greyfont);
  padding: 1rem 1.2rem;
  width: fit-content;
  font-weight: 600;
  text-align: center;
  border: 1px solid var(--greyfont);
  transition: 0.4s ease-in;
}

button:hover {
 background-color: var(--yellow);
  color: var(--greyfont);
  transition: 0.6s ease-in;
  -webkit-transition: 0.6s;
  -moz-transition: 0.6s;
  -ms-transition: 0.6s;
  -o-transition: 0.6s;
}
</style>
