# Rifky | Personal Portfolio

A static, accessible personal portfolio for Rifky (Data & AI), built with Next.js (App Router), TypeScript, Tailwind CSS, and Lucide icons. No backend, database, or secrets required.

## Requirements

- Node.js 18.18 or newer (20 LTS recommended)
- npm

## Install and run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks and production build

```bash
npm run lint
npm run build
npm run start   # serve the production build locally
```

## Configure content and links

All personal details, social URLs, project links, and the CV path live in:

- `src/config/profile.ts`: name, email, GitHub, LinkedIn, CV path, publication URL, per-project links
- `src/config/projects.ts`: project content (overview, problem, approach, stack, verified results)

Any link left as an empty string (`""`) renders as a clearly marked, non-clickable "Link soon" placeholder. Nothing is invented.

To enable the **Download CV** button:

1. Put your CV in `public/cv/` (for example `public/cv/rifky-cv.pdf`).
2. Set `links.cv` to `"/cv/rifky-cv.pdf"` in `src/config/profile.ts`.

Fill these in when ready: `links.github`, `links.linkedin`, `publication.url`, and the `projectLinks` entries (live demo for Vessel Fuel AI, GitHub repositories, paper link).

Optional: set the `NEXT_PUBLIC_SITE_URL` environment variable (for example `https://your-domain.com`) so Open Graph and canonical metadata use your real domain.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. The framework preset is detected as **Next.js**; keep the default build command (`next build`).
4. (Optional) Add `NEXT_PUBLIC_SITE_URL` under Environment Variables.
5. Click **Deploy**. Later pushes to the main branch redeploy automatically.

## Project structure

```
src/
  app/            layout, page, global styles
  components/     Navbar, Hero, About, Experience, Projects, Skills, Contact, Footer, helpers
  config/         profile.ts and projects.ts (central content and links)
```

## Notes on accuracy

- Vessel Fuel AI runs inference in Python using coefficients derived from a BigQuery ML linear regression model. The deployed app does not call BigQuery ML directly.
- No metrics, screenshots, testimonials, or statistics are included beyond the facts supplied (R² from 0.89 to 0.96, GPA 3.88/4.00, IEEE ICSCC 2024 publication).
