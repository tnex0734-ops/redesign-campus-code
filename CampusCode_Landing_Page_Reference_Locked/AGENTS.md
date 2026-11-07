# CampusCode Public Landing Page — Agent Instructions

## Mission

Create an original, conversion-focused public landing page for CampusCode, the student hackathon and innovation platform at https://www.campuscode.co.in/.

The user has supplied two visual references. The page must be clearly and deliberately derived from their **specific visual language**:

- `assets/01-suspended-interactive-hero-reference.png`: a pale, airy website hero with suspended UI-like objects on fine vertical cords. The objects are spaced around a strong central headline, brightly differentiated, tactile and responsive to a hand/pointer.
- `assets/02-botanical-herbarium-moodboard.png`: a warm botanical-paper canvas, fine scientific grid, overlapping solid and translucent leaves, detailed leaf-vein line drawings, olive editorial typography, antique gold details, botanical/specimen annotations and a refined high-contrast serif word treatment.

**The intended result is a hybrid, not a choice between the two.** The hero should carry the suspended-object composition from reference 01 and the botanical specimen illustration, paper/grid texture, colour and editorial typographic attitude from reference 02. Later sections should extend the herbarium / natural-code language rather than suddenly becoming a conventional SaaS website.

## Scope boundary

This phase is only the public marketing landing page. Do not redesign or modify authenticated dashboard screens, event workspaces, login, registration, backend APIs, database models or other signed-in experiences. Reuse existing routes/components only where required for public CTAs.

## Mandatory preflight

Before coding:

1. Inspect the repository structure, `package.json`, framework, router, public entry point, CSS system, design tokens and existing components.
2. Inspect current CampusCode homepage content and the supplied reference images.
3. Identify existing logo and wordmark assets; use the real logo without redrawing or distorting it.
4. Inspect available event data/API and actual public route destinations. Do not invent paths, event data or claims.
5. Check existing dependencies and animation lifecycle conventions.
6. Produce an implementation plan with exact files to create/change, section sequence, asset plan, animation architecture, dependencies, and risk notes.
7. Do not install unnecessary dependencies or replace the framework.

## Product and conversion goals

Audience: students who want to discover hackathons, meet collaborators, build projects, compete and ship work.

Primary conversion: get a visitor to explore a relevant hackathon.
Secondary conversion: join CampusCode.

Hero primary CTA: **Explore hackathons**.
Hero secondary CTA: **See how it works**.
Header: **Join CampusCode** as the visually strongest action; **Log in** remains a quieter text link.

The first viewport must answer:
- What is CampusCode?
- Who is it for?
- What can a student do here?
- What should they do next?

Use the current website's real story and language as the content source: “Build. Compete. Ship.”, a digital home for student innovation, and the four-step journey Discover → Team up → Build → Ship. Keep the writing clear and direct.

Never invent event counts, participant totals, partner logos, testimonials, rankings, prize amounts, winning teams, university endorsements or success claims. Pull live event data only when the repository already exposes a reliable public source. Otherwise show a truthful editorial state, not fake cards.

## Visual lock — no creative drift

### Reference 01: suspended hero

Recreate the *composition and physics*, not the exact pixels:
- generous pale canvas with restrained grid/texture;
- compact navigation at the top;
- strong central/near-central hero headline and short paragraph;
- approximately 5–7 small hanging artefacts distributed around the headline without obscuring it;
- each artefact connected to a fine cord from an upper anchor point;
- cords are thin and low contrast, objects are compact and have clear silhouettes;
- use a controlled mix of olive, leaf green, brass, ink, clay/coral and a small cobalt signal; avoid a rainbow or neon palette;
- object swing is gentle and physically plausible, with a top pivot and damping;
- hover/focus/tap creates a small, legible reaction and a real action.

Hanging objects should represent actual CampusCode concepts, such as a challenge, team, code/project, event calendar, award or community. Do not use generic finance icons from the first reference. Do not add decorative controls that have no action.

### Reference 02: herbarium / natural-code visual system

Carry through the whole page:
- warm pale botanical paper, not sterile pure white;
- ultra-fine square grid and occasional registration/crosshair marks;
- large botanical forms with solid translucent leaves layered under fine botanical vein drawings;
- leaf silhouettes should have natural asymmetry and visible structure;
- dark olive/forest typography and restrained brass/gold line accents;
- marginal botanical annotations, taxonomic-style notes and specimen numbers used sparingly as atmosphere, not repeated eyebrow headings;
- editorial negative space and deliberate asymmetry;
- image/illustration should feel like a studied specimen plate, not a flat icon or generic stock leaf.

Do not include any alcohol/beer content, Corona logo, trademark or text from the moodboard. Do not directly trace or reuse third-party branding. Create original CampusCode botanical artwork.

### Explicitly prohibited

- purple or violet gradients;
- blue-purple SaaS gradients;
- glassmorphism and frosted floating panels;
- glowing gradient orbs, random blobs or generic AI visuals;
- dark cyberpunk/neon styling;
- default template cards with identical rounded rectangles everywhere;
- repeated tiny all-caps eyebrow text above every heading;
- heavy use of rounded pills;
- random decorative shapes that are not part of the visual system;
- huge background words that harm readability;
- autoplay audio/video;
- full-page scroll-jacking or excessive pinning.

## Palette direction

Use this palette as the starting point; sample and calibrate it against the supplied moodboard and current CampusCode logo before finalising tokens:

