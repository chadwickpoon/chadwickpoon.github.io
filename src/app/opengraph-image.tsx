import { ImageResponse } from "next/og";
export const alt = "Chadwick Poon — Product, people, and a little play.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "80px 90px", background: "#faf9f5", color: "#29271f" }}><div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#716c63" }}>THE WORLD OF CHADWICK POON</div><div style={{ display: "flex", flexDirection: "column", fontSize: 78, letterSpacing: -3, fontWeight: 700 }}><span>Product, people,</span><span>and a little play.</span></div><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, color: "#716c63" }}><span>chadwickpoon.com</span><div style={{ width: 65, height: 65, borderRadius: 40, background: "#f2ba55" }} /></div></div>, size);
}
