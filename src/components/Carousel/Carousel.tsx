import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "../Card/Card";

import { projects } from "../Card/CardData";
import { swiperConfig } from "./swiperConfig";

import "./Carousel.scss";

export const Carousel = () => {
  return (
      <Swiper {...swiperConfig} className="carousel">
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="carousel__slides">
            <Card {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};
