# Vasanta K — Portfolio (React + TypeScript + Vite)

Home page of the portfolio, converted from the standalone HTML version.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

Requires Node 18 or newer.

## Where to edit content

All text lives in `src/data/`, so components never need to change for content updates.

| File | What it controls |
| --- | --- |
| `site.ts` | Name, title, email, LinkedIn, location. Also `EMAIL_BEHAVIOR` (see below) |
| `navigation.ts` | Header links, footer links, and the routes for pages not built yet |
| `stats.ts` | The four count-up statistics |
| `skills.ts` | Technical expertise categories and badges |
| `projects.ts` | Featured projects (period, description, technologies) |
| `illustrations.ts` | Abstract SVG thumbnails for the project cards |
| `experience.ts` | Experience timeline. Add earlier roles as extra objects |
| `strengths.ts` | Engineering strengths cards |
| `icons.ts` | Line icons used by skills and strengths |

Colours, fonts and spacing are CSS variables at the top of `src/styles/global.css`.

## Email links

`EMAIL_BEHAVIOR` in `src/data/site.ts`:

- `"copy"` (default): clicking an email link copies the address and shows a confirmation. Works everywhere.
- `"mailto"`: opens the visitor's email app. Use this once the site is hosted on your own domain.

## Profile photo

Put your image in `public/` and replace the `.portrait-placeholder` block in `src/sections/Hero.tsx` with
`<img src="/your-photo.jpg" alt="Portrait of Vasanta K" width="640" height="800" />`.

## Project structure

```
src/
  App.tsx            page layout
  main.tsx           entry point
  components/        Header, Footer, Brand, Chips, Icon, CountUp, SectionHead, Toast
  sections/          Hero, Stats, Expertise, Projects, Experience, Strengths, Contact
  hooks/             useInView, useActiveSection, useReducedMotion, useEmail
  data/              all content (see table above)
  styles/global.css  design tokens and styles
```

## Adding pages

About and Portfolio currently link to `/about` and `/portfolio` (set in `src/data/navigation.ts`); those pages do not exist yet.
To add them:

1. `npm install react-router-dom`
2. Move the contents of `App.tsx` into `src/pages/Home.tsx`.
3. In `App.tsx`, wrap the app in a router and add a `<Route>` for each page. Keep `Header` and `Footer` outside the routes.
4. Header and footer links that start with `#` are in-page anchors; switch them to `<Link>` where a page replaces a section.

## Deploying

`vite.config.ts` uses `base: "./"`, so the contents of `dist/` work from any folder, including GitHub Pages.
"# vasanta_portfolio_fullstack" 
