# Boardy experience — September 12, 2026

## Experience and purpose

Boardy is the second detailed interactive chapter after Videoath. It connects Chadwick’s AI product history to an experience a visitor can try: choosing a reason to meet someone, adding context, and seeing why an introduction could be useful to both people.

The chapter has a sage-and-cream palette, conversational typography, a “hello there” cover, and simple profile cards. It extends the Neal.fun principle of distinct experiences inside a shared gallery. The introduction explorer uses the brief’s preference for guided choices while allowing visitors to read the professional context and leave for other chapters directly. This composition is an implementation proposal for review, not a newly approved final visual identity.

## What is implemented

- Three reasons to connect: understand a customer, meet another builder, or find a fresh perspective.
- Two conversation focuses for each reason. The selected focus changes the request, shared topic, connection explanation, and sample introduction.
- A disclosure for the sample introduction, backward navigation, and restart. Changing the reason clears the later choice; changing the focus closes the old introduction.
- Focus and scroll movement to each new step, keyboard-operable choices, visible selected states, and reduced-motion support.
- A directly linkable story, factual role summary, public product link, gallery return, and onward link to Videoath. The core content and links remain available without JavaScript.

The source is a prerendered BoardyStory page with one client-side IntroductionExplorer component. Original examples live in src/content/boardy-examples.ts. No new dependencies, backend, models, database, analytics, or paid services were introduced.

## Evidence and attribution

Chadwick’s supplied [LinkedIn profile](https://www.linkedin.com/in/chadwick-poon/) establishes Head of Product at Boardy in 2025 and describes conversational introductions with context. That is the biographical attribution used in this chapter.

[Boardy’s public website](https://www.boardy.ai/), checked September 12, 2026, describes understanding someone’s goals and useful connections, with agreement from both people before an introduction. The current product is linked separately; current features are not attributed to Chadwick’s 2025 tenure.

Alex, Riley, Sam, Jordan, their circumstances, and all introductions are fictional examples authored for this portfolio. They are labelled in the interface. No real profile, contact, conversation, match, or outcome is implied. The interaction sends no messages, calls no AI model, and stores no visitor data. The cover uses original CSS/SVG rather than third-party character or logo assets.

## Verification

Dependency installation from the lockfile, lint, strict type checking, and the production build passed. All 22 local desktop/mobile checks passed. The six Boardy checks cover every reason and focus, stale-state clearing, restart, disclosure controls, keyboard use, reduced motion, mobile step visibility, gallery entry, onward navigation, browser back, refresh, and the no-JavaScript fallback. The interaction checks also confirm no runtime errors or requests to outside services during the example flow.

Desktop and 390px mobile visual review covered the chapter, choice cards, context step, connection result, and sample introduction. Hosted verification and the source/deployment receipt are recorded after the review deployment.

## Open content and publishing choices

One specific product decision or feature Chadwick personally owned at Boardy, and any attributable outcome he wants to share, remain open. A clarification was requested while building; no unconfirmed contribution has been added. The portfolio can show the completed illustrative experience while that case-study content is developed.

The other four worlds remain concise chapters or collection introductions. Actual hiking trips, personal Dota stories, deeper work outcomes, and a live AI experience require their own content and scope. The final logo and Untitled UI integration remain deferred. This update uses the existing Vercel Hobby review address with indexing disabled; it does not move the custom domain.
