import React from 'react'
import { SkillsItem } from './SkillsItem'

import ruby from "../../../assets/icons/ruby.svg";
import rails from "../../../assets/icons/rails.svg";
import nestjs from "../../../assets/icons/nestjs.svg";

export const BackendSection = () => {
  return (
    <section className="skills__sections__section">
      <div className="skills__sections__section-content skills__sections__section-content_backend">
        <SkillsItem
          src={ruby}
          alt="ruby"
          text="Ruby"
          id="ruby"
        />

        <SkillsItem
          src={rails}
          alt="rails"
          text="Rails"
          id="rails"
        />

        <SkillsItem
          src={nestjs}
          alt="nestjs"
          text="NestJs"
          id="nestjs"
        />
      </div>

      <header className="skills__sections__section-header skills__sections__section-header_backend">
        <h3>BACKEND</h3>
      </header>
    </section>
  );
}
