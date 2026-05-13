# Focus Frameworks

A multi-vertical brand and web presence covering three arms:

1. **Agency** — web design for local small businesses in NE Ohio (Chardon, Painesville, Mentor, Willoughby)
2. **Digital** — guides, templates, and resources for productivity, parenting, business, and students
3. **Detailing** — local car detailing service

Static site. Vanilla HTML, CSS, JS. No build step. Deploys to Netlify by pointing at the repo root.

---

## Project status

This is being built in 6 sessions. See [`PROGRESS.md`](./PROGRESS.md) for the live checklist.

- **Part 1 — Foundation** ✅ done — design tokens, CSS, SVG logo, Netlify config, 404
- **Part 2 — Landing page** ✅ done — `index.html` + reusable nav/footer + JS, OG tags, JSON-LD
- **Part 3 — Agency page**
- **Part 4 — Digital products page**
- **Part 5 — Detailing page**
- **Part 6 — Contact + final polish** (SEO, sitemap, a11y)

To continue building in a new session: open Claude and say **"continue Focus Frameworks Part N"**. The agent reads `PROGRESS.md` and picks up.

---

## Local preview

No build step. Serve the repo root with any static server:

```bash
# Python
python3 -m http.server 8080

# Or Node
npx serve .
```

Then open <http://localhost:8080/src/pages/index.html>. Note that Netlify's clean-URL rewrites (`/agency`, `/products`, etc.) only work on Netlify itself — locally, use the direct file paths under `/src/pages/`.

For full Netlify-fidelity local preview:

```bash
npx netlify-cli dev
```

---

## Deploy to Netlify

Two equally valid options:

1. **Drag & drop:** drag the repo root folder onto <https://app.netlify.com/drop>. Done.
2. **Git connection:** point a new Netlify site at this GitHub repo. No build command, publish directory `.` — both already configured in `netlify.toml`.

Clean URLs (`/`, `/agency`, `/products`, `/detailing`, `/contact`) are wired via `netlify.toml` rewrites. The 404 fallback points at `/src/pages/404.html`.

---

## File structure

```
/Focus-Frameworks
├── netlify.toml           # publish + redirects + cache headers
├── README.md
├── PROGRESS.md            # cross-session build status
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── fonts/         # (Google Fonts CDN currently)
│       ├── images/
│       └── icons/         # logo, wordmark, vertical icons, UI icons
└── src/
    ├── components/        # reusable HTML partials (nav, footer)
    ├── pages/             # all .html pages
    ├── scripts/           # main.js, nav.js, animations.js
    └── styles/
        ├── tokens.css     # design tokens (single source of truth)
        ├── reset.css
        ├── global.css     # typography, layout primitives, utilities
        └── components.css # buttons, nav, cards, forms, footer, etc.
```

---

## Brand reference

| Token | Value |
|---|---|
| Primary | `#2563EB` |
| Navy | `#0F172A` |
| Neutral | `#F8FAFC` |
| Muted | `#94A3B8` |
| White | `#FFFFFF` |
| Body font | Inter |
| Display font | Geist |
| Base spacing | 4px |
| Container max | 1200px |

All values live in `src/styles/tokens.css`. **Never hardcode** — reference the CSS custom properties.

---

## Conventions

- **CSS:** always reference `tokens.css` custom properties. Add new tokens before reaching for raw values.
- **HTML:** every page includes the four base stylesheets in order: tokens → reset → global → components. Use semantic landmarks (`<nav>`, `<main>`, `<section>`, `<footer>`) and a proper heading hierarchy.
- **JS:** vanilla only, no bundler. Use `defer`. Respect `prefers-reduced-motion`.
- **Accessibility:** skip-to-content link, focus-visible rings, WCAG AA contrast.
- **Copy:** real, on-brand copy. No Lorem ipsum.
- **Responsive:** verified at 375px / 768px / 1280px.

---

## License

Private. © Focus Frameworks.
