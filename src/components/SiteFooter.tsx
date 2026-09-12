import Link from "next/link";
import { site } from "@/lib/site";
export function SiteFooter() {
  return <footer className="site-footer"><div><Link className="footer-name" href="/">Chadwick Poon <span aria-hidden="true">✳</span></Link><p>Product, people, and a little play.</p></div><div className="footer-links"><a href={site.linkedin}>LinkedIn ↗</a><a href={`mailto:${site.email}`}>Email ↗</a></div></footer>;
}
