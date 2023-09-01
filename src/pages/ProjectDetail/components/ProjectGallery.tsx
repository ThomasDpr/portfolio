export const ProjectGallery = ({ screenshots }: { screenshots: { id: string, imageSrc: string, title: string, description: string }[] }) => (
  <div className="project-gallery">
      {screenshots.map((screenshot) => (
        <div key={screenshot.id} className="screenshot-item">
          <img src={screenshot.imageSrc} alt={screenshot.title} />
          <div className="screenshot-text">
            <h3>
              {screenshot.title}
            </h3>
            <p>{screenshot.description}</p>
          </div>
        </div>
      ))}
  </div>
);
