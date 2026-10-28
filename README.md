# Portfolio – Martyna Grądzka

Personal portfolio built with [Nuxt 4](https://nuxt.com) and generated as a static site.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server on http://localhost:3000
npm run generate   # static build in dist/ (what Netlify runs)
npm run preview    # preview the production build
```

## Project structure

```
app/
  assets/css/main.css   design tokens (colours, spacing) and global styles
  components/           header, footer, buttons, cards, decorative circle…
  data/cases.ts         all case study content
  data/site.ts          navigation, contact links, competencies, tools
  pages/                one file per route (case-studies/[slug].vue is the case study template)
  plugins/reveal.ts     v-reveal scroll animation
public/images/          optimised WebP images
scripts/                image optimisation script
```
