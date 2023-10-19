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
            href="https://github.com/mgradzka/Task-Portal-frontend"
            target="_blank"
            class="btn btn--cases uppercase"
            >Frontend code</a
          ></base-button
        >

        <base-button
          ><a
            href="https://github.com/mgradzka/Task-Portal-backend"
            target="_blank"
            class="btn btn--cases uppercase"
            >Backend code</a
          ></base-button
        >
      </base-container>
    </template>
    <template v-slot:img>
      <img
        src="../assets/taskportal.png"
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
      v-for="tab in tabs"
      :key="tab"
      :title="tab.title"
      :class="['tab', { tabActive: selectedTab === tab.name }]"
      @click="selectedTab = tab.name"
    >
      {{ tab.title }}
    </button>
  </div>

  <component :is="selectedTab" @scroll="scrolling"></component>
</template>

<script>
import CaseDescription from "../components/Case-studies/CaseDescription.vue";
import CaseDatabase from "../components/Case-studies/Case-three/CaseDatabase.vue";
import CaseDiagram from "../components/Case-studies/Case-three/CaseDiagram.vue";
import CaseBackend from "../components/Case-studies/Case-three/CaseBackend.vue";
import CaseFrontend from "../components/Case-studies/Case-three/CaseFrontend.vue";

export default {
  components: {
    CaseDescription,
    CaseDatabase,
    CaseDiagram,
    CaseFrontend,
    CaseBackend,
  },
  provide() {
    return {
      tabs: this.tabs,
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
      selectedTab: "case-diagram",
      // tabs: ["caseone-diagram", "caseone-database"],
      tabs: [
        {
          name: "case-diagram",
          title: "ER Diagram",
          headings: ["Entity Relationship Diagram"],
          description: {
            one: "The first step in the project is to create a Entity Relationship Diagram, which is necessary for creating a SQL database later. The goal is to define the entities and relationships between them.Creating the ER Diagram is an iterative process - it is changed couple of times during the development process and adjusted to our needs.",
            two: "Our design choice is that there is no account without a profile. It means that when account is created, a profile is automatically created as well. Every  account has a role, admin or member, while member is a default one. An account can post a task, which has to be assigned to a category - indoor or outdoor. A single task has also a status, in order to inform others if it is still available or expired. As an extra feature, every account can apply for a any task, unless it's not their own.",
          },

          images: { one: "erd.png" },
        },
        {
          name: "case-database",
          title: "Database",
          headings: ["SQL Database"],
          description: {
            one: "Based on the ER Diagram, a sql script is created. Here we write table definitions for all the existing entities. Each table has its own primary key, except for application table, which is treated more like a lookup table between the account and task. Each column has defined its own data type. SQL constraints are used to link tables through foreign keys.",
            two: "When tables are defined, the next step is to populate the test data and to verify the database.",
          },

          images: {
            one: "case-study1-sql.JPG",

            two: "case-study1-sql2.JPG",

            three: "case-study1-sql3.JPG",
          },
        },
        {
          name: "case-backend",
          title: "Backend",
          headings: [
            "Structure",
            "Authorisation and authentication",
            "Connetning with the database",
          ],
          description: {
            one: "The backend solution is written in Node.js - JavaScript runtime environment, with usage of Express framework to enable i.a. routing. In the project we use RESTful architecture pattern. To interact with database application, we work with CRUD operations - CREATE, READ, UPDATE and DELETE and their equivalent HTTP methods. Endpoints have to be defined in order to transfer the data between client and server.",
            two: "To access most of the functions on the portal, a user needs to be logged in. In order to authenticate them, we have to verify JSON Web Token. In order to do that, authenticate.js file is created and set in the request pipeline.",
            three:
              "An admin can perform some actions that a normal user cannot do. In order to authorise if a user has permission to do so, middlewares admin.js and checkauthorisation.js are put in use and set in request pipeline as well.",
            four: "In the project, we work with classes, promises and asynchronous programming. To connect with the database, we create methods where we query the required data and validate the result.",
          },

          images: {
            one: "case-study1-backend1.JPG",

            two: "case-study1-backend2.JPG",

            three: "case-study1-backend3.JPG",
            four: "case-study1-backend5.JPG",
            five: "case-study1-backend4.JPG",
          },
        },
        {
          name: "case-frontend",
          title: "Frontend",
          headings: ["URL", "Fetching the data", "JWT and Session storage"],
          description: {
            one: "Our idea to render the content on the page is to check whether a certain word is included in the URL. Based on this, the right functions are called and new content is shown on the page.",
            two: "We use Fetch API to access the data. A markup for the data is created and iserted into HTML.",
            three:
              "To access certain elements on the application, for example, where a user sees his own tasks, we check with a help of JSON Web Token if he is logged in. The request is sent with the token in a header, and then, in the backend, middleware checks the token.<br> The token is kept in the session storage, which means that when a user ends a page session, he has to authenticate again in order to log in.",
          },

          images: {
            one: "case-study1-frontend.JPG",

            two: "case-study1-backend7.JPG",

            three: "case-study1-backend6.JPG",
          },
        },
      ],
      aboutCase: {
        name: "Task Portal",
        role: "Full Stack Developer",
        tools: "JavaScript, Node.js, Express, MSSQL, CSS, HTML",
        description:
          "A task portal for a community to find people who can help to do little chores and errands. It is a web application with is own database and three different types of users. There are additional functions behind authorisation, such as adding and deleting tasks, as well as applying for a job.",
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
  justify-content: left;
}
</style>
