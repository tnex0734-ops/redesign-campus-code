# Accessibility, responsive behaviour and QA

## Target

Aim for WCAG 2.2 AA for the redesigned application. Use semantic HTML and accessible interaction primitives rather than recreating accessibility behaviour manually.

## Keyboard and assistive technology

- All navigation, menus, dialogs, tabs, forms, assistant panels, filters and actions must be operable with keyboard.
- Focus must be clearly visible and not hidden behind sticky headers/drawers.
- Dialogs/sheets must manage focus, support Escape when appropriate and restore focus to the trigger.
- Every field has an associated visible label and understandable error.
- Status changes such as "Draft saved" or "Invitation sent" must be announced appropriately (e.g. status/live regions) without stealing focus.
- Use accessible names for icon-only buttons.
- Do not use colour alone for event/registration/submission state.
- Ensure sufficient text/control contrast against warm neutral surfaces.
- Respect text zoom and browser zoom; avoid fixed heights that clip content.
- Avatar/mascot images need appropriate alternative text or be decorative if redundant.

## Touch and responsive behaviour

Test at minimum:
- 1920×1080 and 1440×900 desktop.
- 1280×800 compact desktop/laptop.
- 1024×768 tablet landscape.
- 768×1024 tablet portrait.
- 390×844 and 360×800 mobile.

Use responsive layout rather than hiding important functions arbitrarily.

### Desktop
- Persistent sidebar approximately 232–248px if the viewport permits.
- Topbar around 64–72px.
- Content grid can use 12 columns; dense tables get enough width.
- Keep the main area visually balanced; do not centre a narrow column on a 2K monitor.

### Tablet
- Collapsible sidebar or compact navigation.
- Event tabs remain discoverable and operable.
- Forms retain readable line length and controls do not collide.

### Mobile
- Bottom navigation for Home, Explore, My Events and Profile (or the closest equivalent allowed by existing routes).
- Notification and assistant controls remain accessible.
- Event workspace navigation can use a horizontally scrollable, keyboard-accessible tab strip or a clear menu.
- Long forms use a sticky action footer only if it does not cover fields or the mobile keyboard.
- Team cards and notification rows stack logically.
- Data tables become labelled cards or controlled horizontal tables with clear affordance; no accidental page-wide horizontal overflow.

## Viewport and content rules

- The first viewport should identify location, current status, next action and relevant feedback.
- Do not force the full page into one viewport.
- Use natural document scrolling; avoid hidden clipped content and nested scrollbars unless necessary.
- Use sticky elements sparingly and test at short viewport heights.
- Never position important CTA behind floating widgets or chat panels.

## QA matrix

For every screen, test:
- default state;
- loading state;
- empty state;
- populated state;
- validation failure;
- server failure;
- permission-denied state;
- success state;
- keyboard-only interaction;
- mobile layout;
- reduced-motion preference.

## Definition of done

- No horizontal overflow at target widths.
- No clipped form fields or hidden primary actions.
- All controls are keyboard reachable and have visible focus.
- Labels and errors are programmatically associated.
- No false success state before backend response.
- No console errors, missing keys or unhandled promise rejections in key flows.
- Lint/typecheck/tests/build pass using existing repository scripts.
- Main user journeys are tested end to end with real integration or clearly labelled fixtures.
