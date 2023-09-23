import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../../../../data/projects";
import { swiperConfigScreen } from "./swiperConfigScreen";

import "./ProjectGallery.scss";
import "./SwiperScreen.scss";

export const ProjectGallery = ({ projectId }: { projectId: string }) => {
  const project = projects.find((project) => project.id === projectId);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="project-gallery">
      <h2 className="project-gallery__title">Captures d'ecrans</h2>
      <div className="project-gallery__content">
        <div className="project-gallery__description">
          <h3 className="project-gallery__description__title">
            {project.screenshots[activeSlideIndex]?.title}
          </h3>
          <p className="project-gallery__description__texte">
            {project.screenshots[activeSlideIndex]?.description}
          </p>
        </div>

        <div className="project-gallery__carousel">
          <div className="swiper-screen-container">
            <div className="swiper-elements-outside-screen">
              <div className="swiper-button-prev-screen"></div>
              <div className="swiper-pagination-screen"></div>
              <div className="swiper-button-next-screen"></div>
            </div>

            <Swiper
              {...swiperConfigScreen}
              className="swiper-screen"
              onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}>
              {project.screenshots.map((screenshot, index) => (
                <SwiperSlide key={index} className="swiper-slide-screen">
                  <img src={screenshot.imageSrc} alt={screenshot.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
