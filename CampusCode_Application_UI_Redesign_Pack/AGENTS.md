# CampusCode Application Redesign — Workspace Rules

These rules apply to the CampusCode **authenticated application redesign**.

## Scope and non-negotiables

- Work on the authenticated student app and its login/registration flows only.
- Do not edit, replace, or rebuild the public marketing homepage/landing page. The landing page is a separate workstream.
- Preserve backend services, API endpoints/contracts, database schema, authentication and authorization logic, environment variables, deployment configuration and existing production data.
- Do not invent endpoints, fields, event rules, participant states, certificates, AI outputs or successful operations.
- Do not deploy, push to GitHub, change remotes, publish a preview, or perform destructive Git operations.
- Do not overwrite user work. Inspect `git status` and the existing branch before editing. Do not discard uncommitted changes.
- Do not add dependencies until the existing package manager, installed libraries and project architecture have been audited. Prefer existing dependencies and patterns.

## Product and UX invariants

- Organise the product around the student's event journey, not around disconnected AI tools.
- Primary navigation should converge on Home, Explore Events and My Events, subject to the existing routing constraints discovered in the audit.
- Event-level work belongs in a contextual Event Workspace: Overview, My Team, Submission, Results and Updates. Rules/FAQs must be easy to reach from Overview and assistant context; they do not need to become another permanent primary destination.
- HackMate belongs in registration/team formation and My Team.
- IdeaCheck belongs in the project submission/preflight flow.
- RuleBot belongs in event details, official rules and contextual help.
- Use one CampusCode Assistant shell with relevant page/event context; do not create three isolated chat products.
- Certificates belong under Profile/Achievements, with an actionable notification when actually issued.
- Digital ID belongs under Profile, with quick access from the profile menu where appropriate.
- Every important action must have a visible pending/success/error state and a clear recovery path.
- Never present mock/demo data as live backend data. Keep demo fixtures isolated and labelled.

## Visual direction

- Treat `reference-assets/dashboard-moodboard.png` as the primary dashboard visual reference.
- Translate its composition into a practical application UI: warm, paper-like neutral surfaces; an ivory/stone sidebar; a clear light content canvas; restrained amber/saffron feature surfaces; deep ink typography; subtle borders; editorial serif accents paired with highly legible sans-serif UI text; generous but disciplined spacing.
- Interpret Sarvam's publicly described design principles as inspiration: a continuous blue-to-orange tonal spectrum and deliberate circular/mandala-like geometry. Do not copy Sarvam's logo, exact brand assets, proprietary compositions or claim CampusCode is affiliated with Sarvam.
- Preserve the existing CampusCode wordmark/logo and recognisable identity. Retain existing lime/violet brand marks as controlled accents only if they are part of the current brand assets/design-system contract.
- The final palette, typography, radius, spacing and component tokens must be reconciled with the authoritative design system the user will provide. `docs/05-design-system-bridge.md` is provisional, not the final source of truth.
- Do not use purple gradients, neon/glow washes, excessive glassmorphism, noisy gradients, generic AI visuals, or decorative bento-card spam.
- Avoid tracked all-caps eyebrow text above every page title. Use clear sentence-case page titles and descriptive labels.
- Do not put scenic photography behind the entire authenticated app. The moodboard's desert backdrop is presentation art direction; prioritise readable neutral product surfaces. Use photography only where product content genuinely benefits from it.
- Do not skew, rotate or perspective-distort the live application shell. The moodboard is a tilted product mockup, not a layout instruction.

## Interaction and motion

- Keep the application calm, responsive and task-focused. Micro-interactions should clarify state, hierarchy or affordance.
- Use small star/sparkle moments sparingly: assistant arrival, successful milestones, achievement/certificate issuance or an intentional empty-state accent. Never scatter stars across every screen.
- Prefer CSS transitions or the motion library already installed for ordinary UI state transitions. Use GSAP only for complex, justified sequences and clean up all animations on component unmount.
- Respect `prefers-reduced-motion`; no essential information or status may depend on animation.
- Keep native browser scrolling for authenticated dashboards, forms and data-heavy pages. Do not install Lenis globally for the app shell. Smooth-scroll libraries can harm expected form, nested-scroll and accessibility behaviour; add only if a clearly justified, isolated use case is approved.
- No scroll-jacking, fake loading delays, looping decorative animation, excessive parallax or animation that delays user input.

## Engineering and data

- Audit framework, router, package manager, component library, styles, data-fetching layer, auth/session handling, server contracts and current tests before implementation.
- Build a component/token layer that maps to the existing design system; do not scatter arbitrary hex values through components.
- Separate view state from backend state. Use adapters/selectors where needed without changing API schemas.
- Preserve event-specific rules from the canonical backend source. Registration and submission validation must be driven by actual event configuration, never hardcoded assumptions.
- Use real API responses where connected. For unavailable endpoints, show a deliberate unavailable/empty state or a clearly labelled local demo fixture; do not simulate a successful live operation.
- Use semantic HTML, proper labels, keyboard navigation, visible focus, accessible dialogs/menus and text alternatives for status indicators.
- Keep forms resilient: inline field errors, helpful summary where appropriate, preserve values after recoverable failures, and explain how to fix the problem.

## Required process

1. Inspect the repository and `git status`; do not modify files during the initial audit.
2. Map current routes/screens to the target screen map in `docs/03-screen-inventory.md`.
3. Identify source-of-truth design tokens and the server/design-system handoff requirements.
4. Produce an implementation plan with affected files, API dependencies, risks and validation steps.
5. Implement in small, reviewable phases. Do not combine unrelated refactors with the redesign.
6. After each phase, run relevant lint, typecheck, tests and build commands discovered from the repository.
7. Test the actual rendered app at desktop, tablet and mobile viewports. Verify key interactions, not just screenshots.
8. Finish with a report of changed files, behaviours completed, checks run, unresolved backend dependencies and known limitations.

## Reference docs and project skills

Read the relevant documents in `docs/` and invoke the skills under `.agents/skills/` when useful. In particular:
- `docs/01-product-brief-and-scope.md`
- `docs/02-ux-architecture-and-flows.md`
- `docs/03-screen-inventory.md`
- `docs/04-visual-direction.md`
- `docs/05-design-system-bridge.md`
- `docs/08-motion-and-feedback.md`
- `docs/10-server-and-backend-integration.md`
