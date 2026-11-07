# Design-system bridge — provisional until server/design-system handoff

## Purpose

The user will provide authoritative server-side/design-system details later. The coding agent must not treat this document as the final design system. Its purpose is to define a single integration point and an initial visual hypothesis so the UI can be scaffolded without scattering values through components.

## Required process when the design system arrives

1. Inspect the supplied design-system package, tokens, CSS variables, component library, fonts, icon rules, spacing/radius scales and state colours.
2. Compare authoritative tokens against the provisional map below.
3. Prefer the official tokens and components. Do not invent parallel tokens if an equivalent exists.
4. Record missing concepts (e.g. warm surface, warning tint, selected nav state) as explicit extension requests.
5. Update one central token bridge, theme provider or CSS variable file.
6. Replace provisional fonts and colours centrally.
7. Recheck visual contrast and component states after mapping.
8. Do not alter backend contracts while applying the visual system.

## Provisional semantic colour map

These values are visual hypotheses inspired by the user's warm neutral dashboard reference and Sarvam's publicly described blue-to-orange colour principles. They are not confirmed CampusCode brand values.

| Token | Provisional value | Intended use |
|---|---|---|
| `--cc-canvas` | `#F7F5F0` | Overall workspace canvas |
| `--cc-surface` | `#FFFEFB` | Main panels and menus |
| `--cc-surface-warm` | `#F0E9DE` | Sidebar/secondary surfaces |
| `--cc-surface-muted` | `#F3F0EA` | Quiet field/list backgrounds |
| `--cc-ink` | `#1C1B19` | Main text |
| `--cc-ink-muted` | `#716F69` | Secondary text |
| `--cc-border` | `#E4DED4` | Borders and separators |
| `--cc-primary` | `#315CBF` | Primary interaction / links (subject to brand token handoff) |
| `--cc-primary-hover` | `#244B9E` | Hover/focus on primary actions |
| `--cc-warm-accent` | `#E6A93C` | Highlight/insight surface accent |
| `--cc-warm-surface` | `#FBF0D8` | Warm feature card or selected highlight |
| `--cc-success` | `#397B55` | Success states |
| `--cc-warning` | `#A56A16` | Warnings |
| `--cc-danger` | `#B7473C` | Errors/destructive states |
| `--cc-focus` | `#315CBF` | Visible keyboard focus |

The existing CampusCode lime/violet logo accents should remain in the logo. Whether they remain as UI accents must be decided after the actual brand tokens are supplied. Do not automatically apply violet gradients.

## Provisional typography roles

| Role | Provisional choice | Use |
|---|---|---|
| Display/editorial | Instrument Serif | Selected feature headings, event storytelling and achievements |
| UI | Geist Sans (or current app sans) | Navigation, buttons, forms, tables and body copy |
| Data | Geist Sans with tabular numerals | Scores, counts, deadlines and metrics |

Load fonts using the existing app's approved font strategy. Do not introduce external font loading if the project already has a bundled/approved type system. The official design system takes precedence.

## Spacing and geometry hypothesis

Use the existing spacing scale if present. If none exists, use a base-4 or base-8 scale with named semantic spacing tokens. Avoid one-off pixel values in component styles.

Suggested layout values for initial prototyping:

- Sidebar: 232–248px expanded; 72–80px collapsed.
- Topbar: 64–72px.
- Page gutter: 24px mobile, 28–40px tablet, 32–48px desktop.
- Content width: responsive; permit 12-column composition on wide screens and avoid arbitrary narrow max widths.
- Grid gap: 16–24px depending on breakpoint.
- Radius scale: 8 / 12 / 16 / 22px as role-based tokens, not one radius for all components.
- Borders: 1px subtle warm border; stronger contrast for selected/focused controls.
- Shadows: extremely restrained, used for elevation/overlay only.

## Iconography

Use the icon library already installed in the project. If no consistent library exists, Lucide is a reasonable candidate. Use consistent stroke width, optical size and icon containers. Do not combine emoji, random SVG packs and multiple icon families.

## Component theme contract

All reusable components should consume semantic tokens (canvas, surface, foreground, muted, border, primary, success, warning, danger, focus, overlay). Components must not hardcode palette values. State variants should be role-based and consistent: default, hover, active, focus-visible, disabled, loading, success, warning and destructive.

## Future handoff location

When supplied, place the authoritative design-system docs/assets in `docs/design-system-input/` or a repository location the user specifies. Update this document with the real token source path and mapping. Do not overwrite the user's canonical token files.
