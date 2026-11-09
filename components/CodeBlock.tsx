"use client";

import { useState } from "react";

export function CodeBlock({
  code,
  title,
  section,
  slug,
}: {
  code: string[] | string;
  title?: string;
  section: string;
  slug: string;
}) {
  const text = Array.isArray(code) ? code.join("\n") : code;
  const lines = text.split("\n");
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<string>();

  const runCode = async () => {
    setRunning(true);
    setResult(undefined);
    try {
      const response = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section, slug }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Could not run this example.");
      const output = [data.stdout, data.stderr].filter(Boolean).join("\n");
      setResult(output || (data.timedOut ? "Execution timed out." : "Program finished with no output."));
    } catch (error) {
      setResult(error instanceof Error ? error.message : "Could not run this example.");
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-in px-4 py-1.5 text-sm text-">
        <span>{title ?? "Java"}</span>
        <button
          type="button"
          onClick={runCode}
          disabled={running}
          className="rounded bg-brand px-3 py-1 font-bold  text-white disabled:opacity-60"
        >
          {running ? "Running..." : "▶ Run"}
        </button>
      </div>
      <pre className="overflow-x-auto rounded-md bg-brand px-6 py-5 text-[15px] leading-relaxed text-white">
        <code>
          {lines.map((line, index) => (
            <span
              key={index}
              className="grid flex items-center grid-cols-[2rem_max-content] gap-4 whitespace-pre"
            >
              <span
                aria-hidden="true"
                className="select-none  font-semibold  text-xs text-right text-white/50"
              >
                {index + 1}
              </span>
              <span>{line || " "}</span>
            </span>
          ))}
        </code>
      </pre>
      {result !== undefined && (
        <div
          className="mt-2 rounded-md border-2 border-brand bg-soft p-4"
          aria-live="polite"
        >
          <p className="mb-2 text-sm font-bold">Output</p>
          <pre className="whitespace-pre-wrap break-words text-sm">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}
