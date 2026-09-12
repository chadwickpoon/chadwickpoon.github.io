export type Interest = "all" | "work" | "life";
export type Artwork = "videoath" | "boardy" | "alan" | "fabulous" | "dota" | "trails";
export interface Experience {
  slug: Artwork;
  title: string;
  subtitle: string;
  category: Exclude<Interest, "all">;
  eyebrow: string;
  role: string;
  introduction: string;
  paragraphs: readonly string[];
  link?: { label: string; url: string };
}

// Initial public summaries, grounded in Chadwick’s supplied profile and brief.
// Add attributable decisions and outcomes only when their evidence is ready.
export const experiences: readonly Experience[] = [
  {
    slug: "videoath", title: "Videoath", subtitle: "Building a place to practise.", category: "work", eyebrow: "Independent building · Education", role: "Founder & product builder",
    introduction: "My independent work brings together healthcare interview preparation, product design, and AI.",
    paragraphs: ["Videoath is a place for healthcare applicants to practise interviews. It brings together the things I enjoy working on: learning experiences, useful feedback, and the details that make a product feel approachable.", "This is where I spend time across product, architecture, and growth. The character guiding you around this site comes from the same collection I use in Videoath."],
    link: { label: "Visit Videoath", url: "https://www.videoath.com" },
  },
  {
    slug: "boardy", title: "Boardy", subtitle: "AI with a human connection.", category: "work", eyebrow: "AI · Product experience", role: "Head of Product · 2025",
    introduction: "An AI super-connector, built around finding the right introduction.",
    paragraphs: ["I joined Boardy as Head of Product in 2025. The product brings together conversation, context, and introductions: an AI connector that helps people find their next opportunity.", "It sits at an intersection I find especially interesting: AI-native experiences and the very human work of getting to know someone."],
  },
  {
    slug: "alan", title: "Health, with care.", subtitle: "My current chapter at Alan.", category: "work", eyebrow: "Healthcare · Canada", role: "Product Manager, Canada · 2026–present",
    introduction: "I work on product at Alan in Canada.",
    paragraphs: ["Health is a recurring thread through my work. At Alan, it is the focus of my current professional chapter.", "Alongside my work in health, I’m interested in how AI and thoughtful product experiences can help people navigate complicated choices."],
  },
  {
    slug: "fabulous", title: "Small steps.", subtitle: "The product of human behaviour.", category: "work", eyebrow: "The Fabulous · Behavioural economics", role: "Lead Product Manager & Lead Behavioral Economist · 2018–2021",
    introduction: "At The Fabulous, I worked on growth and monetisation for a habit-formation app.",
    paragraphs: ["My background in economics found a practical home in behavioural product work. At The Fabulous, I worked at the intersection of habits, growth, and monetisation.", "Learning and games are recurring interests for me. They are also part of why I wanted this website to invite a little exploration."],
  },
  {
    slug: "dota", title: "One more game.", subtitle: "A long-running interest in Dota.", category: "life", eyebrow: "Dota · Games", role: "Player, always learning",
    introduction: "Games are part of both my work history and my life outside it.",
    paragraphs: ["I’ve spent a lot of time playing Dota, including approaching competitive-level play. It’s a personal interest alongside my earlier professional experience in casual games at Uken Games.", "I’m putting together the moments, heroes, and stories I want to share here. For now, consider this the start of that collection."],
  },
  {
    slug: "trails", title: "Take the long way.", subtitle: "A little further from the screen.", category: "life", eyebrow: "Hiking · Outside", role: "Trail notes",
    introduction: "A home for hikes, photographs, and the places I want to remember.",
    paragraphs: ["Hiking is one of the interests I want this site to make room for. AllTrails is a favourite app and the reference for how I’d like to share routes and moments along the way.", "I’m gathering the first trip for this collection. Routes and photographs will be added here as those stories take shape."],
  },
];

export function getExperience(slug: string) { return experiences.find((experience) => experience.slug === slug); }
export function experiencePath(slug: Artwork) { return slug === "trails" ? "/trails" : `/explore/${slug}`; }
