import type { Topic } from "@/content/types";
import { ArrayBoxes } from "./ArrayBoxes";
import { Callout } from "./Callout";
import { Card } from "./Card";
import { CodeBlock } from "./CodeBlock";
import { DataTable } from "./DataTable";
import { Rule } from "./Rule";
import { Tree } from "./Tree";

// Renders any topic from content/topics.ts. Add new visual types here.
export function TopicView({ topic }: { topic: Topic }) {
  const v = topic.visual;
  return (
    <article>
     
      <h1 className="mt-4 mb-2 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold">{topic.title}</h1>
      <Rule />
      {v?.type === "array" && <ArrayBoxes values={v.values} highlight={v.highlight} />}
      {v?.type === "table" && <DataTable headers={v.headers} rows={v.rows} />}
      {v?.type === "tree" && <Tree nodes={v.nodes} />}
      {topic.code && <CodeBlock code={topic.code} section={topic.section} slug={topic.slug} />}
      {topic.points && (
        <div className="my-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {topic.points.map((p, i) => (
            <Card key={p.title} title={p.title} tone={i % 2 ? "plain" : "tint"}>{p.text}</Card>
          ))}
        </div>
      )}
      {topic.callout && <Callout>{topic.callout}</Callout>}
    </article>
  );
}
