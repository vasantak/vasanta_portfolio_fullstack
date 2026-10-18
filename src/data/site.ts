export const SITE = {
  name: "Vasanta K",
  title: "Senior Full Stack Developer | React.js Specialist",
  email: "vasanta.kari2@gmail.com",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/vasanta-b-k-0b921b92/",
  linkedinLabel: "linkedin.com/in/vasanta-b-k-0b921b92",
  existingPortfolio: "https://vasantak.github.io/vasanta_portfolio_fullstack/", //"https://vasantak.github.io/vasanta_portfolio/",
  existingPortfolioLabel: "vasantak.github.io/vasanta_portfolio_fullstack/", //"vasantak.github.io/vasanta_portfolio",
} as const;

/**
 * What email links and the "Get in Touch" button do.
 *   "copy"   : copy the address and show a confirmation (works everywhere, including
 *              sandboxed viewers where mailto: links are blocked).
 *   "mailto" : open the visitor's email app. Use this on your own hosted site.
 */
//export const EMAIL_BEHAVIOR: "copy" | "mailto" = "copy";
export type EmailBehavior = "mailto" | "outlook-web" | "copy";
export const EMAIL_BEHAVIOR: EmailBehavior = "outlook-web";
