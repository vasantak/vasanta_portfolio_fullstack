import { useEffect, useRef, useState } from "react";
import { SITE } from "../data/site";
import { EMAIL_TEXT_ID, useEmail } from "../hooks/useEmail";

export function Contact() {
  const { busy, copy, report, onEmailLinkClick, onGetInTouchClick } = useEmail();
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handleCopyButton = async () => {
    const ok = await copy();
    report(ok);
    if (ok) {
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 3500);
    }
  };

  return (
    <section className="section section--flush" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="cta-panel reveal">
          <div className="cta-copy">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Have a Project in Mind?</h2>
            <p className="lede">
              Let’s discuss how I can help build scalable, reliable, and user-friendly web applications.
            </p>
            <div className="cta-actions">
              <a
                className={`btn btn--primary${busy ? " is-loading" : ""}`}
                href={`mailto:${SITE.email}`}
                aria-busy={busy || undefined}
                onClick={onGetInTouchClick}
              >
                <span className="spinner" aria-hidden="true" />
                <span className="btn-label">{busy ? "Working on it…" : "Get in Touch"}</span>
              </a>
              <a className="btn btn--ghost" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <dl className="contact-list">
            <div className="contact-row">
              <dt>Email</dt>
              <dd>
                <a id={EMAIL_TEXT_ID} href={`mailto:${SITE.email}`} onClick={onEmailLinkClick}>
                  {SITE.email}
                </a>
                <button className="copy-btn" type="button" onClick={handleCopyButton}>
                  {copied ? "Copied" : "Copy email"}
                </button>
              </dd>
            </div>
            <div className="contact-row">
              <dt>Location</dt>
              <dd>{SITE.location}</dd>
            </div>
            <div className="contact-row">
              <dt>LinkedIn</dt>
              <dd>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                  {SITE.linkedinLabel}
                </a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>Existing portfolio</dt>
              <dd>
                <a href={SITE.existingPortfolio} target="_blank" rel="noopener noreferrer">
                  {SITE.existingPortfolioLabel}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
