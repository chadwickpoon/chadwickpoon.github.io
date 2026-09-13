"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
function prefersReducedMotion() { return window.matchMedia(motionQuery).matches; }
function staticOnServer() { return true; }

export function CharacterAnimation() {
  const reducedMotion = useSyncExternalStore(subscribeToMotion, prefersReducedMotion, staticOnServer);
  const [requestedPlayback, setRequestedPlayback] = useState<boolean | null>(null);
  const playing = requestedPlayback ?? !reducedMotion;
  return <div className="guide-animation">
    <div className={`guide-animation-frame ${playing ? "is-playing" : "is-still"}`}>
      <Image src={playing ? "/characters/dog-walker.gif" : "/characters/dog-walker-pfp.png"} alt={playing ? "Dog Walker walking with two dogs, including a corgi" : "Dog Walker portrait, animation paused"} width={700} height={700} unoptimized loading="lazy" />
    </div>
    <button className="animation-toggle" onClick={() => setRequestedPlayback(!playing)} aria-label={playing ? "Pause Dog Walker animation" : "Play Dog Walker animation"}>
      <span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>{playing ? "Pause animation" : "Play animation"}
    </button>
  </div>;
}
