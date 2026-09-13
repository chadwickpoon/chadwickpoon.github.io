// Fictional, authored examples for the personal portfolio. No actual people or matches.
export const introductionGoals = [
  {
    id: "customer", label: "Understand a customer", icon: "↗", subtitle: "Get closer to a real problem.",
    setup: "Imagine you’re exploring a tool that helps small teams turn customer interviews into product decisions.",
    contexts: [
      { id: "workflow", label: "Learn how they work today", request: "I’d like to understand how a small team turns interview notes into its next product decision.", shared: "Turning customer research into a decision", reason: "Riley works on this every week. You want to understand the process; Riley is curious about ways to make it less cumbersome.", intro: "Alex is exploring how small teams use customer interviews, and Riley has been thinking about making that process easier. Comparing how notes become decisions could be a useful place to start." },
      { id: "idea", label: "Get feedback on an early idea", request: "I have an early concept and want feedback from someone who regularly makes decisions from customer interviews.", shared: "Feedback on an early research tool", reason: "Riley can react to the idea from day-to-day experience. You get a grounded critique; Riley gets a chance to shape something relevant to their work.", intro: "Alex has an early idea for making interview insights easier to use. Riley brings the perspective of a small product team. A quick look at the concept could help Alex test the assumptions and give Riley a say in the direction." },
    ],
    person: { name: "Riley", initials: "R", role: "Product lead at a small team", detail: "Runs customer interviews. Wants the useful insights to make it into the work.", color: "sage" },
  },
  {
    id: "builder", label: "Meet another builder", icon: "⊞", subtitle: "Find someone to think alongside.",
    setup: "Imagine you’re building a small AI product and would like to meet another person working through similar questions.",
    contexts: [
      { id: "prototype", label: "Compare notes on prototypes", request: "I’d like to compare how another builder tests an AI prototype with people before adding more features.", shared: "Learning from an early AI prototype", reason: "Sam is also testing a prototype. You each have something unfinished to share and a chance to question the other’s assumptions.", intro: "You’re both testing early AI products and working out what is actually useful. Bringing one prototype and one unanswered question each could make this a practical conversation." },
      { id: "feedback", label: "Trade honest product feedback", request: "I’m looking for another builder who wants to exchange candid feedback on what we’re making.", shared: "A fresh pair of eyes on each product", reason: "Sam wants an outside perspective, too. The value runs in both directions: each person can try the other’s product and share what felt clear or confusing.", intro: "You’re each looking for a fresh perspective on your product. A short swap—trying each other’s work and sharing what felt clear or confusing—could be valuable for both of you." },
    ],
    person: { name: "Sam", initials: "S", role: "Independent AI product builder", detail: "Tests small ideas. Enjoys trying a product before talking about the roadmap.", color: "peach" },
  },
  {
    id: "perspective", label: "Find a fresh perspective", icon: "✳", subtitle: "Talk through a decision.",
    setup: "Imagine you’re a founder deciding where to focus your time as your product starts to take shape.",
    contexts: [
      { id: "focus", label: "Work out what to focus on", request: "I’d like to talk with someone who has had to choose between improving an existing product and exploring a new idea.", shared: "Choosing where the next effort goes", reason: "Jordan has faced that trade-off. You bring a current decision; Jordan brings questions from a similar experience and an interest in learning how other founders approach it.", intro: "Alex is deciding between improving a current product and exploring something new. Jordan has worked through a similar choice. Discussing the evidence behind each option could give you both a useful perspective." },
      { id: "assumptions", label: "Challenge my assumptions", request: "I want someone to help me examine the assumptions behind the next thing I’m planning to build.", shared: "Making a product decision more explicit", reason: "Jordan likes discussing how founders make decisions. You get another perspective; Jordan gets a concrete problem to think through with you.", intro: "Alex has a product decision to make and would welcome some thoughtful pushback. Jordan enjoys unpacking those choices. Starting with the key assumption—and what would change your mind—could lead to a useful exchange." },
    ],
    person: { name: "Jordan", initials: "J", role: "Founder & product advisor", detail: "Interested in the decisions behind products, especially the ones without an obvious answer.", color: "lavender" },
  },
] as const;

export type IntroductionGoalId = typeof introductionGoals[number]["id"];
