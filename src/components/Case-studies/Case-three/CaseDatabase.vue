<template>
  <article class="details">
    <h4>{{ tabs[1].headings[0] }}</h4>
    <p>{{ tabs[1].description.one }}<br /></p>
    <img
      :src="`../../assets/${tabs[1].images.one}`"
      class="development"
      alt=""
    />
    <p>
      {{ tabs[1].description.two }}
    </p>
     <img
      :src="`../../assets/${tabs[1].images.two}`"
      class="development"
      alt=""
    />
     <img
      :src="`../../assets/${tabs[1].images.three}`"
      class="development"
      alt=""
    />
  </article>
</template>

<script>
export default {
  inject: ["tabs"],
};
</script>
