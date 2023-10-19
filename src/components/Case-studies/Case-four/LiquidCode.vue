<template>
  <article class="details">
    <h4>{{ tabs[1].headings[0] }}</h4>
    <p>
      {{ tabs[1].description.one }}
    </p>
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
       <p>
      {{ tabs[1].description.three }}
    </p>
     <img
      :src="`../../assets/${tabs[1].images.three}`"
      class="development"
      alt=""
    />
    <h4>{{ tabs[1].headings[1] }}</h4>
    <p>
      {{ tabs[1].description.four }}
    </p>
    <img
      :src="`/../assets/${tabs[1].images.four}`"
      class="development"
      alt=""
    />
     <p>
      {{ tabs[1].description.five }}
    </p>
    <img
      :src="`/../assets/${tabs[1].images.five}`"
      class="development"
      alt=""
    />
      <img
      :src="`/../assets/${tabs[1].images.six}`"
      class="development"
      alt=""
    />
        <p>
      {{ tabs[1].description.six }}
    </p>
    <img
      :src="`/../assets/${tabs[1].images.seven}`"
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
