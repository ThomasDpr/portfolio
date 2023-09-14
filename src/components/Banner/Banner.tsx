import React from "react";
import Marquee from "react-fast-marquee";
import "./Banner.scss";

import brush from "../../assets/icons/brush.svg";
import book from "../../assets/icons/book.svg";
import binoculars from "../../assets/icons/binoculars.svg";
import heart from "../../assets/icons/heart.svg";
import medal from "../../assets/icons/medal.svg";
import gears from "../../assets/icons/gears.svg";

export const Banner = () => {

  const items = [
    { text: "Creatif", icon: brush },
    { text: "Autodidacte", icon: book },
    { text: "Curieux", icon: binoculars },
    { text: "Passionné", icon: heart },
    { text: "Autonome", icon: medal },
    { text: "Rigoureux", icon: gears },
  ];

  const marqueeProps = {
    speed: 100,
    pauseOnHover: true,
    pauseOnClick: true,
    pauseOnVisibilityChange: true,
    gradientWidth: 20,
    autoFill: true,
    gradient: true,
    // play:false,
  };

  return (
    <div className="banner">
      <div className="banner__container">
        <Marquee {...marqueeProps} gradientColor={[0,0,0]}>
            {items.map((item, index) => (
          <div className="banner__container__text" key={index}>
              <img className="banner__container__text__icon" src={item.icon} alt={item.text + " icon"} />
              <span className="banner__container__text__item">
                {item.text}
              </span>
          </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
};
