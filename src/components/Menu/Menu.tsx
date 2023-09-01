import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Menu.scss';
import logo from '../../assets/icons/logo-symbol.svg';
import scrolledLogo from '../../assets/icons/logo-text.svg';

export const Menu = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuColor, setMenuColor] = useState('default');
  const [linksColor, setLinksColor] = useState('default');

  const ScrollTreshold = 90;

  const checkScroll = () => {
    if (window.scrollY >= ScrollTreshold) {
      setIsScrolled(true);
      setMenuColor('scrolled');
      setLinksColor('scrolled');
    } else {
      setIsScrolled(false);
      setMenuColor('default');
      setLinksColor('default');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <nav className={`menu ${menuColor}`}>
      <div className="logo">
        <Link to='/'>
          <img src={isScrolled ? scrolledLogo : logo} className={isScrolled ? 'scrolled' : ''} alt="logo" />
        </Link>
      </div>
      <ul>
        <li><Link to='/projects' className={linksColor}>Mes Projets</Link></li>
        <li><Link to='/skills' className={linksColor}>Mes compétences</Link></li>
        <li><Link to='/contact' className={linksColor}>Me contacter</Link></li>
      </ul>
    </nav>
  );
}
