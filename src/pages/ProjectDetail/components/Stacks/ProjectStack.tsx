import './ProjectStack.scss'

export const ProjectStack = ({ stack }: { stack: { name: string, icon: string }[] }) => (
  <section className="project-stack">
    <h2 className="project-stack__title">Stacks</h2>
    <ul className="project-stack__list">
      {stack.map(({ name, icon }) => (
        <li key={name}>
          <div className="project-stack__item">
            {name}
            <img className="project-stack__icon" src={icon} alt={`Logo de ${name}`} />
          </div>
        </li>
      ))}
    </ul>
  </section>
);
