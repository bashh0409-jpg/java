import Link from "next/link";
import type { Topic } from "@/content/types";

export function TopicSidebar({ section, topics, active }: { section: string; topics: Topic[]; active: string }) {
  return (
    <nav aria-label="Topics" className="flex h-full min-h-0 flex-col gap-1 self-start overflow-y-auto text-sm md:sticky md:top-5 md:h-auto md:max-h-[85vh] md:gap-0.5">
      {topics.map((t, i) => (
        <Link
          key={t.slug}
          href={`/${section}/${t.slug}`}
          aria-label={`${String(i + 1).padStart(2, "0")} ${t.title}`}
          aria-current={t.slug === active ? "page" : undefined}
          title={t.title}
          className={`flex min-h-10 shrink-0 items-center justify-center rounded-md px-1 md:min-h-0 md:justify-start md:px-2.5 md:py-1.5 ${t.slug === active ? "bg-brand font-bold text-white" : "hover:bg-tint"}`}
        >
          <span>{String(i + 1).padStart(2, "0")}</span>
          <span className="ml-2 max-md:sr-only">{t.title}</span>
        </Link>
      ))}
    </nav>
  );
}

export function PrevNext({ section, prev, next }: { section: string; prev?: Topic; next?: Topic }) {
  return (
    <div className="mt-10 flex justify-between font-bold">
      {prev ? <Link href={`/${section}/${prev.slug}`} className="hover:underline">&larr; {prev.title}</Link> : <span />}
      {next ? <Link href={`/${section}/${next.slug}`} className="hover:underline">{next.title} &rarr;</Link> : <span />}
    </div>
  );
}
