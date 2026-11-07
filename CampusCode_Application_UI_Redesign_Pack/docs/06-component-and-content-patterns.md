# Component and content patterns

## Application shell

- Desktop sidebar: brand, primary navigation, optional event shortcut, grouped profile/help area. Clear active state, collapse option only if it does not hide labels permanently for new users.
- Topbar: current page/event context, search/command, notifications, assistant, profile. Keep a stable height and consistent alignment.
- Main content: responsive grid and natural page height. No nested scrolling for the entire page unless there is a demonstrated need.

## Navigation

- Use sentence case labels.
- Icon + text on expanded navigation; do not use icon-only navigation without tooltip/accessible name.
- Active route indicated by shape/contrast and text weight, not colour alone.
- Avoid deep nesting. Use event workspace tabs after an event is selected.
- On mobile, preserve access to Home, Explore, My Events and Profile; expose event-specific navigation through a clear tab/menu pattern.

## Buttons

Define clear hierarchy:
- Primary: one main action for the current task.
- Secondary: alternate action.
- Tertiary/link: low-emphasis navigation.
- Destructive: explicit confirmation when consequences are meaningful.

Every button needs enabled, hover, focus-visible, pressed, loading and disabled states. Preserve button labels while loading where useful; avoid ambiguous labels like "Continue" without a nearby destination/context.

## Cards, lists and tables

Use cards for distinct objects or task groups, not every piece of content. Use lists for recent activity and notifications; tables for comparable project/team/participant data; compact cards for event previews; structured sections for forms. Keep content density consistent with the task and breakpoint.

## Forms

- Persistent visible label, not placeholder-only labels.
- Mark required/optional clearly.
- Helper text before the error state where it can prevent mistakes.
- Validate on blur or submit as appropriate; avoid noisy error messages while a user is typing.
- Place inline error beside the relevant field and focus the first invalid field on submit.
- Preserve user input after recoverable errors.
- Support password managers/autocomplete for authentication.
- Use correct input types, autocomplete attributes and mobile keyboard hints.
- Provide a review/confirmation step for consequential final submission.

## Status system

Use consistent semantic status labels, icons and colours:
- Draft
- Action required
- Pending
- In review
- Submitted
- Accepted/qualified (only if backend confirms)
- Completed
- Issued
- Failed/expired

Never use a green pill to imply an operation succeeded before the backend confirms it. Use text + icon + colour where status matters.

## Search and filters

- Global search/command opens with keyboard shortcut only as an enhancement; a visible button remains available.
- Search input has clear label, empty state, loading and no-results state.
- Filters are removable and provide a reset-all action.
- Keep the active filter summary visible when results are filtered.

## AI assistant patterns

- Assistant can be opened and dismissed without losing the user's current task.
- Suggested prompts should relate to current screen/event context.
- Distinguish generated suggestions from official facts.
- Cite the event rulebook/version when answering event-policy questions.
- Never fabricate participant compatibility, event rules, results or judging scores.
- For action-taking, preview the action and ask for explicit confirmation.

## Empty/loading/error states

Each major data surface needs:
- Loading: stable skeleton with similar final geometry; avoid layout shift.
- Empty: explain why there is no data and offer the next logical action.
- Error: state what failed, preserve what can be preserved and offer retry.
- Permission: explain why a feature is unavailable and who can enable it.
- Offline: show connection state; do not claim saves succeeded without confirmation.

## Notifications

Notification content structure: title → clear one-sentence explanation → event/context → time → direct action. Critical notifications should remain in the notification centre; toasts are supplementary. Preferences should distinguish in-app, email and browser push where supported.
