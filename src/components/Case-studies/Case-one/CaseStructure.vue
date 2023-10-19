<template>
  <article class="details">
    <h4>{{ category[0].headings[0] }}</h4>

    <img
      :src="`../../assets/${category[0].images.one}`"
      class="development"
      alt=""
    />
    <img
      :src="`../../assets/${category[0].images.two}`"
      class="development"
      alt=""
    />
    <img
      :src="`../../assets/${category[0].images.three}`"
      class="development"
      alt=""
    />
    <img
      :src="`../../assets/${category[0].images.four}`"
      class="development"
      alt=""
    />
    <img
      :src="`../../assets/${category[0].images.five}`"
      class="development"
      alt=""
    />
 
      <base-heading>Let's work together on a new project!</base-heading>
  <base-container>
    <router-link to="/contact"
      ><base-button>Contact me</base-button></router-link
    >
    <router-link to="/case"><base-button>Other cases</base-button></router-link>
  </base-container>

  </article>
</template>

<script>
export default {
  inject: ["category"],
};
</script>
