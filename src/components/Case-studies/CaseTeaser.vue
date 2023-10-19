<template>
  <article class="cases flex">
    <div class="competencies-div flex">
      <div>
        <div class="flex">
          <pink-circle></pink-circle>
          <div class="flex comp-div2">
            <h2 class="pink">{{ name }}</h2>
            <h4>Role</h4>
            <p>{{ role }}</p>
            <h4>Tools and technologies</h4>
            <p>{{ tools }}</p>
            <img
              class="hidden cases--img1"
              :src="`@/../assets/${image}`"
              alt="case study Martyna Grądzka"
            />
            <base-button
              ><router-link :to="'/case/' + this.id"
                >Learn more</router-link
              ></base-button
            >
          </div>
        </div>
      </div>

      <!-- <a href="case1.html" class="btn uppercase">Learn more</a> -->
    </div>
    <div class="flex img-container">
      <img
        :src="`@/../assets/${image}`"
        class="cases--img1"
        alt="case study Martyna Grądzka"
      />
    </div>
  </article>
</template>

<script>
export default {
  props: ["name", "role", "image", "tools", "id"],
};
</script>

<style scoped>
h3 {
  padding-top: 10rem;
}

article div {
  align-self: end;
}

.hidden {
  display: none;
}

button a {
  font-size: 1.4rem
}

/* img {
  max-height: 30rem;
} */

.cases-container,
.case-study--container {
  flex-direction: column;
  gap: 1rem;
  align-content: center;
}
/* .cases-container h4:first-of-type {
  display: none;
} */

article {
  background-color: rgb(247, 247, 247);
  padding: 10rem 5rem;
  margin: 5rem;
  /* width: fit-content; */
  /* max-width: 60%; */
  /* align-content: center; */
  justify-content: center;
  gap: 5rem;
}
.cases--img {
  justify-self: right;
 
}

.cases h2,
.cases p,
.case-study p {
  margin-bottom: 3rem;
}

.competencies-div {
  justify-content: space-around;
}

.competencies-div h4 {
  margin-bottom: 1rem;
}

.comp-div2 {
  flex-direction: column;
  padding-left: 3rem;
  justify-content: left;
  gap: 0.5rem;
}

article:first-child {
  margin-top: 15rem;
}

@media (max-width: 544px) {
  article {
    padding: 5rem;
  }
  .img-container {
    display: none;
  }

  .cases-container {
    padding: 5rem;
  }

  .hidden {
    display: block;
  }

  img-container,
  svg {
    display: none;
  }

  .cases > div {
    flex-direction: column;
  }

  .comp-div2 {
    padding-left: 0;
  }
  .comp-div2 h4 {
    display: none;
  }

  .comp-div2 p:nth-child(5) {
    display: none;
  }

  /* h2,
  p {
    text-align: center;
  } */

  .cases--img {
    width: 30rem;
  }

  a {
    font-size: 1.8rem;
  }

  button {
    margin-top: 3rem;
  }

  .competencies-div div div {
    align-items: center;
  }
}
</style>
