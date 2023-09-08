import React from 'react'
import './Links.scss'
import avatarVideo from '../../assets/movies/memoji.mp4';

import githubIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
export const Links = () => {
  return (
    <div className="links-container">
      <video className="avatar-video" src={avatarVideo} autoPlay loop muted playsInline></video>
      <div className="links-items">
        <a
          className="links-item"
          href="https://www.linkedin.com/in/thomas-dupre/"
          target="_blank"
          rel="noopener noreferrer">
          <img className="links-item-icon" src={linkedinIcon} alt="Logo de Linkedin" />
          <span className="links-item-text">Linkedin</span>
        </a>
        <a
          className="links-item"
          href="https://github.com/ThomasDpr"
          target="_blank"
          rel="noopener noreferrer">
          <img className="links-item-icon" src={githubIcon} alt="Logo de Github" />
          <span className="links-item-text">Github</span>
        </a>
      </div>
    </div>
  )
}
