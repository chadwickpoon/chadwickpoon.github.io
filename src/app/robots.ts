import type { MetadataRoute } from "next";
import { indexingEnabled, site } from "@/lib/site";
export default function robots(): MetadataRoute.Robots { return indexingEnabled ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` } : { rules: { userAgent: "*", disallow: "/" } }; }
