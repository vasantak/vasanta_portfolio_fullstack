import type { IllustrationName } from "./illustrations";

export interface Project {
  id: string;
  period: string;
  title: string;
  description: string;
  tech: string[];
  illustration: IllustrationName;
}

/** Four projects documented in the resume. Do not add metrics or URLs that are not established. */
export const PROJECTS: Project[] = [
  {
    id: "start-hub",
    period: "March 2025 – Present",
    title: "Start Hub Application",
    description:
      "Enterprise application development featuring reusable React components, TanStack Query caching and synchronization, secure authentication, API integration, CRUD operations, and frontend performance optimization.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "REST APIs",
      "TanStack Query",
      "Axios",
      "JWT Authentication",
      "PostgreSQL",
    ],
    illustration: "startHub",
  },
  {
    id: "hello-spoke",
    period: "February 2024 – December 2025",
    title: "Hello Spoke",
    description:
      "Voice Over IP, VoIP, Business Phone Systems, multifamily housing, emergency escalations, answering service, communication, apartment communities, emergency maintenance, on call schedules, maintenance mitigation",
    tech: [
      "React.js",
      "TypeScript",
      "REST APIs",
      "Axios",
      "React Query",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Third-party API integrations",
      "MongoDB",
    ],
    illustration: "helloSpoke",
  },
  {
    id: "cya",
    period: "January 2018 – June 2024",
    title: "CYA — Cover Your Asset",
    description:
      "Mobile-first asset management application for Android and iOS, including barcode and QR scanning, geolocation, asset tracking, and inventory management.",
    tech: ["React Native", "Node.js", "JavaScript", "REST APIs"],
    illustration: "cya",
  },
  {
    id: "mentorz",
    period: "July 2023 – December 2025",
    title: "Mentorz",
    description:
      "Mentorship platform connecting mentors and mentees, with mentor discovery, profiles, session scheduling, and collaboration workflows.",
    tech: [
      "React.js",
      "TypeScript",
      "Axios",
      "React Query",
      "Redux",
      "Context API",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
    illustration: "mentorz",
  },
];
