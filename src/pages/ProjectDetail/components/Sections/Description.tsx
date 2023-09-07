import { ProjectLinks } from "../Links/ProjectLinks";
import { ProjectStack } from "../Stacks/ProjectStack";

import "./Description.scss";
export const Description = ({ description, appLink, githubLink, stack }: { description: string, appLink?: string, githubLink?: string, stack: { name: string, icon: string }[] }) => (
  <section className="project-description">

    <div className="project-description__block">

      <div className="project-description__content">
        <h2 className="project-description__title">Detail du projet</h2>
        <p className="project-description__text">{description}</p>
      </div>

      <ProjectStack stack={stack} />
    </div>

    <ProjectLinks appLink={appLink} githubLink={githubLink} />
  </section>
);
