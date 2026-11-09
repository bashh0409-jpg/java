type Node = { label: string; depth: number; note?: string; dark?: boolean };

export function Tree({ nodes }: { nodes: Node[] }) {
  return (
    <div className="my-6 flex flex-col gap-1">
      {nodes.map((n, i) => (
        <div key={i} style={{ paddingLeft: n.depth * 28 }}>
          <span
            className={`inline-block border-[3px] px-3 py-0.5 text-sm font-bold ${
              n.dark ? "border-ink bg-ink text-white" : "border-brand"
            }`}
          >
            {n.label}{n.note ? ` (${n.note})` : ""}
          </span>
        </div>
      ))}
    </div>
  );
}
