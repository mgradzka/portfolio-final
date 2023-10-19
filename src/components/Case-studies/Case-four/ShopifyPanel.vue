<template>
  <article class="details">
    <h4>{{ tabs[0].headings[0] }}</h4>
    <p>
      {{ tabs[0].description.two }}
    </p>
    <img
      :src="`../../assets/${tabs[0].images.one}`"
      class="development"
      alt=""
    />
    <p>
      {{ tabs[0].description.two }}
    </p>
     <img
      :src="`../../assets/${tabs[0].images.two}`"
      class="development"
      alt=""
    />
       <p>
      {{ tabs[0].description.three }}
    </p>
     <img
      :src="`../../assets/${tabs[0].images.three}`"
      class="development"
      alt=""
    />
    <h4>{{ tabs[0].headings[1] }}</h4>
    <p>
      {{ tabs[0].description.four }}
    </p>
    <img
      :src="`/../assets/${tabs[0].images.four}`"
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
