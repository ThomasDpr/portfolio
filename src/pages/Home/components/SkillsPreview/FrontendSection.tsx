import { SkillsPreviewItem } from "./SkillsPreviewItem";

import react from "../../../../assets/icons/react.svg";
import javascript from "../../../../assets/icons/javascript.svg";
import typescript from "../../../../assets/icons/typescript.svg";

export const FrontendSection = () => {
  return (
    <section className="skills__preview__section">
      <header className="skills__preview__section-header skills__preview__section-header_frontend">
        <h3>FRONTEND</h3>
      </header>

      <div className="skills__preview__section-content skills__preview__section-content_frontend">
        <SkillsPreviewItem src={react} alt="react" text="React" id="react" />

        <SkillsPreviewItem
          src={javascript}
          alt="javascript"
          text="Javascript"
          id="javascript"
        />

        <SkillsPreviewItem
          src={typescript}
          alt="typescript"
          text="Typescript"
          id="typescript"
        />
      </div>
    </section>
  );
};
