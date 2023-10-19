<template>
 <ul class="breadcrumb flex">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/case">Case studies</router-link></li>
      <li><router-link to="/case/case1">Task portal</router-link></li>
    </ul>
  <case-description>
    <template v-slot:info>
      <h2>{{ aboutCase.name }}</h2>
      <h4>Role</h4>
      <p>{{ aboutCase.role }}</p>

      <h4>Tools and technologies</h4>
      <p>{{ aboutCase.tools }}</p>

      <h4>Overview</h4>
      <p>
        {{ aboutCase.description }}
      </p>

      <base-container id="here">
        <base-button
          ><a
            href="https://botanical-app.netlify.app/"
            target="_blank"
            class="btn btn--cases uppercase"
            >Demo</a
          ></base-button
        >

        <base-button
          ><a
            href="https://github.com/mgradzka/Botanical-app"
            target="_blank"
            class="btn btn--cases uppercase"
            >Source code</a
          ></base-button
        >
      </base-container>
    </template>
    <template v-slot:img>
      <img
        src="../assets/botanical-mockup1.png"
        class="cases--img"
         loading='lazy'
        alt="case study Martyna Grądzka"
      />
    </template>
  </case-description>

  <div v-if="scrollpx > 600" class="circle-scroll" @click="topFunction">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="50"
      viewBox="0 0 17.119 29.65"
    >
      <g
        id="Group_157"
        data-name="Group 157"
        transform="translate(-1494.293 -1626.293)"
      >
        <g
          id="Group_156"
          data-name="Group 156"
          transform="translate(1195.917 1333.375)"
        >
          <line
            id="Line_99"
            data-name="Line 99"
            y2="28.524"
            transform="translate(306.913 294.043)"
            fill="none"
            stroke="#cf678d"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            id="Line_100"
            data-name="Line 100"
            x2="8.176"
            y2="8.176"
            transform="translate(306.611 293.625)"
            fill="none"
            stroke="#cf678d"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            id="Line_101"
            data-name="Line 101"
            x1="8.176"
            y2="8.176"
            transform="translate(299.083 293.625)"
            fill="none"
            stroke="#cf678d"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </g>
      </g>
    </svg>
  </div>

  <div class="tab-container flex">
    <button
      v-for="cat in category"
      :key="cat"
      :title="cat.title"
      :class="['tab', { tabActive: selectedTab === cat.name }]"
      @click="selectedTab = cat.name"
    >
      {{ cat.title }}
    </button>
    <!-- <button
      @click="setSelectedTab('caseone-diagram')"
      :class="tabSelected"
      class="uppercase tab"
      data-tab="1"
    >
      ER Diagram
    </button>
    <button
      @click="setSelectedTab('caseone-database')"
      class="uppercase tab"
      :class="tabSelected"
      data-tab="2"
    >
      Database
    </button>
    <button class="uppercase tab" data-tab="3">Backend</button>
    <button class="uppercase tab" data-tab="4">Frontend</button> -->
  </div>
  <!-- <caseone-diagram v-if="selectedTab === 'caseone-diagram'"></caseone-diagram>
  <caseone-database
    v-if="selectedTab === 'caseone-database'"
  ></caseone-database> -->
  <component :is="selectedTab" @scroll="scrolling"></component>
</template>

<script>
import CaseDescription from "../components/Case-studies/CaseDescription.vue";
import CaseStructure from "../components/Case-studies/Case-one/CaseStructure.vue";

export default {
  components: {
    CaseDescription,
    CaseStructure
  },
  provide() {
    return {
      category: this.category,
    };
  },
  methods: {
    scrolling() {},

    topFunction() {
      const target = document.querySelector("#here");
      target.scrollIntoView(true);
    },

    handleScroll() {
      this.scrollpx = window.scrollY;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      scrollpx: 0,
      selectedTab: "case-structure",
      // tabs: ["caseone-diagram", "caseone-database"],
      category: [
        {
          name: "case-structure",
          title: "Visuals",
          headings: ["Screenshots from the project"],
      


          images: { one: "botanical1.jpg", two: "botanical2.jpg", three: "botanical3.jpg", four: "botanical4.jpg", five: "botanical5.jpg"},
        },
        
   
      ],
      aboutCase: {
        name: "Plant App",
        role: "Frontend Developer",
        tools: "React, Firebase, Styled Components, Bootstrap",
        description:
          "A project created to practice working with React hooks. This is an ordering app where a user can choose which plants should be delivered to his home.",
        
      },
    };
  },
  // methods: {
  //   setSelectedTab(tab) {
  //     this.selectedTab = tab;
  //   },
  // },
  computed: {
    tabSelected() {
      return { tabActive: this.selectedTab };
    },
    // beVisible() {
    //   if (
    //     document.body.scrollTop > 700 ||
    //     document.documentElement.scrollTop > 700
    //   ) {
    //     return tabActive: selectedTab === tab.name
    //   } else {
    //     return (btnUp.style.display = "none");
    //   }
    // },
  },
};
</script>

<style scoped>
button {
  background-color: var(--bluedark);
}

button:hover {
  background-color: rgb(37, 115, 160);
}

.btn--cases {
  color: white;
}

p,
h2 {
  margin-bottom: 3rem;
}

div {
  justify-content: left
}
</style>
