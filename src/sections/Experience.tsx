import { EXPERIENCE } from "../data/experience";
import { SectionHead } from "../components/SectionHead";

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap split">
        <SectionHead
          eyebrow="Professional experience"
          title="Where I apply this work."
          titleId="experience-title"
          className="split-head"
        >
          My current role in Bengaluru, with the responsibilities documented in my resume.
        </SectionHead>

        <ol className="timeline">
          {EXPERIENCE.map((role) => (
            <li className="t-item reveal" key={`${role.company}-${role.period}`}>
              <article className="card t-card">
                <div className="t-top">
                  <p className="t-meta">{role.period}</p>
                  {role.current && <p className="t-badge">Current role</p>}
                </div>
                <h3>{role.role}</h3>
                <p className="t-company">
                  {role.company} <span className="t-loc">· {role.location}</span>
                </p>
                <ul className="t-points" aria-label="Key responsibilities">
                  {role.points.map((point) => (
                    <li className="reveal" key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
