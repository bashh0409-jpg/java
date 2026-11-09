const cell = "border-[3px] border-brand px-4 py-2 text-left";

export function DataTable({ headers, rows }: { headers: string[]; rows: (string | number)[][] }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="border-collapse text-[15px]">
        <thead>
          <tr>{headers.map((h, i) => <th key={i} className={`${cell} bg-brand text-white`}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (j === 0 ? <th key={j} className={cell}>{c}</th> : <td key={j} className={cell}>{c}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
