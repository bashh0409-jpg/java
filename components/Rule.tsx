export function Rule({ wide = false }: { wide?: boolean }) {
  return <div className={`mt-2 mb-6 h-2.5 rounded-full bg-brand ${wide ? "w-90" : "w-56"}`} />;
}
