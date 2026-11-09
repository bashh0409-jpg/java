import Link from "next/link";
import { sections, topicsIn } from "@/content";
import { Card, Rule } from "@/components";

export default function Home() {
  return (
    <div>
      <h1 className="mb-3 text-[clamp(3.5rem,10vw,7.5rem)] leading-none font-bold">java<br />notes</h1>
      <Rule wide />
      <p className="text-xl font-bold">Revision notes built from the lecture slides. More topics coming.</p>
      <div className="my-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {sections.map((s) => (
          <Link key={s.slug} href={`/${s.slug}`} className="block">
            <Card title={s.title}>{s.blurb} ({topicsIn(s.slug).length} topics)</Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
