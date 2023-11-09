import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
import CaseStudies from "./pages/CaseStudies.vue";
import ContactMe from "./pages/ContactMe.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import PinkCircle from "./components/UI/PinkCircle.vue";
import BlueCircle from "./components/UI/BlueCircle.vue";
import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseHeading from "./components/UI/BaseHeading.vue";
import NotFound from "./components/UI/NotFound.vue";

import CaseThree from "./pages/CaseThree.vue";
import CaseTwo from "./pages/CaseTwo.vue";
import CaseOne from "./pages/CaseOne.vue";
import CaseFour from "./pages/CaseFour.vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/about", component: AboutMe },
    { path: "/case", component: CaseStudies },
    { path: "/contact", component: ContactMe },
    { name: "case1", path: "/case/case1", component: CaseOne },
    { name: "case2", path: "/case/case2", component: CaseTwo },
    { name: "case3", path: "/case/case3", component: CaseThree },
    { name: "case4", path: "/case/case4", component: CaseFour },
    { path: '/:notfound(.*)', redirect: '/home' },
    { path: '/:pathMatch(.*)', component: NotFound }
  ],
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});
const app = createApp(App);
library.add(

  faGithub,
  faLinkedin,
  faBars,
  faEnvelope
);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-button", BaseButton);
app.component("pink-circle", PinkCircle);
app.component("blue-circle", BlueCircle);
app.component("base-container", BaseContainer);
app.component("not-found", NotFound);
app.component("base-heading", BaseHeading);
app.mount("#app");
