# MASTER PROMPT — CAMPUSCODE AUTHENTICATED APPLICATION REDESIGN

You are acting as a senior product designer, UX engineer, frontend architect and creative developer. Your task is to redesign and implement the **authenticated CampusCode student application** using the supplied product brief, existing application screenshots and dashboard moodboard.

This is a complete application UX/UI redesign, not a landing-page exercise. You must think through task flows, states, information architecture, interaction behaviour, visual hierarchy, responsive layouts, accessibility and safe integration with the existing server before writing implementation code.

---

# 0. NON-NEGOTIABLE SCOPE LOCK

**DO NOT BUILD OR REDESIGN THE PUBLIC CAMPUSCODE LANDING PAGE / MARKETING HOMEPAGE.** That is a separate workstream. Do not change the public home route or its marketing content, animations or assets.

The scope here is:
- Student login, registration, verification and account recovery UI.
- Authenticated student application shell and all student-facing screens.
- Home, event discovery, event details, registration, team formation, My Events and Event Workspace.
- Contextual HackMate, RuleBot, IdeaCheck and one unified CampusCode Assistant.
- Project draft, preflight, final submission and result states.
- Notifications, profile, mascot/photo, achievements/certificates, Digital ID and help.
- A safe quick-demo experience if the existing architecture supports it or it can be isolated without backend changes.

Do not redesign organizer/admin screens unless an existing student screen depends on shared components. Do not deploy, push to GitHub, change remotes or release anything. Do not modify database schema, auth provider, backend business logic or API contracts as part of this UI task.

# 1. READ THE PROJECT MATERIAL FIRST

Before implementation, read:

- `AGENTS.md`
- `docs/01-product-brief-and-scope.md`
- `docs/02-ux-architecture-and-flows.md`
- `docs/03-screen-inventory.md`
- `docs/04-visual-direction.md`
- `docs/05-design-system-bridge.md`
- `docs/06-component-and-content-patterns.md`
- `docs/07-information-feedback-copy.md`
- `docs/08-motion-and-feedback.md`
- `docs/09-accessibility-responsive-qa.md`
- `docs/10-server-and-backend-integration.md`
- `docs/11-implementation-roadmap.md`
- `docs/12-research-and-upstream-skills.md`
- Relevant `.agents/skills/*/SKILL.md` files.

Inspect these reference assets:

- `reference-assets/dashboard-moodboard.png` — primary visual direction for the authenticated app.
- `reference-assets/current-state-contact-sheet.jpg` — overview of existing student application screens.
- `reference-assets/current-app-screens/` — original login, registration and student product screens.

The images are source material. Do not ignore them and fall back to a generic dashboard template.

# 2. START WITH A REAL REPOSITORY AUDIT

Before editing files:

1. Inspect the root folder and repository structure.
2. Check `git status`, current branch and uncommitted changes. Preserve all user work.
3. Identify framework, runtime, package manager, scripts, routing, state management, component system, styling approach and current installed animation libraries.
4. Locate current design-system/token files, fonts, logo assets and shared components.
5. Trace current login/registration/OTP flow and identify the actual auth provider, session storage and required security steps.
6. Trace the current API/service layer for events, registration, teams/invitations, submissions, results, notifications, profile, certificates and QR/Digital ID.
7. Identify actual request/response types, permissions and loading/error handling.
8. Run existing lint, typecheck, tests and build to establish a baseline, using the repository's package manager.
9. Create a concise route/screen map of the existing app and map it to the target screen inventory.

Then create a short implementation plan describing affected files, preserved contracts, unknowns, phases and validation. **Do not edit during the initial audit.** After reporting the audit and plan, continue with safe frontend work; do not wait for clarification unless an actual blocker requires user input.

Never infer or fabricate server capabilities from screenshots.

# 3. IMPORTANT DESIGN-SYSTEM HANDOFF

The user will provide authoritative server-side/design-system information later. It is not yet part of this pack.

- Inspect the repository for an existing design system before using any provisional token values.
- If an authoritative system exists, use it.
- If the forthcoming server/design-system files are not present yet, create one central semantic token bridge based on `docs/05-design-system-bridge.md` for structural implementation only.
- Do not spread provisional hex values, spacing, radius or font values across components.
- Do not call the provisional values final.
- Once the user supplies the design system, map the authoritative tokens centrally and replace the provisional bridge without changing the backend.
- Record conflicts or missing tokens clearly.

# 4. VISUAL DIRECTION — FOLLOW THE SUPPLIED MOODBOARD

