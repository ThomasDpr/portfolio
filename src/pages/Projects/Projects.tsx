// import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { projectsTitle } from "../../utils/titles";

import { projects } from "../../data/projects";

import { Card } from "../../components/Card/Card";

import "./Projects.scss";

export const Projects = () => {
  return (
    <div className="projects">
      <Helmet>
        <title>{projectsTitle}</title>
      </Helmet>

      <div className="projects__cards">
        {projects.map((project, index) => (
          <Link
            to={`/projects/${project.id}`}
            key={index}
            className="projects__cards__link">
            <Card {...project} variant="projects" />
          </Link>
        ))}
      </div>
    </div>
  );
};
