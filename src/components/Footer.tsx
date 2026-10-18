import { FOOTER_LINKS } from "../data/navigation";
import { SITE } from "../data/site";
import { useEmail } from "../hooks/useEmail";
import { Brand } from "./Brand";

export function Footer() {
  const { onEmailLinkClick } = useEmail();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand label={`${SITE.name}, back to top`} />
            <p>{SITE.title}</p>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h2>Navigate</h2>
            <ul className="footer-links">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h2>Connect</h2>
            <ul>
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} onClick={onEmailLinkClick}>
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
