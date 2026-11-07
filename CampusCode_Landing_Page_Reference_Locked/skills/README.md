# Recommended GitHub Agent Skills

These are supporting skills for the public landing-page work. They are not a substitute for reading `AGENTS.md` and the files under `design/`. The supplied references are the visual authority; skills provide implementation methods and review checks.

Review each repository and its instructions before installing. Use the skills CLI from the root of the CampusCode repository.

## 1. Anthropic — Frontend Design

Repository: https://github.com/anthropics/skills/tree/main/skills/frontend-design

Install:

```bash
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

Why:
- distinctive visual direction;
- purposeful typography, colour and layout;
- avoiding default template aesthetics;
- production-focused frontend implementation.

## 2. GSAP — Official GSAP AI Skills

Repository: https://github.com/greensock/gsap-skills

Install:

```bash
npx skills add https://github.com/greensock/gsap-skills
```

For Google Antigravity, if the CLI does not auto-detect the agent:

```bash
npx skills add https://github.com/greensock/gsap-skills --agent antigravity
```

Relevant skills in that repository:
- `gsap-core`
- `gsap-timeline`
- `gsap-scrolltrigger`
- `gsap-react`
- `gsap-performance`
- `gsap-utils`

Use them for top-pivot hanging-object movement, SVG draw/reveal sequences, ScrollTrigger lifecycle and animation performance.

## 3. Vercel — Web Design Guidelines

Repository: https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines

Install:

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
```

Why:
- semantic HTML and accessibility;
- keyboard focus and interaction states;
- forms and validation;
- reduced-motion behaviour;
- image, typography and performance review.

## 4. UI/UX Pro Max

Repository: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

Install:

```bash
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
```

Why:
- searchable UI patterns and design guidance;
- font-pairing and colour research;
- responsive and accessibility heuristics;
- stack-specific implementation guidance.

Important: use this to explore alternatives only. Do not let a generated palette, preset style or template override the exact botanical/suspended art direction in this pack.

## Suggested installation order

1. `frontend-design`
2. `gsap-skills`
3. `web-design-guidelines`
4. `ui-ux-pro-max`

Install only the skills you intend to use. Inspect any third-party skill before allowing it to modify project files. Do not install several overlapping animation or UI libraries because a skill recommends them.

## Technical packages to evaluate after repository audit

Do not install these blindly; first inspect `package.json` and the existing framework:

```bash
npm install gsap @gsap/react lenis
```

- `gsap` — timeline and ScrollTrigger animation.
- `@gsap/react` — lifecycle-safe GSAP integration for React.
- `lenis` — optional smooth-scroll layer.

If the project is not React, `@gsap/react` is not needed. If native scrolling already provides the right experience, Lenis is optional. Follow official docs:

- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://gsap.com/resources/React/
- https://github.com/darkroomengineering/lenis
