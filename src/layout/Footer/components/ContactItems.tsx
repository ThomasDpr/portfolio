import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faEnvelope as MailIcon,
  faLocationDot as LocationIcon,
  faPhone as PhoneIcon,
} from "@fortawesome/free-solid-svg-icons";

import './ContactItems.scss';




export const ContactItems = () => {
  return (
    <address className="contact__items">
      <h3 className="contact__title">Coordonnées</h3>
      <ul className="contact__list">
        <li className="contact__item">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Nantes,+Loire-Atlantique"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link">
            <FontAwesomeIcon
              icon={LocationIcon}
              className="contact__icon"
            />
            <span className="contact__text">Nantes, Loire-Atlantique</span>
          </a>
        </li>

        <li className="contact__item">
          <a
            href="tel:+33770459003"
            className="contact__link">
            <FontAwesomeIcon
              icon={PhoneIcon}
              className="contact__icon"
            />
            <span className="contact__text">07 70 45 90 03</span>
          </a>
        </li>

        <li className="contact__item">
          <a
            href="mailto:thomasdpr-pro@outlook.com"
            className="contact__link">
            <FontAwesomeIcon
              icon={MailIcon}
              className="contact__icon"
            />
            <span className="contact__text">thomasdpr-pro@outlook.com</span>
          </a>
        </li>
      </ul>
    </address>
  )
}
