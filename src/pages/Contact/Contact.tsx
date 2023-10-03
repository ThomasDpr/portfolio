import { ContactForm } from "./components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faSquareInstagram,
    faSquareXTwitter,
    faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { Helmet } from "react-helmet-async";
import { contactTitle } from "../../utils/titles";

import "./Contact.scss";

export const Contact = () => {

    return (
        <div className="contact">
            <Helmet>
                <title>{contactTitle}</title>
            </Helmet>

            <section className="contact__header">
                <h1 className="contact__header__title">Contactez-moi</h1>
            </section>

            <div className="contact__container">
                <div className="contact__container__info">
                    <div className="contact__container__info__content">
                        <p className="contact__container__info__content__text">
                            <span>
                                Vous avez un projet passionnant en tête ?
                            </span>
                            <span>
                                Envie de discuter des dernières tendances de la
                                tech ou simplement dire bonjour ?
                            </span>
                            <span>
                                N'hésitez pas à me contacter via le formulaire
                                ou bien retrouvez-moi sur les réseaux sociaux.
                            </span>
                        </p>
                        <div className="contact__container__info__content__socials">
                            <a
                                className="contact__container__info__content__socials__item"
                                href="https://www.linkedin.com/in/thomas-dupre/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="contact__container__info__content__socials__item__icon"
                                />
                            </a>
                            <a
                                className="contact__container__info__content__socials__item"
                                href="https://www.facebook.com/thomasdprconnect"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    icon={faSquareFacebook}
                                    className="contact__container__info__content__socials__item__icon"
                                />
                            </a>

                            <a
                                className="contact__container__info__content__socials__item"
                                href="https://www.instagram.com/thomas_dpr/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    icon={faSquareInstagram}
                                    className="contact__container__info__content__socials__item__icon"
                                />
                            </a>
                            <a
                                className="contact__container__info__content__socials__item"
                                href="https://twitter.com/thomdpr"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    icon={faSquareXTwitter}
                                    className="contact__container__info__content__socials__item__icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__form__container">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};
