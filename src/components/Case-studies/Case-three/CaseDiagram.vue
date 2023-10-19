<template>
        <article class="details">
             <h4>{{tabs[0].headings[0]}}</h4>
          <p>
            {{ tabs[0].description.one}}<br />
            {{ tabs[0].description.two}}
          </p>
          <img :src="`../../assets/${tabs[0].images.one}`"  class="development" alt="">
        </article>
</template>

<script>
export default {
    inject: ['tabs']
}
</script>