import './ProjectLinks.scss'

import githubIcon from "../../../../assets/icons/github.svg";
import websiteIcon from "../../../../assets/icons/website.svg";
import arrowLink from "../../../../assets/icons/arrow-link.svg";
import broken from "../../../../assets/icons/broken.svg";


export const ProjectLinks = ({ appLink, githubLink }: { appLink?: string, githubLink?: string }) => (
  <div className="project-links">
    {appLink !== undefined ? (
      <a
        className="project-link"
        href={appLink}
        target="_blank"
        rel="noopener noreferrer">
        <img className="project-link-icon" src={websiteIcon} alt="Logo du site" />
        <span className="project-link-text">Visiter l'application</span>
        <img className="project-link-arrow" src={arrowLink} alt="Icon de flèche" />
      </a>
    ) : (
      <span className="project-link">
        <img className="project-link-icon" src={websiteIcon} alt="Logo du site" />
        <span className="project-link-text">Non disponible</span>
        <img className="project-link-arrow" src={broken} alt="Icon de lien cassé" />
      </span>
    )}

    {githubLink !== undefined ? (
      <a
        className="project-link"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer">
        <img className="project-link-icon" src={githubIcon} alt="Logo de Github" />
        <span className="project-link-text">Visiter le repository</span>
        <img className="project-link-arrow" src={arrowLink} alt="Icon de flèche" />
      </a>
    ) : (
      <span className="project-link">
        <img className="project-link-icon" src={githubIcon} alt="Logo de Github" />
        <span className="project-link-text">Non disponible</span>
        <img className="project-link-arrow" src={broken} alt="Icon de lien cassé" />
      </span>
    )}
  </div>
);
