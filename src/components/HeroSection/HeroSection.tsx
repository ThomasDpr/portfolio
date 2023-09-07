import React from "react";
import "./HeroSection.scss";
import avatar from "../../assets/images/avatar-header.png";

export const HeroSection = () => {
  return (
    <div className="header">

      <div className="header__text">
        <h1 className="header__text__title">Thomas Dupré</h1>
        <h2 className="header__text__subtitle">Développeur Full Stack</h2>
        <p className="header__text__description">
          Passionné par le développement web, je conçois et développe des
          applications web interactives et dynamiques. J'ai une préférence pour
          le développement front-end, mais je suis également à l'aise avec le
          back-end.
        </p>
      </div>

      <div className="header__image">
        <img src={avatar} alt="avatar" />
      </div>

    </div>
  );
};
