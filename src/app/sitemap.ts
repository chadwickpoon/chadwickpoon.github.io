import type { MetadataRoute } from "next";
import { experiences, experiencePath } from "@/content/experiences";
import { indexingEnabled, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return indexingEnabled ? ["/", "/about", ...experiences.map((entry) => experiencePath(entry.slug))].map((path) => ({ url: site.url + path })) : []; }
