# Ahmad Syabil Nuruddin — Portfolio

A single-page portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**
and **lucide-react**. Statically exported, so it deploys anywhere that can serve files.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

Node 18.17+ required.

---

## Where the content lives

**Everything is in `lib/data.ts`.** Name, email, socials, hero stats, bio, skill groups,
16 projects, the timeline and 11 certifications. Edit that one file; the components read from it. You should not
need to touch a component to change a fact about yourself.

Two things to set before you publish:

1. **Resume file.** Put your PDF in `public/` and update `site.resumeHref` in `lib/data.ts`
   to match the filename. Until you do, the "Resume" button in the hero 404s.
2. **GitHub links.** Every project currently has `github: null` and `demo: null`, which hides
   the buttons and shows *"Code not public — happy to walk through it on request"* instead.
   I did not invent repository URLs. Fill in the real ones as you push each repo.

---

## Deploying

### GitHub Pages (recommended — you already have `ahmadsyabil.github.io`)

The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
Enable it once: **repo Settings → Pages → Source → GitHub Actions**.

- Publishing to `ahmadsyabil.github.io` (a *user* site): nothing else to change.
- Publishing to a *project* repo (`github.com/you/some-repo`): uncomment `basePath` and
  `assetPrefix` in `next.config.mjs` and set them to `/some-repo`.

### Vercel / Netlify

Import the repo. Both detect Next.js automatically. On Vercel you can delete
`output: 'export'` from `next.config.mjs` to get image optimisation back.

---

## Structure

```
app/
  layout.tsx        Metadata, fonts, JSON-LD, no-flash theme script, skip link
  page.tsx          Section composition
  globals.css       Design tokens + component classes
  not-found.tsx     404
components/
  Navbar.tsx        Glass nav, scroll-spy active link, mobile sheet
  Hero.tsx          Headline, typewriter, CTAs, portrait, stats
  About.tsx         Bio + 4-category skills grid
  Projects.tsx      4 featured cards + filterable 12-project archive
  ProjectCard.tsx   Problem / Solution / Highlights / Stack / Links
  ArchiveCard.tsx   Compact card for the archive grid
  Experience.tsx    Vertical timeline
  Certifications.tsx  11 certificates grouped into four tiers
  Contact.tsx       Copy-to-clipboard email, socials, form
  ContactForm.tsx   Client-side validated form
  ThemeProvider.tsx Dark/light with localStorage + OS preference
  Reveal.tsx        IntersectionObserver scroll reveal
lib/data.ts         All content
```

---

## Design and engineering notes

**Theming.** Colours are CSS custom properties as space-separated RGB channels, mapped into
Tailwind with `<alpha-value>`. That means `bg-surface/60` works, and swapping the whole palette
is a matter of editing eight lines in `globals.css` — twice, once per theme.

**No flash of wrong theme.** A tiny synchronous script in `<head>` reads `localStorage` and
`prefers-color-scheme` and sets the `dark` class before first paint. Without it, dark-mode
users get a white flash on every navigation.

**Animation without a library.** `Reveal.tsx` is ~40 lines of IntersectionObserver. Framer
Motion would have added roughly 50 KB of JavaScript to do the same job on a page whose entire
first-load bundle is 102 KB. If you later want layout animations or gesture handling, that's
the point to add it.

**Accessibility.** Semantic landmarks throughout (`header`/`main`/`section`/`article`/`footer`),
every section labelled via `aria-labelledby`, a skip link, `aria-current` on the active nav item,
`role="status"` live regions on the copy button and the form, visible focus rings, and full
`prefers-reduced-motion` support that disables every transition and animation. Body text meets
WCAG AA contrast in both themes.

**Archive filtering hides, it does not unmount.** All 12 archive cards render into the static
HTML and the category filter toggles a `hidden` class. If they were unmounted, six projects
would be missing from the crawled page and invisible without JavaScript.

**Performance.** 105 KB first-load JS. The animated background is pure CSS — no canvas, no
`requestAnimationFrame` loop. The scroll-progress bar is the only scroll listener and it's
rAF-throttled and passive. Fonts load via `next/font` with `display: swap`, self-hosted at
build time.

**SEO.** Open Graph and Twitter card metadata, plus `Person` JSON-LD so search engines can
parse your name, role, education and profiles as structured data.
