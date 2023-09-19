import React from "react";

import { FrontendSection } from "./components/FrontendSection";
import { BackendSection } from "./components/BackendSection";

import "./SkillsSection.scss";

export const SkillsSection = () => {
  return (
    <div className="skills">
      <FrontendSection />

      <h3 className="skills__title">
        {Array.from("COMPETENCES").map((letter, index) => (
          <span key={index} className="skills__title-letter">
            {letter}
          </span>
        ))}
      </h3>

      <BackendSection />
    </div>
  );
};
