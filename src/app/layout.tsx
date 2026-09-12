import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { indexingEnabled, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Chadwick Poon — Product, people & play", template: "%s · Chadwick Poon" },
  description: site.description,
  robots: { index: indexingEnabled, follow: indexingEnabled },
  openGraph: { type: "website", siteName: site.name, locale: "en_CA" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><div className="site-shell"><SiteHeader /><main id="main">{children}</main><SiteFooter /></div></body></html>;
}
