import { PROJECTS, type Project } from "../data/projects";
import { ILLUSTRATIONS } from "../data/illustrations";
import { Chips } from "../components/Chips";
import { SectionHead } from "../components/SectionHead";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project" id={`${project.id}-card`}>
      <div className="project-media" aria-hidden="true">
        <svg
          className="il"
          viewBox="0 0 400 250"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          focusable="false"
          dangerouslySetInnerHTML={{ __html: ILLUSTRATIONS[project.illustration] }}
        />
      </div>
      <div className="project-body">
        <p className="tag">{project.period}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Chips items={project.tech} label="Technologies used" />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="section section--flush" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHead eyebrow="Featured projects" title="Four projects from my resume." titleId="projects-title">
          A selection of applications I have built across web, mobile and enterprise platforms.
        </SectionHead>

        <div className="project-grid reveal">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
