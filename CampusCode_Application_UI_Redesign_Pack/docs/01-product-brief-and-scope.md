# Product brief and scope

## Product

CampusCode is a student-facing innovation and hackathon platform. The authenticated application helps students discover opportunities, register, form teams, understand event rules, prepare and submit projects, follow event progress, receive announcements and access achievements/identity.

## Current product capability inventory

The supplied current-state screens show:

- Login and registration
- Student overview/dashboard
- Events catalogue
- My Events
- Event Hub (currently illustrated with ReBuild '26)
- HackMate AI (participant/team matching)
- IdeaCheck AI (idea/project review)
- Certificates
- Digital Card / QR identity
- RuleBot AI (event-rule Q&A)
- Student Guide
- Official Communication
- Notifications
- Help & Support
- Profile

The user has previously defined the target product direction: simplify the number of destinations, reduce steps, integrate AI at the point of need, improve viewport use and feedback, add mascot/photo identity, support certificates and notification delivery, and provide a quick demo mode.

## Primary users and their jobs

### Student / participant
- Find a relevant event and decide whether to join.
- Understand eligibility, team requirements, dates, judging criteria and submission requirements.
- Register with minimal friction.
- Participate solo or form/join a team according to the event's actual rules.
- Understand official rules without searching through multiple pages.
- Save project work and submit it with confidence.
- Know whether an action succeeded and what to do next.
- Track results, receive certificates and share a student identity.

### Evaluator / demo viewer
- Access a seeded demonstration without registering or relying on live event availability.
- Understand the complete student journey in a short, self-guided walkthrough.
- Never accidentally change real participant data.

### Organizer (not a redesign target in this scope)
Organizer-facing workflows are out of scope unless the existing student screens depend on a current organizer contract. Do not design organizer administration as part of this task.

## Redesign goals

1. Reduce navigation complexity and mental load.
2. Make the next student action obvious on every major page.
3. Make event registration, team formation and project submission feel like one connected journey.
4. Put HackMate, RuleBot and IdeaCheck where they are useful; do not make them separate destinations.
5. Make system status and feedback unmistakable.
6. Make the interface responsive and legible at realistic viewport sizes.
7. Create a calm, premium visual system informed by the supplied dashboard moodboard and Sarvam's public design principles, while retaining CampusCode identity.
8. Keep the design-system implementation ready to reconcile with the authoritative tokens/server information the user will provide later.

## Explicit scope

### Included
- Login, registration, OTP/email verification and password recovery UI.
- Authenticated student app shell and responsive navigation.
- Home dashboard.
- Event discovery, filters and event detail.
- Event registration and participation-mode decisions.
- Team creation/joining, matching and invitations.
- Event workspace: overview, team, submission, results and updates.
- Contextual official rules and contextual RuleBot/assistant panel.
- Project form, draft state, deterministic preflight and IdeaCheck suggestions.
- Submission confirmation and status.
- Notification centre, unread states and notification preferences.
- Student profile editing, skills, avatar/mascot and personal photo upload.
- Achievements/certificates and download affordance where supported.
- Digital ID/QR display and quick access.
- Help/FAQ and contextual student guidance.
- Seeded demo mode if a safe demo route/data fixture already exists or can be isolated without backend changes.

### Excluded
- Public marketing homepage and landing page.
- Public SEO/content pages.
- Backend rewrite, database migrations, API contract changes or auth-provider replacement.
- Organizer/admin portal redesign.
- New AI model/backend implementation unless the current APIs already provide it.
- Deployment, GitHub push, remote changes or production release.

## Product quality principles

- Task-first, not tool-first.
- Progressive disclosure, not hiding essential requirements.
- Real status feedback, not decoration.
- Clear, plain-language copy.
- Contextual AI, with user confirmation for consequential actions.
- Strong recovery from errors and interrupted tasks.
- Calm visual hierarchy, with one obvious primary action per screen/state.
