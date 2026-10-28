export type CaseBlock =
  | { type: 'text'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }

export interface CaseGroup {
  heading?: string
  blocks: CaseBlock[]
}

export interface CaseSection {
  id: string
  title: string
  groups: CaseGroup[]
}

export interface CaseLink {
  label: string
  href: string
  icon: string
}

export interface CaseStudy {
  slug: string
  name: string
  role: string
  /** One-sentence summary used on cards and in meta descriptions */
  summary: string
  overview: string
  tools: string[]
  cover: string
  coverAlt: string
  links: CaseLink[]
  note?: string
  sections: CaseSection[]
}

const text = (value: string): CaseBlock => ({ type: 'text', text: value })
const image = (src: string, alt: string, caption?: string): CaseBlock => ({ type: 'image', src, alt, caption })

export const caseStudies: CaseStudy[] = [
  {
    slug: 'eridonna-webshop',
    name: 'Eridonna Webshop',
    role: 'Frontend Developer',
    summary: 'A custom Shopify theme for a Slovak jewellery store, made dynamic with JavaScript and REST API endpoints.',
    overview:
      'A webshop for a Slovak jewellery store. In this project I developed a custom theme on Shopify and made it more dynamic by working with JavaScript and REST API endpoints.',
    tools: ['Shopify', 'Liquid', 'JavaScript', 'Bootstrap'],
    cover: 'eridonna-mockup1',
    coverAlt: 'Eridonna webshop displayed on a laptop and a phone',
    links: [
      { label: 'Live demo', href: 'https://eridonna.myshopify.com/', icon: 'ph:arrow-square-out' },
      { label: 'Source code', href: 'https://github.com/mgradzka/eridonna', icon: 'ph:github-logo' },
    ],
    note: 'Webshop password: skaygo',
    sections: [
      {
        id: 'shopify',
        title: 'Shopify',
        groups: [
          {
            heading: 'Products',
            blocks: [
              text(
                'Products are added in the Shopify admin, under the products section. Apart from the title, description and images, each product gets its own category, type, vendor and tags. This makes it possible to add products to a collection automatically, depending on the conditions set for that collection.',
              ),
              image('case1', 'Product editing view in the Shopify admin'),
              text(
                'In addition to variants such as ring sizes, the project requires more specific product information, including material, surface and stone type. To meet this requirement, metafields are used to create a custom product definition and define its content type. This captures and organises the information in a structured way.',
              ),
              image('case2', 'Custom metafield definitions for products in Shopify'),
              text('Those metafields are then displayed at the bottom of the product page.'),
              image('case3', 'Metafield values filled in for a product in the Shopify admin'),
            ],
          },
          {
            heading: 'Collections',
            blocks: [
              text(
                'Automated collections are used in the webshop, and products are included based on specific conditions. For instance, to appear in the Ti Sento Spring/Summer collection, a product must have a “summer” tag and be associated with the vendor Ti Sento. If a product meets these criteria, it is added automatically.',
              ),
              image('case4', 'Conditions of an automated collection in Shopify'),
            ],
          },
        ],
      },
      {
        id: 'liquid',
        title: 'Liquid',
        groups: [
          {
            heading: 'Code',
            blocks: [
              text(
                'To display content on the storefront, the Liquid template language is used. With objects and filters I can target data from the store. For instance, to create product cards on the collection page, I loop through all products in a collection and use properties of the product object, such as its URL, images and price.',
              ),
              image('caseeri5', 'Liquid loop rendering product cards on a collection page'),
              text('Custom data can be accessed in a similar way.'),
              image('caseeri6', 'Product details on the storefront, filled with metafield values'),
              text(
                'Each product page has a details section that varies depending on the product type. In the code, I check whether the product tags contain “watches”, and only then is information about the glass displayed.',
              ),
              image('caseeri7', 'Conditional Liquid code showing watch details'),
            ],
          },
          {
            heading: 'Sections and schema',
            blocks: [
              text(
                'Within the “sections” folder of the theme, code is responsible for rendering a customisable section, thanks to its schema. The schema settings define the content type to be displayed, while blocks make it possible to create reusable content modules. In the “shop the look” example, the settings allow adding two custom images.',
              ),
              image('caseeri1', 'Schema settings of the “shop the look” section'),
              text(
                'Then two types of block are defined, one for each image. This gives the owner a free hand to add a number of products, depending on the image she chooses.',
              ),
              image('caseeri2', 'Image and product pickers of the “shop the look” section in the theme editor'),
              image('caseeri3', 'Block definitions in the schema next to the blocks in the theme editor'),
              text(
                'To display the content, markup is added above the schema, targeting the schema settings and its blocks. Thanks to the schema, the owner can change elements of the webshop and update it with new offers.',
              ),
              image('caseeri4', 'Markup rendering the schema settings and blocks'),
            ],
          },
        ],
      },
      {
        id: 'api-endpoints',
        title: 'API endpoints',
        groups: [
          {
            heading: 'Add to cart',
            blocks: [
              text(
                'The goal was to show an “Added to cart” popup, so users get feedback and can decide whether to continue shopping or go directly to the cart.',
              ),
              image('api1', 'Code adding a product to the cart through the Cart API'),
            ],
          },
          {
            heading: 'Cart page',
            blocks: [
              text(
                'Another goal was to make the cart page more dynamic, so content changes without reloading. When a user changes the quantity of an item or removes it, the content is updated automatically.',
              ),
              image('api2', 'Code updating cart quantities without a page reload'),
              image('api3', 'Code removing an item from the cart'),
            ],
          },
          {
            heading: 'Predictive search',
            blocks: [
              text(
                'The last feature is predictive search. It is considered good practice, as it saves customers time and guides them with alternative suggestions.',
              ),
              image('api4', 'Predictive search implementation'),
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'task-portal',
    name: 'Task Portal',
    role: 'Full Stack Developer',
    summary: 'A community portal for finding people who can help with small chores and errands, with its own database and user roles.',
    overview:
      'A task portal for a community to find people who can help with little chores and errands. It is a web application with its own database and three different types of users. Additional functions sit behind authorisation, such as adding and deleting tasks, and applying for a job.',
    tools: ['JavaScript', 'Node.js', 'Express', 'MS SQL', 'HTML', 'CSS'],
    cover: 'taskportal',
    coverAlt: 'Task Portal task list displayed on a laptop',
    links: [
      { label: 'Frontend code', href: 'https://github.com/mgradzka/Task-Portal-frontend', icon: 'ph:github-logo' },
      { label: 'Backend code', href: 'https://github.com/mgradzka/Task-Portal-backend', icon: 'ph:github-logo' },
    ],
    sections: [
      {
        id: 'er-diagram',
        title: 'ER diagram',
        groups: [
          {
            heading: 'Entity Relationship Diagram',
            blocks: [
              text(
                'The first step in the project is to create an Entity Relationship Diagram, which is needed to create the SQL database later. The goal is to define the entities and the relationships between them. Creating the ER diagram is an iterative process: it changes a couple of times during development and is adjusted to our needs.',
              ),
              text(
                'Our design choice is that there is no account without a profile: when an account is created, a profile is created automatically as well. Every account has a role, admin or member, with member as the default. An account can post a task, which has to be assigned to a category, indoor or outdoor. A task also has a status, to inform others whether it is still available or expired. As an extra feature, every account can apply for any task that is not their own.',
              ),
              image('erd', 'Entity Relationship Diagram of the Task Portal database'),
            ],
          },
        ],
      },
      {
        id: 'database',
        title: 'Database',
        groups: [
          {
            heading: 'SQL database',
            blocks: [
              text(
                'Based on the ER diagram, a SQL script is created with table definitions for all entities. Each table has its own primary key, except for the application table, which works as a lookup table between account and task. Each column has its own data type, and SQL constraints link the tables through foreign keys.',
              ),
              image('case-study1-sql', 'SQL script with table definitions'),
              text('When the tables are defined, the next step is to populate test data and verify the database.'),
              image('case-study1-sql2', 'SQL script inserting test data'),
              image('case-study1-sql3', 'SQL query joining all tables to verify the database'),
            ],
          },
        ],
      },
      {
        id: 'backend',
        title: 'Backend',
        groups: [
          {
            heading: 'Structure',
            blocks: [
              text(
                'The backend is written in Node.js with the Express framework, which handles routing among other things. The project follows a RESTful architecture: to interact with the database we use CRUD operations (create, read, update and delete) and their equivalent HTTP methods. Endpoints are defined to transfer data between client and server.',
              ),
              image('case-study1-backend1', 'List of the REST API endpoints and their HTTP methods'),
            ],
          },
          {
            heading: 'Authorisation and authentication',
            blocks: [
              text(
                'To access most functions of the portal, a user needs to be logged in. To authenticate them, the JSON Web Token is verified in authenticate.js, which is set in the request pipeline.',
              ),
              image('case-study1-backend2', 'Middleware verifying the JSON Web Token'),
              text(
                'An admin can perform actions that a regular user cannot. To check whether a user has permission, the admin.js and checkauthorisation.js middlewares are also set in the request pipeline.',
              ),
              image('case-study1-backend3', 'Middleware checking whether the account has the admin role'),
              image('case-study1-backend5', 'Delete route protected by the authentication and authorisation middlewares'),
            ],
          },
          {
            heading: 'Connecting with the database',
            blocks: [
              text(
                'The project uses classes, promises and asynchronous programming. To connect with the database, we create methods that query the required data and validate the result.',
              ),
              image('case-study1-backend4', 'Class method querying the database'),
            ],
          },
        ],
      },
      {
        id: 'frontend',
        title: 'Frontend',
        groups: [
          {
            heading: 'URL',
            blocks: [
              text(
                'To render content on the page, we check whether a certain word is included in the URL. Based on this, the right functions are called and new content is shown.',
              ),
              image('case-study1-frontend', 'Code choosing what to render based on the URL'),
            ],
          },
          {
            heading: 'Fetching the data',
            blocks: [
              text('We use the Fetch API to access the data. Markup for the data is created and inserted into the HTML.'),
              image('case-study1-backend7', 'Fetch request rendering a task into an edit form'),
            ],
          },
          {
            heading: 'JWT and session storage',
            blocks: [
              text(
                'To access certain parts of the application, for example the page where users see their own tasks, we check with the JSON Web Token whether they are logged in. The request is sent with the token in a header, and middleware in the backend checks it.',
              ),
              text(
                'The token is kept in session storage, which means that when users end a page session, they have to authenticate again to log in.',
              ),
              image('case-study1-backend6', 'Fetch options adding the token from session storage to the request header'),
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'plant-app',
    name: 'Plant App',
    role: 'Frontend Developer',
    summary: 'An ordering app for house plants, built to practise working with React hooks.',
    overview:
      'A project created to practise working with React hooks. It is an ordering app where users can choose which plants should be delivered to their home.',
    tools: ['React', 'Firebase', 'Styled Components', 'Bootstrap'],
    cover: 'botanical-mockup1',
    coverAlt: 'Plant App home page displayed on a laptop',
    links: [
      { label: 'Live demo', href: 'https://botanical-app.netlify.app/', icon: 'ph:arrow-square-out' },
      { label: 'Source code', href: 'https://github.com/mgradzka/Botanical-app', icon: 'ph:github-logo' },
    ],
    sections: [
      {
        id: 'visuals',
        title: 'Visuals',
        groups: [
          {
            heading: 'Screenshots from the project',
            blocks: [
              image('botanical1', 'Plant App home page with a hero banner and plants'),
              image('botanical2', 'Plant list with prices, amount fields and add buttons'),
              image('botanical3', 'Cart modal with chosen plants and the total amount'),
              image('botanical4', 'Order form in the cart with field validation'),
              image('botanical5', 'Order confirmation message'),
            ],
          },
        ],
      },
    ],
  },
]

export const findCaseStudy = (slug: string) => caseStudies.find((item) => item.slug === slug)
