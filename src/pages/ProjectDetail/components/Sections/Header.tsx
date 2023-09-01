


export const Header = ({ title, imageSrc }: { title: string, imageSrc: string }) => (
  <section className="project-header">
    <section className="project-title-container">
      <h1 className="project-title">{title}</h1>
    </section>


    <figure className="project-image-container">
    <img className="project-image" src={imageSrc} alt={`Illustation de ${title}`} />
    </figure>
  </section>
);
