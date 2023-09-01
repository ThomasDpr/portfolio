// Modules externes
import React from "react";
import { useParams } from "react-router-dom";

// Styles
import "./ProjectDetail.scss";

// Données et composants
import { projects } from "../../components/Card/CardData";
import { ProjectLinks } from "./components/ProjectLinks";
import { ProjectStack } from "./components/ProjectStack";
// import { ProjectGallery } from "./components/ProjectGallery";
import { ProjectYoutube } from "./components/ProjectYoutube";

import { Header } from "./components/Sections/Header";




export const ProjectDetail = () => {
  // Récupération directe de l'id du projet dans l'URL
  const { id } = useParams<{ id: string }>();

  // Recherche du projet correspondant à l'id
  const project = projects.find((p) => p.id === id);

  // Si le projet n'existe pas, on affiche un message d'erreur
  if (!project) return <div className="project"><p>Project not found</p></div>;

  // Si le projet existe, on affiche le détail du projet : titre, image, description, liens, stack
  const { title, imageSrc, description, appLink, githubLink, stack, screenshots } = project;

  return (
    <div className="project">
      <div className="project-container">
        <Header title={title} imageSrc={imageSrc} />


        <div className="project-content">
          <section className="project-description-wrapper">
            <h2 className="project-description-title">
              Détail du projet
            </h2>
            <p className="project-description-text">{description}</p>
            <ProjectLinks appLink={appLink} githubLink={githubLink} />
          </section>
          <ProjectStack stack={stack} />
        </div>


        <div className="project-content-youtube">
          <div className="project-youtube-wrapper">
            <h2 className="project-youtube-title">
              Vidéo de présentation
            </h2>
            <ProjectYoutube youtubeLink={project.youtubeLink} />
          </div>
        </div>


      </div>
    </div>
  );
};
