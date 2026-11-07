# UX writing and feedback patterns

## Voice

CampusCode should sound encouraging, capable and direct. Keep brand personality in occasional feature moments, not in labels that users must decode.

- Use plain language and active voice.
- Prefer familiar action verbs: Explore, Register, Join, Create team, Save draft, Review, Submit, View results, Download.
- Use sentence case for navigation, labels and headings.
- Avoid jargon such as "backend data", "authentication ready" or "journey" when a plain description is clearer.
- Do not use an all-caps eyebrow above every heading.
- Avoid overusing exclamation marks, emoji or celebratory language.

## Suggested copy changes

| Current/legacy wording | Recommended wording |
|---|---|
| Open Journey | Continue to event |
| Find Your Team | Find teammates |
| Check Idea with AI | Review my project |
| Your Idea Report Will Appear Here | Your project review will appear here |
| Backend Profile Loaded | Remove; this is implementation detail |
| Live Data | Remove unless it communicates a meaningful freshness state |
| Authentication Ready | Remove; not user-facing value |
| No Registered Hackathons | You haven't joined an event yet |
| Open Official Communication | View announcements |
| Open Guide | Read the student guide |
| Submit Round 1 Project | Submit project |
| RuleBot | Ask about the event rules (product feature name can remain in technical/product documentation) |

## Feedback copy examples

- Profile save: "Your profile has been updated."
- Team invite sent: "Invitation sent to [name]."
- Team invite failed: "We couldn't send the invitation. Check your connection and try again."
- Draft save: "Draft saved at [time]."
- Draft save failure: "We couldn't save your changes. Your text is still here; try saving again."
- Preflight hard failure: "Complete the required fields before submitting."
- AI suggestion: "Suggestion: make the problem statement more specific. This is advice, not an event-rule requirement."
- Submission success: "Your project has been submitted."
- Submission error: "Your project wasn't submitted. Your draft is preserved; try again."
- Certificate issued: "Your [event] certificate is ready to view and download."
- Certificate pending: "The organiser hasn't issued this certificate yet."
- Network failure: "We couldn't connect. Check your connection and try again."

## Feedback hierarchy

1. Inline feedback for field validation and form state.
2. Toast/snackbar for brief, non-critical confirmations.
3. Persistent notification for event/account changes that the user may need later.
4. Dedicated confirmation state for consequential operations such as registration, final submission and certificate issuance.

## Avoid

- "Something went wrong" without next steps.
- Success toasts before server confirmation.
- Fake percentages or countdowns.
- Technical exception messages.
- AI responses presented as official decisions.
- Overly playful copy in security, error or eligibility states.
