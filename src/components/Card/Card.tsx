import { Link } from 'react-router-dom';

import "./Card.scss";

export type CardProps = {
  title: string;
  imageSrc: string;
  iconSrc: string;
  variant?: 'default' | 'projects';
  id: string;
}


export const Card = ({ title, imageSrc, iconSrc, id, variant = 'default' }: CardProps & { id: string }) => {

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
