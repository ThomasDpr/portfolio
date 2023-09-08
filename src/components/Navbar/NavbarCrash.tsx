// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import hamburger from '../../assets/icons/hamburger.svg';
// import logo from '../../assets/icons/logo-symbol.svg';
// import scrolledLogo from '../../assets/icons/logo-text.svg';

// import './Navbar.scss'

// export const Navbar = () => {

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   }

//   return (
//     <nav className={`navbar ${isMenuOpen ? "navbar--default" : "navbar"}`}>
//       <div className="navbar__logo">
//         <Link to='/'>
//           <img src={logo} className="navbar__logo__image" alt="logo" />
//         </Link>
//       </div>
//       <ul className="navbar__links">
//         <li className="navbar__item">
//           <Link to='/projects' className="navbar__link" onClick={toggleMenu}>Mes Projets</Link>
//         </li>
//         <li className="navbar__item">
//           <Link to='/skills' className="navbar__link" onClick={toggleMenu}>Mes compétences</Link>
//         </li>
//         <li className="navbar__item">
//           <Link to='/contact' className="navbar__link" onClick={toggleMenu}>Me contacter</Link>
//         </li>
//       </ul>
//       <button className="navbar__burger" onClick={toggleMenu}>
//         <img className="navbar__burger__image"src={hamburger} alt="menu" />
//       </button>
//     </nav>
//   )
// }

// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'


// import { ReactComponent as Brand } from '../../assets/icons/logo-text.svg'
// import './Navbar.scss'

// export const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="logo">
//           <Brand />
//         </div>
//         <div className="menu-icon" onClick={handleShowNavbar}>
//           <Hamburger />
//         </div>
//         <div className={`nav-elements  ${showNavbar && 'active'}`}>
//           <ul className="nav-links" onClick={handleShowNavbar}>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/blog">Blog</NavLink>
//             </li>
//             <li>
//               <NavLink to="/projects">Projects</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }
