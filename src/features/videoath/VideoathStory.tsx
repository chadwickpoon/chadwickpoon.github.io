import Link from "next/link";
import { PracticeWalkthrough } from "@/features/videoath/PracticeWalkthrough";

export function VideoathStory() {
  return <article className="videoath-story">
    <Link className="back-link" href="/#explore">← All worlds</Link>
    <header className="videoath-hero">
      <div><p className="eyebrow">INDEPENDENT BUILDING · HEALTHCARE EDUCATION</p><h1>Videoath<span>Good practice<br />is a loop.</span></h1><p className="videoath-deck">A place for healthcare applicants to practise interviews, reflect on their answers, and try again.</p><p className="role-label">Founder · Product, architecture & growth</p></div>
      <div className="practice-loop-art" aria-hidden="true"><span className="loop-orbit" /><span className="loop-note loop-try">give it<br /><strong>a go.</strong><i>↗</i></span><span className="loop-note loop-reflect">a little<br /><strong>better.</strong><i>✓</i></span><span className="loop-spark">✦</span><span className="loop-label">TRY. REFLECT. REPEAT.</span></div>
    </header>
    <div className="story-jump"><a className="button primary" href="#practice">Try a little practice <span aria-hidden="true">↓</span></a><a className="text-link" href="https://www.videoath.com">Visit Videoath <span aria-hidden="true">↗</span></a></div>
    <PracticeWalkthrough />
    <section className="builder-notes" aria-labelledby="builder-heading"><div><p className="eyebrow">WHY THIS BELONGS HERE</p><h2 id="builder-heading">Learning.<br />Building.<br /><span>Then doing it again.</span></h2></div><div className="builder-copy"><p>Videoath brings together healthcare interview preparation, product design, and AI. It’s my independent work, where I spend time across product, architecture, and growth.</p><p>The little walkthrough above gives you a feel for the practice loop. In the product, applicants can record an answer, review it, and make another attempt.</p><p>It’s also a meeting point for my interests in learning, behavioural science, and approachable software.</p><a className="text-link" href="https://www.videoath.com">Explore the full product <span aria-hidden="true">↗</span></a></div></section>
    <aside className="next-world"><div><p className="eyebrow">ANOTHER SIDE OF AI</p><h2>Start with a conversation.</h2><p>My chapter at Boardy, an AI super-connector.</p></div><Link className="button secondary" href="/explore/boardy">Meet Boardy <span aria-hidden="true">→</span></Link></aside>
  </article>;
}
