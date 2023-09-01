import musicroad from '../../assets/images/mr_home.png'
import spacebnb from '../../assets/images/sb_home.png'
import portfolio from '../../assets/images/portfolio.png'

import rails from '../../assets/icons/rails.svg'
import react from '../../assets/icons/react.svg'
import typescript from '../../assets/icons/typescript.svg'
import postgresql from '../../assets/icons/postgresql.svg'

import musicroad_index from '../../assets/images/musicroad/mr_index.png'
import musicroad_swow from '../../assets/images/musicroad/mr_show.png'

export const projects = [
  {
    id: "musicroad",
    title: "MusicRoad",
    imageSrc: musicroad,
    description: "MusicRoad est une application web qui permet de rechercher des festivals de musique en France. L'utilisateur peut rechercher un festival par nom, par ville ou par département. Il peut également rechercher un évènnement par dates. L'application affiche les résultats sur une carte et permet de les trier par distance par rapport à l'utilisateur. L'utilisateur peut également créer un compte et sauvegarder ses festivals favoris pour ensuite chatter dans différents canaux de conversations avec les utilisateurs.",
    iconSrc: rails,
    stack: [
      { name: "Ruby on Rails", icon: rails },
      { name: "PostgreSQL", icon: postgresql },
    ],
    githubLink: "https://github.com/ThomasDpr/musicroad-ruby-on-rails",
    appLink: "https://www.musicroad.fr",
    screenshots: [
      {
        id: "musicroad-index",
        title: "Page de tous les festivals",
        imageSrc: musicroad_index,
        description: "L'application affiche à l'utilisateur tous les festivals de musique en France.",
      },
      {
        id: "musicroad-show",
        title: "Page d'un festival",
        imageSrc: musicroad_swow,
        description: "L'application affiche à l'utilisateur tous les détails d'un festival de musique.",
      },
    ],
    youtubeLink: "https://www.youtube.com/embed/DHCdl63G2dQ?si=XhNqYWiPjx5yBIXN&amp;controls=0&amp;start=1176",
  },

  {
    id: "spacebnb",
    title: "SpaceBnB",
    imageSrc: spacebnb,
    description: "Description de SpaceBnB",
    iconSrc: rails,
    stack: [
      { name: "Ruby on Rails", icon: rails },
    ],
    screenshots: []
  },

  {
    id: "portfolio",
    title: "Portfolio",
    imageSrc: portfolio,
    description: "Description de Portfolio",
    iconSrc: react,
    stack: [
      { name: "React", icon: react },
      { name: "Typescript", icon: typescript },
    ],
    screenshots: []
  },

  {
    id: "projet-4",
    title: "Titre de l'image 4",
    imageSrc: "https://plus.unsplash.com/premium_photo-1674543731143-ae366753d284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9udGFnbmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60",
    description: "Description de l'image 4",
    iconSrc: rails,
    stack: [
      { name: "Ruby on Rails", icon: rails },
    ],
    screenshots: []
  },

  {
    id: "projet-5",
    title: "Titre de l'image 5",
    imageSrc: "https://images.unsplash.com/photo-1445855743215-296f71d4b49c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Description de l'image 5",
    iconSrc: rails,
    stack: [
      { name: "Ruby on Rails", icon: rails },
    ],
    screenshots: []
  },

  {
    id: "projet-6",
    title: "Titre de l'image 6",
    imageSrc: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    description: "Description de l'image 6",
    iconSrc: rails,
    stack: [
      { name: "Ruby on Rails", icon: rails },
    ],
    screenshots: []
  },
];
