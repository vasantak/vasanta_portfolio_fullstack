import type { IconName } from "./icons";

export interface DetailItem {
  name: string;
  note: string;
  icon: IconName;
}

export interface SkillCategory {
  title: string;
  icon: IconName;
  description: string;
  /** Plain technology badges */
  skills?: string[];
  /** Badges with a short description and their own icon */
  detail?: DetailItem[];
}

/** Add, remove or reorder categories and technologies here. No ratings or percentages are shown. */
export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "monitor",
    description:
      "Building responsive, reusable, and maintainable web and mobile application interfaces using modern frontend technologies.",
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AngularJS", "Vue.js", "React Native"],
  },
  {
    title: "State Management & Data Fetching",
    icon: "refresh",
    description:
      "Managing application state and server-side data with caching, query invalidation, background refetching, optimistic updates, and reusable data-fetching patterns.",
    skills: ["Redux Toolkit", "Redux", "Context API", "Zustand", "TanStack Query (React Query)"],
  },
  {
    title: "Backend Development & API Engineering",
    icon: "server",
    description:
      "Developing and integrating REST APIs, implementing reusable backend middleware, handling asynchronous operations, and building reliable API communication between frontend and backend systems.",
    skills: ["Node.js", "Express.js", "REST API Design", "Middleware", "Async/Await", "Promises", "Centralized Error Handling", "Axios", "API Interceptors"],
  },
  {
    title: "Database Technologies",
    icon: "database",
    description:
      "Working with both document-oriented and relational database technologies to support application data storage and retrieval.",
    detail: [
      { name: "MongoDB", note: "NoSQL database", icon: "document" },
      { name: "PostgreSQL", note: "Relational SQL database", icon: "relational" },
    ],
  },
  {
    title: "Authentication & Application Security",
    icon: "shield",
    description:
      "Implementing authentication flows, managing token refresh mechanisms, protecting application routes, and handling authorization across frontend and backend systems.",
    skills: ["JWT Authentication", "Refresh Tokens", "Protected Routes", "Authentication and Authorization", "Secure API Integration", "Centralized Interceptors"],
  },
  {
    title: "AWS & Cloud Services",
    icon: "cloud",
    description:
      "Understanding core AWS services for application deployment and cloud storage, including S3 object storage, EC2 instances for hosting applications, and IAM users, roles, and permissions for controlling access to AWS resources.",
    detail: [
      { name: "Amazon S3", note: "Object storage for files and assets", icon: "bucket" },
      { name: "Amazon EC2", note: "Cloud-based virtual server instances", icon: "chip" },
      { name: "AWS IAM", note: "Identity and access management", icon: "key" },
    ],
  },
  {
    title: "Performance Optimization",
    icon: "bolt",
    description:
      "Improving application responsiveness, reducing unnecessary rendering, and organizing frontend code for maintainability and performance.",
    skills: ["Lazy Loading", "Code Splitting", "React.memo", "useMemo", "useCallback", "Reusable Components", "Render Optimization", "Memory Leak Prevention"],
  },
  {
    title: "Development Tools & Delivery",
    icon: "branch",
    description:
      "Collaborating through version control, participating in CI/CD workflows, reviewing code, and delivering application features within Agile teams.",
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD Workflows", "Agile and Scrum", "Code Reviews"],
  },
];
