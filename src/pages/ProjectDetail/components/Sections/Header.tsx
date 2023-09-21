import './Header.scss';

export const Header = ({ title, imageSrc }: { title: string, imageSrc: string }) => (
  <section className="project-header">
    <figure className="project-header__image">
      <img className="project-header__image__img" src={imageSrc} alt={`Illustation de ${title}`} />
    </figure>

    <section className="project-header__title">
      <h1 className="project-header__title__text">{title}</h1>
    </section>
  </section>
);