Use `reference-assets/dashboard-moodboard.png` as the primary art direction. It shows a premium, warm, editorial application mockup with a clearly separated left navigation panel, a large clean content panel, search at the top, elegant serif feature headings, structured product rows and a restrained amber/sunlit feature surface.

Translate this into CampusCode rather than copying the finance product:

- Warm off-white, parchment, stone and ivory product surfaces.
- A distinct warm-toned left sidebar with compact, legible navigation groups.
- A clean content canvas that can use the full desktop viewport intelligently.
- Search/command in the header.
- Editorial serif display type for selected feature/event/achievement moments, paired with a practical sans-serif for controls, navigation, forms, tables and body text.
- A warm amber/saffron highlight surface for the active event or next action where appropriate.
- Structured lists/tables for teams, notifications, submissions and activity rather than converting everything into equal cards.
- Fine borders, restrained shadows and role-based corner radii.
- Spacious, deliberate alignment; no cramped controls.

## Sarvam-inspired visual principles

The user asked for a Sarvam-colour vibe. Sarvam's public brand guidelines describe a blue-to-orange tonal spectrum and repeated circular/mandala-inspired geometry. Use those as general design principles only:

- Grounded, warm neutral base.
- Controlled cool blue/cobalt paired with warm amber/orange/saffron signals.
- Subtle circles, orbital details, radiating lines or mandala-like geometry used sparingly as meaningful visual language.
- Motion that suggests progress, connection or transformation.

Do not copy Sarvam logos, exact proprietary assets or the exact brand system. CampusCode must remain CampusCode. Preserve the current CampusCode wordmark/mark. Keep current lime/violet logo colours only as controlled accents if they are part of the actual brand system; do not add purple gradient washes.

## Typography direction

Use the typography already approved by the current design system if available. Provisional pairing only:
- Instrument Serif for selected editorial display titles and feature moments.
- Geist Sans (or the existing app UI sans) for all functional UI, body, forms and data.
- Tabular numerals for metrics, counts, deadlines and scores.

Avoid thin body text, too many font families and oversized headings on every screen.

## Hard visual exclusions

- No generic purple/pink/blue AI glow gradients.
- No excessive glassmorphism.
- No random floating 3D objects or meaningless decorative blobs.
- No identical rounded card for every content item.
- No tracked all-caps eyebrow above every page title.
- No emoji replacing a consistent icon library.
- No gradient on every card or button.
- No artificial/fake chart data or invented live metrics.
- No full-screen desert/sunset photography behind the authenticated app. The image's scenic backdrop is mockup presentation art direction; keep live product surfaces readable.
- Do not rotate, skew or perspective-distort the real application layout. The moodboard's tilt is part of a device/product presentation, not an app layout pattern.

# 5. PRODUCT ARCHITECTURE TO IMPLEMENT

Prefer these primary destinations, mapped safely to the existing router:

1. Home
2. Explore Events
3. My Events

Global topbar controls:
- Search/command
- Notifications
- Ask CampusCode (unified assistant)
- Profile menu

Event Workspace:
- Overview
- My Team
- Submission
- Results
- Updates

Rules and FAQs must be available from Event Overview and assistant context; do not create another permanent primary navigation destination by default.

Profile:
- Personal details and skills
- Mascot/photo identity
- Achievements and certificates
- Digital ID/QR
- Settings and notification preferences
- Help & Support

The existing public landing page is out of scope.

# 6. STUDENT JOURNEYS THAT MUST WORK

## 6.1 Authentication

- Preserve the current auth provider, API contract, session and security controls.
- Simplify layout and wording, but do not remove backend-required OTP/CAPTCHA/age/eligibility requirements without approval from the existing server contract.
- Make password requirements understandable before submit.
- Provide show/hide password and correct autocomplete/input types.
- OTP should support paste, individual digits, clear expiry/resend state and email correction if current service supports it.
- Preserve user data after recoverable errors.

## 6.2 Home dashboard

First viewport must show:
- Clear greeting/page context.
- Active event/next relevant opportunity.
- One personalised next action.
- Relevant deadline.
- Compact participation summary.
- Notifications/activity preview.

Do not give a huge static event description priority over student actions. Make the next-best-action depend on backend-confirmed status (not on a guessed UI state).

## 6.3 Explore Events and event details

Event cards must prioritise event name, category, short description, registration state, deadline/timezone, online/offline mode, team requirement and meaningful prize information if supplied by API.

