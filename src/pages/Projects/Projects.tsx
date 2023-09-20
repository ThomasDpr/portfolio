// import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet-async';
import { projectsTitle } from '../../utils/titles';

import { projects } from '../../components/Card/CardData'

import { Card } from '../../components/Card/Card'

import './Projects.scss'

export const Projects = () => {

  // // Ici, nous définissons un état local nommé "selectedStacks" qui est un tableau de chaînes de caractères.
  // // "useState" est une fonction qui retourne un tableau avec deux éléments :
  // // - le premier élément est la valeur de l'état local
  // // - le second élément est une fonction qui permet de modifier la valeur de l'état local
  // // Ici, nous définissons la valeur initiale de l'état local : un tableau vide
  // const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

  // // Un tableau contenant tes stacks qui peuvent être sélectionnées
  // const stacks = ["Ruby on Rails", "PostgreSQL", "Javascript", "React", "Typescript"];

  // // Une fonction qui modifie l'état local "selectedStacks" lorsqu'on clique sur une stack.
  // // Si la stack est déjà dans "selectedStacks", elle sera retirée.
  // // Sinon, elle sera ajoutée au tableau "selectedStacks".
  // const handleStackChange = (stack: string) => {
  //   if (selectedStacks.includes(stack)) {
  //     setSelectedStacks(selectedStacks.filter(s => s !== stack));
  //   } else {
  //     setSelectedStacks([...selectedStacks, stack]);
  //   }
  // }

  // Une fonction qui retourne les projets filtrés basés sur les stacks sélectionnées.
  // Si aucune stack n'est sélectionnée, tous les projets sont retournés.
  // const FilteredProjects = () => {

  //   // Si le tableau "selectedStacks" est vide, on retourne tous les projets
  //   if (selectedStacks.length === 0) return projects;

  //   // Sinon, on retourne les projets qui ont au moins une stack qui est dans le tableau "selectedStacks"
  //   return projects.filter(project =>
  //     project.stack.some(stack => selectedStacks.includes(stack.name))
  //   );
  // }

  // return (
  //   <div className="projects">
  //     <Helmet>
  //       <title>{projectsTitle}</title>
  //     </Helmet>
  //     <div className="projects__filters">
  //       {stacks.map((stack, index) => (
  //         <div key={index} className="projects__filters__stacks">
  //           <input
  //             type="checkbox"
  //             id={stack}
  //             // On appel la fonction "handleStackChange" chaque fois que la checkbox est cochée ou décochée
  //             onChange={() => handleStackChange(stack)}
  //           />
  //           <label htmlFor={stack}>{stack}</label>
  //         </div>
  //       ))}

  //     </div>

  //     <div className="projects__cards">
  //       {/* Ici nous parcourons tous les projets filtrés les affichons à l'aide du composant Card */}
  //       {FilteredProjects().map((project, index) => (
  //         <Link to={`/projects/${project.id}`} key={index} className="projects__cards__link">
  //           <Card {...project} variant="projects" />
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="projects">
    <Helmet>
      <title>{projectsTitle}</title>
    </Helmet>

    <div className="projects__cards">
      {projects.map((project, index) => (
        <Link to={`/projects/${project.id}`} key={index} className="projects__cards__link">
          <Card {...project} variant="projects" />
        </Link>
      ))}
    </div>
  </div>
  );
}
