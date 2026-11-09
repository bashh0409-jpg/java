"use client";

import { useState } from "react";

export function CodeBlock({
  code,
  title,
  output = "",
}: {
  code: string[] | string;
  title?: string;
  output?: string;
}) {
  const text = Array.isArray(code) ? code.join("\n") : code;
  const lines = text.split("\n");
  const [showOutput, setShowOutput] = useState(false);

  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-in px- py-1.5 text-sm text-">
        <span>{title ?? "Java"}</span>
        <button
          type="button"
          onClick={() => setShowOutput((shown) => !shown)}
          aria-expanded={showOutput}
          className="rounded bg-brand px-3 py-1 font-bold text-white"
        >
          {showOutput ? "Hide output" : "▶ Show output"}
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
      {showOutput && (
        <div
          className="mt-2 rounded-md border-2 border-brand bg-soft p-4"
          aria-live="polite"
        >
          <p className="mb-2 text-sm font-bold">Sample output</p>
          <pre className="whitespace-pre-wrap break-words text-sm">
            {output || "This example produces no output."}
          </pre>
        </div>
      )}
    </div>
  );
}
