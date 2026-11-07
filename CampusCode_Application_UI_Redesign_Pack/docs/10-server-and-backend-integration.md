# Server, authentication and backend integration guardrails

## Purpose

The user will supply more server-side and design-system information later. Until then, the redesign must preserve current contracts and operate through the existing service layer.

## Repository audit required before coding

Inspect:
- package manager and scripts;
- framework/runtime and routing;
- auth/session/token flow;
- API client and request/response types;
- environment variable names (never print secret values);
- data-fetching/cache patterns;
- current app state management;
- error handling and notification mechanism;
- file upload and certificate download mechanism;
- current QR/public profile/check-in contract;
- existing event and participant models;
- design-system source, token files and component library;
- tests, lint and typecheck setup.

## Preserve the contract

- Do not rename endpoints or change request/response shapes for a visual redesign.
- Do not change auth provider, token persistence, cookie policy or session expiry logic.
- Do not weaken rate limiting, CAPTCHA, OTP, age or eligibility controls required by current server policy.
- Do not change database schema, migrations, permission rules or organizer workflows.
- Do not hardcode event-specific values such as team limits, dates, deadline, categories, prizes, judging rules or certificate states.
- Do not call an operation successful until the server confirms it.
- Do not store sensitive student information in localStorage simply to make a UI state work.

## View-model boundary

Where current API response structures are awkward for presentation, create a small UI adapter/selector that maps existing responses to view models. Keep this separate from the API client and do not silently mutate the backend contract.

Examples of view-model concepts (not a proposed API schema):
- EventCardViewModel
- EventParticipationViewModel
- TeamMemberViewModel
- InvitationViewModel
- SubmissionDraftViewModel
- SubmissionStatusViewModel
- NotificationViewModel
- CertificateViewModel

Only map fields that exist in the actual contract. Mark fields unavailable rather than fabricate values.

## Demo fixture boundary

If a quick demo is requested:
- prefer an existing demo route and fixtures if present;
- otherwise create isolated fixtures behind an explicit demo mode flag/route;
- label demo state persistently;
- ensure demo mutations cannot affect real users or production endpoints;
- reset from a known fixture snapshot;
- do not use demo fixture fallback silently in normal production state.

## Missing backend capabilities

When the UI request requires an endpoint or field that is not present:
1. Document the missing capability.
2. Build a clear unavailable/disabled state if the product can still function safely.
3. Do not add a fake endpoint or pretend data is live.
4. Propose the smallest API contract addition separately for the user/server owner to approve.

## Integration questions for future handoff

- Which service owns event configuration and versioned official rules?
- Which auth endpoints and verification steps are mandatory?
- Is team matching opt-in and what profile fields may be shared?
- Which endpoints confirm invitations and membership changes?
- Are submission drafts autosaved? What fields can be edited after final submit?
- How are preflight hard rules represented?
- What data source/permissions are available to RuleBot?
- What are AI review inputs, output schema, rate limits and failure states?
- How are results and leaderboard publication represented?
- Which certificate file and verification endpoints exist?
- How is the QR payload generated and validated?
- Which notification channels are supported?
- What is the actual design-system package/token source?
