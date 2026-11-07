# Visual direction — warm editorial product UI

## Primary reference

`reference-assets/dashboard-moodboard.png` is the main visual reference for the application UI. It depicts a warm, editorial dashboard mockup over a desert/sunset environment. The **application surfaces**, not the outer scenic mockup, are the source of the reusable UI language.

## What to take from the moodboard

1. Warm, light, calm surfaces: ivory, parchment, oatmeal, pale stone and soft neutral whites.
2. A distinct left navigation panel with a slightly warmer translucent/tonal surface, clear grouping and compact icon+label rows.
3. A large, uncluttered content canvas.
4. A useful search/command entry near the top of the application.
5. Editorial serif headings for selected feature titles and prominent content; highly readable sans-serif for controls, body text, tables and data.
6. One prominent feature/insight surface with soft amber, saffron or sunlight tones; not a gradient on every card.
7. Generous whitespace with a precise spacing grid and subtle borders.
8. Product content presented as well-structured lists/tables, not a wall of identical floating cards.
9. A restrained, premium feeling: confident hierarchy, not visual noise.

## How to adapt it to CampusCode

CampusCode is a student innovation/hackathon platform, not a finance product. Translate the reference into event and project concepts:

- Home feature card: the student's current event/next action, with a restrained amber tonal field or event artwork.
- Event catalogue: compact event cards with useful meta information and distinct event category cues.
- Team workspace: clean roster rows, avatar/mascot circles and understandable invitation states.
- Submission: editorial project title, structured form sections, progress/preflight panel and explicit action footer.
- Results: clear ranking/status/score surfaces, only when the backend has published the result.
- Achievements: credential previews and download states.

## Sarvam-inspired principles (not brand copying)

Sarvam's official brand explanation describes a blue-to-orange spectrum as a foundational visual language and references mandala-inspired repeated circles, layers and intentional construction. Use the principles only as inspiration:

- Controlled cool-to-warm colour relationships: a clear blue/cobalt signal balanced by warm saffron/amber accents.
- A circular geometry vocabulary: small orbit/radial motifs, progress rings, subtle repeated-circle illustrations and compact star/mandala details.
- Motion that communicates transformation or progress rather than adding spectacle.
- A grounded, familiar and modern feel.

Do not copy Sarvam's logo, monogram, proprietary assets or exact brand compositions. The product remains CampusCode and must preserve its own logo/identity.

## Proposed visual personality

- Calm, student-friendly, capable and optimistic.
- Warm and human, but still precise enough for deadlines, forms, scores and project reviews.
- Editorial character in selected display moments; functional clarity everywhere else.
- A small amount of playful detail: one star/sparkle at a milestone, gentle avatar reactions, tiny orbital progress motifs. Playfulness is a reward, not background noise.

## Layout character

- Desktop shell: warm sidebar, fine separator, calm topbar, wide main content region.
- Use an 8px spacing base or existing token scale; align cards/sections to a consistent grid.
- Use hierarchy instead of a card for every item. Use tables, lists, grouped sections and inline status where they are more efficient.
- Main workspace should breathe on wide monitors; avoid a narrow 900px centered content column if the data can use a 12-column layout.
- Never rotate/skew the real application UI. The screenshot's perspective is a product-presentation device, not an interface pattern.
- Do not use desert/sky photography as a global authenticated-app background. Keep product surfaces readable. It can be used as optional event artwork or an achievement backdrop if relevant and performant.

## Do not do

- No generic purple/pink/blue glow gradients.
- No repeated all-caps tracked eyebrow labels.
- No default SaaS kit in which every element is an identical rounded card.
- No excessive glassmorphism or translucent surfaces that reduce contrast.
- No giant serif text for every page title; use display type sparingly.
- No excessive pill badges, dot labels, decorative dividers or microcopy.
- No emoji icons in place of a consistent icon system.
- No invented data visualisations or fake live statistics.
- No AI-generated-looking blobs, random floating 3D objects, or gratuitous confetti.

## Typography direction (provisional)

Recommended pairing to trial against the future design-system fonts:

- Display/editorial: Instrument Serif (or an existing high-quality serif supplied by the design system), reserved for feature headings, event/editorial moments and achievement detail.
- UI/body: Geist Sans or the existing product sans-serif token, used for navigation, forms, tables, labels and paragraphs.
- Numeric/data: same UI sans with tabular numerals; do not introduce a third family unless necessary.

Typography hierarchy should be defined by role and measured line length. Body text must remain comfortable at normal zoom and mobile widths. Avoid very thin weights for functional text.

## CampusCode brand preservation

- Preserve the current CampusCode logo and logomark without recolouring/reconstructing them unless the official asset system says otherwise.
- Use the current lime/violet brand accents carefully; they should not compete with the warm neutral / cobalt / amber interface palette.
- The final palette and font family are provisional until the user supplies the authoritative design system.
