

export const ProjectYoutube = ({ youtubeLink }: { youtubeLink?: string }) => (
  <div className="project-youtube">
    <div className="project-youtube-video">
      <iframe
        title="MusicRoad DemoDay"
        src={youtubeLink}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      />
    </div>
    <div className="project-youtube-text">
      <p className="project-youtube-text-description">
        Fin juin 2023, c'est avec plaisir que nous avons présenté notre projet
        MusicRoad lors du DemoDay au Wagon à Nantes.
        <br />
        <br />
        Nous avons eu 5 minutes pour présenter notre projet auprès des
        professeurs qui nous ont accompagnés pendant 2 mois, d'anciens alumnis
        du Wagon, ainsi que des personnes de divers milieux professionnels.
      </p>
    </div>

  </div>
);
