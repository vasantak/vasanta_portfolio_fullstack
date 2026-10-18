import type { CSSProperties } from "react";
import { ROUTES } from "../data/navigation";

const TECH_LABELS = ["React.js", "TypeScript", "Node.js", "Express.js", "TanStack Query"];

/** Staggers the entrance animation of each hero element. */
const step = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="glow glow--blue" aria-hidden="true" />
      <div className="glow glow--orange" aria-hidden="true" />
      <div className="glow glow--soft" aria-hidden="true" />

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-role" data-anim style={step(0)}>
            <span className="dot" aria-hidden="true" />
            Senior Full Stack Developer | React.js Specialist
          </p>

          <h1 className="hero-name" id="hero-title" data-anim style={step(1)}>
            Vasanta K
          </h1>

          <h2 className="hero-headline" data-anim style={step(2)}>
            Building <span className="grad-text">Scalable Web Applications</span> with Modern Engineering.
          </h2>

          <p className="hero-sub" data-anim style={step(3)}>
            I’m a Senior Full Stack Developer with 9+ years of experience building scalable web and mobile
            applications. I specialize in React.js, TypeScript, Node.js, and Express.js, with a strong focus on
            reusable architecture, performance optimization, secure authentication, and reliable API integration.
          </p>

          <div className="hero-actions" data-anim style={step(4)}>
            <a className="btn btn--primary" href={ROUTES.portfolio}>
              View My Projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact Me
            </a>
          </div>

          <ul className="tech-labels" data-anim style={step(5)} aria-label="Core technologies">
            {TECH_LABELS.map((t) => (
              <li className="chip" key={t}>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* To use your real photo, replace .portrait-placeholder with:
            <img src="/your-photo.jpg" alt="Portrait of Vasanta K" width="640" height="800" /> */}
        <div className="portrait">
          <div className="portrait-glow" aria-hidden="true" />
          <div className="portrait-frame">
            <div className="portrait-inner">
              <div className="portrait-placeholder" role="img" aria-label="Profile photo placeholder">
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <circle cx="60" cy="44" r="20" />
                  <path d="M20 108c0-22 18-38 40-38s40 16 40 38" />
                </svg>
                <span>Your photo here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