Event details should expose eligibility, team configuration, dates, schedule, judging criteria, prizes, submission requirements, official rulebook and organizer details. Use clear registration-state CTAs.

## 6.4 Registration and HackMate

Team formation is part of the event registration/participation journey, not a separate AI destination.

The participation choices must come from event configuration. Offer Solo/Create team/Join existing team only when the event supports those modes. Explain team minimum/maximum and any approval requirement before final confirmation.

HackMate should:
- Ask only for skills, preferred role, interests, availability and team preferences when relevant.
- Show opt-in discoverable participants.
- Explain why a suggestion is relevant.
- Avoid unsupported compatibility scores.
- Send invitation only after explicit user action.
- Track pending, accepted, declined, expired and cancelled invitations.
- Update roster only after backend confirmation.
- Protect contact and profile privacy.

## 6.5 Event Workspace

Overview shows event status, next action, timeline, upcoming deadline, important official rules and latest announcement.

My Team shows roster, roles, invitation status, open slots and HackMate.

Submission shows drafts, required fields, attachments/links and preflight.

Results shows only published information.

Updates shows official announcements and activity history.

## 6.6 IdeaCheck and submission

Build the project editor as the actual home for IdeaCheck.

Separate:
- deterministic validation of event requirements (required fields, URL formats, allowed files, team configuration, deadline and categories);
- optional AI feedback (problem clarity, solution explanation, technical presentation and judging-criteria coverage; similarity analysis only if the existing system actually supports it).

AI suggestions are not official eligibility/judging/plagiarism decisions. Link failed deterministic checks to the field that needs correction. Preserve drafts. Require explicit final confirmation. Show submission success only after a confirmed backend response, with timestamp/reference/status where actually available.

## 6.7 RuleBot and CampusCode Assistant

One reusable assistant panel, with capabilities in context:
- event details → eligibility and event explanation;
- My Team → teammate matching guidance;
- Overview → official rules/FAQ;
- Submission → project requirements and improvement suggestions;
- Help → platform navigation.

RuleBot answers must be grounded in the selected event's official rulebook and cite a section/version when available. Say when the rulebook has no answer. Do not invent policy. The user must confirm consequential actions.

Desktop: side panel. Mobile: bottom sheet or full-height sheet. Must be dismissible and keyboard accessible.

## 6.8 Notifications and feedback

Build a global notification centre with unread/read and all/unread states, associated event/context, timestamps and actionable destinations.

Support notification preferences by category and channel only where the backend supports those channels. Avoid browser-push permission prompts on first load.

Every consequential action requires explicit pending/success/failure feedback. A toast is not the only record for registration, submission, results or certificate issuance. Never show success before a server response.

## 6.9 Profile, mascot, certificates and Digital ID

Profile includes personal details, skills/interests, selected mascot/photo and links to Achievements and Digital ID.

Mascot system: a coherent, small curated CampusCode family; optional photo upload with crop/reposition; switch between avatar and mascot; editable later. Use a subtle set of states (idle/welcome/thinking/celebrate), not perpetual motion.

Certificates: show only when issued; include event, award type, issue date, verification information and download where a real file endpoint exists. Notify the user when actually issued.

Digital ID: use existing server-generated identity/QR contract. Never fabricate a QR payload or expose private fields unnecessarily.

## 6.10 Quick demo mode

Preserve the user's previously stated desire for a fast demo. Reuse an existing demo flow if present. Otherwise propose a safe isolated fixture mode:
- persistent DEMO MODE label;
- seeded events/teams/submissions/notifications/results/certificates;
- reset demo;
- predictable AI example responses;
- no writes to real user accounts or production endpoints;
- allow free exploration without completing every step.

If safe isolation requires backend work, document the dependency rather than creating a hidden mock fallback.

# 7. VIEWPORT AND RESPONSIVE QUALITY

The app should use the screen intelligently. Do not force every section to fit into one viewport; ensure the current location, status, primary action and immediate feedback are visible.

Starting layout guidance (subject to existing tokens):
- expanded desktop sidebar about 232–248px;
- topbar about 64–72px;
- 12-column content system on wide screens;
- responsive content width, no arbitrary narrow fixed content column;
- disciplined 4/8px spacing logic;
- one primary document scroll; avoid needless nested scrolling.

Test at 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024, 390×844 and 360×800.

Mobile should retain access to Home, Explore, My Events and Profile. Event navigation may become a horizontal tab row or accessible menu. Avoid horizontal overflow, clipped actions and sticky footers covering form fields.

