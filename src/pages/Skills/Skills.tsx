import { Helmet } from "react-helmet-async";
import { skillsTitle } from "../../utils/titles";

import { Header } from "./Header";
import { FrontendSection } from "./FrontendSection";
import { BackendSection } from "./BackendSection";

import "./Skills.scss";

export const Skills = () => {
    return (
        <div className="skills">
            <Helmet>
                <title>{skillsTitle}</title>
            </Helmet>

            <Header />

            <section className="skills__wrapper">
                <FrontendSection />
                <BackendSection />
            </section>
        </div>
    );
};
