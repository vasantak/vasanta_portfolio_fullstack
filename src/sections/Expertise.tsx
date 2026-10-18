import { SKILLS, type SkillCategory } from "../data/skills";
import { Chips } from "../components/Chips";
import { Icon } from "../components/Icon";
import { SectionHead } from "../components/SectionHead";

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <li className="skill-item reveal">
      <article className="card skill-card">
        <div className="skill-head">
          <span className="skill-icon" aria-hidden="true">
            <Icon name={category.icon} />
          </span>
          <h3>{category.title}</h3>
        </div>
        <p className="skill-desc">{category.description}</p>

        {category.skills && <Chips items={category.skills} label={`${category.title} technologies`} />}

        {category.detail && (
          <ul className="detail-list" aria-label={category.title}>
            {category.detail.map((item) => (
              <li className="detail-row" key={item.name}>
                <span className="detail-ico" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <span className="detail-text">
                  <span className="detail-name">{item.name}</span>
                  <span className="detail-note">{item.note}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </article>
    </li>
  );
}

export function Expertise() {
  return (
    <section className="section" id="expertise" aria-labelledby="expertise-title">
      <div className="wrap">
        <SectionHead eyebrow="Technical expertise" title="Technologies I Work With" titleId="expertise-title">
          From building responsive React applications to developing backend APIs, working with databases, and
          understanding cloud infrastructure, I bring a full-stack perspective to application development.
        </SectionHead>

        <ul className="skill-grid">
          {SKILLS.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </ul>
      </div>
    </section>
  );
}