- `--paper`: `#F1F0DE` — warm herbarium paper.
- `--paper-light`: `#F8F7EB` — light canvas / content surface.
- `--paper-shadow`: `#E6E3CB` — subtle alternate paper layer.
- `--ink`: `#252A1D` — deep olive-black text.
- `--forest`: `#3E4A2B` — primary dark botanical tone.
- `--olive`: `#667044` — secondary text, lines and botanical elements.
- `--moss`: `#8B9863` — muted foliage.
- `--leaf`: `#A8B878` — light plant detail.
- `--brass`: `#C6A84A` — fine highlight / line art, not body text.
- `--grid`: `#D5D2B8` — very low-contrast grid.
- `--clay`: `#C8794D` — rare hanging-object accent.
- `--signal-blue`: `#355E9B` — rare small interaction signal only.
- `--white`: `#FFFDF4` — cards / negative space.

Do not treat every token as equally prominent. The dominant experience should be paper + olive/forest + layered greens. Gold is a detail. Blue and clay appear only on a couple of suspended objects or state markers. Keep enough contrast for accessible text; gold is not a body-text colour.

## Typography direction

Primary pairing:
- **Instrument Serif** for the hero headline and occasional editorial section titles. Use it with a confident scale and careful line breaks; avoid the “luxury restaurant” feel by pairing it with purposeful sans UI.
- **Manrope** for navigation, body copy, buttons, event content and interface text. Use weights intentionally; do not default everything to semibold.
- **IBM Plex Mono** for a very small number of specimen coordinates, dates or reference IDs only. Never use it for repeated decorative eyebrow labels.

Optional pairing tests if Instrument Serif is too delicate in the real composition:
- **Fraunces + Manrope** — warmer, more organic, slightly expressive.
- **Bodoni Moda + DM Sans** — more dramatic editorial contrast; use only if small-screen readability holds.

Choose one system after checking actual rendering at desktop and mobile. Do not load all options. Do not default to Inter, Roboto, Space Grotesk or generic system type. Use the existing project's font-loading convention and provide robust fallbacks.

## Page structure and conversion

Follow `design/02-page-architecture-and-copy.md`. The site should tell a connected story:
1. concise header;
2. signature suspended-object + botanical hero;
3. thin moving/interactive idea strip or transition;
4. “Where students build” platform explanation with a large botanical/specimen visual;
5. Discover → Team up → Build → Ship process;
6. featured hackathons with verified data;
7. student collaboration / find your people section;
8. project-making / outcomes section, with no fabricated social proof;
9. final conversion CTA;
10. considered footer.

The page should feel editorial and crafted, but must still be understandable in seconds. Strong art direction must not bury the product or CTA.

## Motion and interaction

Use GSAP + ScrollTrigger for authored sequences. Use `@gsap/react` and `useGSAP()` when the existing project is React. Use Lenis only if the current architecture supports it cleanly and it does not compromise native scrolling/accessibility.

Important:
- one requestAnimationFrame/ticker loop only;
- if Lenis is connected to ScrollTrigger, follow Lenis's documented single-loop integration;
- clean up all timelines, ticker callbacks and ScrollTriggers;
- scope React animations with `useGSAP()` and use `contextSafe()` for user-triggered GSAP timelines;
- do not use a second animation library;
- use SVG paths and `stroke-dasharray` / `stroke-dashoffset` for leaf-vein drawing; avoid heavy WebGL/Three.js;
- use organic masks/clip-paths to reveal selected section artwork, not every section;
- any shape variation must be curated or seeded and repeatable, never random on every page load;
- pause/reduce motion when offscreen;
- respect `prefers-reduced-motion` by disabling Lenis interpolation, loops, parallax and scrubbed reveals, with all content visible immediately;
- preserve native anchor links and browser navigation;
- no scroll-jacking.

### Hanging artefact behaviour

- Anchor each string to a stable top point.
- The hanging object rotates around its top attachment point; never rotate around its centre.
- Idle movement: approximately 1–2 degrees, with varied long cycles and slightly offset phases.
- Hover/focus: a small extra swing, then a damped settle.
- Pointer/touch press: a short tug / return response; do not displace the target so far that the user misses it.
- Click: show a relevant preview or scroll to the relevant page section.
- Keyboard: Tab focus and Enter/Space must produce the same result as pointer activation.
- On touch: tap is the primary interaction; do not rely on hover.
- Respect reduced motion and stop continuous motion when the hero leaves the viewport.

## Interaction rules

- Every CTA and visible control must work.
- Every hanging artefact must have a meaningful accessible name and destination/action.
- Use semantic buttons and links, not clickable `div`s.
- Preview panels/popovers must close with Escape and have correct focus management.
- FAQ accordions must expose expanded state.
- Mobile menu must be keyboard-operable and trap focus only while it is intentionally modal.
- Do not put important copy only inside hover interactions.

## Implementation constraints

- Preserve existing framework, routes and conventions.
- Do not modify authenticated application areas or backend.
- Reuse existing logo asset and current page content where possible.
- Add only dependencies justified by the design; do not re-add packages already present.
- No unnecessary WebGL, three.js, shader stack or heavy scroll plugin.
- No analytics/tracking additions unless already configured and authorised.
- Do not deploy, publish, push or commit unless the user explicitly requests it.

## Definition of done

- The first viewport clearly resembles the provided suspended-object reference and the botanical moodboard in the same composition.
- There is a high-quality original botanical illustration, not a generic plant stock image.
- Hanging objects swing from the correct pivot and respond to hover, focus, click and touch.
- Each control performs a real action.
- Section reveals use a restrained but varied organic visual vocabulary.
- The page has a coherent, high-conversion content sequence.
- Layout works at 2048, 1920, 1440, 1280, 768, 390 and 360px.
- No horizontal overflow, broken links, console errors or hydration issues.
- Reduced-motion mode is fully usable.
- No fake events, metrics, testimonials or social proof.
- Existing login, registration and authenticated workspace remain untouched.
