import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import hamburger from '../../assets/icons/hamburger.svg';
import logo from '../../assets/icons/logo-symbol.svg';

import './Navbar.scss'

export const Navbar = () => {

  // Cette fonction permet de gérer l'état du menu burger (ouvert ou fermé)
  const [showNavbar, setShowNavbar] = useState(false)

  // Cette fonction permet de changer l'état du menu burger (ouvert ou fermé)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="navbar__container">

        <div className="navbar__logo">
          <Link to='/'>
            <img src={logo} className="navbar__logo__image" alt="logo" />
          </Link>
        </div>

        <div className="navbar__hamburger">
          <img src={hamburger} className="navbar__hamburger__image" alt="menu" onClick={handleShowNavbar} />
        </div>

        <div className={`navbar__elements ${showNavbar && 'active'}`}>
          <ul className="navbar__elements__links" onClick={handleShowNavbar}>
            <li>
              <Link to='/projects' className="navbar__elements__link">Mes Projets</Link>
            </li>
            <li>
              <Link to='/skills' className="navbar__elements__link">Mes compétences</Link>
            </li>
            <li>
              <Link to='/contact' className="navbar__elements__link" id="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
