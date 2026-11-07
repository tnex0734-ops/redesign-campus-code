# Motion, micro-interaction and feedback system

## Principle

Motion should explain state, cause/effect or hierarchy. CampusCode's app is a productivity/task interface; it must feel calm and immediate, not like a promotional motion website.

## Recommended motion strategy

1. Prefer CSS transitions for hover/focus/pressed/selected states.
2. Use the motion library already present in the repository for route/panel/list state transitions.
3. Use GSAP only for complex, isolated sequences that are difficult to express declaratively (e.g. a short achievement reveal or a coordinated timeline illustration). Use `@gsap/react` `useGSAP()` in React so contexts clean up correctly.
4. Do not use Lenis as the default scroller for the authenticated dashboard. Keep native page/form scrolling, sticky headers, keyboard scrolling and nested scroll regions predictable.
5. Never add more than one animation runtime without a clear reason. Do not mix GSAP, Framer Motion, Motion and CSS animation indiscriminately.

## Motion tokens (provisional)

- Micro interaction: 100–160ms.
- Standard state transition: 160–220ms.
- Drawer/dialog entrance: 180–260ms.
- Small success moment: 300–500ms, once per meaningful achievement.
- Easing: simple ease-out for entrances, ease-in for exits; spring only where it feels physical and does not overshoot excessively.
- Distance: generally 2–8px for UI movement. Avoid large sliding panels for small state changes.

All timings are provisional and should follow the supplied design system if it has motion tokens.

## Interaction catalogue

### Navigation
- Active state changes immediately with a subtle background/border shift.
- Route content may use a 120–180ms opacity/translate transition, but never delay task availability.
- Preserve browser history, focus and scroll restoration where appropriate.

### Buttons
- Hover: slight tonal change, no dramatic scaling.
- Press: small feedback on pointer/keyboard press.
- Loading: visible spinner/progress plus disabled duplicate submission.
- Reduced motion: switch to state change without movement.

### Cards and rows
- Hover/focus raises contrast or border visibility; avoid floating shadows on every item.
- Clickable row has clear hover and focus treatment, not only a cursor change.

### Stars/sparkles
Use only in meaningful moments: assistant opens/receives a response, milestone completed, certificate issued, achievement earned. Small, quick, low particle count. Never use on every click, every card or as a permanent background.

### Mascots
Use a small finite set of state illustrations (idle, wave/welcome, thinking, celebrate). Keep them optional and non-blocking. No perpetual bobbing animation beside every form.

### Event progress
A progress indicator should move only when backend-confirmed state changes. Label completed/current/upcoming states so meaning is not conveyed by animation alone.

### Assistant
A side panel or mobile sheet should open with a short ease-out. Focus moves into the panel, Escape closes it, focus returns to the opener. Streaming responses should not move the page or steal keyboard focus.

### Form and submission
- Field errors appear without shaking the entire form.
- Save state changes from Saving to Saved only after confirmation.
- Final submit has a clear pending state and prevents duplicate requests.
- Confirmation may include one restrained star moment; respect reduced motion.

## Accessibility and performance

- Follow `prefers-reduced-motion` globally.
- Do not use scroll-jacking or pinned scenes in the application.
- Avoid animating layout properties when transform/opacity is sufficient.
- Avoid continuously running animation when a tab is hidden or an element is off-screen.
- Clean up all GSAP timelines, observers and event handlers on unmount.
- Keep focus order stable during animated state changes.
- Never make status dependent on colour or motion alone.

## Lenis decision

Lenis is intentionally not part of the default authenticated-app stack. It is useful for highly art-directed scrolling experiences, but the CampusCode app contains forms, tables, event tabs and nested panels. Native scrolling is the safer default. Reconsider only for a very specific, isolated surface and test with touch, keyboard, reduced motion and nested scroll containers.
