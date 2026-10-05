# Acsia Technologies — Design System

> **Tagline:** *Technology that drives Tomorrow*
> **Brand core:** Simplifying the Complex · **Personality:** Expert / Master
> Source of truth: **Acsia Brand Manual** (Updated April 2026, Confidential) — `uploads/br-compressed.pdf`

This repository is a working design system distilled from the Acsia Brand Manual. It contains brand foundations (colour, type, tone), reusable CSS tokens, design-system preview cards, and high-fidelity UI kits that recreate Acsia's product surfaces so design agents can produce on-brand interfaces, slides and assets.

---

## 1. Company & Product Context

**Acsia Technologies Private Limited** is a global provider of **automotive software** powering **Digital Cockpits & Displays, e-Mobility and Telematics**. They develop solutions that simplify complex problems and create safer, sustainable and more compelling driver and passenger experiences, working with top automobile manufacturers and Tier-1 suppliers.

**By the numbers (Fact Sheet, March 2026):**
- **11 years** transforming mobility
- **400+ engineers** at work
- **6 million vehicles** run on Acsia code
- **40 live production programs**
- **20 OEM engagements** · **15 Tier-1 engagements**

**Solutions — four offerings:**
- **Digital Cockpit & Display** — software for Instrument Clusters, Head-Up Displays, In-Vehicle Infotainment, Rear-Seat Entertainment and Control Centres on Android, Linux or QNX-based SoCs and AUTOSAR / Non-AUTOSAR RTOS-based MCUs.
- **e-Mobility** — AUTOSAR-compliant software for e-Mobility ECUs such as power conversion units, battery management units and on-board chargers.
- **Telematics** — software for telematics ECUs and telematics cloud applications that manage data securely and efficiently.
- **LiLA** — an **Agentic AI Platform** for intelligent management of requirements, standards & compliance, defects and testing, delivering significant gains in efficiency, productivity and cost savings.

**Solution Accelerators** (in-house platforms that speed delivery):
- **SABATON** — automotive-grade Linux software platform built on **Rust** for secure, high-performance ECUs and TCUs.
- **TITAN** — a highly customizable, extensible CI/CD/CT pipeline built in-house with Robot, Jenkins and Python.
- **SHARP** — a System Health Tracer and Profiler (CPU load, interrupt load, memory/stack consumption, NVM usage) that plugs into any CI/CD pipeline.
- **MAYAAVI** — a virtualized Linux & Android development platform, fully deployable on AWS.
- **XACT** — a Telematics cloud backend platform for OTA and EV charging stations.

**Capabilities:** AUTOSAR · Android Automotive · Automotive Linux · QNX · HMI, Middleware & Platform Development · Vision Systems · AI/ML · Model-Based Development · CI/CD/CT · Ambient Lighting · System Engineering · Test & Test Automation · Performance Optimisation · Cybersecurity & Functional Safety.

**Footprint:** offices across the **United States** (Detroit), **Germany** (Munich, Karlsruhe), **Japan** (Hyogo) and **India** (Thiruvananthapuram GHQ & R&D Centre, Bengaluru, Pune, New Delhi). Global HQ: Acsia Technologies (P) Ltd., 7th Floor, Niagara, Embassy Taurus TechZone, Technopark Phase III SEZ Campus, Thiruvananthapuram, Kerala, India.
**Web:** www.acsiatech.com · **Contact:** enquiry@acsiatech.com / marcom@acsiatech.com
**Founder & CEO:** Jijimon Chandran.

### Brand strategy (from the manual)
- **Brand Personality:** Expert / Master.
- **Brand Values:** Expertise, Credibility, Focus, Mastery, Excellence, Integrity.
- **Brand Core:** "Simplifying the Complex."
- **Visual world:** "Images that are futuristic and professional. Show people interacting with automobiles."
- **Mission:** To drive the automotive industry forward by creating caring and delightful experiences.
- **Purpose:** We develop technologies that simplify complex challenges and expand what's possible inside a vehicle.
- **Vision:** To transform mobility with big ideas in automotive technology.

