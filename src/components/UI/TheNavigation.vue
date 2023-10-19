<template>
  <nav class=" nav sticky" :class="{ 'hidden': mobile }">
    <ul class="flex" v-show="!mobile">
      <li class="uppercase">
        <router-link to="/home" class="link">Home</router-link>
      </li>
      <li class="uppercase">
        <router-link to="/about" class="link">Profile</router-link>
      </li>
      <li class="uppercase">
        <router-link to="/case" class="link" :class="{'active': $route.name === 'case1' ||  $route.name === 'case2' ||  $route.name === 'case3'  }">Case studies</router-link>
      </li>
      <li class="uppercase">
        <router-link to="/contact" class="link">Contact</router-link>
      </li>
    </ul>
  </nav>
  <nav class="mobile" :class="{ 'hidden': !mobile }">
    <div class="icon">
      <font-awesome-icon
        v-show="mobile"
        @click="toggleMobileNav"
        class="fa-brands"
        icon="fa-solid fa-bars"
        :class="{ 'icon-active': mobileNav }"
      />
    </div>
    <transition name="mobile-nav">
      <ul class="flex dropdown-nav" v-show="mobileNav">
        <li class="uppercase">
          <router-link to="/home" class="link">Home</router-link>
        </li>
        <li class="uppercase">
          <router-link to="/about" class="link">Profile</router-link>
        </li>
        <li class="uppercase">
          <router-link to="/case" class="link"  :class="{'active': $route.name === 'case1' ||  $route.name === 'case2' ||  $route.name === 'case3' }">Case studies</router-link>
        </li>
        <li class="uppercase">
          <router-link to="/contact" class="link">Contact</router-link>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
    mounted () {
  window.scrollTo(0, 0)
},
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  // mounted(){
  //   window.addEventListener('scroll', this.updateScroll)
  // },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      } else {
        this.mobile = false;
        this.mobileNav = false;
        return;
      }
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  text-align: center;
  position: fixed;
  transition: 0.5s ease all;
  background-color: var(--mainbackground);
}

nav {
  position: fixed;
}
/* svg {
  display: flex;
  justify-self: right;
} */

.icon {
  /* display: flex; */
  position: absolute;
  text-align: right;
  /* top: 25px;
  right: 25px;
  height: 100%; */
}

i {
  cursor: pointer;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(180deg);
  transition: 0.8s ease all;
}

.dropdown-nav {
  flex-direction: column;
  padding: 5rem;
  margin: 0;

  gap: 3rem;
  width: 80%;
  height: 80vh;
  /* background-color: pink; */
}
.dropdown-nav a {
  font-size: 2rem;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-300px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile {
  background-color: var(--mainbackground);
  width: 100%;
  padding-bottom: 5rem;
}

.hidden {
  display:none
}
/* header {
  margin: 0;
  padding: 0;
}

.icon {
  display: flex;
  justify-content: right;
}

.sticky {
  position: sticky;
  top: 0px;
  background-color: var(--mainbackground);
  padding: 2rem;
}

.mobile-nav {
  z-index: 100;
} */
</style>
