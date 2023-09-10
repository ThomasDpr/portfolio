import React from "react";
import Marquee from "react-fast-marquee";
import "./Banner.scss";

import code from "../../assets/icons/code.svg";
import responsive from "../../assets/icons/responsive.svg";
import performance from "../../assets/icons/performance.svg";
import webDesign from "../../assets/icons/web-design.svg";

export const Banner = () => {

  const items = [
    { text: "Clean Code", icon: code },
    { text: "Responsive Design", icon: responsive },
    { text: "Optimisation de la performance web", icon: performance },
    { text: "Intérêt pour le Design UX/UI", icon: webDesign },
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
              <img className="banner__container__text__icon" src={item.icon} alt="icon" />
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
