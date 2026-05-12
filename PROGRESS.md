# Focus Frameworks — Build Progress

This file is the source of truth for cross-session progress. Future Claude sessions: read this first.

## How to resume

In a new session, say: **"continue Focus Frameworks Part N"** (where N is the next part below). The agent will read this file, pick up the unchecked items, and update the file when done.

---

## Brand reference (single source of truth)

- **Verticals:** (1) Web design agency for local SMBs (NE Ohio — Chardon, Painesville, Mentor, Willoughby), (2) Digital products store, (3) Car detailing service
- **Feel:** clean, minimal, techy, calm, premium boutique
- **Colors:** Primary `#2563EB`, Navy `#0F172A`, Neutral `#F8FAFC`, Muted `#94A3B8`, White `#FFFFFF`
- **Typography:** Inter (body) + Geist (display), Google Fonts CDN
- **Logo:** abstract SVG mark — converging lines + grid behind, blue on white. No letterforms in mark.

---

## Part 1 — Foundation ✅ COMPLETE

- [x] Project directory structure (`/public`, `/src/{pages,styles,scripts,components}`)
- [x] SVG logo (`/public/assets/icons/logo.svg`, `logo-white.svg`)
- [x] SVG wordmark (`/public/assets/icons/wordmark.svg`, `wordmark-white.svg`)
- [x] Vertical icons (`icon-agency.svg`, `icon-digital.svg`, `icon-detailing.svg`)
- [x] UI icons (`icon-menu.svg`, `icon-close.svg`, `icon-arrow.svg`)
- [x] Favicon (`/public/favicon.svg`)
- [x] `tokens.css` — full design token system
- [x] `reset.css` — modern CSS reset
- [x] `global.css` — typography, layout primitives, utilities, skip link, reveal animation
- [x] `components.css` — buttons, nav, cards, forms, footer, CTA banner, testimonials, timeline, FAQ, product cards, filter bar, map, before/after
- [x] `netlify.toml` — clean URL rewrites, cache headers, security headers
- [x] `404.html` — on-brand
- [x] `README.md`
- [x] `PROGRESS.md`

---

## Part 2 — Landing Page (Phase 3)

- [ ] `index.html` at `/src/pages/index.html`
  - [ ] Sticky nav with logo, links, CTA — mobile hamburger sheet
  - [ ] Hero — "Build. Sell. Detail." headline + subheadline + 2 CTAs + geometric bg
  - [ ] Three vertical cards (Agency / Digital / Detailing)
  - [ ] "Why Focus Frameworks" 4 features
  - [ ] Testimonials (3 realistic placeholders)
  - [ ] CTA banner (navy)
  - [ ] Footer
- [ ] `/src/scripts/main.js` — entry, IntersectionObserver setup
- [ ] `/src/scripts/nav.js` — mobile menu toggle, active link logic
- [ ] `/src/scripts/animations.js` — reveal-on-scroll
- [ ] `/src/components/nav.html` — reusable nav partial
- [ ] `/src/components/footer.html` — reusable footer partial

---

## Part 3 — Agency Page (Phase 4)

- [ ] `agency.html` at `/src/pages/agency.html`
  - [ ] Hero — "We build websites that work." (NE Ohio focus)
  - [ ] Services pricing: Starter Site $499, Business Pro $999, Monthly Care $79/mo
  - [ ] Process timeline (Discovery → Design → Build → Launch)
  - [ ] Portfolio (3 mock cards)
  - [ ] Lead capture form (mailto)
  - [ ] FAQ

---

## Part 4 — Digital Products Page (Phase 5)

- [ ] `digital.html` at `/src/pages/digital.html`
  - [ ] Hero — "Resources that actually help."
  - [ ] Featured product hero card
  - [ ] Category filter bar (All / Productivity / Parenting / Business / Student)
  - [ ] 6 product cards with `data-product-id` (Gumroad/Lemon Squeezy ready)
  - [ ] Email capture lead magnet
- [ ] Filter JS in `/src/scripts/filters.js`

---

## Part 5 — Detailing Page (Phase 6)

- [ ] `detailing.html` at `/src/pages/detailing.html`
  - [ ] Hero — "Your car, professionally detailed. NE Ohio."
  - [ ] Service packages: Basic Wash $49, Interior $99, Full Detail $179, Ceramic (quote)
  - [ ] Before/after section
  - [ ] Service area map placeholder (Chardon, Painesville, Mentor, Willoughby)
  - [ ] Booking form (mailto)
  - [ ] FAQ

---

## Part 6 — Contact + Polish (Phases 7 + 8)

- [ ] `contact.html` at `/src/pages/contact.html`
  - [ ] Centered form: Name, Email, Subject dropdown, Message
  - [ ] Contact info cards (email, phone, service area)
  - [ ] Response time expectation copy
- [ ] OG meta tags on every page
- [ ] Schema.org LocalBusiness JSON-LD on `index.html`
- [ ] `/sitemap.xml`
- [ ] `/robots.txt`
- [ ] Final accessibility pass (WCAG AA contrast, skip-link wired, semantic HTML check)
- [ ] `loading="lazy"` on all images
- [ ] CSS audit — remove unused rules

---

## File map (post-Part-1)

```
/Focus-Frameworks
├── netlify.toml
├── README.md
├── PROGRESS.md            ← this file
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── fonts/         (empty — Google Fonts CDN)
│       ├── images/        (empty — populated as pages need)
│       └── icons/
│           ├── logo.svg
│           ├── logo-white.svg
│           ├── wordmark.svg
│           ├── wordmark-white.svg
│           ├── icon-agency.svg
│           ├── icon-digital.svg
│           ├── icon-detailing.svg
│           ├── icon-menu.svg
│           ├── icon-close.svg
│           └── icon-arrow.svg
└── src/
    ├── components/        (Part 2)
    ├── pages/
    │   └── 404.html
    ├── scripts/           (Part 2)
    └── styles/
        ├── tokens.css
        ├── reset.css
        ├── global.css
        └── components.css
```

## Conventions for future parts

- **CSS:** never hardcode values — reference `tokens.css` custom properties. If a token is missing, add it to `tokens.css` first.
- **HTML:** every page links the four CSS files in this order: tokens → reset → global → components, then page-specific `<style>` block at the end of `<head>` only if needed.
- **Paths:** all asset URLs absolute from root (`/public/assets/...`, `/src/styles/...`, `/src/scripts/...`). Netlify rewrites clean URLs (`/agency`) to file paths.
- **JS:** vanilla only, no bundler. Use `defer` on script tags. Respect `prefers-reduced-motion`.
- **Accessibility:** every page has `.skip-to-content` link, semantic landmarks (`<nav>`, `<main>`, `<footer>`), proper heading hierarchy.
- **Copy:** no Lorem ipsum. Write real, compelling copy tied to the verticals.
- **Responsive:** mobile (375px), tablet (768px), desktop (1280px+) — test all three.
