<template>
  <article class="details">
    <h4>{{ tabs[2].headings[0] }}</h4>
    <p>
      {{ tabs[2].description.one }}
    </p>
    <img
      :src="`../../assets/${tabs[2].images.one}`"
      class="development"
      alt=""
    />
        <h4>{{ tabs[2].headings[1] }}</h4>
    <p>
      {{ tabs[2].description.two }}
    </p>
     <img
      :src="`../../assets/${tabs[2].images.two}`"
      class="development"
      alt=""
    />
         <img
      :src="`../../assets/${tabs[2].images.three}`"
      class="development"
      alt=""
    />
        <h4>{{ tabs[2].headings[2] }}</h4>
       <p>
      {{ tabs[2].description.three }}
    </p>
     <img
      :src="`../../assets/${tabs[2].images.four}`"
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
