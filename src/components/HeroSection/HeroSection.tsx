import React from "react";
import "./HeroSection.scss";
// import avatar from "../../assets/images/avatar-thomas1.webp";
import { Banner } from "../Banner/Banner";

import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../utils/cloudinaryConfig";

export const HeroSection = () => {
  return (
    <div className="hero-section">
          <div className="torch"></div>

      <header className="header">
        <section className="header__text">
          <h1 className="header__text__title">Thomas Dupré</h1>
          <h2 className="header__text__subtitle">Développeur Full Stack</h2>
          <p className="header__text__description">
            Passionné par le développement web, je conçois et développe des
            applications web interactives et dynamiques. J'ai une préférence
            pour le développement front-end, mais je suis également à l'aise
            avec le back-end.
          </p>
        </section>

        <figure className="header__image">
          {/* <img src={avatar} alt="Portrait de Thomas Dupré" loading="lazy" /> */}
          <AdvancedImage
            cldImg={cld.image("portfolio_react/mslffprpiccmya8urkv0")}
            className="header__image__img"
          />
        </figure>
      </header>
      <Banner />
    </div>
  );
};