### Sources used to build this system
- `uploads/br-compressed.pdf` — **Acsia Brand Manual**, 51 pages. All colour values, type families, tone-of-voice, logo rules, imagery direction and the icon inventory below are taken directly from it.
- `uploads/factsheet.pdf` — **Acsia Fact Sheet (March 2026)**, 4 pages. Source for the current company overview, metrics, the four Solutions, the Solution Accelerators (SABATON/TITAN/SHARP/MAYAAVI/XACT), the capability list and the global footprint above.
- No codebase, Figma file or live-site export was provided. UI kits here are reconstructed from the brand manual's foundations + Acsia's documented product domains (automotive HMI, corporate website). **If you have the source code or Figma for acsiatech.com or any product, attach it — the kits should be re-derived from real source.**

> ⚠️ **Asset extraction note.** The brand manual PDF embeds its logo as vector art and its photography as heavy raster backgrounds that could not be rendered/extracted in this environment. **No official logo, photography, illustration or icon files were recoverable from the PDF.** See `assets/README.md` for exactly what is needed. Logo lockups in this system are typographic placeholders built to the manual's rules — they must be replaced with the official artwork.

---

## 2. Content Fundamentals

How Acsia writes. Pulled directly from the manual's **Tone of Voice** and brand copy.

**Voice in one line:** *Confident, clear and honest — an expert who simplifies the complex and never shows off.*

**Tone-of-voice principles (verbatim intent):**
- Confident, clear and honest.
- Avoid jargon when possible.
- Come across as people who know their stuff.
- Quietly ambitious; always ready to take on a challenge.
- Never arrogant, but never shy to own our achievements.
- Create value for all; inclusive and respectful to everyone.
- Easy to get along with; we have a sense of humour.

**Person & address:** Inclusive **"we" / "our"** for Acsia; address the reader/customer as **"you"**. Employees are **"Acsians"** and "brand ambassadors." Warm and human ("Hi", "We are delighted…"), but precise.

**Casing:**
- Headlines and titles use **Title Case** or sentence case — *not* all-caps for long phrases.
- **Eyebrows / small labels / kickers** are the place for UPPERCASE with wide letter-spacing.
- The tagline is locked: **"Technology that drives Tomorrow"** — note "drives" lowercase, "Tomorrow" capitalised. Reproduce exactly.

**Punctuation & style:**
- Confident short declaratives, often stacked for rhythm: *"They don't just go places. They push the limits of imagination."* / *"Confronting challenges. Breaking barriers. Inventing new in-roads."*
- British/international spelling: **colour, optimisation, programme, centre.**
- Em dashes and bullet points (`▪`) used in formal documents.

**Vocabulary that's "on-brand":** simplify, complex, mastery, expertise, futuristic, sustainable, safe, engaging, delightful, caring, drive, mobility, in-vehicle, experience.

**Emoji:** **Not used.** Acsia's register is professional/enterprise. Do **not** introduce emoji into product UI, slides or marketing copy. Iconography carries visual meaning instead.

**Vibe / examples:**
- Aspirational-but-grounded: *"The finest automobiles are dream machines… the most advanced technology is indistinguishable from magic. But magic, like technology, demands intensive effort to get it right, every time."*
- Capability-forward and plain in product/sales copy: *"Ushering in a New Era of In-Vehicle Experiences."* / *"Enabling significant enhancement in SW development efficiency and productivity."*
- Always closes on the brand line: **"Acsia. Technology that drives Tomorrow."**

---

## 3. Visual Foundations

The look: **clean, technical, futuristic and premium** — a near-monochrome blue system anchored by deep **Midnight Blue** and energised by a single vivid **Summer Sky** accent, over generous white space. Think automotive-grade precision: lots of air, crisp hairlines, restrained colour, confident type.

