import type { Metadata } from "next";
import { experiences } from "@/content/experiences";
import { CharacterProvider } from "@/features/character/CharacterProvider";
import { WelcomeGuide } from "@/features/guide/WelcomeGuide";
import { ExperienceGallery } from "@/features/gallery/ExperienceGallery";
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return <><section className="intro"><p className="eyebrow"><span className="tiny-star" aria-hidden="true">✳</span> THE WORLD OF CHADWICK POON</p><h1>Serious about product.<br /><span>Curious about everything.</span></h1><p className="intro-copy">I work on product at Alan and build things of my own.<br className="desktop-break" /> Here’s a little of what I make, what I play, and where I wander.</p></section><CharacterProvider><WelcomeGuide /><ExperienceGallery experiences={experiences} /></CharacterProvider><aside className="closing-note"><span aria-hidden="true">✳</span><p>A personal corner of the internet.<br /><strong>Always a work in progress.</strong></p></aside></>;
}
