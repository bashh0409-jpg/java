export function Card({ title, children, tone = "tint" }: { title: string; children: React.ReactNode; tone?: "tint" | "plain" }) {
  return (
    <div className={`rounded-md border-[3px] border-brand p-5 ${tone === "tint" ? "bg-tint" : "bg-white"}`}>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
