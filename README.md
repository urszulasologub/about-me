# Self-presentation

Personal CV page, built with [Astro](https://astro.build) as a static site for GitHub Pages.
No UI framework, no trackers — just HTML, CSS and a few small scripts.

## Run locally

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/
npm run check     # type check (also runs in CI)
npm run format    # prettier
```

## Where things live

```
src/
  data/            ← all content; edit these to update the page
    profile.ts       name, tagline, about, stats, languages
    highlights.ts    "Selected work" cards and principles
    skills.ts        searchable skill groups (+ aliases for search)
    experience.ts    jobs, projects, education
    writing.ts       articles and talks
    types.ts         shapes of the data above
  components/
    sections/      one component per page section
    layout/        header, footer
    ui/            small reusable parts (tag, card, heading)
  scripts/         client-side behaviour (reveal, theme, scroll, skills search)
  styles/          design tokens and global styles
  lib/             helpers (base URL, slugs, build-time checks)
  layouts/         HTML shell, SEO meta, JSON-LD
  pages/index.astro
```

- **Adding a project:** add an entry to `engagements` in `src/data/experience.ts`.
- **Adding a skill:** add it to a group in `src/data/skills.ts`. `aliases` are extra
  search words (e.g. `rspec` → `testing`).
- **Tags on work cards** must match a skill name. The build fails if one does not,
  so tag links never lead to an empty search.
- **Search links:** `?skill=sidekiq` opens the page with the skills search filled in.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on push to `main`
(set *Settings → Pages → Source* to *GitHub Actions*). It sets the base path
automatically, so it works for both `<user>.github.io` and project repos.
