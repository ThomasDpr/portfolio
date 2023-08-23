  import React from "react";
  import { Carousel } from "../Carousel/Carousel";
  import "./ProjectSection.scss";

  export const ProjectSection = () => {
    return (
        <div className="project-section">
          <div className="title-left">
            <h2>Mes Projets</h2>
          </div>
          <div className="carousel-section">
            <Carousel />
          </div>
          <div className="title-right">
            <h2>Realises</h2>
          </div>
        </div>
    );
  };
