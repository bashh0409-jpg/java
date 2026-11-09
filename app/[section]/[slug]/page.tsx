import { notFound } from "next/navigation";
import { getTopic, neighbours, topics, topicsIn } from "@/content";
import { Tag, TopicSidebar, TopicView } from "@/components";
import { TopicSlidePanel } from "@/components/TopicSlidePanel";

export function generateStaticParams() {
  return topics.map((t) => ({ section: t.section, slug: t.slug }));
}

export default async function TopicPage({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section, slug } = await params;
  const topic = getTopic(section, slug);
  if (!topic) notFound();
  const { prev, next, index, total } = neighbours(section, slug);
  return (
    <div className="grid h-full min-h-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-2 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10">
      <TopicSidebar section={section} topics={topicsIn(section)} active={slug} />
      <TopicSlidePanel
        previousHref={prev ? `/${section}/${prev.slug}` : undefined}
        nextHref={next ? `/${section}/${next.slug}` : undefined}
        tip={topic.tip}
      >
        <Tag>{section} {index}/{total}</Tag>
        <TopicView topic={topic} />
      </TopicSlidePanel>
    </div>
  );
}
