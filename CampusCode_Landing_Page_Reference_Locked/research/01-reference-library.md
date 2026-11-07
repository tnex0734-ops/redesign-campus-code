# Research Reference Library — CampusCode Public Landing Page

Research checked: 7 November 2026.

This is a curated reference list, not a moodboard dump. Each link is included because it informs a specific part of the CampusCode landing page. Borrow interaction and craft principles, not brand assets or page layouts wholesale.

## A. Product and source of truth

### CampusCode — current public website
https://www.campuscode.co.in/

Use this as the factual source for:
- current product description;
- current routes and navigation;
- existing page sections;
- actual event categories and event links;
- authentic CampusCode logo/brand assets;
- existing copy worth preserving or clarifying.

Current homepage content available in the live page includes the central statement “Build. Compete. Ship.” and describes CampusCode as a connected space for students, teams, organisers and hackathons. Its process is Discover → Team up → Build → Ship. Verify the current page and repository again at implementation time; event states and details can change.

## B. Direct visual references from the user

### 01 — Suspended interactive hero
Local asset: `assets/01-suspended-interactive-hero-reference.png`

What to study:
- airy pale canvas;
- central strong headline;
- small, vivid objects suspended on fine vertical cords;
- spatial balance around the headline;
- objects that invite hover/touch interaction;
- clear conversion buttons.

Translate the objects into CampusCode artefacts (challenge, people, project, calendar, award, community), not the original site's wallet/card/finance metaphors.

### 02 — Botanical / Natural Codes moodboard
Local asset: `assets/02-botanical-herbarium-moodboard.png`

What to study:
- warm paper and scientific grid;
- layered full-colour and translucent leaves;
- fine anatomical vein illustration;
- high-contrast editorial serif type;
- olive/forest ink and antique brass details;
- sparse field-notes and registration marks.

Do not copy the Corona wordmark, alcohol copy, brand identity or exact leaf illustration. Create original botanical art for CampusCode.

## C. Award-recognised visual experience references

### CSS Design Awards — Website of the Year 2025 gallery
https://www.cssdesignawards.com/woty2025/

Useful for exploring a curated set of recognised work. The 2025 list includes Dropbox Brand, The Symphony of Vines, Exat Typeface, Bruno's Portfolio and other work.

### Dropbox Brand — Daybreak Studio
https://www.cssdesignawards.com/woty2025/sites/dropbox-brand/
https://daybreak.studio/

CSS Design Awards lists Dropbox Brand as its 2025 Website of the Year winner, describing interactive play, artful detail and animated/scroll-driven behaviour. Study how playful interactions are connected to the brand story and how sections reveal information. Do not copy Dropbox's brand style or graphics.

### The Symphony of Vines — Unseen Studio
https://symphonyofvines.unseen.co/
https://www.cssdesignawards.com/2025-woty-site.php?name=the-symphony-of-vines

CSS Design Awards identifies the site as an interactive cinematic journey. The live experience uses chapters and cursor/press-and-hold interactions. Study how a natural subject is made interactive and how one visual story carries across multiple sections. CampusCode should take the idea of purposeful natural interaction, not recreate its WebGL scale or vineyard narrative.

### Exat Typeface — CSS Design Awards 2025
https://www.cssdesignawards.com/woty2025/

Study typographic presentation, type specimen logic and how typography itself can become part of the interaction. Use the actual award gallery to find the Exat Typeface entry.

## D. Brand system inspiration

### Sarvam AI — Brand
https://www.sarvam.ai/brand

Study the reasoning behind a coherent identity system: a design language with a clear construction logic, meaningful geometry, movement and a grounded contemporary character. The page describes a layered, mandala-influenced system and explains how motion communicates transformation. For CampusCode, borrow the idea that motifs, typography, content and movement should follow one visual logic. Do not copy Sarvam's monogram, blue-orange spectrum, logo or exact patterns. The CampusCode palette remains paper, olive, forest, leaf and brass.

### Sarvam — brand exploration
https://brand.sarvam.dev/

Useful for understanding how the brand story, geometry, wordmark and visual system are explained as one connected system.

## E. Technical animation references

### GSAP ScrollTrigger — official documentation
https://gsap.com/docs/v3/Plugins/ScrollTrigger/

Use for viewport-triggered reveals, scroll-linked SVG drawing and section timelines. ScrollTrigger supports viewport-based triggers, callbacks, scrub and responsive match-media setups. Do not overuse pinned scenes or force scroll-jacking.

### GSAP + React — official documentation
https://gsap.com/resources/React/

Use `@gsap/react` and `useGSAP()` for React lifecycle-safe animation setup. Use scoped selectors and `contextSafe()` for GSAP animations created from interaction handlers. Clean up timelines and ScrollTriggers on unmount.

### Lenis — official repository and integration notes
https://github.com/darkroomengineering/lenis
https://github.com/darkroomengineering/lenis#gsap-scrolltrigger

Lenis is designed around native scroll and has documented GSAP ScrollTrigger integration. If used, run one synchronised frame loop; do not combine autoRaf with a separate manually driven ticker. Test browser anchors, touch, nested scroll areas and reduced motion.

### GSAP official AI skills
https://github.com/greensock/gsap-skills

Official Agent Skills for GSAP core, timelines, ScrollTrigger, React integration, performance and related plugins. Use the `gsap-react`, `gsap-scrolltrigger` and `gsap-performance` skills for this page.

## F. GitHub agent design skills

### Anthropic — Frontend Design
https://github.com/anthropics/skills/tree/main/skills/frontend-design

Use to reinforce an intentional, non-template design process, distinctive visual direction, typography, composition and avoidance of generic generated aesthetics.

### Vercel — Web Design Guidelines
https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines

Use to audit accessibility, focus states, forms, animation, typography, images and interface performance.

### UI/UX Pro Max
https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

Use as an additional searchable design reference for layouts, colour, font pairings, accessibility and stack-specific UI patterns. Treat it as a supporting reference; the two user-supplied images and the CampusCode visual brief remain the controlling art direction.

## G. How to use these references correctly

1. First satisfy the two supplied image references. They are the primary art direction.
2. Use CampusCode's current website for product facts, navigation and existing content.
3. Use Sarvam as inspiration for coherent, grounded visual-system thinking—not as the colour/shape source.
4. Use award-recognised sites to study motion craft, narrative pacing and typography—not to create an imitation.
5. Use GSAP and Lenis official docs for implementation details, not random snippets from tutorials.
6. Use GitHub skills as design/engineering assistance, not as permission to ignore the approved visual direction.
7. Verify links, packages, route destinations and event data again at implementation time.

## Evidence notes

- CampusCode's current homepage: https://www.campuscode.co.in/
- CSS Design Awards 2025 winners: https://www.cssdesignawards.com/blog/2025-website-of-the-year-winners/430/
- Dropbox Brand nominee detail: https://www.cssdesignawards.com/woty2025/sites/dropbox-brand/
- Symphony of Vines official experience: https://symphonyofvines.unseen.co/
- Sarvam brand system: https://www.sarvam.ai/brand
- GSAP React guidance: https://gsap.com/resources/React/
- Lenis GSAP integration: https://github.com/darkroomengineering/lenis
