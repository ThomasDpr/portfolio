import React from 'react';
import { HeroSection } from '../../components/HeroSection/HeroSection';
// import { Banner } from '../../components/Banner/Banner';
import { ProjectSection } from '../../components/ProjectsSection/ProjectSection';
import { SkillsSection } from '../../components/SkillsSection/SkillsSection';
import { Links } from '../../components/Links/Links';
import './Home.scss';

export const Home = () => {

  return (
    <div className="home">
      <HeroSection />
      {/* <Banner /> */}
      <ProjectSection />
      {/* <SkillsSection />
      <Links /> */}
    </div>
  );
}
