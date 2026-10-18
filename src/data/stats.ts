/** A value is built from parts: a number that counts up, or fixed text shown in the accent colour. */
export type StatPart = { count: number } | { text: string };

export interface Stat {
  value: StatPart[];
  /** Read by screen readers, because the animated number is hidden from them */
  spoken: string;
  label: string;
  note: string;
}

export const STATS: Stat[] = [
  {
    value: [{ count: 9 }],
    spoken: "9 ",
    label: "Years of Professional Experience",
    note: "Building web and mobile applications.",
  },
  {
    value: [{ count: 30 }, { text: "+" }],
    spoken: "30+ ",
    label: "REST APIs Integrated",
    note: "Connecting applications to services and data.",
  },
  {
    value: [{ count: 4 }],
    spoken: "4 ",
    label: "Major Featured Projects",
    note: "Four selected projects documented in my resume, not a total project count.",
  },
  {
    value: [{ count: 2 }, { text: "–" }, { count: 3 }],
    spoken: "2 to 3 ",
    label: "Junior Developers Mentored",
    note: "Technical guidance for early-career engineers.",
  },
];
