import Link from "next/link";
import { notFound } from "next/navigation";
import { Rule } from "@/components";
import { getSection, sections, topicsIn } from "@/content";

export function generateStaticParams() {
  return sections.map((s) => ({ section: s.slug }));
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const s = getSection(section);
  if (!s) notFound();
  return (
    <div>
      <h1 className="mb-3 text-[clamp(2.5rem,7vw,5rem)] leading-none font-bold">{s.title}</h1>
      <Rule wide />
      <p className="text-xl font-bold">{s.blurb}</p>
      <ol className="mt-6 list-decimal pl-8 text-lg md:columns-2">
        {topicsIn(section).map((t) => (
          <li key={t.slug} className="mb-2"><Link href={`/${section}/${t.slug}`} className="hover:underline">{t.title}</Link></li>
        ))}
      </ol>
    </div>
  );
}
