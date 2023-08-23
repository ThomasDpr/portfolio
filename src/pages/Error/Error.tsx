import React from 'react'
import { Link } from 'react-router-dom'
import './Error.scss'

import manlost from '../../assets/images/man-lost.png'

export const Error = () => {
  return (
    <div className="error-page">
      <div className="error-page__container">
        <span className="error-page__title">404</span>
        <span className="error-page__subtitle">The page you were looking for doesn't exist.</span>
        <Link to="/" className="error-page__link">Go to home</Link>
      </div>
      <div className="error-page_image">
        <img src={manlost} alt="man-lost" />
      </div>
    </div>
  )
}
