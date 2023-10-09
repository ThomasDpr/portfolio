import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <section className="skills__header">
            <div
                className="skills__header__flex-container"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dimfha9hq/image/upload/v1695400794/portfolio_react/skills/cover.webp)`,
                }}>
                <section className="skills__header__title">
                    <h1 className="skills__header__title__text">
                        Mes Compétences
                    </h1>
                </section>

                <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link">
                    <FontAwesomeIcon icon={faDownload} />
                    <span className="text-default">Curriculum Vitae</span>
                    <span className="text-mobile-portrait">Voir mon CV</span>
                    <span className="text-mobile-landscape">CV</span>
                </a>
            </div>
        </section>
    );
};
