"use client";

import { useState } from "react";
import { Radio, RadioGroup, Button } from "react-aria-components";
import type { Interest } from "@/content/experiences";
import { CharacterCompanion } from "@/features/character/CharacterCompanion";
import { CharacterMessage } from "@/features/character/CharacterMessage";
import { useCharacter } from "@/features/character/CharacterProvider";

const choices: readonly { value: Interest; label: string; icon: string }[] = [
  { value: "work", label: "The things you build", icon: "↗" },
  { value: "life", label: "The person behind them", icon: "✳" },
  { value: "all", label: "A little of everything", icon: "⊞" },
];

export function WelcomeGuide() {
  const { state, choose } = useCharacter();
  const [selected, setSelected] = useState<Interest | null>(null);
  function explore(interest: Interest) {
    choose(interest);
    const heading = document.getElementById("explore-heading");
    heading?.focus({ preventScroll: true });
    heading?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  }
  return <section className="welcome" aria-label="Choose your starting point">
    <div className="guide-greeting"><CharacterCompanion /><CharacterMessage message={state.message} /></div>
    <div className="guide-choices">
      <RadioGroup aria-label="What would you like to explore?" value={selected ?? ""} onChange={(value) => setSelected(value as Interest)} className="choice-list">
        {choices.map((choice) => <Radio key={choice.value} value={choice.value} className="choice-card">
          <span className="choice-icon" aria-hidden="true">{choice.icon}</span><span>{choice.label}</span><span className="choice-indicator" aria-hidden="true" />
        </Radio>)}
      </RadioGroup>
      <div className="guide-actions"><Button className="button primary" isDisabled={!selected} onPress={() => selected && explore(selected)}>Let’s explore <span aria-hidden="true">→</span></Button><button className="text-button" onClick={() => explore("all")}>Browse everything</button></div>
    </div>
  </section>;
}