**Colour vibe.** Cool, blue-led, high-clarity. **Summer Sky `#36abff`** is the one hero accent; **Midnight Blue `#1e3659`** grounds dark surfaces, headers and footers; warm neutrals (**Sea Salt**, **Beach Sand**) soften large light areas so it never feels cold/sterile. Use blue with discipline — accents, key actions, data highlights — not large saturated fills everywhere. **One** accent blue per composition; avoid rainbow gradients. (See `colors_and_type.css` and the colour cards.)

**Imagery.** "Dynamic landscapes, sophisticated vehicle interiors and human interactions — capturing the essence of mobility, innovation and user experience." Futuristic and professional; show **people interacting with automobiles** and premium cockpit interiors. Photography is **cool-toned, crisp, high-key**, often with blue cast or blue-hour lighting; clean and aspirational (automotive-marketing grade), not gritty or heavily grained. Use full-bleed hero photography for impact; pair with a Midnight-Blue overlay/scrim when text sits on top.

**Backgrounds.** Predominantly **Crisp White** and **Sea Salt** for documents/UI; **Midnight Blue** for dark/inverse sections and footers. Backgrounds are mostly flat and clean. When depth is wanted, use a subtle **Midnight→deeper-blue** vertical gradient on dark sections only — never garish, never purple. Avoid heavy textures; the brand reads engineered and minimal.

**Type.** **IBM Plex Sans** is the system's workhorse (Headlines, Titles, Body and Long text per the manual). It's technical, neutral and humanist — fitting for engineering. Headlines are tight (negative tracking, bold); body is comfortable at 1.6 line-height. Mono (**IBM Plex Mono**) for code, specs and data read-outs. Commercial alternates named in the manual: **Neue Haas Grotesk Display Pro** (headline) and **Nimbus Sans** (body).

**Spacing & layout.** 4px base grid. Generous, structured whitespace; clear column grids; content capped around **1200px**. Section rhythm is roomy (64–96px vertical). Fixed/sticky top nav on web. Alignment is precise — this is an engineering brand, so things line up.

**Corner radii.** Moderate, not pill-soft everywhere. Cards/inputs ~**10px**; large feature panels ~**16–24px**; pills/tags fully rounded. Avoid heavy skeuomorphism.

**Cards.** Crisp white surface, **1px hairline border** (`--border`) and a **soft, low shadow** (`--shadow-sm/md`) — lifted but flat-modern, not glossy. Inner padding 20–32px. On dark sections, cards become Midnight-700 raised surfaces with subtle blue borders.

**Borders & hairlines.** Thin 1px hairlines in cool grey (`--line-ink`) divide content. Accent underlines / left rules use Summer Sky sparingly for emphasis.

**Shadows / elevation.** Subtle and cool-tinted (shadows carry a hint of Midnight Blue, not pure black). Four-step scale (`--shadow-xs → lg`) plus a `--shadow-brand` blue glow reserved for primary CTAs / key highlights.

**Transparency & blur.** Used sparingly and purposefully: frosted (backdrop-blur) sticky nav over content; Midnight-Blue scrims over hero photography for legibility; faint blue washes (`--brand-wash`) behind highlighted stats. Not a "glassmorphism" brand — keep it tasteful.

**Animation.** Restrained and precise — this is a premium, trustworthy brand, not a playful one. Smooth **fades and short slides** (8–16px), gentle scale on hover. Easing: ease-out / `cubic-bezier(0.22,0.61,0.36,1)`, durations **150–280ms**. **No bouncy/elastic motion, no infinite decorative loops** on content. Motion should feel engineered and calm.

**Hover states.** Buttons darken to `--summer-sky-600` (primary) or fill with brand wash (secondary); cards lift one shadow step + 1–2px translateY; links gain Summer-Sky underline. Subtle, ~150ms.

**Press / active states.** Slight darken **and** a small scale-down (~0.98) or translateY(1px) — a tactile "press." No colour-shift to off-brand hues.

**Focus states.** Visible 2–3px Summer-Sky focus ring (`--focus-ring`) with a small offset — accessibility is non-negotiable for an automotive-safety brand.

