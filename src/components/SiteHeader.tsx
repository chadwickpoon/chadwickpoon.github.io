import Link from "next/link";
import { site } from "@/lib/site";
export function SiteHeader() {
  return <header className="site-header"><Link href="/" className="wordmark" aria-label="Chadwick Poon, home">cp<span aria-hidden="true">✳</span></Link><nav aria-label="Main navigation"><Link href="/#explore">Explore</Link><Link href="/about">About me</Link><a href={site.linkedin}>Say hello <span aria-hidden="true">↗</span></a></nav></header>;
}
