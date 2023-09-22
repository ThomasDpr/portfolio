import "./HeroSection.scss";
import { Banner } from "../Banner/Banner";
import { CloudinaryImage } from "../../utils/CloudinaryImage";

const avatar = "portfolio_react/mslffprpiccmya8urkv0.png";

export const HeroSection = () => {
  return (
    <div className="hero-section">

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
  <picture>
    <source media="(max-width: 320px)"
            srcSet={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/w_320/${avatar}`} />
    <source media="(max-width: 480px)"
            srcSet={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/w_480/${avatar}`} />
    <source media="(max-width: 800px)"
            srcSet={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/w_800/${avatar}`} />
    <img src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/${avatar}`}
         alt="Portrait de Thomas Dupré"
         className="header__image__img" />
  </picture>
</figure>

      </header>
      <Banner />
    </div>
  );
};
