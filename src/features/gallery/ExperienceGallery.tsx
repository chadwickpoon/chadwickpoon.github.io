"use client";

import Link from "next/link";
import type { Experience, Interest } from "@/content/experiences";
import { experiencePath } from "@/content/experiences";
import { ExperienceArtwork } from "@/components/ExperienceArtwork";
import { useCharacter } from "@/features/character/CharacterProvider";

export function ExperienceGallery({ experiences }: { experiences: readonly Experience[] }) {
  const { state, choose } = useCharacter();
  const visible = experiences.filter((entry) => state.interest === "all" || entry.category === state.interest);
  return <section id="explore" className="gallery-section">
    <div className="section-heading"><div><p className="eyebrow">PICK A DOOR</p><h2 id="explore-heading" tabIndex={-1}>A few worlds to explore.</h2></div><span className="collection-count" aria-live="polite">{visible.length} things to wander into</span></div>
    <div className="filter-row" role="group" aria-label="Filter experiences">
      {([{ value: "all", label: "Everything" }, { value: "work", label: "Work & building" }, { value: "life", label: "Life & play" }] as const).map(({ value, label }) => <button key={value} aria-pressed={state.interest === value} onClick={() => choose(value as Interest)} className="filter-button">{label}</button>)}
    </div>
    <div className="experience-grid">
      {visible.map((entry) => <Link key={entry.slug} href={experiencePath(entry.slug)} className={`experience-card card-${entry.slug}`}>
        <ExperienceArtwork kind={entry.slug} />
        <div className="card-caption"><div><span className="card-action">{entry.slug === "videoath" ? "Try the walkthrough" : entry.slug === "trails" ? "The trail notebook" : entry.slug === "dota" ? "Off the clock" : "Explore the chapter"}</span><h3>{entry.title}</h3><p>{entry.subtitle}</p></div><span className="card-arrow" aria-hidden="true">↗</span></div>
      </Link>)}
    </div>
  </section>;
}
