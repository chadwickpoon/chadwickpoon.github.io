"use client";
export default function ErrorPage({ reset }: { reset: () => void }) { return <section className="not-found"><h1>A little hiccup.</h1><p>This page couldn’t load. Let’s give it another try.</p><button className="button primary" onClick={reset}>Try again</button></section>; }
