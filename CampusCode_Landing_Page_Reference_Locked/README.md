# CampusCode — Reference-Locked Landing Page Design Pack

This pack contains the corrected visual direction, landing-page architecture, motion specification, responsive/accessibility constraints, research references, agent instructions and the two supplied reference images.

**There are no prompt files in this archive.** It is intended to sit in the CampusCode repository as working design context for a coding agent or frontend team.

## The direction is intentionally specific

The website must visibly combine both supplied references:

1. **Suspended interactive hero (reference 01):** a light, open, almost gallery-like web canvas; a centered headline and short supporting copy; a small set of vivid, tactile interface artefacts hanging from hairline cords; objects swing gently, react to hover/focus/tap and perform meaningful actions.
2. **Botanical specimen moodboard (reference 02):** warm pale botanical paper; fine scientific grid and registration marks; overlapping real-looking leaves and precise vein drawings; restrained olive/forest ink; aged brass/gold highlights; sophisticated high-contrast editorial typography; small specimen annotations at the margins.

Neither reference should be treated as a generic suggestion. These details are the visual constraints for the build. The landing page should be recognisably related to the images at first glance, while remaining an original CampusCode design.

## Contents

- `AGENTS.md` — project-wide agent instructions and non-negotiable visual guardrails.
- `CLAUDE.md` — Claude Code entry point, aligned with `AGENTS.md`.
- `design/01-visual-art-direction.md` — precise visual direction, layout, palette, typography and composition.
- `design/02-page-architecture-and-copy.md` — conversion-focused page sequence, content hierarchy and draft copy.
- `design/03-motion-and-interaction.md` — suspended objects, GSAP, SVG reveals, Lenis and interaction behaviour.
- `design/04-responsive-accessibility-performance.md` — breakpoints, mobile adaptation, accessibility and performance requirements.
- `design/05-artwork-and-asset-spec.md` — original botanical artwork and hanging artefact asset requirements.
- `research/01-reference-library.md` — research links and specific lessons from CampusCode, award-recognised work and technical references.
- `skills/README.md` — recommended GitHub agent skills and install commands.
- `assets/` — the exact supplied images, renamed for convenient use.

## How to use

1. Extract or copy this folder into the root of the existing CampusCode repository. Merge files carefully; do not overwrite application source files.
2. Keep both images in `assets/`. They are visual references, not ready-made page backgrounds.
3. Ask your coding agent to read `AGENTS.md`, `CLAUDE.md` (when using Claude Code), and every document under `design/` and `research/` before changing code.
4. Have the agent inspect the live site and the actual repository before proposing implementation changes.
5. Approve the implementation plan before the build begins.

## Scope

This stage is **only the public landing page**. Preserve the authenticated student experience, dashboard, event workspace, login/register flows, APIs, database and backend behaviour. Existing public navigation routes must be discovered from the repository and reused; do not invent route paths.

## Non-negotiables

- Match the supplied image references closely in composition, texture and interaction language.
- No purple gradients, generic SaaS gradients, glassmorphism, glowing orbs, random blobs, AI-themed stock visuals or cookie-cutter feature grids.
- Do not repeat tiny uppercase eyebrow labels above every section.
- Use a botanical specimen visual language, not a beer or alcohol theme. Do not use the Corona wordmark, logo, copy or product cues from reference 02.
- Use real CampusCode branding and verified event information only.
- The hanging objects must work as controls, not just decorative shapes.
- Every visual interaction must have a usable keyboard/touch equivalent.
- Keep the primary conversion action obvious and the site fast.
