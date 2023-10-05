import { SkillsPreviewItem } from "./SkillsPreviewItem";

import ruby from "../../../../assets/icons/ruby.svg";
import rails from "../../../../assets/icons/rails.svg";
import nestjs from "../../../../assets/icons/nestjs.svg";

export const BackendSection = () => {
    return (
        <section className="skills__preview__section">
            <div className="skills__preview__section-content skills__preview__section-content_backend">
                <SkillsPreviewItem
                    src={ruby}
                    alt="ruby"
                    text="Ruby"
                    id="ruby"
                />

                <SkillsPreviewItem
                    src={rails}
                    alt="rails"
                    text="Rails"
                    id="rails"
                />

                <SkillsPreviewItem
                    src={nestjs}
                    alt="nestjs"
                    text="NestJs"
                    id="nestjs"
                />
            </div>

            <header className="skills__preview__section-header skills__preview__section-header_backend">
                <h3>BACKEND</h3>
            </header>
        </section>
    );
};
