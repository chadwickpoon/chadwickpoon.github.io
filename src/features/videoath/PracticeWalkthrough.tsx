"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button, Radio, RadioGroup } from "react-aria-components";
import { practiceScenario } from "@/content/videoath-walkthrough";

const steps = ["Try", "Reflect", "Try again"] as const;
type OpeningId = typeof practiceScenario.openings[number]["id"];
type NextStepId = typeof practiceScenario.nextSteps[number]["id"];

export function PracticeWalkthrough() {
  const [step, setStep] = useState(0);
  const [furthest, setFurthest] = useState(0);
  const [openingId, setOpeningId] = useState<OpeningId | null>(null);
  const [nextStepId, setNextStepId] = useState<NextStepId | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();
  const opening = practiceScenario.openings.find(({ id }) => id === openingId);
  const nextStep = practiceScenario.nextSteps.find(({ id }) => id === nextStepId);
  const title = step === 0 ? "Where would you start?" : step === 1 ? "Find one thing to improve." : "Give your answer a next step.";

  function goTo(next: number) {
    setStep(next);
    setFurthest((current) => Math.max(current, next));
    requestAnimationFrame(() => {
      heading.current?.focus({ preventScroll: true });
      heading.current?.closest("section")?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
    });
  }
  function restart() {
    setOpeningId(null);
    setNextStepId(null);
    setFurthest(0);
    goTo(0);
  }

  return <section className="practice-experience" id="practice" aria-label="Videoath example walkthrough">
    <div className="practice-toolbar"><span className="demo-label"><span aria-hidden="true">●</span> A LITTLE PRACTICE</span><span>Example walkthrough · 3 steps</span></div>
    <ol className="practice-steps" aria-label="Practice steps">
      {steps.map((label, index) => <li key={label}><button type="button" onClick={() => goTo(index)} disabled={index > furthest} aria-current={step === index ? "step" : undefined}>
        <span className="step-number" aria-hidden="true">{index < furthest ? "✓" : index + 1}</span><span>{label}</span>
      </button></li>)}
    </ol>
    <div className="practice-panel">
      <div className="practice-panel-heading"><p className="eyebrow">{`STEP ${step + 1} OF 3`}</p><h2 ref={heading} tabIndex={-1}>{title}</h2></div>
      <motion.div key={step} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .18 }}>
        {step === 0 && <>
          <p className="scenario-text">{practiceScenario.prompt}</p>
          <RadioGroup aria-label="Choose an opening" value={openingId ?? ""} onChange={(value) => { setOpeningId(value as OpeningId); setNextStepId(null); setFurthest(0); }} className="practice-options">
            {practiceScenario.openings.map((option, index) => <Radio value={option.id} key={option.id} className="practice-option"><span className="option-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span>{option.label}</span><span className="choice-indicator" aria-hidden="true" /></Radio>)}
          </RadioGroup>
          <div className="practice-panel-footer"><span>Pick an opening. Then explore what it leaves out.</span><Button isDisabled={!opening} className="button primary" onPress={() => goTo(1)}>Explore the feedback <span aria-hidden="true">→</span></Button></div>
        </>}
        {step === 1 && opening && <>
          <blockquote className="sample-response"><span className="eyebrow">YOUR CHOSEN OPENING</span><p>“{opening.response}”</p></blockquote>
          <div className="feedback-grid"><div className="feedback-note strength"><span className="feedback-symbol" aria-hidden="true">✓</span><h3>A useful starting point</h3><p>{opening.strength}</p></div><div className="feedback-note opportunity"><span className="feedback-symbol" aria-hidden="true">↗</span><h3>A little more to explore</h3><p>{opening.opportunity}</p></div></div>
          <div className="practice-panel-footer"><button type="button" className="text-button" onClick={() => goTo(0)}>Change my opening</button><Button className="button primary" onPress={() => goTo(2)}>Try a next step <span aria-hidden="true">→</span></Button></div>
        </>}
        {step === 2 && opening && <>
          <p className="scenario-text">Good feedback gives you something to try. Choose where you’d take this answer next.</p>
          <RadioGroup aria-label="Choose a next step" value={nextStepId ?? ""} onChange={(value) => setNextStepId(value as NextStepId)} className="practice-options next-step-options">
            {practiceScenario.nextSteps.map((option) => <Radio value={option.id} key={option.id} className="practice-option"><span>{option.label}</span><span className="choice-indicator" aria-hidden="true" /></Radio>)}
          </RadioGroup>
          <div aria-live="polite" aria-atomic="true" className="practice-result">
            {nextStep ? <><blockquote className="sample-response"><span className="eyebrow">AN EXAMPLE FOLLOW-THROUGH</span><p>“{nextStep.response}”</p></blockquote><p className="practice-takeaway"><span aria-hidden="true">✦</span>{nextStep.takeaway}</p></> : <p className="next-step-hint">Your next choice will show an example follow-through.</p>}
          </div>
          <div className="practice-panel-footer"><button type="button" className="text-button" onClick={() => goTo(1)}>Back to feedback</button><Button className="button secondary" onPress={restart}>Start again <span aria-hidden="true">↻</span></Button></div>
        </>}
      </motion.div>
    </div>
    <p className="demo-footnote">An illustrative scenario with written examples, made for this portfolio. Try the full recording and feedback experience at <a href="https://www.videoath.com">Videoath ↗</a>.</p>
    <noscript><p className="demo-footnote">Turn on JavaScript to try the walkthrough, or <a href="https://www.videoath.com">visit Videoath</a>.</p></noscript>
  </section>;
}
