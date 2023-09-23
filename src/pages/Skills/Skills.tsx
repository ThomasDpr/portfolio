import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { skillsTitle } from "../../utils/titles";

import javascript from '../../assets/icons/javascript.svg';
import typescript from '../../assets/icons/typescript.svg';
import ruby from '../../assets/icons/ruby.svg';
import nestjs from '../../assets/icons/nestjs.svg';


import react from '../../assets/icons/react.svg';
import rails from '../../assets/icons/rails.svg';

import sass from '../../assets/icons/sass.svg';
import figma from '../../assets/icons/figma.svg';
import responsive from '../../assets/icons/responsive.svg';

import postgresql from '../../assets/icons/postgresql.svg';
import docker from '../../assets/icons/docker.svg';

import "./Skills.scss";

export const Skills = () => {
  return (
    <div className="skills">
      <Helmet>
        <title>{skillsTitle}</title>
      </Helmet>

      <section className="skills__header">

        <figure className="skills__header__image">
          <img
            className="skills__header__image__img"
            src="https://res.cloudinary.com/dimfha9hq/image/upload/v1695400794/portfolio_react/skills/cover.webp"
            alt="Illustration de la page Mes Compétences" />
        </figure>

        <section className="skills__header__title">
          <h1 className="skills__header__title__text">Mes Compétences</h1>
        </section>
      </section>

      <section className="skills__content">
        <div className="skills__content__subcontent skills__content__subcontent--frontend">
          <h2 className="skills__content__subcontent__title skills__content__subcontent__title--frontend">Frontend</h2>
          <div className="skills__content__subcontent__subsections skills__content__subcontent__subsections--frontend">
            <div className="skills__content__subcontent__subsections__box">

            <div className="skills__content__subcontent__subsections__box__languages">
              <h3 className="skills__content__subcontent__subsections__box__languages__title">Langages de programmation</h3>

              <div className="skills__content__subcontent__subsections__box__languages__item">
                <div className="skills__content__subcontent__subsections__box__languages__item__title">
                  <img className="skills__content__subcontent__subsections__box__languages__item__title__icon" src={javascript} alt="Icone Javascript" />
                  <h3 className="skills__content__subcontent__subsections__box__languages__item__title__text">Javascript</h3>
                </div>
                <p className="skills__content__subcontent__subsections__box__languages__item__description">J'ai commencé à apprendre Javascript durant ma formation au Wagon. Il m'a permis de comprendre les bases de la programmation dynamique. </p>
              </div>

              <div className="skills__content__subcontent__subsections__box__languages__item">
                <div className="skills__content__subcontent__subsections__box__languages__item__title">
                  <img className="skills__content__subcontent__subsections__box__languages__item__title__icon" src={typescript} alt="Icone Typescript" />
                  <h3 className="skills__content__subcontent__subsections__box__languages__item__title__text">Typescript</h3>
                </div>
                <p className="skills__content__subcontent__subsections__box__languages__item__description">Voulant me perfectionner dans la programmation orientée objet claire et précise, j'ai décidé d'apprendre Typescript. J'ai pu l'utiliser sur en particulier pour le développement de ce portfolio.</p>
              </div>
            </div>

            </div>

            <div className="skills__content__subcontent__subsections__box">
              <div className="skills__content__subcontent__subsections__box__frameworks">
                <h3 className="skills__content__subcontent__subsections__box__frameworks__title">Frameworks</h3>

                <div className="skills__content__subcontent__subsections__box__frameworks__item">
                  <div className="skills__content__subcontent__subsections__box__frameworks__item__title">
                    <img className="skills__content__subcontent__subsections__box__frameworks__item__title__icon" src={react} alt="Icone React" />
                    <h3 className="skills__content__subcontent__subsections__box__frameworks__item__title__text">React</h3>
                  </div>
                  <p className="skills__content__subcontent__subsections__box__frameworks__item__description">React est le framework que j'utilise le plus. J'ai pu l'utiliser sur plusieurs projets personnels. Aujourd'hui, je l'utilise pour le développement de ce <strong><Link to="/projects/portfolio">portfolio</Link></strong>.</p>
                </div>
              </div>
            </div>

            <div className="skills__content__subcontent__subsections__box">
              <div className="skills__content__subcontent__subsections__box__tools">
                <h3 className="skills__content__subcontent__subsections__box__tools__title">Outils et technologies</h3>

                <div className="skills__content__subcontent__subsections__box__tools__item">
                  <div className="skills__content__subcontent__subsections__box__tools__item__title">
                    <img className="skills__content__subcontent__subsections__box__tools__item__title__icon" src={sass} alt="Icone Sass" />
                    <h3 className="skills__content__subcontent__subsections__box__tools__item__title__text">Sass</h3>
                  </div>
                  <p className="skills__content__subcontent__subsections__box__tools__item__description">J'utilise Sass pour la plupart de mes projets. Il me permet de rendre mon code CSS plus lisible et plus facile à maintenir.</p>
                </div>
              </div>
            </div>

            <div className="skills__content__subcontent__subsections__box">
              <div className="skills__content__subcontent__subsections__box__design">
                <h3 className="skills__content__subcontent__subsections__box__design__title">Design & UX/UI</h3>

                <div className="skills__content__subcontent__subsections__box__design__item">
                  <div className="skills__content__subcontent__subsections__box__design__item__title">
                    <img className="skills__content__subcontent__subsections__box__design__item__title__icon" src={figma} alt="Icone Sass" />
                    <h3 className="skills__content__subcontent__subsections__box__design__item__title__text">Figma</h3>
                  </div>
                  <p className="skills__content__subcontent__subsections__box__design__item__description">Afin de pouvoir réaliser des applications web avec un design moderne et épuré, j'ai appris à utiliser Figma. Il me permet de réaliser des maquettes et des prototypes.</p>
                </div>

                <div className="skills__content__subcontent__subsections__box__design__item">
                  <div className="skills__content__subcontent__subsections__box__design__item__title">
                    <img className="skills__content__subcontent__subsections__box__design__item__title__icon" src={responsive} alt="Icone Responsive" />
                    <h3 className="skills__content__subcontent__subsections__box__design__item__title__text">Responsive Design</h3>
                  </div>
                  <p className="skills__content__subcontent__subsections__box__design__item__description">J'ai appris à rendre mes applications web responsive. La prochaine étape est de commencer par le mobile first.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content__subcontent skills__content__subcontent--backend">
          <h2 className="skills__content__subcontent__title skills__content__subcontent__title--backend">Backend</h2>
          <div className="skills__content__subcontent__subsections skills__content__subcontent__subsections--backend">

            <div className="skills__content__subcontent__subsections__box">
              <div className="skills__content__subcontent__subsections__box__languages">
                <h3 className="skills__content__subcontent__subsections__box__languages__title">Langages de programmation</h3>

                <div className="skills__content__subcontent__subsections__box__languages__item">
                  <div className="skills__content__subcontent__subsections__box__languages__item__title">
                    <img className="skills__content__subcontent__subsections__box__languages__item__title__icon" src={ruby} alt="Icone Ruby" />
                    <h3 className="skills__content__subcontent__subsections__box__languages__item__title__text">Ruby</h3>
                  </div>
                  <p className="skills__content__subcontent__subsections__box__languages__item__description">J'ai découvert l'existance de Ruby durant ma formation au Wagon. J'ai nottament pu l'utiliser pour réaliser les projets <strong><Link to="/projects/musicroad">MusicRoad</Link> </strong> et <strong><Link to="/projects/spacebnb">SpaceBnb</Link></strong>.</p>
                </div>
              </div>
            </div>
            <div className="skills__content__subcontent__subsections__box">
              <div className="skills__content__subcontent__subsections__box__frameworks">
                <h3 className="skills__content__subcontent__subsections__box__frameworks__title">Frameworks</h3>

                <div className="skills__content__subcontent__subsections__box__frameworks__item">
                  <div className="skills__content__subcontent__subsections__box__frameworks__item__title">
                    <img className="skills__content__subcontent__subsections__box__frameworks__item__title__icon" src={rails} alt="Icone Rails" />
                    <h3 className="skills__content__subcontent__subsections__box__frameworks__item__title__text">Rails</h3>
                  </div>
                  <p className="skills__content__subcontent__subsections__box__frameworks__item__description">La découverte de Rails à été une révolution durant ma formation au Wagon. Le fait de pouvoir créer une application web en mono-repo m'a permis de comprendre le fonctionnement d'un frameword MVC.</p>
                </div>

                <div className="skills__content__subcontent__subsections__box__frameworks__item">
                  <div className="skills__content__subcontent__subsections__box__frameworks__item__title">
                    <img className="skills__content__subcontent__subsections__box__frameworks__item__title__icon" src={nestjs} alt="Icone Nestjs" />
                    <h3 className="skills__content__subcontent__subsections__box__frameworks__item__title__text">Nestjs</h3>
                  </div>
                  <p className="skills__content__subcontent__subsections__box__frameworks__item__description">J'ai appris à utiliser Nestjs afin de pouvoir développer des API REST. Il m'a permis de comprendre le fonctionnement d'une API et de pouvoir créer des applications web en micro-services.</p>
                </div>
              </div>
            </div>
            <div className="skills__content__subcontent__subsections__box">
              <div className="skills__content__subcontent__subsections__box__tools">
                <h3 className="skills__content__subcontent__subsections__box__tools__title">Outils et technologies</h3>

                <div className="skills__content__subcontent__subsections__box__tools__item">
                  <div className="skills__content__subcontent__subsections__box__tools__item__title">
                    <img className="skills__content__subcontent__subsections__box__tools__item__title__icon" src={docker} alt="Icone Docker" />
                    <h3 className="skills__content__subcontent__subsections__box__tools__item__title__text">Docker</h3>
                  </div>
                  <p className="skills__content__subcontent__subsections__box__tools__item__description">J'ai appris à utiliser Docker en autodidacte pour différents projets privés. Il m'a permit de comprendre le fonctionnement des conteneurs et des images et ainsi permettre de séparer les différentes processus de mes applications web. </p>
                </div>
              </div>
            </div>
            <div className="skills__content__subcontent__subsections__box">
              <div className="skills__content__subcontent__subsections__box__design">
                <h3 className="skills__content__subcontent__subsections__box__design__title">Bases de données</h3>

                <div className="skills__content__subcontent__subsections__box__design__item">
                  <div className="skills__content__subcontent__subsections__box__design__item__title">
                    <img className="skills__content__subcontent__subsections__box__design__item__title__icon" src={postgresql} alt="Icone Postgresql" />
                    <h3 className="skills__content__subcontent__subsections__box__design__item__title__text">Postgresql</h3>
                  </div>
                  <p className="skills__content__subcontent__subsections__box__design__item__description">Que serait une application web sans base de données ? J'ai appris à utiliser Postgresql pour pouvoir stocker les données de mes applications web. Ça a été pour moi une grande partie de plaisir de pouvoir jouer et contrôler avec les données afin de comprendre le fonctionnement même d'une application web.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
