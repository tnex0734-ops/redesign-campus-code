# 01 — Visual Art Direction: Suspended Herbarium

## Creative thesis

**A living field guide for student builders.**

CampusCode should feel like a carefully art-directed digital specimen room: ideas are collected, people connect, experiments grow and projects are released into the world. The visual language is built from two specific references supplied by the user—not from a generic “nature-inspired website” moodboard.

### Reference 01 — suspended interactive objects

What matters in the image:
- The page is light, open and minimal.
- A simple navigation bar sits at the top.
- The hero statement is the visual anchor.
- Small saturated UI objects hang from long fine vertical lines.
- The objects are distributed around the central message, giving it depth and a sense of physical space.
- The objects are tactile enough to invite a hand/pointer interaction.
- The surrounding canvas is restrained so that the headline and objects remain clear.

Translate this into CampusCode by suspending small event artefacts: a challenge tile, tiny team token, project/code specimen, event date tag, leaf symbol and award marker. Their silhouettes can be simple, but each object must be recognisable and have a useful action.

### Reference 02 — botanical specimen / “Natural Codes” moodboard

What matters in the image:
- Warm, pale cream/green paper instead of pure white.
- A fine, evenly spaced scientific grid across the canvas.
- Botanical leaves overlap as physical specimens: some are full-colour and textured, others are translucent or rendered as fine vein drawings.
- The leaf artwork is large, asymmetrical and richly detailed.
- Fine olive linework and antique-gold/pollen highlights create precision.
- A sophisticated, high-contrast serif display face carries the headline.
- Small scientific notes and specimen marks live at the edges.
- The mood is quiet, tactile, natural and technical at the same time.

Translate this into CampusCode with original leaf forms, branching vein structures and modular patterns that subtly echo pathways, nodes and collaboration. Do not copy the specific plant drawing, Corona wordmark, alcohol copy or brand layout.

## Composition lock

### Hero: one composition, two references

At large desktop sizes, use a carefully composed full-width paper canvas with a compact header. The hero should feel like a designed physical installation viewed straight on:

- Main headline and short paragraph occupy the central/left-centre reading zone.
- The botanical specimen cluster sits behind or to one side of the headline, large enough to be a memorable visual signature but never blocking text.
- Five to seven hanging objects occupy the outer perimeter of the hero, each suspended from a thin cord anchored to a visible upper point.
- Objects vary slightly in scale, shape and colour; avoid perfectly even distribution or a symmetrical icon halo.
- One or two strings can cross the composition only where they do not cross the main type.
- The grid is visible on close inspection, not a loud graph-paper background.
- Use tiny registration crosses, specimen ticks and one or two annotations near the canvas edges.
- The hero CTA remains immediately visible and visually distinct.

At narrower desktop widths, simplify the number of objects and shift the botanical form behind the content. On mobile, retain the paper, botanical, and suspension ideas in a compact stacked composition; do not shrink the desktop hero into illegibility.

### Suggested hero copy

Keep the existing product idea and brand language:

**Build. Compete. Ship.**

Supporting copy:
“Find a challenge, meet your people and turn your next idea into something real.”

Primary CTA: **Explore hackathons**
Secondary CTA: **See how it works**

Optional supporting line, if the actual page needs the category clarified:
“CampusCode is the student arena for hackathons, teams and projects.”

Do not use an eyebrow label above the headline. Do not add filler phrases such as “the future is here”, “unlock your potential” or “where innovation meets possibility”.

## Colour system

Dominant colours are warm paper, dark olive/forest, and botanical green. The hanging objects may use a few brighter signals inspired by reference 01.

