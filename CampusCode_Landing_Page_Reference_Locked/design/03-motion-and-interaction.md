# 03 — Motion and Interaction Specification

## Overall motion character

The motion should feel like objects suspended in a quiet studio and plant specimens being revealed on a light table. It should be **gentle, physical, paced and intentional**—not a constant stream of parallax, bouncing UI and attention-grabbing scroll tricks.

Motion has three roles:
1. Give the suspended hero artefacts believable physicality.
2. Reveal botanical linework and section compositions as the visitor scrolls.
3. Provide a short, clear response to user action.

## Stack

- GSAP for timelines and object interaction.
- ScrollTrigger for section reveals and scroll-linked SVG progress.
- `@gsap/react` / `useGSAP()` for React lifecycle cleanup where applicable.
- Lenis for smooth scrolling only if compatible with the existing project and browser behaviour.
- SVG for botanical paths, attachment cords, node paths and organic masks.
- CSS for lightweight hover/pressed/focus states.

Do not introduce Framer Motion or another animation system if GSAP is the authored motion layer. Do not add WebGL or Three.js for this design; the visual can be achieved with SVG, CSS, and carefully prepared images.

## A. Hanging object mechanics

### Structure

Each hanging artefact should consist of:
- an upper anchor point;
- a thin cord or line;
- optional tiny attachment ring / knot;
- the object body;
- an interaction target with a clear label.

The cord and object should visually read as one suspended assembly. The object’s rotation pivot must sit at the top attachment point, not the centre.

Suggested DOM/SVG layering:

```text
.hanging-item
  .hanging-cord (SVG line or border)
  .hanging-joint
  button.hanging-object
    icon / short label
```

If the cord is SVG, connect the line endpoint to the object pivot at the actual layout position. Recalculate responsibly on resize; do not let a decorative line detach from the object.

### Idle swing

- Default rotation: 0 degrees.
- Amplitude: approximately 1–2 degrees; rarely exceed 2.5 degrees.
- Duration: roughly 4–8 seconds per cycle.
- Use different phase offsets and slightly different durations so the objects do not move in sync.
- Use a soft sine-like / custom ease motion, not a repetitive mechanical pendulum loop.
- Avoid continuous floating on the object’s vertical axis; the reference is about hanging and swinging, not levitating.
- Keep the cords visually stable and aligned with the pivot.

### Hover and focus

On pointer hover or keyboard focus:
- gently increase the swing by a small amount;
- bring the object slightly forward or increase scale by no more than about 2–3%;
- optionally darken the border or make the connection point more visible;
- show a small label/preview if it is needed to clarify the action;
- do not displace it so far that the pointer loses the target.

Hover is not required to understand the action. The accessible name and action must exist before hover.

### Click / tap

On click:
- use a short tug response (a little extra swing with damping back to rest);
- then perform the real action: scroll to a relevant section, open a small preview or navigate to a verified destination;
- do not show a fake toast for a navigation action;
- on touch, tap is the primary interaction. Do not require hover.

### Object semantics

Use buttons for local actions and anchors for navigation. Examples:
- `Explore hackathons` (scroll to verified event area or navigate to the real event listing route).
- `Find teammates` (scroll to community/team explanation; do not open a non-existent feature route).
- `See how projects ship` (scroll to the four-step flow).

If an object opens a panel:
- panel is keyboard accessible;
- close button has an accessible name;
- Escape closes it;
- focus returns to the launching object;
- no content is revealed exclusively on hover.

## B. Hero entrance timeline

Choreograph one hero entrance on first load:
1. paper/grid and leaf specimen become visible;
2. main headline appears with a restrained mask or clip reveal;
3. supporting copy and CTA settle into place;
4. hanging cords draw from their anchor points;
5. objects arrive with a tiny, damped movement and settle;
6. idle swing begins after the entrance completes.

Do not delay the CTA until the animation ends. The initial HTML should already contain meaningful content and controls. Avoid a long intro loader or forced “enter site” screen.

## C. Botanical SVG animation

Build original linework with SVG paths:
- main leaf silhouette;
- midrib;
- lateral veins branching from the midrib;
- secondary vein details;
- small node dots / seed marks.