**Protection / legibility.** Over photography, use a Midnight-Blue gradient scrim (bottom-up or full) rather than coloured capsules behind text. Logo always gets clear space (manual: use the height of the "i" as the minimum margin) and is never boxed.

---

## 4. Iconography

**What the manual specifies.** The brand maintains its **own curated icon library** ("Download Icons") — a single, consistent set covering the company's domains. The documented inventory (page 16) includes, among ~60 icons:

> Artificial Intelligence (AI) · Machine Learning (ML) · Telematics · Embedded Software · Connected Vehicles · Autonomous Driving · Cybersecurity · Big Data · Cloud-based Solutions · Digital Cockpit / Instrument Cluster · Infotainment / HMI / Display · Software-Defined Vehicle (SDV) · Electric Car · Functional Safety · Verification & Validation · Performance Optimisation · Internet of Things (IoT) · Quality Assurance · Agile Development · Integration · Workflow Management · Innovation · Partnerships · Networking · Leadership · Vision · Mission · Values · Purpose · Metrics · Reports · Sustainability · Knowledge Base · Certifications · Map Markers · plus social marks (LinkedIn, YouTube, Twitter/X, Instagram, Blog) and editorial/event icons (Webinars, Workshops, Conferences, Hackathons, Success Stories, Recognition).

**Style.** The set is themed around automotive technology and corporate capability — a **single coherent line/mono style**. Icons are functional and technical, matching the clean engineering aesthetic; **no emoji, no multicolour spot illustrations as icons.** Social icons use their standard glyphs.

**Approach in this system.** The official Acsia icon files were **not recoverable from the PDF**. As a faithful substitute we use **[Lucide](https://lucide.dev)** — an open-source line-icon set with a consistent ~1.75–2px stroke, rounded joins, and excellent coverage of the tech/automotive/UI concepts above (`cpu`, `car`, `battery-charging`, `radio`, `shield-check`, `cloud`, `gauge`, `git-branch`, `bot`, `chart-line`, `map-pin`, social marks, etc.). It is loaded from CDN in the kits:
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```
> ⚠️ **Substitution flagged.** Lucide approximates the brand's line style but is **not** the official Acsia icon set. Replace with the real icon library when available (see `assets/README.md`). Match stroke weight and corner treatment when swapping.

**Emoji / Unicode as icons:** never. Use the icon set (or, for data UIs, mono glyphs from IBM Plex Mono).

---

## 5. Repository Index

| Path | What it is |
|---|---|
| `README.md` | This document — context, content & visual foundations, iconography, index. |
| `colors_and_type.css` | All design tokens: brand + semantic colours, type families/scale, spacing, radii, shadows, semantic type classes. **Import this first.** |
| `SKILL.md` | Agent-Skills manifest so this system can be used as a downloadable skill. |
| `assets/` | Logos, imagery, illustrations, icons. See `assets/README.md` for the **shopping list of official files still needed**. |
| `fonts/` | Font notes. Primary type (IBM Plex Sans/Mono) loads from Google Fonts; commercial alternates documented. |
| `preview/` | Design-system **preview cards** (colours, type, spacing, components) shown in the Design System tab. |
| `ui_kits/website/` | **Marketing website** UI kit — corporate acsiatech.com surfaces (hero, nav, capability cards, footer). `index.html` + JSX components. |
| `ui_kits/digital-cockpit/` | **Digital Cockpit HMI** UI kit — in-vehicle infotainment / cluster (the core product domain). `index.html` + JSX components. |

### UI kits
- **`ui_kits/website`** — Acsia's corporate web presence: sticky frosted nav, full-bleed hero with scrim, capability/solution cards, stats band, CTA, dark footer.
- **`ui_kits/digital-cockpit`** — A futuristic in-vehicle HMI: home cockpit with map, climate, media, EV charge status and drive modes — Acsia's actual product space.

> Both kits are **reconstructions from the brand manual + product domain**, not from source code. Re-derive from real source (code/Figma) when provided.

---

*Maintained by design agents from the Acsia Brand Manual (April 2026). © Acsia Technologies. Internal — not for external circulation.*
