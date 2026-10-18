/**
 * Routes for pages that are not built yet. Change these when the pages exist
 * (or when a router is added). Everything that links to them reads from here.
 */
export const ROUTES = {
  about: "/about",
  portfolio: "/portfolio",
} as const;

export interface NavLink {
  label: string;
  /** Section id on the Home page */
  id: string;
}

/** Header navigation (sections on this page). The last entry is styled as a button. */
export const NAV_LINKS: NavLink[] = [
  { label: "Expertise", id: "expertise" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Strengths", id: "strengths" },
  { label: "Contact", id: "contact" },
];

export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTER_LINKS: FooterLink[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: ROUTES.about },
  { label: "Portfolio", href: ROUTES.portfolio },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];
