import React from "react";
import logo from "../../assets/icons/logo-symbol.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

import addressIcon from "../../assets/icons/locate.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/mail.svg";

import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="footer__contact">
        <h3>Coordonnées</h3>
        <div className="footer__contact__items">
          <div className="footer__contact-item">
            <img
              src={addressIcon}
              alt="Adresse"
              className="footer__contact-icon"
            />
            <p>Nantes, Loire-Atlantique</p>
          </div>
          <div className="footer__contact-item">
            <img
              src={phoneIcon}
              alt="Téléphone"
              className="footer__contact-icon"
            />
            <p>07 70 45 90 03</p>
          </div>
          <div className="footer__contact-item">
            <img src={emailIcon} alt="Email" className="footer__contact-icon" />
            <p>thomasdpr-pro@outlook.com</p>
          </div>
        </div>
      </div>
      <div className="footer__social-media">
        <h3>Réseaux sociaux</h3>
        <div className="footer__social-media__links">
          <a
            href="https://www.facebook.com/thomasdprconnect"
            target="_blank"
            rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/thomas_dpr/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
            <span>Instagram</span>
          </a>
          <a
            href="https://twitter.com/thomdpr"
            target="_blank"
            rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
            <span>Twitter</span>
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 2023 Thomas Dupré - Tous droits réservés</p>
      </div>
    </footer>
  );
};