Use `stroke-dasharray` and `stroke-dashoffset` to draw selected vein paths. Stagger only a few groups. A large amount of botanical linework can be pre-rendered as SVG and revealed through a mask rather than animating hundreds of paths individually.

Use `preserveAspectRatio` thoughtfully. On mobile, simplify the illustration rather than scaling a dense desktop drawing down to unreadable size.

## D. Scroll-based reveals

The user specifically wants organic/random-shaped reveals as new sections enter view. Implement this as a **curated family of repeatable shapes**, not random geometry generated on every load.

Approved reveal vocabulary:
- leaf-shaped clip-path opening;
- irregular oval / seed-shaped mask;
- thin botanical vein path drawing;
- paper sheet sliding from beneath another sheet;
- staggered specimen elements appearing from a common baseline;
- a short crop reveal from one edge;
- small node paths connecting as the section becomes active.

Use different reveal types for selected sections so the page feels hand-composed. Do not apply the same fade-up to every element.

Avoid random per-render sizes/coordinates. If controlled variation is useful, use a seeded and fixed sequence so the page is visually stable across reloads and test runs.

### Scroll section behaviour

- Use ScrollTrigger with sensible `start` thresholds; do not overuse pinning.
- Keep sections in normal document flow.
- Use a short reveal duration, generally around 0.6–1.1s depending on the composition.
- Avoid animating every child individually; use grouped elements and a few purposeful staggers.
- Ensure no text remains hidden if GSAP fails or JavaScript is disabled. Base styles should show the content; animation should enhance it.
- Refresh ScrollTrigger after major image/font/layout shifts.

## E. Lenis integration

Use Lenis only if the repo's current framework and routing support it cleanly. Native scroll must remain the fallback.

If integrating with GSAP ScrollTrigger, follow the official Lenis integration pattern:
- subscribe to Lenis scroll updates and call `ScrollTrigger.update`;
- run Lenis through GSAP's ticker (or use the official adapter pattern appropriate to the installed version);
- use exactly one RAF/ticker loop;
- remove listeners/ticker callbacks and destroy Lenis on unmount;
- do not combine `autoRaf: true` with a second manual ticker loop.

Do not prevent normal scroll, anchor links, browser back/forward or keyboard navigation. Do not use Lenis on a page with no meaningful benefit just because the package was requested.

## F. React lifecycle

When using React:
- use `useGSAP()` from `@gsap/react` with a scoped container;
- register plugins once in the correct client-side module;
- clean up / revert all timelines and ScrollTriggers;
- use `contextSafe()` for GSAP animations started by click/hover event handlers after hook execution;
- avoid unscoped global selectors;
- account for React Strict Mode and SSR/client-component boundaries.

Do not create duplicate animations after hydration or route navigation.

## G. Micro-interactions

| Target | Response |
|---|---|
| Header CTA | tiny arrow translation / pressed state |
| Hanging object | damped swing and subtle scale |
| Event card | slight image/linework shift; no huge card lift |
| Journey step | connected line / node responds to active state |
| FAQ | height transition with clear open/closed indicator |
| Mobile nav | short opacity/position transition, accessible focus |
| Anchor link | smooth scroll only when motion is allowed |
| Final CTA | understated leaf/vein stroke response |

Use transforms and opacity rather than animating layout dimensions or expensive blur. Keep hover movement under control so the page remains easy to use.

## H. Reduced motion

When `prefers-reduced-motion: reduce` is active:
- do not initialise Lenis interpolation;
- disable idle hanging swing and pointer parallax;
- make SVG line drawings appear immediately or use a very short opacity reveal;
- disable scrubbed and clip-path section reveals;
- make all copy and images visible from first paint;
- keep all interactions and navigation working;
- do not replace motion with sudden flashes.

Also pause loops when the hero is outside the viewport or the tab is hidden.

## Reference documentation

- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- GSAP + React / useGSAP: https://gsap.com/resources/React/
- Lenis + GSAP integration: https://github.com/darkroomengineering/lenis#gsap-scrolltrigger
- GSAP official AI skills: https://github.com/greensock/gsap-skills
