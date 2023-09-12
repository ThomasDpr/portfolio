import React from "react";
import { CardProps } from "./CardType";
import { Link } from 'react-router-dom';

import "./Card.scss";

export const Card = ({ title, shortDescription, imageSrc, iconSrc, id, variant = 'default' }: CardProps & { id: string }) => {

  return (
    <Link to={`/projects/${id}`}>
      <div className={`card card__${variant}`} style={{ backgroundImage: `url(${imageSrc})` }}>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <img className="card-icon" src={iconSrc} alt="Programming Language Icon" />
        </div>
      </div>
    </Link>
  );
};
