# Website UI Kit — Acsia corporate site

A high-fidelity reconstruction of Acsia's marketing web presence (acsiatech.com), built on the design tokens in `../../colors_and_type.css`. **Reconstructed from the brand manual + product domain — not from source code.** Re-derive from real source (code/Figma) when available.

## Run
Open `index.html`. React + Babel load from CDN; Lucide for icons; Google Fonts for IBM Plex Sans/Mono.

## Files
- `index.html` — assembles the full homepage and wires the contact slide-over.
- `primitives.jsx` — `AcsiaLogo` (⚠ placeholder lockup), `Btn`, `Tag`, `Eyebrow`, `Icon`.
- `sections.jsx` — `SiteNav`, `Hero`, `Capabilities`, `Platforms`, `Stats`, `CtaBand`, `SiteFooter`, `ContactPanel`.
- `image-slot.js` — user-fillable image placeholder (drop a real cockpit/vehicle photo into the hero).

## What it demonstrates
- **Sticky frosted nav** with hover underlines + primary CTA.
- **Hero** — Midnight-Blue gradient, eyebrow + locked tagline headline, dual CTAs, stat row, photo slot with a floating safety badge.
- **Capability cards** — the three product pillars (light + dark), hover lift, tech tags.
- **Platforms** band, **stats** band (left-rule accent), gradient **CTA**, dark **footer** with social marks.
- **ContactPanel** — interactive right slide-over with focus-ring form fields.

## Interactions
"Get in touch" (nav / hero / CTA) opens the contact panel; close via ✕ or scrim.

## Notes / to replace
- Logo is a **typographic placeholder** — swap `AcsiaLogo` for official artwork.
- Icons are **Lucide** (substitute for the official Acsia icon set).
- Hero photography is an empty image-slot — drop in real cool-toned vehicle imagery.
