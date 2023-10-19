<template>
  <article class="details">
    <h4>{{ categories[3].headings[0] }}</h4>
    <p>
      {{ categories[3].description.one }}
    </p>
    <h4>{{ categories[3].headings[1] }}</h4>
    <p>
      {{ categories[3].description.two }}
    </p>
    <img
      :src="`../../assets/${categories[3].images.one}`"
      class="development"
      alt=""
    />
    <img
      :src="`../../assets/${categories[3].images.two}`"
      class="development"
      alt=""
    />
    <p>
      {{ categories[3].description.three }}
    </p>
    <img
      :src="`../../assets/${categories[3].images.three}`"
      class="development"
      alt=""
    />

    <p>
      {{ categories[3].description.four }}
    </p>
    <img
      :src="`../../assets/${categories[3].images.four}`"
      class="development"
      alt=""
    />
    <p>
      {{ categories[3].description.five }}
    </p>
    <img
      :src="`../../assets/${categories[3].images.five}`"
      class="development"
      alt=""
    />
  </article>
  <base-heading>Let's work together on a new project!</base-heading>
  <base-container>
    <base-button
      ><router-link to="/contact">Contact me</router-link></base-button
    >
    <base-button><router-link to="/case">Other cases</router-link></base-button>
  </base-container>
  <!-- <h2>bla</h2> -->
</template>

<script>
export default {
  inject: ["categories"],
};
</script>
