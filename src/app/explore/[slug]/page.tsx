import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { experiences, getExperience, experiencePath } from "@/content/experiences";
import { StoryPage } from "@/components/StoryPage";

export function generateStaticParams() { return experiences.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getExperience(slug);
  return entry ? { title: entry.title, description: entry.introduction, alternates: { canonical: experiencePath(entry.slug) } } : {};
}
export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();
  if (slug === "trails") redirect("/trails");
  return <StoryPage experience={experience} />;
}
