import React from "react";
import "./HeroSection.scss";
import avatar from "../../assets/images/avatar-thomas1.png";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="header">
      <div className="header-text">
        <h1 className="title">Thomas Dupré</h1>
        <h2 className="subtitle">Développeur Full Stack</h2>
        <p className="description">
          Passionné par le développement web, je conçois et développe des
          applications web interactives et dynamiques. J'ai une préférence pour
          le développement front-end, mais je suis également à l'aise avec le
          back-end.
        </p>
        <Link to="/projects" className="cta-link main-button">
          Mes projets
        </Link>
      </div>
      <div className="header-image">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};
