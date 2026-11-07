# UX architecture and end-to-end flows

## Recommended information architecture

### Global shell

- **Home** — personalised overview and next best action.
- **Explore Events** — searchable/filterable event catalogue and event detail.
- **My Events** — registered, active, completed and archived participation.
- Global header actions: search/command, notifications, CampusCode Assistant, profile menu.

### Event workspace

- **Overview** — event summary, current stage, next action, deadlines, rules summary and announcements.
- **My Team** — roster, member roles, invitations, open slots and contextual HackMate.
- **Submission** — project details, attachments/URLs, draft, deterministic checks, IdeaCheck and final submit.
- **Results** — published result, qualification state, scores/feedback if provided, leaderboard.
- **Updates** — official event announcements and activity history.

Rules and FAQs are directly accessible from Overview and the assistant; they do not need to occupy another permanent global navigation slot.

### Profile/account area

- Profile overview/edit
- Mascot/avatar and photo upload
- Skills/interests
- Achievements and certificates
- Digital ID/QR
- Account settings and notification preferences
- Help & Support

### AI architecture

One reusable **CampusCode Assistant** surface, available from the global header and embedded contextually. Capabilities are routed by current context:

- HackMate: participant discovery, fit explanation and invitation assistance.
- RuleBot: answer questions grounded in the selected event's official rulebook.
- IdeaCheck: project review and suggestions during preflight.
- Student Guide: explain how to use the current workflow.

Do not build separate, context-free AI destinations.

## Primary student journey

Discover → Evaluate event → Register → Choose participation mode → Create/join team or continue solo → Event workspace → Build project → Save draft → Preflight → Review AI suggestions → Confirm submission → Track status → View result → Receive/download certificate.

## Flow 1 — Authentication

1. Student opens Login or Create account.
2. Login: email + password; show/hide password; forgot password; retain demo access where available.
3. Registration: name, email, password, account type (student if fixed by platform) and age/eligibility confirmation only when required by current policy.
4. Validate required fields with clear inline feedback. Do not display red errors before the user has had a chance to enter data, except for immediate deterministic constraints that help prevent errors.
5. Send/verify OTP or email verification using the existing auth flow.
6. Accept pasted OTP; allow email correction; show resend state and expiry; preserve form data on recoverable error.
7. Optional short onboarding: interests, skills, avatar/mascot. Allow skip and edit later.
8. Enter Home.

Do not remove existing backend-required CAPTCHA or verification without first proving the current auth/security contract. Prefer risk-appropriate anti-abuse controls only if the backend already supports them.

## Flow 2 — Explore and register

1. Explore list shows category, short description, registration state, deadline, mode and team requirements.
2. Filters/search update results and display clear active filter chips.
3. Event details show eligibility, dates/timezone, schedule, team requirements, judging, prizes, submission requirements and official rulebook.
4. CTA depends on state: Register, Continue registration, View my event, Registration closed, or Join waitlist (only if supported).
5. Registration collects only event-specific required fields.
6. If the event has configurable team rules, display only valid participation choices.

## Flow 3 — Participation and team formation

The event configuration is authoritative.

- If solo entries are allowed: Solo, Create team or Join existing team may be offered when each is supported.
- If team participation is mandatory: explain minimum/maximum members before registration is finalised and offer Create/Join team.
- If team formation is deferred until after registration: do not expose unavailable actions early; show a clear pending task after joining.
- If organizer approval is required: show pending state and no premature success.

HackMate flow:
1. Ask for relevant skills, preferred role, interests, availability and team-size preference only when needed.
2. Show opt-in discoverable participant profiles.
3. Explain why a match may be relevant; do not invent a pseudo-scientific compatibility score.
4. Send invitation only after explicit user action.
5. Track sent/accepted/declined/expired/cancelled states.
6. Update team roster and remaining slots from backend-confirmed state.

Protect student privacy: participation in matching must be opt-in and contact information must not be exposed by default.

## Flow 4 — Event workspace

Overview should answer immediately:
- Which event is this?
- What stage is it in?
- What is the next action for this student/team?
- What deadline is next?
- What official information has changed?

Avoid generic event descriptions dominating the first viewport. Use a compact progress/timeline summary and one clear primary CTA.

## Flow 5 — Project submission and IdeaCheck

1. Show a draft with required/optional fields based on event configuration.
2. Save draft through the existing API; show pending, saved timestamp and error state.
3. Validate required fields/URLs/file constraints deterministically from the server-defined event configuration.
4. Offer IdeaCheck for explanatory suggestions (clarity, structure, judging criteria, originality context only if supported).
5. Separate hard rule failures from optional AI suggestions.
6. Link each failed check to the relevant field.
7. Show a final review screen with event name, project fields and any warnings.
8. User explicitly confirms final submission.
9. Only after backend success show submitted state, timestamp/reference and next steps.
10. If submission fails, preserve the draft and explain retry/recovery. Never fake a success.

AI review must not claim official eligibility, plagiarism, judging results or guaranteed acceptance. Official event rules and organizer decisions remain authoritative.

## Flow 6 — Results and achievement

- Results are hidden/labelled unpublished until the organizer/backend publishes them.
- Qualification, score, feedback and leaderboard are shown only if those fields exist in the live contract.
- When a certificate is actually issued, create/show an actionable notification.
- Certificate detail includes type, event, issue date, verification URL/code and download only when a real file/endpoint is available.
- If not issued, show a clear waiting/unavailable state rather than an empty blank page.

## Flow 7 — Profile and Digital ID

Profile overview includes personal details, skills, interests, selected avatar/photo, participation summary and links to Achievements and Digital ID.

Avatar selection:
- curated original CampusCode mascot set;
- photo upload, crop/reposition and remove/replace;
- switch between mascot and photo;
- selection is optional and editable later.

Digital ID:
- show only allowed profile fields;
- render the real QR from the existing public profile/check-in contract;
- no fake QR or fabricated identity token;
- provide quick access from profile menu if supported.

## Flow 8 — Notifications

Global notification centre with unread/read and All/Unread views, category filters where useful, timestamps, associated event, clear description and a direct action.

Notification types include registration, team invitations, event updates, deadline reminders, submission status, results, certificate issuance, account/security. Optional preferences may control email/browser push. Mandatory security/account notices must remain distinguishable and cannot be silently disabled if policy requires them.

Do not request browser-push permission on first load. Ask in context after the user enables it or sees a clear benefit.

## Flow 9 — Contextual Assistant

- Global entry from topbar/profile shortcut.
- Desktop: side panel; mobile: bottom sheet/full-height sheet.
- Pass current route and event/project context only when authorised.
- Provide suggested actions and explain sources.
- Confirm before sending invites, modifying a team or submitting anything.
- Dismissible, keyboard accessible and never blocks the primary task.

## Next-best-action rules

Use backend-confirmed state to choose a single primary Home action:
- No events joined → Explore events.
- Registration started → Continue registration.
- Registration confirmed, team needed → Complete team setup.
- Team ready, submission open → Continue project.
- Draft incomplete → Finish required fields.
- Submitted → Track review.
- Results published → View results.
- Certificate issued → Download certificate.

Never infer completion from front-end clicks alone.
