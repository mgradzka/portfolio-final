<template>
  <ul class="breadcrumb flex">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/case">Case studies</router-link></li>
    <li><router-link to="/case/case2">Kulia Foodtruck</router-link></li>
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
        {{ aboutCase.overview }}
      </p>

      <base-container id="here">
        <base-button
          ><a
            href="https://kulia-foodtruck.netlify.app/"
            target="_blank"
            class="btn btn--cases uppercase"
            >Demo</a
          ></base-button
        >

        <base-button
          ><a
            href="https://github.com/mgradzka/Kulia-project"
            target="_blank"
            class="btn btn--cases uppercase"
            >Source code</a
          ></base-button
        >
      </base-container>
    </template>
    <template v-slot:img>
      <img
        src="../assets/kulia-mockup1.png"
        class="cases--img"
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
      v-for="category in categories"
      :key="category"
      :title="category.title"
      :class="['tab', { tabActive: selectedTab === category.name }]"
      @click="selectedTab = category.name"
    >
      {{ category.title }}
    </button>
  </div>
  <component :is="selectedTab" @scroll="scrolling"></component>
</template>

<script>
import CaseDescription from "../components/Case-studies/CaseDescription.vue";
import CaseResearch from "../components/Case-studies/Case-two/CaseResearch.vue";
import CasePrototyping from "../components/Case-studies/Case-two/CasePrototyping.vue";
import CaseData from "../components/Case-studies/Case-two/CaseData.vue";
import CaseDevelopment from "../components/Case-studies/Case-two/CaseDevelopment.vue";
export default {
  components: {
    CaseDescription,
    CaseResearch,
    CasePrototyping,
    CaseData,
    CaseDevelopment,
  },
  data() {
    return {
      scrollpx: 0,
      selectedTab: "case-research",
      aboutCase: {
        name: "Kulia Foodtruck",
        role: "Frontend Developer, UI/UX Designer",
        tools: "JavaScript, CSS, HTML",
        overview:
          "A responsive website providing a comprehensive overview of the dishes served at Kulia foodtruck as well as showing it atmosphere and vibe. Wordpress is used there as Headless CMS and data is fetched through API. ",
      },
      categories: [
        {
          name: "case-research",
          title: "User Research",
          headings: ["User categorisation", "Interview guide", "Empathy maps"],
          description: {
            one: "The targeted audience are people living in Northern Jutland, Denmark, but also tourists spending their vacation in this area. Mainly in the age between mid-twenties to mid-forties. The targeted audience falls into specific people categories, such as outgoing people who are curious, who are willing to try something new, who are open to enjoy an alternative experience and the related environment, or simply people who have an interest in fast food due to limited time. Regarding the media usage, the targeted audience has access to smart devices which can navigate through social media and internet in general.",
            two: "Qualitative interviews are conducted to gather people’s opinion about the food trucks and to know their experience with this concept. Also, to gather insights about Argentina and its cuisine. The interview guide consists of two following research questions, based on the client brief and brainstorming: 'Food truck experience' and 'Opinions about Street food and foreign cuisine'",
            three: "Having the interviews ready, each team member make coding and thematizing of the interview to find common patterns.",
            four: "Next step is to create an empathy map, one for each interview. The gathered data is sorted into four categories – what the user says, thinks, does, and feels. They are filled with quotes and concepts that best reflect users’ insights. The data that is most suitable for the project is placed there. That kind of visualization help to analyze the findings.",
          },

          images: {
            one: "case-study2-research1.JPG",
            two: "case-study2-research-thematising.JPG",
            three: "case-study2-research-empathy-map.JPG",
          },
        },
        {
          name: "case-prototyping",
          title: "Prototyping",
          headings: ["Sketches", "Wireframes", "Mockups"],
          description: {
            one: "As the project is created with a mobile-first approach, I will show case designs based on the mobile version.",
            two: "The goal of creating sketches is to give the main impression about what is this website is dealing with, what is their concept, and its message. Introduce the food truck's uniqueness to the potential visitors.",
            three: "Wireframes are created to structure the ideas. The landing page contains the header, menu teaser and event section. This is where design patterns are implemented. For instance, card design pattern is used to show the menu items, hamburger menu is used for the navigation and fat footer design for the footer section. On the menu page, all menu items are shown, as well as ingredients and short description about a specific dish.",
            four: "Based on the wireframes more detailed version prototypes can be produced. All the iterations are preceded by a user feedback, in order to implement their insights. As the colors were already given by the client, the main goal at that stage is to create a clear hierarchy and to visualize the atmosphere of the place.",
            five: "Concerning the home page, the above the fold content should give the user the idea of what the website is about and also reveal some information about the place itself. The palm and food truck svgs give the place has a loose, friendly vibe. To interact with the website, arrow and catchy slogans are added to interest the users.",
            six: "The received feedback suggest that the design is too crowded and overwhelming, therefore in the next iteration we give some whitespace and prolong the introduction - thanks to that, the design looks more clean and the content is more readable. We decide also to limit the number of colors.",
            seven: "The last feedback before the final iteration shows that the colors are not the best match for the website - a dark brown colors reminds more of a coffee shop than food truck. Also, the contrast between the brown header and white section is too much.",
            eight: "In the final version color are more toned down, illustration is simplified and shapes less abstract.",
            nine: "Through the iterations of the menu page, the goal is to display the items in most attractive way and ecourage the customers to try them. To make the design more playful and fun, svg images are created. We have however some problems with diving the items from one another and creating a clear visual hierarchy. Eventually we decide to use a card design pattern and add some background color to every menu item, which makes the information more structured.",
          },

          images: {
            one: "case-study2-sketches.JPG",

            two: "case-study2-wireframes.JPG",

            three: "case-study2-wireframes2.JPG",
            four: "case-study2-mockup1.JPG",
            five: "case-study2-mockup2.JPG.JPG"
          },
        },
        {
          name: "case-data",
          title: "Structured Data",
          headings: [
            "Wordpress and structured data",
            "Events",
            "Connetning with the database",
          ],
          description: {
            one: "Structured data is used in the project to help to dynamically display content on the page, such as menu, opening hours and events. Through this solution, we want to achieve freedom for the client to have control over the content by themselves, and be able to update it when needed. For instance, to add new menu items or upload the events they plan to participate in. All data are fetched through WordPress, where it is structured based on our needs for the website.",
            two: "As the Foodtruck team take part in a lot of events, it is important to notify customers about upcoming events. For this reason, advance custom field is created in Wordpress.",
            three:
              "Group for events consists of six field - image, name of a event, a date, opening time of the food truck, location and description. This group is set for post taxonomy – “kulia-event”. That means whenever the client wants to inform the user about the new event, they need to create a new post and check mark “kulia-event”, then fill out all the needed information.",
            four: "   Advanced custom field groups for the menu items and opening hours are created following this example. Then the data is tested in WordPress.",
          },

          images: {
            one: "case-study2-wordpress1.jpg",

            two: "case-study2-wordpress2.jpg",

            three: "case-study2-wordpress3.jpg",
          },
        },
        {
          name: "case-development",
          title: "Development",
          headings: ["Mobile first approach and responsiveness", "JavaScript and fetching data", "JWT and Session storage"],
          description: {
            one: "The realization starts by creating a mark-up in CSS and HTML. In the early stage, there are three CSS files. General - for similar properties, mobile and desktop. In JavaScript, we create a function responsible for rendering the right CSS file, depending on the actual screen size. This solution has however many flaws and it cannot be the final one. The files are eventually merged, and the code is revisited and simplified. The responsiveness is obtained with a help of media queries and relative units such as view width and view height. Also, with the help of flex and grid.",
            two: "One of the main goals of the project is to display dynamic content on the frontend. To handle this task, multiple JavaScript are created for the designated parts. Main.js file is responsible for covering the overlapping functions and event listeners: creating the navigation, rendering the map, opening hours, and the main function that calls the structured data.",
            three:
              "Index.js file is responsible for the elements on the home page: truck animation and rendering the event cards. From all the events, only the upcoming ones are sorted out And shown on the website in an ascending order.",
              four: "DrawEventsCard function is created, where we are looping through the events and create a markup for each of them. The function takes two parameters - as the first one, we pass only the ascending events, and as the second one, the number of card, which can be one or two, depending how many upcoming events we have.",
              five:" In the menu.js, a function initMenu is created to determine what posts have to be fetched. Then, for different elements of the menu (sandwiches, drinks, others) a designated markup is created."
          },

          images: {
            one: "case-study2-development-map.JPG",

            two: "case-study2-development1.JPG",

            three: "case-study2-development2.JPG",
            four: "case-study2-development3.JPG",
            five: "case-study2-development4.JPG"
          },
        },
      ],
    };
  },
  provide() {
    return {
      categories: this.categories,
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
  justify-content: left;
}


</style>
