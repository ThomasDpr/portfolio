import React from 'react';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { ProjectSection } from '../../components/ProjectsSection/ProjectSection';
import { SkillsSection } from '../../components/SkillsSection/SkillsSection';
import { Links } from '../../components/Links/Links';
import './Home.scss';

export const Home = () => {

  return (
    <div className="home">
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
      <Links />
    </div>
  );
}
