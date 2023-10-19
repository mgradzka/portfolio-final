<template>
        <article class="details">
             <h4>{{ categories[0].headings[0]}}</h4>
          <p>
            {{ categories[0].description.one}}
          </p>
          <img :src="`../../assets/${categories[0].images.one}`"  class="development" alt="">
           <p>
            {{ categories[0].description.two}}
          </p>
           <h4>{{ categories[0].headings[1]}}</h4>
             <p>
            {{ categories[0].description.three}}
          </p>
          <img :src="`../../assets/${categories[0].images.two}`"  class="development" alt="">
           <h4>{{ categories[0].headings[2]}}</h4>
             <p>
            {{ categories[0].description.four}}
          </p>
          <img :src="`../../assets/${categories[0].images.three}`"  class="development" alt="">
         
           
        </article>
     
        <!-- <h2>bla</h2> -->
</template>

<script>
export default {
    inject: ['categories']
}
</script>