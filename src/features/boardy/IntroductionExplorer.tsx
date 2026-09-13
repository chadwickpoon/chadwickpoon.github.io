"use client";

import { useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button, Radio, RadioGroup } from "react-aria-components";
import { introductionGoals, type IntroductionGoalId } from "@/content/boardy-examples";

const stages = ["A reason", "Some context", "A connection"] as const;

export function IntroductionExplorer() {
  const [stage, setStage] = useState(0);
  const [goalId, setGoalId] = useState<IntroductionGoalId | null>(null);
  const [contextId, setContextId] = useState<string | null>(null);
  const [introOpen, setIntroOpen] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const introId = useId();
  const reducedMotion = useReducedMotion();
  const goal = introductionGoals.find((entry) => entry.id === goalId);
  const context = goal?.contexts.find((entry) => entry.id === contextId);
  const titles = ["Who would you like to meet?", "Make the conversation useful.", "A reason to say hello."];

  function goTo(next: number) {
    setStage(next);
    requestAnimationFrame(() => {
      heading.current?.focus({ preventScroll: true });
      heading.current?.closest("section")?.scrollIntoView({ block: "start", behavior: reducedMotion ? "instant" : "smooth" });
    });
  }
  function changeGoal(value: string) {
    setGoalId(value as IntroductionGoalId);
    setContextId(null);
    setIntroOpen(false);
  }
  function startAgain() {
    setGoalId(null);
    setContextId(null);
    setIntroOpen(false);
    goTo(0);
  }

  return <section className="introduction-explorer" id="introduction" aria-label="Illustrative introduction explorer">
    <div className="connection-toolbar"><span className="connection-label"><span aria-hidden="true">✳</span> THE HELLO EXPERIMENT</span><span>Fictional examples · no messages sent</span></div>
    <ol className="connection-stages" aria-label="Introduction stages">{stages.map((label, index) => <li key={label} aria-current={stage === index ? "step" : undefined}><span aria-hidden="true">0{index + 1}</span>{label}</li>)}</ol>
    <div className="connection-panel">
      <div className="connection-heading"><p className="eyebrow">{`CHAPTER ${stage + 1} OF 3`}</p><h2 ref={heading} tabIndex={-1}>{titles[stage]}</h2></div>
      <motion.div key={stage} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : .18 }}>
        {stage === 0 && <>
          <p className="connection-description">A title is a starting point. A reason to talk gives an introduction somewhere to go. Pick a situation to explore.</p>
          <RadioGroup value={goalId ?? ""} onChange={changeGoal} aria-label="Choose a reason to connect" className="goal-options">
            {introductionGoals.map((entry) => <Radio key={entry.id} value={entry.id} className="goal-option"><span className="goal-symbol" aria-hidden="true">{entry.icon}</span><span><strong>{entry.label}</strong><small>{entry.subtitle}</small></span><span className="choice-indicator" aria-hidden="true" /></Radio>)}
          </RadioGroup>
          <div className="connection-actions"><span>Three different reasons. Three possible conversations.</span><Button className="button connection-primary" isDisabled={!goal} onPress={() => goTo(1)}>Add a little context <span aria-hidden="true">→</span></Button></div>
        </>}
        {stage === 1 && goal && <>
          <div className="conversation-example"><span className="example-avatar" aria-hidden="true">A</span><div><p className="eyebrow">ALEX · FICTIONAL EXAMPLE</p><p>{goal.setup}</p></div></div>
          <p className="connection-prompt">What would make the conversation worthwhile?</p>
          <RadioGroup value={contextId ?? ""} onChange={(value) => { setContextId(value); setIntroOpen(false); }} aria-label="Choose the conversation focus" className="context-options">
            {goal.contexts.map((entry) => <Radio value={entry.id} key={entry.id} className="context-option"><span>{entry.label}</span><span className="choice-indicator" aria-hidden="true" /></Radio>)}
          </RadioGroup>
          <div className="context-preview" aria-live="polite" aria-atomic="true">{context ? <><span className="eyebrow">NOW THERE’S SOMETHING TO GO ON</span><p>“{context.request}”</p></> : <p className="context-hint">Choose a focus to make the request more specific.</p>}</div>
          <div className="connection-actions"><button className="text-button" onClick={() => goTo(0)}>Change the situation</button><Button className="button connection-primary" isDisabled={!context} onPress={() => goTo(2)}>Explore a connection <span aria-hidden="true">→</span></Button></div>
        </>}
        {stage === 2 && goal && context && <>
          <div className="connection-result-grid"><div className={`person-card person-${goal.person.color}`}><p className="eyebrow">FICTIONAL PROFILE</p><div className="person-initial" aria-hidden="true">{goal.person.initials}</div><h3>{goal.person.name}</h3><p className="person-role">{goal.person.role}</p><p>{goal.person.detail}</p></div><div className="connection-reason"><p className="eyebrow">THE SHARED THREAD</p><h3>{context.shared}</h3><p>{context.reason}</p><p className="mutual-choice"><span aria-hidden="true">↔</span> Both people choose whether to connect.</p></div></div>
          <div className="introduction-preview"><button className="intro-toggle" aria-expanded={introOpen} aria-controls={introId} onClick={() => setIntroOpen((open) => !open)}><span>{introOpen ? "Close the sample introduction" : "Read a sample introduction"}</span><span aria-hidden="true">{introOpen ? "−" : "+"}</span></button><div id={introId} hidden={!introOpen} className="intro-letter"><p className="eyebrow">EXAMPLE · AFTER BOTH PEOPLE AGREE</p><p className="intro-subject">Alex, meet {goal.person.name}.</p><p>{context.intro}</p><span className="intro-signoff">A little context. A much better hello.</span></div></div>
          <div className="connection-actions"><button className="text-button" onClick={() => { setIntroOpen(false); goTo(1); }}>Change the focus</button><Button className="button secondary" onPress={startAgain}>Try another introduction <span aria-hidden="true">↻</span></Button></div>
        </>}
      </motion.div>
    </div>
    <p className="connection-footnote">An original portfolio illustration of introductions with context. The people and conversations are fictional; this isn’t a live Boardy match or a reproduction of its interface.</p>
    <noscript><p className="connection-footnote">Turn on JavaScript to explore the example, or <a href="https://www.boardy.ai/">visit Boardy</a>.</p></noscript>
  </section>;
}
