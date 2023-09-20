// Modules externes
import React from "react";


import { Helmet } from 'react-helmet-async';
import { projectDetailTitle } from "../../utils/titles";

import { useParams } from "react-router-dom";

// Styles
import "./ProjectDetail.scss";

// Données et composants
import { projects } from "../../components/Card/CardData";

import { Header } from "./components/Sections/Header";
import { Description } from "./components/Sections/Description";
import { Youtube } from './components/Sections/Youtube';
import { ProjectGallery } from "./components/Gallery/ProjectGallery";



export const ProjectDetail = () => {
  // Récupération directe de l'id du projet dans l'URL
  const { id } = useParams<{ id: string }>();

  // Recherche du projet correspondant à l'id
  const project = projects.find((p) => p.id === id);

  // Si le projet n'existe pas, on affiche un message d'erreur
  if (!project) return <div className="project"><p>Project not found</p></div>;

  // Si le projet existe, on affiche le détail du projet : titre, image, description, liens, stack
  const { title, imageSrc, description, appLink, githubLink, stack, youtube} = project;

  return (
    <div className="project">
      <Helmet>
        <title>{projectDetailTitle(title)}</title>
      </Helmet>
        <Header title={title} imageSrc={imageSrc} />

        <Description
          description={description}
          stack={stack}
          appLink={appLink}
          githubLink={githubLink}
        />

        <Youtube youtube={youtube} />
        <ProjectGallery projectId={project.id} />
    </div>
  );
};
