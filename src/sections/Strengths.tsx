import { STRENGTHS } from "../data/strengths";
import { Icon } from "../components/Icon";
import { SectionHead } from "../components/SectionHead";

export function Strengths() {
  return (
    <section className="section section--flush" id="strengths" aria-labelledby="strengths-title">
      <div className="wrap">
        <SectionHead eyebrow="Engineering strengths" title="What I bring to a development team." titleId="strengths-title">
          I work across frontend and backend systems, build maintainable applications, manage API-driven state, and
          collaborate closely with the people around the code.
        </SectionHead>

        <div className="strength-grid reveal">
          {STRENGTHS.map((item) => (
            <article className="card strength" key={item.title}>
              <div className="strength-top">
                <span className="icon" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <p className="tag">{item.tag}</p>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
