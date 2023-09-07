import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import hamburger from '../../assets/icons/hamburger.svg';
import logo from '../../assets/icons/logo-symbol.svg';
import scrolledLogo from '../../assets/icons/logo-text.svg';

import './Navbar.scss'

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={`navbar ${isMenuOpen ? "navbar--default" : "navbar"}`}>
      <div className="navbar__logo">
        <Link to='/'>
          <img src={logo} className="navbar__logo__image" alt="logo" />
        </Link>
      </div>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to='/projects' className="navbar__link" onClick={toggleMenu}>Mes Projets</Link>
        </li>
        <li className="navbar__item">
          <Link to='/skills' className="navbar__link" onClick={toggleMenu}>Mes compétences</Link>
        </li>
        <li className="navbar__item">
          <Link to='/contact' className="navbar__link" onClick={toggleMenu}>Me contacter</Link>
        </li>
      </ul>
      <button className="navbar__burger" onClick={toggleMenu}>
        <img className="navbar__burger__image"src={hamburger} alt="menu" />
      </button>
    </nav>
  )
}
