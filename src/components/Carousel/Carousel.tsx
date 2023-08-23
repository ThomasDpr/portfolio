import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "../Card/Card";

import { projects } from "../Card/CardData";
import { swiperConfig } from "./swiperConfig";

import "./Carousel.scss";

export const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper {...swiperConfig} className="carousel">
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Card {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-elements-outside">
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination "></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};
