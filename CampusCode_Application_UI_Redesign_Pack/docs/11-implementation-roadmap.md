# Implementation roadmap and checkpoints

## Working mode

This project should be delivered in staged, verifiable increments. Do not redesign every screen in one giant unreviewable change. Preserve working behaviour while replacing the presentation and navigation progressively.

## Phase 0 — Audit and baseline

- Inspect repository, current branch and working tree.
- Identify framework, router, package manager, current dependencies and component system.
- Map current routes and screens to `03-screen-inventory.md`.
- Identify current API/auth/session contracts and data models.
- Locate existing design tokens and fonts.
- Run existing lint/typecheck/tests/build to record baseline.
- Capture current key screen/flow behaviour if practical.
- Deliver a concise audit and risk report before code edits.

Exit criteria: known affected files, preserved contracts, known missing data, implementation plan.

## Phase 1 — Design system alignment and application shell

- Wait for/ingest authoritative server design-system material when the user supplies it.
- Map tokens into one central theme bridge.
- Establish typography, spacing, radius, shadows, focus and semantic states.
- Implement responsive shell, topbar, sidebar, mobile navigation and global overlays.
- Preserve existing routes and integrate new navigation safely.

Exit criteria: every main route renders inside the shell, keyboard focus/navigation works, no landing-page change.

## Phase 2 — Core discovery and participation

- Home dashboard and next-best-action logic.
- Explore events, filters and event details.
- Conditional registration.
- Team create/join and invitation management.
- My Events and Event Workspace overview.

Exit criteria: a student can discover and join an event through real available contracts; unsupported states are explicit.

## Phase 3 — Build and submit

- Team workspace and HackMate contextual experience.
- Submission form with field grouping and save state.
- Deterministic event-config preflight.
- IdeaCheck suggestions.
- Final confirmation and submission status.

Exit criteria: draft and final submission states are not confused; backend success/failure is handled honestly.

## Phase 4 — Results, notifications and identity

- Results and updates.
- Notification centre and preferences.
- Contextual RuleBot/assistant.
- Profile, mascot/photo, achievements/certificates, Digital ID.
- Help/FAQ.
- Demo mode if a safe fixture approach is available.

Exit criteria: no disconnected AI destinations; all issued credentials and notifications are data-backed.

## Phase 5 — QA and polish

- Desktop/tablet/mobile QA.
- Keyboard and screen-reader checks.
- Reduced motion checks.
- Empty/loading/error/offline state review.
- Performance and bundle review.
- Visual consistency pass against moodboard and supplied design system.
- Run test/lint/typecheck/build.

Exit criteria: defined in `09-accessibility-responsive-qa.md`.

## Change management

- Keep PR-sized or phase-sized changes.
- Avoid unrelated refactoring.
- No deployment or remote push.
- Report every file changed and any dependency added with reason.
- If a requested interaction needs a backend capability that does not exist, document it instead of fabricating it.
