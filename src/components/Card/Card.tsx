import React from "react";
import { CardProps } from "./CardType";
import { Link } from 'react-router-dom';


import "./Card.scss";

export const Card = ({ title, description, imageSrc, iconSrc, id }: CardProps & { id: string }) => {

  return (
    <Link to={`/projects/${id}`}>
      <div className="card">
          <div className="card-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <img className="language-icon" src={iconSrc} alt="Programming Language Icon" />
          </div>
        <div className="card-image" style={{ backgroundImage: `url(${imageSrc})` }} />
      </div>
    </Link>
  );
};
