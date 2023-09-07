import React from "react";
import "./SkillsSection.scss";

// Import des icones frontend
import react from "../../assets/icons/react.svg";
import javascript from "../../assets/icons/javascript.svg";
import typescript from "../../assets/icons/typescript.svg";

// Import des icones backend
import ruby from "../../assets/icons/ruby.svg";
import rails from "../../assets/icons/rails.svg";
import nestjs from "../../assets/icons/nestjs.svg";

export const SkillsSection = () => {
  return (
      <div className="skills">
        <div className="frontend">
          <h3 className="skills-frontend__title">FRONTEND</h3>
          <div className="skills-frontend">
            <div className="skills-frontend__item__container">
              <div className="skills-frontend__item">
                <img
                  src={react}
                  alt="react"
                  className="skills-frontend__icon"
                  id="react"
                />
                <p className="skills-frontend__text">React</p>
              </div>
              <div className="skills-frontend__item">
                <img
                  src={javascript}
                  alt="react"
                  className="skills-frontend__icon"
                  id="javascript"
                />
                <p className="skills-frontend__text">Javascript</p>
              </div>
              <div className="skills-frontend__item">
                <img
                  src={typescript}
                  alt="react"
                  className="skills-frontend__icon"
                  id="typescript"
                />
                <p className="skills-frontend__text">Typescript</p>
              </div>
            </div>

          </div>
        </div>

        <h3 className="skills-title__center">
          {Array.from("COMPETENCES").map((letter, index) => (
            <span key={index} className="skills-title__center__letter">
              {letter}
            </span>
          ))}
        </h3>

        <div className="backend">
          <div className="skills-backend">

            <div className="skills-backend__item__container">
              <div className="skills-backend__item">
                <img
                  src={rails}
                  alt="rails"
                  className="skills-backend__icon"
                  id="rails"
                />
                <p className="skills-backend__text">Rails</p>
              </div>
              <div className="skills-backend__item">
                <img
                  src={ruby}
                  alt="ruby"
                  className="skills-backend__icon"
                  id="ruby"
                />
                <p className="skills-backend__text">Ruby</p>
              </div>
              <div className="skills-backend__item">
                <img
                  src={nestjs}
                  alt="nestjs"
                  className="skills-backend__icon"
                  id="nestjs"
                />
                <p className="skills-backend__text">NestJs</p>
              </div>
            </div>
          </div>
          <h3 className="skills-backend__title">BACKEND</h3>
        </div>
      </div>
  );
};
