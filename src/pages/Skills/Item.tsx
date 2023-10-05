import React from 'react';
import "./Item.scss";

interface ItemProps {
    title: string;
    icon: string;
    description: React.ReactNode;
}


export const Item = ({ title, icon, description }: ItemProps) => {

    return (

        <div className="skills__item">
            <div className="skills__item-title">
                <img className="skills__item-title-icon" src={icon} alt={`Icone ${title}`} />
                <h3 className="skills__item-title-text">{title}</h3>
            </div>
            <p className="skills__item-description">{description}</p>
        </div>
    );
}
