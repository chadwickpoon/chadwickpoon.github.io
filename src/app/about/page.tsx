import type { Metadata } from "next";
import Link from "next/link";
import { CharacterCompanion } from "@/features/character/CharacterCompanion";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "A little about me", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <article className="about-page"><Link className="back-link" href="/">← Back to exploring</Link><div className="about-intro"><CharacterCompanion small /><div><p className="eyebrow">NICE TO MEET YOU</p><h1>I’m Chadwick.</h1></div></div><div className="story-copy"><p>I’m a product leader and independent builder in the Greater Toronto Area. I work on product at Alan in Canada, and I’m the founder of Videoath.</p><p>My work has taken me through AI at Boardy, behavioural economics at The Fabulous, and casual games at Uken Games. Earlier chapters include finance, education, and service as a Navy Intelligence Officer.</p><p>I studied finance and economics at Wilfrid Laurier University. Outside work, I’m interested in games, Dota, and hiking—and I have a corgi. This site is a place to explore those different parts of my life.</p><p>There’s a more traditional version of my background on LinkedIn. Here, I’m leaving a little more room for curiosity.</p><a className="button primary story-link" href={site.linkedin}>Find me on LinkedIn ↗</a></div></article>;
}
