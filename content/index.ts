import type { Section, Topic } from "./types";
import { topics } from "./topics";

// Add a new section here, then add topics with the same `section` value in topics.ts.
export const sections: Section[] = [
  { slug: "arrays", title: "arrays", blurb: "Declaring, loops, searching, sorting and 2D arrays." },
  { slug: "exceptions", title: "exceptions", blurb: "try/catch/finally, the hierarchy, checked vs unchecked." },
];

export const getSection = (slug: string) => sections.find((s) => s.slug === slug);
export const topicsIn = (section: string): Topic[] => topics.filter((t) => t.section === section);
export const getTopic = (section: string, slug: string) =>
  topics.find((t) => t.section === section && t.slug === slug);
export const neighbours = (section: string, slug: string) => {
  const list = topicsIn(section);
  const i = list.findIndex((t) => t.slug === slug);
  return { prev: list[i - 1], next: list[i + 1], index: i + 1, total: list.length };
};
export { topics };
