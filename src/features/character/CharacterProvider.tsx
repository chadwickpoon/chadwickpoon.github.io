"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Interest } from "@/content/experiences";

interface GuideState { interest: Interest; message: string; }
type GuideAction = { type: "choose"; interest: Interest };
const greetings: Record<Interest, string> = {
  all: "Hey, I’m Chadwick. What brings you here?",
  work: "Let’s start with the things I build.",
  life: "Excellent choice. Let’s head off the beaten path.",
};
function guideReducer(_state: GuideState, action: GuideAction): GuideState {
  return { interest: action.interest, message: greetings[action.interest] };
}
const GuideContext = createContext<{ state: GuideState; choose: (interest: Interest) => void } | null>(null);

// A small local-state adaptation of Videoath’s CharacterContext pattern.
export function CharacterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(guideReducer, { interest: "all", message: greetings.all });
  return <GuideContext.Provider value={{ state, choose: (interest) => dispatch({ type: "choose", interest }) }}>{children}</GuideContext.Provider>;
}
export function useCharacter() {
  const context = useContext(GuideContext);
  if (!context) throw new Error("useCharacter requires CharacterProvider");
  return context;
}
