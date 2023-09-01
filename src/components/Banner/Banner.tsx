import React from "react";
import Marquee from "react-fast-marquee";
import "./Banner.scss";

export const Banner: React.FC = () => {
  const items = [
    "Web Design",
    "App Design",
    "Front-End",
    "UI/UX",
    "Back-End",
    "Full Stack",
  ];

  const marqueeProps = {
    gradient: false,
    speed: 100,
    pauseOnHover: true,
    pauseOnClick: true,
    pauseOnVisibilityChange: true,
    gradientWidth: 20,
  };

  return (
    <div className="banner">
      <div className="banner__container">
        <Marquee {...marqueeProps} gradientColor={[255, 255, 255]} gradient={true}>
          <div className="banner__container__text">
            {items.map((item, index) => (
              <span className="banner__container__text__item" key={item}>{item}</span>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
