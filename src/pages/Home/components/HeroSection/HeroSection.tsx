import "./HeroSection.scss";
import { Banner } from "./Banner/Banner";
import { CloudinaryImage } from "../../../../utils/CloudinaryImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const avatar = "portfolio_react/avatar-hero.webp";

export const HeroSection = () => {
    return (
        <div className="hero-section">
            <header className="header">
                <section className="header__text">
                    <h1 className="header__title">Thomas Dupré</h1>
                    <h2 className="header__subtitle">Développeur Full Stack</h2>
                    <p className="header__description">
                        Passionné par le développement web, je conçois et
                        développe des applications web{" "}
                        <strong>interactives</strong> et{" "}
                        <strong>dynamiques</strong>. Bien que j'ai une
                        préférence pour le développement{" "}
                        <strong>front-end</strong>, j'ai également consolidé une
                        solide expérience en back-end.
                    </p>
                    <div className="buttons-socials">
                        <a
                            className="button-social"
                            href="https://www.github.com/ThomasDpr"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                            Github
                        </a>
                        <a
                            className="button-social"
                            href="https://www.linkedin.com/in/thomas-dupre/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                            LinkedIn
                        </a>
                    </div>
                </section>

                <figure className="header__image">
                    <CloudinaryImage
                        publicId={avatar}
                        className="header__image__img"
                        alt="Portrait de Thomas Dupré"
                    />
                </figure>
            </header>
            <Banner />
        </div>
    );
};
