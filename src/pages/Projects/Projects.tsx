import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../components/Card/CardData'

export const Projects = () => {

  return (
    <div>
      {projects.map((project, index) => (
        <Link to={`/projects/${project.id}`} key={index}>
          {project.title}
        </Link>
      ))}
    </div>
  )
}
