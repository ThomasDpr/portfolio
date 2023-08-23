import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Menu.scss';
import logo from '../../assets/icons/logo-symbol.svg';
import scrolledLogo from '../../assets/icons/logo-text.svg';

export const Menu = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (window.scrollY >= 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <nav className="menu">
      <div className="logo">
        <Link to='/'>
          <img src={isScrolled ? scrolledLogo : logo} className={isScrolled ? 'scrolled' : ''} alt="logo" />
        </Link>
      </div>
      <ul>
        <li><Link to='/sandbox'>SandBox</Link></li>
        <li><Link to='/projects'>Mes Projets</Link></li>
        <li><Link to='/skills'>Mes compétences</Link></li>
        <li><Link to='/contact'>Me contacter</Link></li>
      </ul>
    </nav>
  );
}
