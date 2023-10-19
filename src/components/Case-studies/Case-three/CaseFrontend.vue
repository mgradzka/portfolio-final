<template>
  <article class="details">
    <h4>{{ tabs[3].headings[0] }}</h4>
    <p>
      {{ tabs[3].description.one }}
    </p>
    <img
      :src="`../../assets/${tabs[3].images.one}`"
      class="development"
      alt=""
    />
    <h4>{{ tabs[3].headings[1] }}</h4>
    <p>
      {{ tabs[3].description.two }}
    </p>
    <img
      :src="`../../assets/${tabs[3].images.two}`"
      class="development"
      alt=""
    />
    <h4>{{ tabs[3].headings[2] }}</h4>
    <p>
      {{ tabs[3].description.three }}
    </p>
    <img
      :src="`../../assets/${tabs[3].images.three}`"
      class="development"
      alt=""
    />
  </article>
  <base-heading>Let's work together on a new project!</base-heading>
  <base-container>
    <router-link to="/contact"
      ><base-button>Contact me</base-button></router-link
    >
    <router-link to="/case"><base-button>Other cases</base-button></router-link>
  </base-container>
</template>

<script>
export default {
  inject: ["tabs"],

};
</script>
