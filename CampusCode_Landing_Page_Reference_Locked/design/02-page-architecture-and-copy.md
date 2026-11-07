# 02 — Landing Page Architecture, Conversion and Copy

## Conversion strategy

The public landing page has one primary visitor task: **discover a hackathon worth joining**. The secondary task is account creation. The page should make the product understandable before asking for registration.

Primary CTA throughout the page: **Explore hackathons**.
Secondary CTA: **Join CampusCode** or **See how it works**, depending on the section.
Header action: `Join CampusCode`; keep `Log in` secondary.

Do not place a registration gate in front of public event discovery if the existing platform allows browsing.

## Brand message

Retain the live site's clear concept:
- Build.
- Compete.
- Ship.

Explain CampusCode in human language:
“CampusCode brings students, teams, organisers and hackathons into one connected place.”

The visitor should understand that this is a student hackathon arena, not a generic coding course, job board or AI tool directory.

## Page sequence

### 1. Header

A compact, quiet header over the paper canvas.

Suggested navigation:
- About
- How it works
- Hackathons
- Community

Actions:
- Log in (quiet text link)
- Join CampusCode (solid dark or olive action)

Behaviour:
- Sticky or lightly sticky after the hero if it helps navigation; avoid a thick fixed bar.
- Mobile menu has clear focus handling and closes on Escape / route selection.
- Reuse actual route paths found in the repository.

### 2. Signature hero

Headline: **Build. Compete. Ship.**

Supporting copy:
“Find a challenge, meet your people and turn your next idea into something real.”

Primary CTA: `Explore hackathons`
Secondary CTA: `See how it works`

Hero art:
- large original botanical specimen cluster;
- thin scientific grid and marginal specimen notation;
- five to seven suspended event artefacts;
- each artefact has a real interaction and clear accessible name;
- the objects frame the headline instead of obstructing it.

The hero must explain the product without relying on an eyebrow, tiny metadata or a long animation. The CTA must be available immediately, even while art is animating.

### 3. Small transition / idea index

A fine, restrained horizontal index or short looping strip that introduces:
`Ideas · People · Projects · Possibility`

It may move slowly, but must pause or become static for reduced motion. Do not turn it into an endless loud marquee. It should visually connect the hero to the next section.

### 4. Platform introduction — “Where students build”

Heading:
**Where students build.**

Copy:
“CampusCode gives student ideas somewhere to go. Discover a challenge, find the right collaborators and take your work from a first sketch to a finished project.”

Visual:
A botanical plate whose leaf veins transform gradually into nodes and connected paths. Use one strong composition, not a generic feature-card grid.

### 5. How it works — four stages

Heading:
**From first idea to shipped work.**

Four clear steps:

1. **Discover** — Find a challenge that makes you want to build.
2. **Team up** — Find people who bring different skills and perspectives.
3. **Build** — Turn your idea into something people can try.
4. **Ship** — Submit your work, get judged and share what you made.

Each stage should link or scroll to the relevant page area. Use distinct visual markers and a connected line/path, not four indistinguishable cards.

### 6. Featured hackathons

Heading:
**Find your next challenge.**

Intro:
“Explore hackathons, quizzes and student challenges that give your ideas somewhere to go.”

Event card requirements:
- real event title;
- category or challenge type;
- short description;
- registration state;
- closing date and time with timezone, if available;
- mode / eligibility / team size when verified;
- direct event details action.

Use live backend/public API data only if reliable. Do not invent active event counts, prize values, dates, categories or status. If no live events are available, show a neutral state explaining that new events will appear here and link to all events if that route exists.

Event card visual treatment: paper ticket / field-note specimen. Allow image or abstract event marker. Keep metadata compact, readable and useful.

### 7. Collaboration — “Find your people”

Heading:
**Good ideas grow with the right people.**

Copy:
“Build with developers. Think with designers. Team up with people who want to make something real.”

Show the collaboration concept with connected role tokens such as `Developer`, `Designer`, `Product thinker`, `Researcher`. Use actual profile/community data only where consent and backend support exist. Do not fabricate testimonials, faces, team photos or success metrics.

CTA: `Explore the community` or `Join CampusCode`, depending on the real route.

### 8. Build and ship — outcomes / projects

Heading:
**Make something worth sharing.**

Explain the path from challenge to submitted project and competition result. If actual student project thumbnails are available and approved, build an editorial project strip. If not, use original non-photographic artifact illustrations (code sheet, prototype tile, circuit specimen, product screen outline) rather than fake portfolio entries.

### 9. Final CTA

Heading:
**Your next project starts here.**

Copy:
“Find a challenge. Bring your skills. Build something with CampusCode.”

Primary CTA: `Explore hackathons`
Secondary CTA: `Join CampusCode`

The final CTA should echo the hero but not copy-paste its exact layout. Use a confident forest/olive surface, paper typography and a subtle botanical line drawing.

### 10. Footer

Keep it concise:
- CampusCode wordmark and one-line description;
- Explore hackathons;
- About / How it works;
- Community / contact if verified;
- Log in / Join CampusCode;
- privacy and terms only if actual pages exist.

Do not invent social profiles or legal routes.

## Suspended hero objects — interaction map

These objects should look like the colourful suspended objects in reference 01, adapted to the natural-code palette.

| Artefact | Visual cue | Action |
|---|---|---|
| Challenge token | Small paper tile with botanical symbol | Scroll to featured hackathons |
| Team token | Compact olive/leaf symbol | Reveal a short “find your people” preview or scroll to collaboration |
| Project token | Tiny folded/code specimen | Scroll to Build and Ship |
| Calendar token | Date/round marker | Scroll to event timeline / how it works |
| Award token | Brass/olive rosette | Scroll to outcomes / achievement explanation |
| Community token | Connected-node tile | Scroll to community section |

Use only five to seven artefacts. Each must be a semantic button or link with an accessible name. Do not use a generic card full of unlabelled icons.

## Conversion and content rules

- Above the fold: headline, plain-language explanation, primary CTA, secondary CTA and the visual signature.
- Repeat primary CTA at natural decision points (hero, event area, final CTA), not after every section.
- Every CTA label tells the user what happens.
- Use sentence case for controls and body copy.
- Do not use “Enter the arena” as a primary functional CTA; it is less explicit than “Explore hackathons” or “Join CampusCode”.
- Avoid generic claims: “the future of innovation”, “unlock your potential”, “revolutionise learning”, “seamless ecosystem”.
- Avoid repeated eyebrow labels. Section headings should carry meaning themselves.
- Avoid fake scarcity, countdowns and false urgency.
- Use clear empty states when live events are absent.
