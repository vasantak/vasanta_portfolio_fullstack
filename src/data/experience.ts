export interface Role {
  period: string;
  current?: boolean;
  role: string;
  company: string;
  location: string;
  points: string[];
}

/** Newest first. Add earlier roles as extra objects. Only add facts that appear in the resume. */
export const EXPERIENCE: Role[] = [
  {
    period: "April 2016 – Present",
    current: true,
    role: "Senior Software Developer",
    company: "Facile Consulting Pvt Ltd",
    location: "Bengaluru",
    points: [
      "Designed and extended reusable React.js component architectures using TypeScript.",
      "Worked with Redux Toolkit and TanStack Query for state management, caching, background refetching, and optimistic updates.",
      "Integrated 30+ REST APIs using Axios and centralized interceptors.",
      "Implemented JWT authentication, refresh-token mechanisms, and protected routes.",
      "Improved performance using lazy loading, code splitting, memoization, and render optimization.",
      "Collaborated with backend, QA, and product teams in Agile/Scrum environments.",
      "Mentored 2–3 junior developers through code reviews and technical guidance.",
    ],
  },
];
