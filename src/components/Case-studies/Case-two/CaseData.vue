<template>
        <article class="details">
             <h4>{{ categories[2].headings[0]}}</h4>
          <p>
            {{ categories[2].description.one}}
          </p>
             <h4>{{ categories[2].headings[1]}}</h4>
          <p>
            {{ categories[2].description.two}}
          </p>
          <img :src="`../../assets/${categories[2].images.one}`"  class="development" alt="">
           <p>
            {{ categories[2].description.three}}
          </p>
          <img :src="`../../assets/${categories[2].images.two}`" alt="">
           
             <p>
            {{ categories[2].description.four}}
          </p>
          <img :src="`../../assets/${categories[2].images.three}`"  class="development" alt="">
        
         
           
        </article>
    
        <!-- <h2>bla</h2> -->
</template>

<script>
export default {
    inject: ['categories']
}
</script>