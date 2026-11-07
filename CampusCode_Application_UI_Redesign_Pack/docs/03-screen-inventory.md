# Screen inventory and page-level requirements

This is the target inventory for the authenticated application. Preserve the current router where feasible; map these concepts onto existing routes rather than renaming routes casually.

| ID | Screen / route concept | Primary task | Critical states |
|---|---|---|---|
| A01 | Login | Authenticate | Idle, invalid credentials, submitting, locked/rate-limited if supported, network failure |
| A02 | Registration | Create student account | Validation, submitting, email already used, success |
| A03 | OTP/email verification | Verify identity | Empty, partial, pasted, expired, incorrect, resend cooldown, verified |
| A04 | Forgot/reset password | Recover access | Request sent, invalid/expired link, password validation, success |
| S01 | Home dashboard | Understand status and next action | New user, active event, multiple events, no active event, no activity, loading/error |
| S02 | Explore events | Find an event | Default, filtered, searched, empty results, loading/error |
| S03 | Event details | Evaluate and register | Registration open/closed, eligibility issue, full event, registered, pending approval |
| S04 | Registration flow | Join an event | Solo/team options, required fields, invalid form, pending approval, success |
| S05 | Team formation | Create/join/find team | No team, partial team, full team, invite pending, expired/declined, matching empty state |
| S06 | My Events | Track participation | Upcoming, active, completed, archived, no events |
| S07 | Event workspace overview | Know event stage and next action | Pre-event, active round, submission open, judging, results published, event closed |
| S08 | My Team | Manage team | Leader/member permissions, open slots, pending invites, no team |
| S09 | Submission editor | Prepare project | Empty, draft saving, saved, validation errors, upload states, offline/network failure |
| S10 | Submission preflight / IdeaCheck | Review readiness | Hard failures, warnings, suggestions, AI unavailable, review complete |
| S11 | Submission confirmation/detail | Confirm and track submission | Submitted, pending review, update allowed, locked, failed submission |
| S12 | Results/leaderboard | View published outcome | Unpublished, qualified, not qualified, score available, no score, leaderboard unavailable |
| S13 | Event updates | Read official announcements | New/read, pinned, no updates, announcement with CTA |
| G01 | Global notification centre | Review alerts and actions | Unread/read, all/unread, no notifications, failed load |
| G02 | Notification preferences | Control channels/categories | Default preferences, saved, save failure, permission denied |
| G03 | CampusCode Assistant panel | Get contextual help | Closed/open, suggested prompts, thinking, answer/source, error, dismissed |
| P01 | Profile overview | Manage identity | Loaded, missing optional fields, loading/error |
| P02 | Edit profile | Update details/skills | Dirty, validation, saving, saved, failed |
| P03 | Avatar/mascot chooser | Personalise profile | Selected mascot, photo selected, upload, crop, error, remove |
| P04 | Achievements/certificates | View credentials | Issued, pending, none, download, verification unavailable |
| P05 | Digital ID | Display identity | Valid ID, QR unavailable, profile incomplete, download/share if supported |
| H01 | Help & Support | Resolve platform issue | FAQ search, no results, contact unavailable, support success |

## Global layout rules

- Persistent left navigation on desktop, collapsible to icon rail where appropriate.
- Topbar: page context/breadcrumb, global search/command, notifications, assistant and profile.
- Main content uses a responsive max-width and grid; do not hardcode a narrow fixed central column on wide monitors.
- A clear page title and short supporting sentence are enough; avoid repeated all-caps eyebrow labels.
- One primary action per page/state. Secondary actions should not compete visually.
- Use sticky action areas only where they preserve context (e.g. long submission forms); never obscure content.
- Mobile navigation should support the primary student tasks. Event workspace navigation may become a horizontal scrollable tab/list or a menu, but must remain keyboard/touch accessible.

## Screen-by-screen guidance

### Home dashboard

First viewport: greeting, active/next event card, one next action, next deadline and compact participation summary. Below: upcoming events, recent activity and relevant announcements. Do not let a large static hero push actionable information below the fold.

### Explore events

Search, filters, sorting and clear filter reset. Event cards use compact structured metadata, not long organizer descriptions. Show registration state and date/timezone. Provide empty/loading/error states.

### Event details

Show event title/summary, eligibility, participation format, team limits, timeline, judging criteria, prizes and submission requirements. Keep primary CTA visible. Official rulebook must be clearly linked and version/last-updated information shown when the source provides it.

### Event workspace

Use a clear event header with status. Overview surfaces the next action, timeline, deadline and official update. Tabs: Overview, My Team, Submission, Results, Updates. Expose Rules & FAQs from Overview/assistant context.

### Submission

Use grouped fields with labels and helper text. Show required/optional. Autosave only if supported and communicate last saved time. Manual Save draft is a reliable fallback. Preflight distinguishes mandatory failures from AI advice. Final submission requires explicit confirmation.

### Notifications

Each notification should answer what happened, when, which event it relates to and what the student can do next. Do not use a toast as the sole record of a consequential event.

### Profile

Keep editable personal details, skills/interests, avatar/photo, events summary, achievements and Digital ID grouped. Avoid exposing email/phone in public profile or QR unless allowed by current privacy rules.
