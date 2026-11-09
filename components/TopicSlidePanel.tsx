"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

export function TopicSlidePanel({
  children,
  previousHref,
  nextHref,
  tip,
}: {
  children: ReactNode;
  previousHref?: string;
  nextHref?: string;
  tip?: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [pathname]);

  return (
    <div
      aria-label="Topic slide"
      className="flex h-full min-h-0 flex-col overflow-hidden outline-none"
    >
      <div ref={contentRef} className="min-h-0 flex-1 overflow-y-auto pb-4">
        {children}
      </div>

      <div className="flex shrink-0 flex-col gap-2 py-2 font-bold sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3">
        {tip ? <p className="min-w-0 text-xs sm:flex-1 sm:text-sm">tip: {tip}</p> : null}
        <div className="flex shrink-0 items-center justify-between gap-2 sm:justify-end">
          {previousHref ? (
            <Link href={previousHref} aria-label="Previous topic" className="rounded px-3 py-2 hover:bg-tint">
              &uarr; <span className="sm:hidden">Previous</span><span className="hidden sm:inline">Previous topic</span>
            </Link>
          ) : null}
          {nextHref ? (
            <Link
              href={nextHref}
              aria-label="Go to next topic"
              className="rounded bg-brand px-4 py-2 text-white hover:opacity-80"
            >
              &darr; <span className="sm:hidden">Next</span><span className="hidden sm:inline">Next topic</span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
