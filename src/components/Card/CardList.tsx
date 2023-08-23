import React from "react";
import { projects } from "./CardData";
import { Card } from "./Card";

export const CardList = () => {
  return (
    <div className="card-list">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          imageSrc={project.imageSrc}
          description={project.description}
          iconSrc={project.iconSrc}
        />
      ))}
    </div>
    // <Swiper {...swiperConfig} >
    //   {projects.map((project, index) => (
    //     <SwiperSlide key={index}>
    //       <Card {...project} />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  );
};
