import logo from "../../assets/icons/logo-symbol.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCopyright as CopyrightIcon } from "@fortawesome/free-solid-svg-icons";

import { ContactItems } from "./components/ContactItems";
import { SocialItems } from "./components/SocialItems";
import "./Footer.scss";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <Link to="/">
                    <img src={logo} alt="Logo de Thomas Dupré" />
                </Link>
            </div>
            <ContactItems />
            <SocialItems />
            <div className="footer__copyright">
                <span>
                    <FontAwesomeIcon icon={CopyrightIcon} /> 2023 Thomas Dupré -
                    Tous droits réservés
                </span>
            </div>
        </footer>
    );
};
