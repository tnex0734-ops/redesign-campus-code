# CampusCode — Application UI Redesign Pack

This pack is the working product-design and frontend-engineering brief for redesigning the **authenticated CampusCode student application**. It is not a landing-page pack.

## Scope lock

- Redesign the login/registration experience and the authenticated student application.
- Do **not** build or redesign the public marketing homepage/landing page. That work is separate.
- Do not replace, rewrite, or invent the backend, authentication provider, database schema, API contracts, or server-side business rules.
- Preserve current routes and integrations until the repository audit proves a safe migration path.
- The final design system and server-side integration details will be supplied separately. The token file in this pack is a provisional bridge only; centralise and replace it when the authoritative system arrives.
- Do not deploy, push, publish, or modify Git remotes.

## How to use this pack with Google Antigravity

1. Back up or commit your existing work locally before applying a large redesign.
2. Extract this folder.
3. Copy `AGENTS.md` into the root of the existing CampusCode repository.
4. Copy the entire `.agents/` directory into the same repository root. Antigravity discovers workspace skills from `.agents/skills/<skill-name>/SKILL.md`.
5. Keep `docs/` and `reference-assets/` available in the repository so the agent can inspect them.
6. Open the existing CampusCode repository in Antigravity.
7. Open `ANTIGRAVITY_MASTER_PROMPT.md` from this pack and paste its contents into Antigravity. The prompt is included in this ZIP and is also delivered as a separate file.
8. Ask Antigravity to begin with the repository audit. Have it report current routes, data sources, auth and design-system files before changing them.
9. Provide the authoritative server/design-system information when available. The agent must map it into the token bridge before declaring the visual system final.

## Files

- `AGENTS.md` — persistent workspace rules for Antigravity and compatible agents.
- `ANTIGRAVITY_MASTER_PROMPT.md` — full build prompt for the authenticated application redesign.
- `docs/` — product scope, UX architecture, screen map, visual direction, provisional tokens, component rules, motion, accessibility, copy, server integration, implementation plan and research.
- `.agents/skills/` — project-specific skills in the Antigravity Agent Skills format.
- `reference-assets/dashboard-moodboard.png` — user's supplied RevenueX dashboard moodboard.
- `reference-assets/current-state-contact-sheet.jpg` and `current-app-screens/` — supplied screenshots of the current CampusCode application. Public landing screenshots are intentionally not included as implementation scope.

## Recommended execution order

1. Audit the repository and map current screens/routes/services.
2. Reconcile the existing server/design-system source with `docs/05-design-system-bridge.md` when supplied.
3. Produce the screen-by-screen implementation plan and state matrix.
4. Build the new application shell and reusable component primitives.
5. Implement the highest-value student flows (Home → Explore → Event details → Registration/team → Event workspace → Submission).
6. Integrate notifications, assistant context, profile, ID and achievements without creating disconnected AI destinations.
7. Complete responsive, accessibility, loading/error/empty-state and interaction QA.

## Important

The screenshots are reference material, not a replacement for source-code inspection. The coding agent must verify the real project stack, current routes, backend contracts, existing design tokens and authentication rules. Where information is not available, it must record the unknown rather than fabricate functionality.
