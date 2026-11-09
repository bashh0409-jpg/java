export type Visual =
  | { type: "array"; values: (number | string)[]; highlight?: number }
  | { type: "table"; headers: string[]; rows: (string | number)[][] }
  | { type: "tree"; nodes: { label: string; depth: number; note?: string; dark?: boolean }[] };

export type Topic = {
  slug: string;
  section: string;
  title: string;
  tip?: string;
  code?: string[];
  run?: string[];
  points?: { title: string; text: string }[];
  callout?: string;
  visual?: Visual;
};

export type Section = { slug: string; title: string; blurb: string };
