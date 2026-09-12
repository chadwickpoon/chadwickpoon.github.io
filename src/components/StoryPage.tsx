import Link from "next/link";
import type { Experience } from "@/content/experiences";
import { ExperienceArtwork } from "@/components/ExperienceArtwork";
export function StoryPage({ experience, children }: { experience: Experience; children?: React.ReactNode }) {
  return <article className={`story story-${experience.slug}`}><Link className="back-link" href="/#explore">← All worlds</Link><div className="story-hero"><p className="eyebrow">{experience.eyebrow}</p><h1>{experience.title}</h1><p className="story-deck">{experience.introduction}</p><p className="role-label">{experience.role}</p></div><div className={`story-art card-${experience.slug}`}><ExperienceArtwork kind={experience.slug} /></div><div className="story-copy">{experience.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{children}{experience.link && <a className="button primary story-link" href={experience.link.url}>{experience.link.label} ↗</a>}</div><aside className="story-next"><span>There’s more to the story.</span><Link href="/#explore">Find your next door →</Link></aside></article>;
}
