# Fonts

## Primary — IBM Plex Sans / IBM Plex Mono  (Google Fonts, open-source)
The Acsia Brand Manual specifies **IBM Plex Sans** as Typography #1 (Headlines + all Titles) and Typography #3 (Headlines + Titles + Body + Long text) — i.e. the system workhorse. **IBM Plex Mono** is added here for code, specs and data read-outs.

Loaded in every HTML file via Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```
No local files required — Plex is free/open. If you need offline TTFs, download from https://github.com/IBM/plex.

## Commercial alternates (NOT bundled — licences required)
Named in the manual; provide licensed webfonts if these must be used:
- **Neue Haas Grotesk Display Pro** — 45 Light, 55 Roman, 65 Medium, 75 Bold — *Headline alternate.*
- **Nimbus Sans** — Light / Regular / Bold (+ italics) — *Body alternate (Helvetica-class).*

The CSS font stacks in `colors_and_type.css` list these first where licensed, then fall back to IBM Plex Sans → Helvetica Neue/Arial, so layouts hold up everywhere without the commercial files.

> ⚠️ **Substitution flagged:** This system runs on **IBM Plex Sans** by default (which the manual also sanctions for everything). Supply the Neue Haas / Nimbus webfonts only if brand wants them for display headlines.
