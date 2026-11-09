export function Callout({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-md border-[3px] border-brand bg-soft px-6 py-4 text-[17px]">
      {label && <b>{label}: </b>}
      {children}
    </div>
  );
}
