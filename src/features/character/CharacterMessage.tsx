"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function CharacterMessage({ message }: { message: string }) {
  const reducedMotion = useReducedMotion();
  return <div className="speech-bubble" aria-live="polite" aria-atomic="true">
    <AnimatePresence initial={false} mode="wait">
      <motion.p key={message} initial={{ opacity: 0, y: reducedMotion ? 0 : 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.16 }}>{message}</motion.p>
    </AnimatePresence>
  </div>;
}
