// Original illustrative copy for the portfolio, not a learner response or live assessment.
export const practiceScenario = {
  prompt: "You’re working on a group project. One teammate has stopped contributing, and the deadline is getting close. What would you do?",
  openings: [
    {
      id: "deadline",
      label: "Remind them what’s at stake.",
      response: "I’d remind them of the deadline and explain that the team is counting on them.",
      strength: "You make the shared responsibility clear.",
      opportunity: "You haven’t yet found out why they’ve stopped contributing. Start with a question before deciding what the problem is.",
    },
    {
      id: "takeover",
      label: "Take on their part myself.",
      response: "I’d finish their section myself so the group can still submit on time.",
      strength: "You recognise the deadline and want to help the team.",
      opportunity: "Taking over may solve today’s deadline, but leave the underlying problem untouched. Include a conversation and a shared plan.",
    },
    {
      id: "curiosity",
      label: "Check in with them privately.",
      response: "I’d ask them privately how things are going and what’s getting in the way.",
      strength: "You leave room to understand their situation without embarrassing them.",
      opportunity: "A thoughtful opening needs a practical follow-through. Explain how you would agree on responsibilities and protect the deadline.",
    },
  ],
  nextSteps: [
    {
      id: "understand", label: "Understand what’s happening",
      response: "I’d speak with them privately, explain what I’ve noticed, and ask what support they need. Then we could agree on what they can realistically finish.",
      takeaway: "You’ve added context before jumping to a solution. Next, make the plan specific enough for the team to act on.",
    },
    {
      id: "plan", label: "Make a plan together",
      response: "After hearing their perspective, I’d agree on a manageable next step and a time to check in. If the deadline is still at risk, I’d discuss redistributing work fairly with the team.",
      takeaway: "You’ve connected empathy to action: a next step, a check-in, and a way to keep the team informed.",
    },
  ],
} as const;
