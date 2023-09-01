import githubIcon from "../../../assets/icons/github.svg";
import websiteIcon from "../../../assets/icons/website.svg";

export const ProjectLinks = ({ appLink, githubLink }: { appLink?: string, githubLink?: string }) => (
  <div className="project-links">
    {appLink && (
      <a
        className="project-link"
        href={appLink}
        target="_blank"
        rel="noopener noreferrer">
        <img className="project-link-icon" src={websiteIcon} alt="Logo du site" />
        <span className="project-link-text">Visiter l'application</span>
      </a>
    )}

    {githubLink && (
      <a
        className="project-link"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer">
        <img className="project-link-icon" src={githubIcon} alt="Logo de Github" />
        <span className="project-link-text">Visiter le repository</span>
      </a>
    )}
  </div>
);