| Token | Hex | Use |
|---|---|---|
| Paper | `#F1F0DE` | Main canvas |
| Paper light | `#F8F7EB` | Clear content panels |
| Paper shadow | `#E6E3CB` | Alternate bands / recessed details |
| Ink | `#252A1D` | Main text |
| Forest | `#3E4A2B` | Strong botanical tone / dark sections |
| Olive | `#667044` | Secondary type and lines |
| Moss | `#8B9863` | Plant layers |
| Leaf | `#A8B878` | Light leaf surfaces |
| Brass | `#C6A84A` | Fine vein accents / attachment hardware |
| Grid | `#D5D2B8` | Low-contrast grid |
| Clay | `#C8794D` | One or two hanging objects |
| Signal blue | `#355E9B` | Rare small interaction cue |
| Paper white | `#FFFDF4` | High-contrast surfaces |

Do not turn this into a pastel green gradient. Use solid tones, transparency, linework and layered image depth. Avoid purple entirely. Avoid a broad gradient on the hero background. Check text contrast; brass and light moss are decorative only, not body text.

## Typography — distinctive pairing

### Primary recommendation

- **Instrument Serif** — large display/headline moments, especially the hero and selected editorial titles. Use a restrained number of weights and carefully tuned tracking.
- **Manrope** — interface, body copy, navigation, buttons and event descriptions. Its clear proportions balance the expressive serif.
- **IBM Plex Mono** — very limited specimen data such as coordinates, dates or numbered objects; not an all-purpose eyebrow font.

This pairing has an editorial botanical voice without turning the entire page into a vintage poster. Body readability must remain modern.

### Alternatives to test only if needed

1. **Fraunces + Manrope + IBM Plex Mono** — warmer, more organic and slightly more playful.
2. **Bodoni Moda + DM Sans + IBM Plex Mono** — sharper high-contrast editorial look; use only if the thin strokes survive at mobile sizes.

Do not load all font families. Test the recommended pair at 1440px and 390px first, then commit. Use the project's existing font-loading approach and avoid layout shift.

## Surface and detail language

- Paper texture should be extremely subtle: use a very low-opacity noise overlay or a compressed texture asset; do not apply heavy filters.
- The square grid should be built with CSS gradients or a lightweight SVG, with large grid spacing and low opacity.
- Botanical line drawings should use SVG paths with varied stroke widths and branching structure.
- Solid botanical forms can be image assets or layered SVG shapes; use soft transparency rather than blurry glow.
- Add small specimen ticks, crosshair marks, short leader lines and reference numbers selectively.
- Use hairline borders and small corner details where they support the specimen-table feel.
- Buttons should be crisp and tactile, not pill-shaped by default. A compact rounded rectangle or capsule is acceptable for a small hanging object, not as the universal control style.

## Section visual language

1. Hero: suspended artefacts + large botanical specimen.
2. “Where students build”: oversized serif statement with a single large plant/network illustration and short, direct copy.
3. Four-stage journey: four editorial panels or a long connected path; each stage uses a different specimen/icon treatment rather than four identical rounded cards.
4. Hackathons: event cards should feel like specimen/event tickets on paper, with a clear deadline/status and an image or custom event marker.
5. Collaboration: overlapping profile/role tokens connected by thin lines; do not fabricate user faces or testimonials.
6. Project outcomes: original project-artifact gallery only if real approved work/assets exist; otherwise use category illustrations.
7. Final CTA: a strong forest/olive panel or full-bleed paper section with one clear action and restrained botanical contour.
8. Footer: clean editorial index, not a large template footer.

## Avoid list

- Purple, violet or blue-purple gradients.
- Glowing blobs, glassmorphism, frosted cards and soft neon glows.
- Generic 3D AI orbs, robot heads or abstract AI stock visuals.
- Default white SaaS feature grids with repeated identical card styling.
- Overuse of rounded pills and badges.
- Repeated uppercase eyebrow labels and tiny metadata above every heading.
- Fake logos, fake testimonials, fake user counts or fake active-event statistics.
- Directly copying another brand's logo, type lockup, artwork or copy.
- Making the botanical art so busy that it competes with the main message.

## Quality test

Put the two reference images and the implemented hero side by side. At a glance, the new page should share:
- the hanging-object / string composition of image 01;
- the herbarium paper, grid, leaf anatomy and olive editorial language of image 02.

If only one of those two languages is visible, the art direction is incomplete.
