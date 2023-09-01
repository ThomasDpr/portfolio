export const ProjectStack = ({ stack }: { stack: { name: string, icon: string }[] }) => (
  <section className="project-stack-wrapper">
    <h2 className="project-stack-title">Stacks</h2>
    <ul className="project-stack-list">
      {stack.map(({ name, icon }) => (
        <li className="project-stack-item" key={name}>
          - {name}
          <img className="project-stack-icon" src={icon} alt={`Logo de ${name}`} />
        </li>
      ))}
    </ul>
  </section>
);
