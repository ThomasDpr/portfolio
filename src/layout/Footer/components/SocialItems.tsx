import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram as InstagramIcon,
  faSquareXTwitter as TwitterIcon,
  faSquareFacebook as FacebookIcon,
} from "@fortawesome/free-brands-svg-icons";

import "./SocialItems.scss";

export const SocialItems = () => {
  return (
    <nav className="social__items">
      <h3 className="social__title">Réseaux sociaux</h3>
      <ul className="social__list">
        <li className="social__item">
          <a
            href="https://www.facebook.com/thomasdprconnect"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link">
            <FontAwesomeIcon icon={FacebookIcon} className="social__icon" />
            <span className="social__text">Facebook</span>
          </a>
        </li>

        <li className="social__item">
          <a
            href="https://www.instagram.com/thomas_dpr/"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link">
            <FontAwesomeIcon icon={InstagramIcon} className="social__icon" />
            <span className="social__text">Instagram</span>
          </a>
        </li>

        <li className="social__item">
          <a
            href="https://twitter.com/thomdpr"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link">
            <FontAwesomeIcon icon={TwitterIcon} className="social__icon" />
            <span className="social__text">Twitter</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
