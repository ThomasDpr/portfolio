import { SkillsItem } from "./SkillsItem";

import react from "../../../assets/icons/react.svg";
import javascript from "../../../assets/icons/javascript.svg";
import typescript from "../../../assets/icons/typescript.svg";

export const FrontendSection = () => {
  return (
    <section className="skills__sections__section">
      <header className="skills__sections__section-header skills__sections__section-header_frontend">
        <h3>FRONTEND</h3>
      </header>

      <div className="skills__sections__section-content skills__sections__section-content_frontend">
        <SkillsItem
          src={react}
          alt="react"
          text="React"
          id="react"
        />

        <SkillsItem
          src={javascript}
          alt="javascript"
          text="Javascript"
          id="javascript"
        />

        <SkillsItem
          src={typescript}
          alt="typescript"
          text="Typescript"
          id="typescript"
        />
      </div>
    </section>
  );
};
