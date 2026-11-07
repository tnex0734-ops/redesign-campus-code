# Research library and upstream skills

Research checked on 7 November 2026. Revisit official documentation before installing/upgrading packages because library APIs and skill contents can change.

## Brand and visual reference

### Sarvam AI brand guidelines
https://www.sarvam.ai/brand

The public brand notes a blue-to-orange spectrum used as a continuous visual language, deliberate transitions in light/tone, and circular/mandala-inspired construction. For CampusCode, borrow the principles (warm/cool balance, circular geometry, purposeful motion), not Sarvam's logo, exact assets or proprietary compositions. CampusCode must remain its own brand.

### User-provided dashboard moodboard
`reference-assets/dashboard-moodboard.png`

Use it as the visual target for application surfaces: warm neutral shell, distinct left rail, clear central content canvas, editorial serif feature titles, controlled amber hero surface, structured lists and restrained borders.

### Existing CampusCode screenshots
`reference-assets/current-state-contact-sheet.jpg` and `reference-assets/current-app-screens/`

Use these to understand current feature inventory and preserve existing product semantics/backend-connected states. The public marketing landing page is intentionally out of scope.

## High-quality upstream agent skills

These are upstream repositories, not files copied into this pack. Install only the skills relevant to the existing stack and inspect their license/README first.

### 1. Anthropic — Frontend Design
Repository: https://github.com/anthropics/skills/tree/main/skills/frontend-design

Install:
```bash
npx skills add anthropics/skills --skill frontend-design
```

Use for intentional art direction, typography, layout decisions and avoiding generic UI templates. It explicitly encourages deliberate choices grounded in the subject and user brief.

### 2. Vercel — React Best Practices
Repository: https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices

Install:
```bash
npx skills add vercel-labs/agent-skills --skill react-best-practices
```

Use for React/Next.js performance, data fetching, bundle size, render behaviour and component implementation. Apply only if the repo uses React/Next.js.

### 3. Vercel — Web Design Guidelines
Repository: https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines

Install:
```bash
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
```

Use as a final audit for accessibility, forms, focus, responsive behaviour, animation and web-interface quality.

### 4. Vercel — Composition Patterns
Repository: https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns

Install:
```bash
npx skills add vercel-labs/agent-skills --skill composition-patterns
```

Use when building flexible React primitives and avoiding components with many unrelated boolean props.

### 5. UI/UX Pro Max — optional community reference
Repository: https://github.com/haxsd/agent-skills/tree/main/skills/ui-ux-pro-max

Install only after reviewing the repository and current skill contents:
```bash
npx skills add haxsd/agent-skills --skill ui-ux-pro-max
```

Use as a searchable design reference for palettes, typography and platform guidance. It is a community skill, not a substitute for the supplied CampusCode moodboard or the actual design system.

## Libraries and implementation references

### GSAP
https://gsap.com/docs/v3/
https://github.com/greensock/GSAP

Use for complex, coordinated animation only. The authenticated app mostly needs small state transitions, not a scroll-driven showcase.

### GSAP React integration
https://github.com/greensock/react

`@gsap/react` provides `useGSAP()` and context cleanup. Use it for React components that genuinely require GSAP timelines. Clean up all animations and event callbacks.

Install only if needed:
```bash
npm install gsap @gsap/react
```

Use the repository's package manager rather than assuming npm.

### Motion Primitives
https://github.com/ibelick/motion-primitives

Optional source of component/micro-interaction ideas. It is not mandatory. Inspect dependencies, accessibility and compatibility before copying components. Do not add it just to add animation.

### Radix UI Primitives
https://www.radix-ui.com/primitives

Accessible primitives for dialogs, popovers, dropdowns, tabs, radio groups, switches, sliders and other interactions. Prefer the project's existing accessible component system; use Radix only where a suitable primitive is missing.

### Lenis
https://github.com/darkroomengineering/lenis

Lenis works with native scroll and can synchronise with GSAP. It is intentionally **not recommended as a global app-shell dependency** for CampusCode's authenticated workspace because forms, nested panels, tables and keyboard scrolling should remain predictable. Use native scrolling by default.

## Engineering reference

### Antigravity workspace rules
https://antigravity.google/docs/rules/

Antigravity discovers workspace instructions such as `AGENTS.md`/`GEMINI.md` and `.agents/rules/*.md`. This pack uses a root `AGENTS.md` for always-on project rules.

### Antigravity skills
https://antigravity.google/docs/skills

Workspace skills live under `.agents/skills/<skill-folder>/SKILL.md`. Each skill has YAML frontmatter with a name and description. This pack includes project-specific skills in that structure.

### Antigravity workflows migration
https://antigravity.google/docs/migration/workflows-to-skills

Prefer reusable agent skills for new workflows; legacy workflows are being migrated toward skills.

## Research interpretation

The moodboard is a visual reference, not a request to copy RevenueX's finance information architecture or scenic mockup literally. CampusCode should borrow its warm editorial panel language and use it to organise student actions. The product's own student journey and current server contract remain the source of truth for functionality.