# 8. MOTION AND MICRO-INTERACTION RULES

Use calm, intentional motion:
- CSS transitions for button, hover, focus, active and simple disclosure.
- Existing Motion/Framer Motion package for ordinary state transitions if already installed.
- GSAP only for complex/justified sequences. In React use `@gsap/react` `useGSAP()` for scoped setup/cleanup.
- No new animation library unless the repository audit proves it is required.
- Keep native browser scrolling for the authenticated app. Do not add Lenis globally.
- No scroll-jacking, fake loading delays, looping decorative motion, heavy parallax or blocking transitions.
- Respect `prefers-reduced-motion`.

Use small stars/sparkles sparingly for a completed achievement, certificate issue or meaningful assistant moment. They are not permanent decoration and must not fire on every click.

Suggested motion timings are documented in `docs/08-motion-and-feedback.md` and remain subordinate to the real design-system motion tokens.

# 9. SKILLS TO APPLY

Use the workspace skills included in `.agents/skills/` when relevant:
- `/campuscode-product-ux`
- `/campuscode-visual-design`
- `/campuscode-frontend-engineering`
- `/campuscode-motion-engineering`
- `/campuscode-app-qa`
- `/campuscode-safe-integration`

Also consider the upstream skills documented in `docs/12-research-and-upstream-skills.md`:
- Anthropic `frontend-design`
- Vercel `react-best-practices`
- Vercel `web-design-guidelines`
- Vercel `composition-patterns`
- Optional community `ui-ux-pro-max` after reviewing its contents.

Use the project's existing stack and package manager. Do not install every optional library for the sake of it.

# 10. IMPLEMENTATION ORDER

Follow `docs/11-implementation-roadmap.md`:

### Phase 0 — Audit
Inspect the repository, map current screens/routes/services, run baseline checks and report the plan. No edits during this audit.

### Phase 1 — Design-system bridge and app shell
Ingest the authoritative design system if present; otherwise use only the central provisional token bridge. Implement the responsive authenticated shell and shared primitives. Do not touch the landing page.

### Phase 2 — Core student journeys
Implement Home, Explore Events, Event Details, registration, team formation, My Events and Event Workspace.

### Phase 3 — Build and submit
Implement My Team/HackMate, project drafts, deterministic preflight, IdeaCheck suggestions, review and final submission.

### Phase 4 — Results, identity and communication
Implement results, updates, notifications/preferences, contextual assistant/RuleBot, profile, mascot/photo, achievements/certificates, Digital ID and Help.

### Phase 5 — QA and polish
Test real flows, all state variants, accessibility, reduced motion and responsive sizes. Review against the supplied moodboard and the authoritative design system.

Work in small, reviewable increments. Avoid unrelated refactors. Keep a short running changelog of what was implemented and which endpoints/services were preserved.

# 11. ACCEPTANCE CRITERIA

The redesign is not complete until:

- Public landing page and its code/assets remain unchanged.
- Existing authentication and backend/API contracts are preserved.
- Main student navigation is simplified without breaking existing route/deep-link behaviour.
- Home clearly surfaces the student's next action.
- Event discovery and details make requirements understandable.
- Registration options are driven by real event configuration.
- HackMate is contextual and invitations reflect backend-confirmed states.
- Rules are accessible and RuleBot is grounded in official event data.
- IdeaCheck lives in submission and clearly separates hard checks from advice.
- Draft/save/final submit states are distinguishable and honest.
- Notifications are actionable and preferences match actual delivery support.
- Profile, mascot/photo, certificates and Digital ID are correctly grouped and data-backed.
- Demo mode is isolated and clearly labelled if implemented.
- Every major screen has loading, empty, failure and success/unavailable states as appropriate.
- Keyboard navigation, visible focus, labels, error associations, status announcements and reduced motion work.
- No horizontal overflow or clipped primary actions at specified viewports.
- Lint, typecheck, tests and build pass, or any baseline/existing failures are documented.

# 12. FINAL REPORT REQUIRED

At completion, provide:
1. Repository audit summary and constraints.
2. New navigation and screen mapping.
3. Files/components changed.
4. Flows implemented and their actual backend sources.
5. Dependencies added and why.
6. Lint/typecheck/test/build results.
7. Responsive/accessibility checks performed.
8. Missing server/design-system details or API gaps.
9. Known limitations and the next smallest recommended step.

Do not claim work, tests or integration that you did not actually perform.
