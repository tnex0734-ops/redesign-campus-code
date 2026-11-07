# Claude Code — CampusCode Landing Page Context

Before editing, read `AGENTS.md` and all documents under `design/`, `research/` and `skills/`.

The intended art direction is locked to the two supplied references:

- Reference 01: a light, minimal, suspended-object hero with fine hanging cords, a strong headline and small tactile objects that react to pointer/touch.
- Reference 02: warm herbarium paper, fine scientific grid, layered botanical leaves, precise vein line drawings, deep olive/forest ink, restrained brass details and sophisticated editorial serif typography.

Combine these two languages throughout the public landing page. Do not drift into generic SaaS, purple gradients, glassmorphism, glowing blobs, AI orbs or repeated eyebrow labels.

Work only on the public landing page. Preserve authentication, student dashboard, event workspace, APIs and backend. Inspect the repository and current live homepage first. Write an implementation plan before editing. Reuse verified routes and real event data; never invent proof or metrics.

Build the hero composition and botanical artwork deliberately. The hanging objects must have top pivots, subtle damped movement and accessible hover/focus/tap/click behaviour. Use GSAP + ScrollTrigger, `@gsap/react` when React, and Lenis only with a single synchronised loop and reduced-motion handling. Keep the experience fast and responsive.

Use the `AGENTS.md` definition of done as the acceptance criteria. Do not deploy, publish, commit or push.
