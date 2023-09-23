import React from "react";
import { Carousel } from "../../../../components/Carousel/Carousel";
import { CarouselNavigation } from "../../../../components/Carousel/CarouselNavigation";
import "./ProjectSection.scss";

export const ProjectSection = () => {
  return (
    <div className="project-section">
      <div className="title-left">
        <h2>Projets</h2>
      </div>

      <div className="carousel-section">
        <Carousel />
        <CarouselNavigation />
      </div>

      <div className="title-right">
        <h2>Realises</h2>
      </div>
    </div>
  );
};
