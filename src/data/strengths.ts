import type { IconName } from "./icons";

export interface Strength {
  tag: string;
  title: string;
  description: string;
  icon: IconName;
}

export const STRENGTHS: Strength[] = [
  { tag: "Frontend", icon: "layers", title: "Scalable Frontend Architecture", description: "Organizing React and TypeScript code into clear layers so new features fit in without reshaping the whole codebase." },
  { tag: "Frontend", icon: "components", title: "Reusable Component Design", description: "Building shared, typed components that keep interfaces consistent and reduce duplicated code." },
  { tag: "Full stack", icon: "server", title: "Full Stack Development", description: "Working across React interfaces and Node.js and Express.js services, so I can follow a feature from the screen to the API." },
  { tag: "APIs", icon: "nodes", title: "API Integration and Error Handling", description: "Connecting frontends to REST APIs through Axios and centralized interceptors, with consistent handling of failures." },
  { tag: "Security", icon: "shield", title: "Authentication and Authorization", description: "Implementing JWT authentication, refresh tokens and protected routes so access to the application is controlled." },
  { tag: "Performance", icon: "bolt", title: "Application Performance Optimization", description: "Using lazy loading, code splitting and memoization to keep rendering efficient as applications grow." },
  { tag: "Server state", icon: "refresh", title: "Server-State Management with TanStack Query", description: "Handling API data with caching, background refetching and optimistic updates, so screens stay in sync with the server." },
  { tag: "Teamwork", icon: "team", title: "Mentoring and Code Reviews", description: "Guiding 2–3 junior developers through code reviews and technical guidance." },
  { tag: "Teamwork", icon: "board", title: "Agile/Scrum Collaboration", description: "Working with backend, QA and product teams in Agile/Scrum environments." },
];
