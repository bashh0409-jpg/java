import type { Metadata } from "next";
import Link from "next/link";
import { Space_Mono } from "next/font/google";
import { sections } from "@/content";
import "./globals.css";

const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space" });

export const metadata: Metadata = { title: "java notes", description: "Java revision notes: arrays and exceptions" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${mono.variable} flex h-dvh flex-col overflow-hidden bg-white font-sans tracking-tighter text-brand antialiased`}>
        <header className="flex shrink-0 items-center justify-between gap-3 px-3 py-3 sm:px-6 md:px-10 md:py-5">
          <Link href="/" className="text-xl font-bold sm:text-2xl">java notes</Link>
          <nav className="flex gap-3 text-sm font-bold sm:gap-6 sm:text-base">
            {sections.map((s) => <Link key={s.slug} href={`/${s.slug}`} className="hover:underline">{s.title}</Link>)}
          </nav>
        </header>
        <main className="mx-auto min-h-0 w-full max-w-9xl flex-1 overflow-y-auto px-3 pt-3 pb-3 sm:px-6 sm:pt-6 md:px-10 md:pt-10">{children}</main>

      </body>
    </html>
  );
}
