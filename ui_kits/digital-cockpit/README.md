# Digital Cockpit UI Kit — Acsia in-vehicle HMI

A high-fidelity reconstruction of an automotive **infotainment / HMI** screen — Acsia's core product domain (Digital Cockpit & Displays). A 1280×800 in-vehicle display, dark cockpit theme, Summer-Sky accents, large touch targets, IBM Plex Sans + Mono for data. **Reconstructed from the brand foundations + product domain — not from product source code.** Re-derive from real source when available.

## Run
Open `index.html`. The bezel auto-scales to fit the viewport. React + Babel + Lucide from CDN.

## Files
- `index.html` — in-vehicle bezel + screen; mounts the cockpit, status bar (portal), dock (portal); holds shared state (active view, media, climate, EV).
- `hmi-core.jsx` — `StatusBar`, `Dock`, `Panel`, `DriveModes`, `MapCanvas`, `HIcon` helper.
- `hmi-views.jsx` — `HomeView`, `NavView`, `MediaView`, `ClimateView`, `EVView`, `SimpleView` (+ widgets `NowPlaying`, `TempStepper`, `BatteryRing`).

## Screens (tap the dock to switch)
- **Home** — greeting, drive-mode selector (Eco/Comfort/Sport), live map card, and Now-Playing / Climate / Battery widgets that deep-link into their full views.
- **Navigation** — full map with search, recent destinations, live ETA card.
- **Media** — source tabs, album art, scrubber, transport controls, tappable queue.
- **Climate** — dual-zone steppers (±0.5°), fan speed, toggle grid (A/C, Auto, Defrost…).
- **Energy** — battery ring, charge stats, energy-flow chart.
- **Phone / Settings** — placeholder panels (left intentionally light — no source available).

## Interactions
Dock navigation · play/pause + queue selection (media state shared with Home) · climate temp steppers (shared with Home) · drive-mode + climate toggles · home widgets jump to full views.

## Notes
- The **map** is stylised CSS/SVG chrome (roads + active route), not a real map tile or photo.
- Icons are **Lucide** (substitute for the official Acsia icon set).
- This is a *plausible* Acsia HMI for prototyping — it is **not** a copy of a shipped Acsia product screen (none was provided). Replace with real product source/screens when available.
