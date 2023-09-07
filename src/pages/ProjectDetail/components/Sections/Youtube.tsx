import './Youtube.scss';

export const Youtube = ({ youtube }: { youtube?: { title: string, link: string, description: string, collaborators: { name: string, avatar: string }[] }[] }) => {
  if (!youtube) return null; // Si youtube est indéfini ou vide, retourne null pour ne rien afficher

  return (
    <div className="project-youtube">
      {youtube.map(({ title, link, description, collaborators }) => (
        <div className="project-youtube__content" key={title}>

          <h2 className="project-youtube__title">{title}</h2>

          <div className="project-youtube__subcontent">
            <iframe
              className="project-youtube__video"
              title={title}
              src={link}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              key={link}
            />

            <div className="project-youtube__description">
              <p className="project-youtube__text">{description}</p>

              <div className="project-youtube__avatars">
                <h3 className="project-youtube__avatar-title">Collaborateurs</h3>
                <div className="project-youtube__avatar-images">
                {collaborators.map(({ name, avatar }) => (
                  <img
                    className="project-youtube__image"
                    src={avatar}
                    alt={name}
                    key={name}
                  />
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
