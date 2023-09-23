import { FrontendSection } from "./FrontendSection";
import { BackendSection } from "./BackendSection";

import "./SkillsPreview.scss";

export const SkillsPreview = () => {
  return (
    <div className="skills__preview">
      <FrontendSection />

      <h3 className="skills__preview__title">
        {Array.from("COMPETENCES").map((letter, index) => (
          <span key={index} className="skills__preview__title-letter">
            {letter}
          </span>
        ))}
      </h3>

      <BackendSection />
    </div>
  );
};
