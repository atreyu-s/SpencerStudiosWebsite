# Spencer Studios

Portfolio and consulting site for Spencer Studios — independent software development based in Warren, Rhode Island.

Live at [spencerstudiosdev.com](https://spencerstudiosdev.com)

## Stack

- **Vite + React** — SPA, no router
- **Plain CSS** — custom properties, per-component stylesheets
- **Google Fonts** — Cormorant Garamond (headings), Inter (body)
- **Formspree** — contact form backend
- **Cloudflare Pages** — hosting and DNS, auto-deployed from GitHub

## Structure

```
src/
  tokens.css          # Design tokens (colors, nav height)
  index.css           # Global reset and typography
  App.jsx / App.css   # Root layout
  components/
    Nav               # Fixed top nav with mobile hamburger
    Hero              # Full-viewport landing with photo
    About             # Bio section
    Projects          # In-progress and past project cards
    Consulting        # Services and CTA
    Contact           # Formspree form and social links
  assets/
    profile.jpg       # Hero photo
    stoic.png         # Stoic Banner app icon
```

## Development

```bash
npm install
npm run dev
```

## Deployment

Push to `main` — Cloudflare Pages builds automatically.

- Build command: `npm run build`
- Output directory: `dist`
