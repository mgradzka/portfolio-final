<template>

  <the-navigation></the-navigation>

  <router-view></router-view>

  <the-footer></the-footer>
</template>

<script>
import TheNavigation from "./components/UI/TheNavigation.vue";
import TheFooter from "./components/UI/TheFooter.vue";

export default {
  components: {
    TheNavigation,
    TheFooter,
  },
 
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&family=Open+Sans&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 0.9vw;
  scroll-behavior: smooth;
}

main {
  min-height: 96vh;
}
body {
  height: 100%;
}

:root {
  --mainbackground: #ebebeb;
  --secondbackground: #f6f6f6;
  --pinklight: #e2a4bb;
  --pinkdark: #cf678d;
  --bluelight: #b3d9e7;
  --bluedark: #67b3cf;
  --yellow: #E8D070;
  --greyfont: #495057;
}


.fa-brands {
  font-size: 4rem;
}

html {
  /* 10px / 16px = 0.625 = 62.5% */
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 62.5%;
  color: var(--greyfont);
  background-color: var(--mainbackground);
}

a {
  display: inline-block;
  text-decoration: none;
  color: var(--greyfont);
}

.flex {
  display: flex;
}

.uppercase {
  text-transform: uppercase;
}

.text-align {
  text-align: center;
}

span,
p {
  color: var(--greyfont);
}

h5 {
  font-weight: 500;
}

h1,
h1 span,
h2,
h3,
h4,
h5,
nav li {
  color: var(--greyfont);
}

h2 {
  font-size: 3.6rem;
  color: var(--pinkdark);
  margin-bottom: 1rem;
  color: var(--greyfont);
}

h3 {
  font-size: 3rem;
}

h5 {
  font-size: 1.8rem;
  font-weight: 600;
}
/* .info div {
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: var(--greyfont);
  background-color: var(--bluelight);
  
} */

h1 {
  font-size: 3.6rem;
  font-weight: 600;
}

nav li,
nav a {
  font-weight: 600;
  font-size: 1.4rem;
}

.nav {
  z-index: 101;
}

h4 {
  font-size: 2rem;
  font-weight: 600;
}

h1 span {
  font-size: 5.4rem;
  font-weight: 700;
}

header div {
  font-size: 2rem;
}

p,
main li, strong {
  font-size: 1.6rem;
}
ul {
  list-style: none;
}

nav {
  position: sticky;
  top: 0px;
  background-color: var(--mainbackground);
  padding: 2rem;
}

nav ul {
  gap: 6rem;
  justify-content: center;
}

nav a.active {
  border-bottom: 2px solid var(--pinkdark);
}

.intro-text {
  flex-direction: column;
  gap: 1.6rem;
  grid-area: intro-text;
  justify-content: center;
}

.info {
  /* gap: 2rem; */
  display:flex
  /* background-color: var(--bluelight); */
}
.info img {
  max-width:15rem;
  /* background-color: var(--bluelight); */
}

.circle {
  background: var(--pinklight);
  border-radius: 50%;
  width: 50rem;
  height: 50rem;
  position: absolute;
  top: 30%;
  z-index: -1;
}

header {
  /* margin-bottom: 10rem; */
  padding: 10rem 20rem;
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-areas: "intro-text img";
  background: linear-gradient(#ebebeb, #fff);
}

.picture {
  justify-content: end;
  justify-items: end;
  justify-self: end;
  align-self: end;
  align-content: end;
}

.mypicture {
  grid-area: img;
  width: 60%;
  justify-self: center;
  justify-content: center;
  justify-items: center;
  align-self: center;
  align-content: center;
  align-items: center;
}

.cases--img {
  max-height: 40rem;
  align-self: center
}


.cases--img1 {
  max-height: 25rem;
}
img.workout{
  max-width:90rem
}

.tab-container {
  background-color: #d2d5d8;
  padding: 0 20rem;
}

.tab-container button {
  background-color: #d2d5d8;
  border: 2px solid transparent;
  color: var(--greyfont);
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding: 2rem;
}

.tabActive {
  background-color: #e2e4e4 !important;
  font-weight: 800;
}

.tab-container .tab,
.tab-container .tab:hover {
  background-color: #d2d5d8;
  cursor: pointer;
}

.development {
  width: 100rem;
}

.details {
  padding: 10rem 20rem;
}
.details p,
.details h4,
.details img {
  margin-bottom: 3rem;
}

.circle-scroll {
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  background-color: white;
  /* display: none; */
  position: fixed;
  bottom: 7rem;
  right: 4rem;
  z-index: 99;
  cursor: pointer;
}

.circle-scroll svg {
  width: 4rem;
  position: fixed;
  bottom: 8.4rem;
  right: 6rem;
}

.details h4 {
  color: var(--pinkdark);
}

.breadcrumb {
  padding: 10rem 20rem 0;
  flex-direction: row;
  gap: 2rem;
}

breadcrumb > li > a {
  color: var(--greyfont);
}

ul.breadcrumb li + li:before {
  padding: 1rem;
  color: var(--greyfont);
  content: "/\00a0";
}

.breadcrumb li a:hover {
  color: var(--greyfont);
  text-decoration: underline;
}

@media (max-width: 1200px) {
  html {
    /* 9px / 16px  */
    font-size: 56.25%;
  }

  button {
    font-size: 2rem;
  }
  section {
    padding: 10rem;
  }
  header {
    padding: 10rem 5rem 5rem 5rem;
  }
  h1 {
    font-size: 3rem;
  }
  h1 span {
    font-size: 5.4rem;
  }
}

@media (max-width: 944px) {
  header {
    padding: 10rem;
  }
  .development{
    max-width:70rem
  }

.breadcrumb {
  padding: 10rem 5rem 5rem;
 
}

.breadcrumb li, .breadcrumb a {
   font-size: 1.6rem
}
  
 
 .details {
  padding: 5rem
 }

  h1 span {
    font-size: 4.2rem;
  }

  p,
  .comp-div2 li {
    font-size: 1.8rem;
  }

  .comp-div2 li {
    justify-self: end;
    margin-bottom: 1rem;
  }
}

@media (max-width: 544px) {
  section,
  article,
  .about-img {
    padding: 10rem 5rem;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 3.2rem;
  }

  h4 {
    font-size: 1.6rem;
  }
  h5 {
    font-size: 1.6rem;
  }

  button {
    font-size: 1.6rem
  }
.details {
  padding: 5rem
}

 .cases--img {
    display: none
  }

.cases--img1 {
    max-height:15rem
  }
  .tab-container {
    padding: 0 5rem;
}

  .tab-container  button{
  font-size:1.2rem;
  padding:1rem
}

.case-study button a {
font-size: 1.4rem
}

.breadcrumb {
    padding: 10rem 5rem 0rem ;
}

.breadcrumb li, .breadcrumb a {
  font-size:1.2rem
}

.development {
  width:35rem
}

}
</style>
