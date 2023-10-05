import './Header.scss'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";

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

                {/* <a
                        href="/cv.pdf"
                        className="download-link"
                        download="CV_Dupré_Thomas.pdf">
                        <FontAwesomeIcon icon={faDownload} />
                        Curriculum Vitae
                    </a> */}
            </div>
        </section>
    );
};
