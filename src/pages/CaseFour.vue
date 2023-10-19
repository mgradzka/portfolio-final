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
      <p>{{ aboutCase.password }}</p>
      <base-container id="here">
        <base-button
          ><a
            href="https://eridonna.myshopify.com/"
            target="_blank"
            class="btn btn--cases uppercase"
            >demo</a
          ></base-button
        >

        <base-button
          ><a
            href="https://github.com/mgradzka/eridonna"
            target="_blank"
            class="btn btn--cases uppercase"
            >source code</a
          ></base-button
        >
      </base-container>
    </template>
    <template v-slot:img>
      <img
        src="../assets/eridonna-mockup1.png"
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
import ApiEndpoints from "../components/Case-studies/Case-four/ApiEndpoints.vue";
import ShopifyPanel from "../components/Case-studies/Case-four/ShopifyPanel.vue";
import LiquidCode from "../components/Case-studies/Case-four/LiquidCode.vue";

export default {
  components: {
    CaseDescription,
    ApiEndpoints,
    LiquidCode,
    ShopifyPanel,
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
      selectedTab: "shopify-panel",
      // tabs: ["caseone-diagram", "caseone-database"],
      tabs: [
        {
          name: "shopify-panel",
          title: "Shopify",
          headings: ["Products", "Collections"],
          description: {
            one: "Products are added in the Shopify admin account, under the products section. Apart from the title, description, and images, each product gets its own a category, type, vendor, and tags. This option enables adding products automatically to a collection, depending on what conditions are set for a collection.",
            two: "In addition to adding different variants, such as ring sizes, the project requires more specific information about the product, including material, surface, and stone type. To meet this requirement, metafields are utilized to create a custom product definition and define its content type. This enables to capture and organize the desired information in a structured way within the system.",
            three:
              "Those meta fields can be then accessed at the bottom of product page.",
            four: "Automated collections are implemented in the webshop, and products are included there based on specific conditions. For instance, in the Ti Sento Spring/Summer collection, a product must have a “summer” tag and must be associated with the vendor – Ti Sento. If a product meets these criteria, it is automatically added.",
          },

          images: {
            one: "case1.jpg",
            two: "case2.jpg",
            three: "case3.jpg",
            four: "case4.jpg",
          },
        },
        {
          name: "liquid-code",
          title: "Liquid",
          headings: ["Code", "Sections and schema"],
          description: {
            one: "To display the content on the storefront, liquid template language is used. By using objects and its filters, I can target the data from the store. For instance, to create a product cards on the collection page, I loop through all the products in a collection and target product object and its specific properties, like URL address, images or price.",
            two: "Custom data can also be accessed in a similar way.",
            three:
              "Each product page has a details section, that varies depending on the product type. In the code, I check if the product tags contains “watches” tag, and only if this is true, then information about the glass is displayed.",
            four: "Within the “sections” folder of our theme, the code is responsible for rendering a customizable section, thanks to schema. In schema setting, the content type to be displayed is defined, while the blocks facilitate the creation of reusable content modules. In the “shop the look” example, the settings enables adding two custom images.",
            five: "Then two types of block are defined – one type of block for one image. It gives the owner a free hand to certain amount of products, depending on the image she chooses.",
            six: "To display the content, a markup is added above the schema, where I target the schema settings and its blocks. Thanks to schema, the owner can change certain elements of the webshop and update it with new offer.",
          },

          images: {
            one: "caseeri5.JPG",

            two: "caseeri6.JPG",

            three: "caseeri7.JPG",
            four: "caseeri1.JPG",

            five: "caseeri2.JPG",

            six: "caseeri3.JPG",
            seven: "caseeri4.JPG",
          },
        },
        {
          name: "api-endpoints",
          title: "API endpoints",
          headings: [
            "Add to cart",
            "Cart page",
            "Predictive search",
          ],
          description: {
            one: "The goal was to have an “Added to cart” popup, so a user could get feedback and decide whether to continue shopping or to go directly to cart.",
            two: "Another thing was to make the cart page more dynamic. The goal is to change the content dynamically, without reloading. Meaning that, when user change the number or items, or delete one of them, the content is automatically updated.",
            three:
              "The last implemented feature is predictive search. The reason why I decided to do that  is that it is considered as a good practice as it saves time for customers to look something up and  it provides guidance for them, giving alternative suggestions.",
          },

          images: {
            one: "api1.JPG",

            two: "api2.JPG",

            three: "api3.JPG",
            four: "api4.JPG",
          },
        }
      ],
      aboutCase: {
        name: "Eridonna Webshsop",
        role: "Frontend Developer",
        tools: "Liquid, JavaScript, Bootstrap",
        description:
          "A webshop for a slovak jewellery store. In this project I developed a custom theme on shopify and made it more dynamic by working with JavaScript and REST API endpoints.",
        password: "Webshop password: skaygo",
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
