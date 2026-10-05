# Assets — official files still needed

The Acsia Brand Manual PDF stores its logo as **vector art** and its photography/illustrations as **heavy raster backgrounds** that could not be rendered or extracted in this build environment. As a result, **no official binary assets were recoverable.** Everything visual in this system is either a CSS/HTML reconstruction (logo lockups) or a flagged open-source substitute (Lucide icons, placeholder image slots).

Please provide the following official files (SVG preferred for logos/icons, high-res PNG/JPG for photography) so the system can be made pixel-perfect:

## Logos (highest priority)
- [ ] **Acsia primary logo** — the "acsia" wordmark **with its 4 dots** (the manual forbids using it without the 4 dots), full lockup, SVG.
- [ ] Logo on dark / reversed (white) version.
- [ ] Logo + tagline lockup ("Technology that drives Tomorrow").
- [ ] Monochrome / 1-colour version.
- [ ] Clear-space & minimum-size reference.
- [ ] Acsia's Employee Engagement Initiative mark + any sub/other logos.

## Icons
- [ ] The official **Acsia icon library** ("Download Icons", ~60 icons — AI, ML, Telematics, Digital Cockpit, SDV, Cybersecurity, Functional Safety, etc.). Currently substituted with **Lucide**.

## Photography & illustration
- [ ] Hero photography — vehicle interiors / cockpits, people interacting with automobiles, dynamic landscapes (cool-toned, crisp).
- [ ] The brand **illustration** set (manual p.16).
- [ ] Any product screenshots of real Digital Cockpit / IVI / cluster UIs, and the LiLA AI Copilot Suite.

## Fonts
- [ ] **Neue Haas Grotesk Display Pro** (45/55/65/75) — commercial; provide licensed webfonts if it must be used for headlines. (System currently uses IBM Plex Sans, which the manual also specifies for all titles + body.)
- [ ] **Nimbus Sans** — commercial body alternate.

## Product source (to rebuild UI kits properly)
- [ ] Source code or Figma for **www.acsiatech.com** and any product HMI — so the UI kits can be re-derived from real source rather than reconstructed from brand foundations.

Drop files into this folder (and `fonts/`) and re-run, or tell the agent where they live.
