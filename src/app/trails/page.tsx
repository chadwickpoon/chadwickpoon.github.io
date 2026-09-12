import type { Metadata } from "next";
import { getExperience } from "@/content/experiences";
import { StoryPage } from "@/components/StoryPage";

export const metadata: Metadata = { title: "Trail notes", description: "Hiking, photographs, and time outside.", alternates: { canonical: "/trails" } };
export default function TrailsPage() { return <StoryPage experience={getExperience("trails")!}><div className="empty-collection"><span aria-hidden="true">↟</span><p>First trail notes on the way.</p></div></StoryPage>; }
