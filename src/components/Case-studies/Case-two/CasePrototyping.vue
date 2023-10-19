<template>
  <article class="details">
    <p>
      {{ categories[1].description.one }}
    </p>
    <h4>{{ categories[1].headings[0] }}</h4>
    <p>
      {{ categories[1].description.two }}
    </p>
    <img
      :src="`../../assets/${categories[1].images.one}`"
      class="development"
      alt=""
    />
    <h4>{{ categories[1].headings[1] }}</h4>
    <p>
      {{ categories[1].description.three }}
    </p>
    <img
      :src="`../../assets/${categories[1].images.two}`"
      class="development"
      alt=""
    />
    <img
      :src="`../../assets/${categories[1].images.three}`"
      class="development"
      alt=""
    />
    <h4>{{ categories[1].headings[2] }}</h4>
    <p>
      {{ categories[1].description.four }}<br /><br />

      {{ categories[1].description.five }} <br /><br />
      {{ categories[1].description.six }} <br /><br />
      {{ categories[1].description.seven }} <br /><br />
      {{ categories[1].description.eight }}
    </p>
    <img
      :src="`../../assets/${categories[1].images.four}`"
      class="development"
      alt=""
    />
    <p>{{ categories[1].description.nine }}</p>
  </article>

  <!-- <h2>bla</h2> -->
</template>

<script>
export default {
  inject: ["categories"],
};
</script>
