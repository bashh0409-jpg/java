export function ArrayBoxes({ values, highlight, name = "" }: { values: (number | string)[]; highlight?: number; name?: string }) {
  return (
    <div className="my-6 flex flex-wrap gap-3">
      {values.map((v, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5 text-sm font-bold">
          <div
            className={`flex size-20 items-center justify-center rounded-md border-[3px] text-3xl font-bold text-white ${
              i === highlight ? "border-ink bg-ink" : "border-brand bg-brand"
            }`}
          >
            {v}
          </div>
          <span>{name}[{i}]</span>
        </div>
      ))}
    </div>
  );
}
