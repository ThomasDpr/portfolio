// Import de Helmet & du titre de la page
import { Helmet } from "react-helmet-async";

import { homeTitle } from "../../utils/titles";

// Import des composants de la page
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ProjectSection } from "./components/ProjectSection/ProjectSection";
import { SkillsPreview } from "./components/SkillsPreview/SkillsPreview";
import { LinksSection } from "./components/LinksSection/LinksSection";

// Import du style de la page
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>{homeTitle}</title>
      </Helmet>
      <HeroSection />
      <ProjectSection />
      <SkillsPreview />
      <LinksSection />
    </div>
  );
};
