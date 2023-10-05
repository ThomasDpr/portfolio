import './Header.scss';

export const Header = ({ title, imageSrc }: { title: string, imageSrc: string }) => (
  <section className="project-header">
    <div className="project-header__container" style={{ backgroundImage: `url(${imageSrc})` }}>
    </div>
    <section className="project-header__container__title">
        <h1 className="project-header__container__title__text">{title}</h1>
    </section>
  </section>
);
