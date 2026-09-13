import Link from "next/link";
import { IntroductionExplorer } from "@/features/boardy/IntroductionExplorer";

export function BoardyStory() {
  return <article className="boardy-story">
    <Link className="back-link" href="/#explore">← All worlds</Link>
    <header className="boardy-hero"><div><p className="eyebrow">AI & HUMAN CONNECTION</p><h1>Boardy<span>Every good connection<br />starts somewhere.</span></h1><p className="boardy-deck">I joined Boardy as Head of Product in 2025: an AI super-connector built around conversation, context, and introductions.</p><p className="role-label">Head of Product · 2025</p></div><div className="hello-art" aria-hidden="true"><svg viewBox="0 0 450 310"><path d="M89 232C80 150 127 91 211 99S301 170 362 214"/><path d="M90 232Q195 300 362 214"/></svg><span className="hello-person hello-alex">a.</span><span className="hello-bubble">hello<span>there.</span></span><span className="hello-person hello-other">b.</span><span className="hello-spark">✳</span><span className="hello-caption">SOMETIMES, ONE INTRODUCTION.</span></div></header>
    <div className="story-jump"><a className="button connection-primary" href="#introduction">Explore an introduction <span aria-hidden="true">↓</span></a><a className="text-link" href="https://www.boardy.ai/">Visit Boardy <span aria-hidden="true">↗</span></a></div>
    <IntroductionExplorer />
    <section className="boardy-context" aria-labelledby="boardy-chapter-heading"><div><p className="eyebrow">MY CHAPTER AT BOARDY</p><h2 id="boardy-chapter-heading">AI, at a very<br /><span>human intersection.</span></h2></div><div><p>My time at Boardy is part of my work in AI product experiences. The idea brings together something technical—understanding conversational context—and something familiar: meeting someone you’re glad to know.</p><p>This example explores the idea through three questions: what someone needs, what would make a conversation useful, and why the connection could matter to both people.</p><p>Boardy’s current product has its own experience. You can explore it on <a href="https://www.boardy.ai/">Boardy’s website ↗</a>.</p></div></section>
    <aside className="next-world boardy-next"><div><p className="eyebrow">FROM CONNECTION TO PRACTICE</p><h2>Something I’m building myself.</h2><p>Videoath brings together learning, product design, and AI.</p></div><Link className="button secondary" href="/explore/videoath">Explore Videoath <span aria-hidden="true">→</span></Link></aside>
  </article>;
}
