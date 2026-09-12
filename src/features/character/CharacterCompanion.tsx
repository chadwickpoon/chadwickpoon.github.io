"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

export function CharacterCompanion({ small = false }: { small?: boolean }) {
  const reducedMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);
  return <motion.div className={`companion ${small ? "companion-small" : ""}`} animate={reducedMotion ? undefined : { rotate: [0, -3, 2, 0] }} transition={{ duration: 1.2 }}>
    {failed ? <span className="character-fallback" aria-label="Chadwick’s guide">CP</span> : <Image src="/characters/guide.png" width={1000} height={1000} alt="A cheerful astronaut, your guide to Chadwick’s world" priority={!small} unoptimized onError={() => setFailed(true)} />}
  </motion.div>;
}
