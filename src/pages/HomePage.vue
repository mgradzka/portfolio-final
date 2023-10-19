<template>
  <header>
    <div class="intro-text flex">
      <h1>
        Hi! My name is
        <br />
        <span>{{ this.aboutMe.name }}</span>
      </h1>
      <h4>{{ this.aboutMe.myInterest }}</h4>
      <div class="flex info">
        <img src="../assets/frontend1.png" alt="">
        <img src="../assets/UXUI1.png" alt="">
        <!-- <div v-for="(field, index) in this.fields" :key="index">
          {{ field }}
        </div> -->
      </div>
      <p>
        Multimedia design graduate, based in Gdańsk.<br />I am currently looking
        for an job as a frontend developer.
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65.733"
        height="12.017"
        viewBox="0 0 65.733 12.017"
      >
        <path
          id="Path_87"
          data-name="Path 87"
          d="M-98.207-12808.13l9.188-9.188,9.188,9.188,9.188-9.188,9.188,9.188,9.188-9.188,9.188,9.188,9.188-9.188"
          transform="translate(98.914 12818.732)"
          fill="none"
          stroke="#cf678d"
          stroke-width="2"
        />
      </svg>
    </div>
    <img
      src="@/assets/portfolio.png"
      class="mypicture"
      alt="Martyna Grądzka"
    />
  </header>

  <section class="competencies">
    <h2 class="text-align uppercase">My competencies</h2>
    <h5 class="text-align">See how I can contribute to your company</h5>

    <div class="arrow flex">
      <img src="@/assets/left-arrow.png" alt="development" />
      <img src="@/assets/right-arrow.png" alt="design" />
    </div>

    <div class="competencies-div flex">
      <div>
        <div class="flex">
          <pink-circle></pink-circle>
          <div class="flex comp-div2">
            <h3 class="pink">{{ this.competencies[0].title }}</h3>
            <h4>{{ this.competencies[0].description }}</h4>
            <ul>
              <li>{{ this.competencies[0].point1 }}</li>
              <li>{{ this.competencies[0].point2 }}</li>
              <li>{{ this.competencies[0].point3 }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div class="flex">
          <blue-circle></blue-circle>
          <div class="flex comp-div2">
            <h3 class="blue">{{ this.competencies[1].title }}</h3>
            <h4>{{ this.competencies[1].description }}</h4>
            <ul>
              <li>{{ this.competencies[1].point1 }}</li>
              <li>{{ this.competencies[1].point2 }}</li>
              <li>{{ this.competencies[1].point3 }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <h5 class="text-align">... and what technologies and tools I use</h5>

    <!-- tools -->
    <the-tools></the-tools>
    <base-container>
      <!-- <router-link to="/about">Get to know me</router-link> -->
      <router-link to="/about"
        ><base-button>Get to know me</base-button></router-link
      >
      <router-link to="/case"
        ><base-button>Case studies</base-button></router-link
      >
    </base-container>
  </section>
</template>

<script>
import TheTools from "../components/Home/TheTools.vue";
export default {
  components: {
    TheTools,
  },
  data() {
    return {
      aboutMe: {
        name: "Martyna Grądzka",
        myInterest: "I build things for the web and I enjoy it!",
      },
      fields: ["Frontend", "UI/UX"],
      competencies: [
        {
          title: "Development",
          description: "Building websites and applications",
          point1: "• modern frontend technologies",
          point2: "• fixing errors",
          point3: "• high quality code",
        },
        {
          title: "Research & Design",
          description: "Getting to know your users",
          point1: "• research & data gathering",
          point2: "• information architecture",
          point3: "• high fidelity mockups",
        },
      ],
    };
  },

};
</script>

<style scoped>
h1,
.mypicture {
  padding-top: 6rem;
}

main {
  /* background-color: var(--secondbackground); */
  padding-bottom: 10rem;
  flex: 1;
}

.competencies h2 {
  grid-area: 1/2;
}

.competencies h5 {
  grid-area: 1/2;
  align-self: center;
  margin-bottom: 3rem;
}

.arrow {
  gap: 30rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.competencies-div {
  justify-content: space-around;
  margin-bottom: 10rem;
}

.competencies-div h4 {
  margin-bottom: 1rem;
}

.comp-div2 {
  flex-direction: column;
  padding-left: 1rem;
  gap: 0.5rem;
}

.comp-div2 li {
  margin-bottom: 1rem;
  justify-self: end;
}

.pink {
  color: var(--pinkdark);
}

.blue {
  color: var(--bluedark);
}

section,
article {
  padding: 10rem 20rem 0;
}

.hidden {
  display: none;
}
.competencies div:last-child {
  justify-content: center;
}

@media (max-width: 1500px) {
  .mypicture {
    width: 75%;
  }
}

@media (max-width: 1200px) {
  .mypicture {
    width: 60%;
  }

  header {
    padding: 10rem;
  }
}

@media (max-width: 944px) {
  .mypicture {
    width: 80%;
  }

  .competencies h3 {
    font-size: 2.4rem;
  }
}

@media (max-width: 544px) {
  header {
    grid-template-areas:
      "img ."
      "intro-text .";
    row-gap: 5rem;
    padding: 10rem 5rem;
  }

  .competencies-div {
    flex-direction: column;
  }
  section {
    padding: 5rem;
  }

  h1 {
    padding-top: 0;
  }

  h1 span {
    font-size: 4rem;
  }

  .arrow {
    display: none;
  }

  .competencies svg {
    max-width: 6rem;
  }

  .competencies-div div div:last-child {
    justify-content: start;
  }

  .competencies-div > div > div {
    gap: 2.4rem;
  }

  .competencies-div h4 {
    font-size: 1.8rem;
  }

  .competencies h5 {
    padding-bottom: 3rem;
  }
  .competencies-div {
    gap: 3rem;
    margin-bottom: 5rem;
  }
}
</style>
