import type { Artwork } from "@/content/experiences";

export function ExperienceArtwork({ kind }: { kind: Artwork }) {
  return <div className={`art art-${kind}`} aria-hidden="true">
    {kind === "videoath" && <><span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" /><div className="practice-card"><span className="practice-dot" /><span className="practice-line" /><span className="waveform">{[12, 29, 18, 38, 25, 12, 31, 38, 18, 25, 12].map((height, index) => <i key={index} style={{ height }} />)}</span><span className="practice-caption">YOUR NEXT CHAPTER</span></div><span className="floating-star">✦</span></>}
    {kind === "boardy" && <><span className="connection-line connection-one" /><span className="connection-line connection-two" /><span className="connection-node node-one">you</span><span className="connection-node node-two">hello.</span><span className="connection-node node-three">↗</span><span className="small-spark">✳</span></>}
    {kind === "alan" && <><div className="sun-disc">✳</div><span className="health-cross">+</span><div className="care-note"><span>feeling</span><strong>better.</strong><span className="note-smile">◡</span></div></>}
    {kind === "fabulous" && <><span className="habit-path" /><span className="step step-one">✓</span><span className="step step-two">✓</span><span className="step step-three">✦</span><span className="habit-flower">✿</span></>}
    {kind === "dota" && <><div className="game-board"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><span className="game-token token-one">♞</span><span className="game-token token-two">✦</span><span className="game-label">PLAY AGAIN?</span></>}
    {kind === "trails" && <><svg viewBox="0 0 500 250" preserveAspectRatio="xMidYMid slice"><path d="M-40 210Q60 80 175 130T380 70T560 160V280H-40Z" fill="#b9d0a1"/><path d="M-40 240Q110 150 240 190T560 150V280H-40Z" fill="#6e9972"/><path d="M190 270Q155 207 262 195T270 145T340 97" fill="none" stroke="#fff9df" strokeWidth="8" strokeDasharray="2 14" strokeLinecap="round"/><circle cx="340" cy="97" r="12" fill="#f6ba5c" stroke="#244d36" strokeWidth="3"/></svg><span className="trail-sun" /><span className="trail-label">THE SCENIC ROUTE</span></>}
  </div>;
}
