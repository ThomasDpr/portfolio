import React from 'react'
import './Links.scss'

import githubIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
export const Links = () => {

  const avatarVideoUrl = 'https://res.cloudinary.com/dimfha9hq/video/upload/v1695168200/portfolio_react/exjrkqwwa2rreahbh4mh.mp4';

  return (
    <div className="links-container">
      <video className="avatar-video" src= {avatarVideoUrl} autoPlay loop muted playsInline controls={false} controlsList='nodownload' disableRemotePlayback={false}></video>
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
