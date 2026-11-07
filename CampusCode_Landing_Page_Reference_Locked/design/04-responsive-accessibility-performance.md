# 04 — Responsive, Accessibility and Performance Requirements

## Responsive widths to test

At minimum, inspect:
- 2048px
- 1920px
- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px
- 360px

Do not simply scale the desktop composition proportionally. Re-compose the artwork and interactions for smaller screens.

## Desktop

- Preserve the open, suspended-object composition.
- Main headline and CTA should remain the highest-priority content.
- Botanical specimen can occupy one side or overlap the background behind a reserved text zone.
- Use generous margins, but constrain text measure for readability.
- Keep a clear upper navigation and a real Join action.
- Hanging objects must not overlap the heading, primary CTA or navigation.

## Tablet

- Reduce suspended objects to the most important four or five.
- Reduce cord lengths and reposition anchors to prevent overlap.
- Simplify leaf layers and linework while preserving the signature botanical illustration.
- Allow navigation to condense before it wraps.
- Event cards can switch to a two-column grid or horizontal list where appropriate.

## Mobile

- Keep the headline, one-line/two-line product explanation and primary CTA visible early.
- Re-compose hero to a clear stacked composition: headline and CTA first, botanical composition and interactive artefacts around/below it.
- Retain the suspended quality through shorter cords and three or four larger, easier-to-tap artefacts.
- Do not put cords over body text or buttons.
- Use tap to reveal the object action or preview; no hover-only content.
- The botanical visual should remain visible and recognisable, not collapse into a tiny decorative sliver.
- Use fewer grid lines and fewer scientific annotations.
- Use a compact mobile nav with a proper accessible menu.
- Ensure no horizontal overflow at 360px.

## Accessibility

- Use semantic `header`, `nav`, `main`, `section` and `footer` landmarks.
- Keep one meaningful `h1` and a logical heading hierarchy.
- CTA links should be real anchors with descriptive text.
- Hanging artefacts should be buttons/links with accessible names.
- Hover behaviour must also be reachable with keyboard focus.
- Ensure `:focus-visible` is obvious on the paper palette.
- Decorative SVGs use `aria-hidden="true"` and are not focusable.
- Informative botanical artwork has concise alt text.
- FAQ accordion uses button semantics and `aria-expanded` / `aria-controls`.
- Mobile menu communicates expanded state and returns focus appropriately.
- Panels/popovers close with Escape; focus returns to trigger.
- Use colour plus text/icon/shape to communicate event status.
- Check contrast for all body copy, links, controls and focus rings.
- Avoid using brass, pale moss or light grid colours as small body text.
- Follow WCAG 2.2 AA where applicable.

## Motion accessibility

Respect `prefers-reduced-motion`. Reduced-motion mode must not make content disappear or make controls harder to discover.

When reduced motion is enabled:
- use native scrolling;
- stop hanging-object idle loops;
- disable pointer attraction and parallax;
- show all section content immediately;
- avoid large clip-path/scale reveals;
- keep all hover/click/tap actions functional without motion.

## Performance

- Prefer inline SVG for lightweight line art and cords.
- Optimise large botanical images; use WebP/AVIF where the project pipeline supports it.
- Provide explicit image dimensions/aspect ratio to prevent layout shift.
- Do not load full-resolution reference screenshots as page backgrounds.
- Use references to guide original assets, not as the production hero composition.
- Keep hero content visible before animation initialises.
- Lazy-load below-the-fold images and noncritical assets.
- Preload only fonts required for the first viewport.
- Avoid unnecessary font weights and duplicate font files.
- Avoid high-cost blur filters and huge box shadows.
- Animate transform and opacity wherever possible.
- Do not use WebGL/Three.js unless the implementation plan proves SVG/CSS is insufficient; it is not expected for this page.
- Keep one animation clock/RAF integration.
- Pause continuous animation when offscreen or tab-hidden.
- Test at mid-range mobile devices and reduced CPU conditions.

## SEO and social preview

- Use a meaningful page title and meta description grounded in the product.
- Include a social preview image using CampusCode-owned visual assets.
- Preserve canonical URL and existing metadata conventions.
- Do not claim awards, reach, user counts or partner status that are not verified.

## QA acceptance

- No horizontal scroll at 360px.
- No heading/CTA overlap at every target width.
- Every hanging artefact can be reached and activated by keyboard and touch.
- No hover-only content.
- Reduced motion leaves the complete page visible and functional.
- No console errors, broken images, bad links or hydration warnings.
- No layout shift caused by late font/image loading beyond a reasonable threshold.
- All section links and footer routes resolve to existing destinations.
