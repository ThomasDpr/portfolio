import rails from '../../assets/icons/rails.svg'
import react from '../../assets/icons/react.svg'
import typescript from '../../assets/icons/typescript.svg'
import postgresql from '../../assets/icons/postgresql.svg'
import javascript from '../../assets/icons/javascript.svg'

const musicroad = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/cover.png')
const musicroad_index = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/index.png')
const musicroad_show = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/show.png')
const musicroad_artist = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/artist.png')
const musicroad_chatroom = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/chatroom.png')
const musicroad_favorite = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/favorite.png')
const musicroad_login = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/login.png')
const musicroad_register = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/register.png')

const elowan = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695144483/portfolio_react/projects/musicroad/contributors/elowan.png')
const gonzague = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/contributors/gonzague.png')

const spacebnb = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695144239/portfolio_react/projects/spacebnb/home.png')
const spacebnb_index = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695144239/portfolio_react/projects/spacebnb/index.png')
const spacebnb_show = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695144239/portfolio_react/projects/spacebnb/show.png')
const spacebnb_booking = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695144239/portfolio_react/projects/spacebnb/book.png')

const portfolio = ('https://res.cloudinary.com/dimfha9hq/image/upload/v1695144569/portfolio_react/projects/portfolio_thomas/cover.jpg')

export const projects = [
  {
    id: "musicroad",
    title: "MusicRoad",
    imageSrc: musicroad,
    description: "MusicRoad est une application web qui permet de rechercher des festivals de musique en France. L'utilisateur peut rechercher un festival par nom, par ville ou par département. Il peut également rechercher un évènement par dates. L'application affiche les résultats sur une carte et permet de les trier par distance par rapport à l'utilisateur.",
    shortDescription: "MusicRoad est une application web qui permet de rechercher des festivals de musique en France.",
    iconSrc: rails,
    stack: [
      { name: "Ruby on Rails", icon: rails },
      { name: "PostgreSQL", icon: postgresql },
      { name: "Javascript", icon: javascript },
    ],
    githubLink: "https://github.com/ThomasDpr/musicroad-ruby-on-rails",
    appLink: "https://www.musicroad.fr",
    screenshots: [
      {
        id: "musicroad-index",
        title: "Page de tous les festivals",
        imageSrc: musicroad_index,
        description: "Sur cette page, l'utilisateur peut voir tous les festivals de musique en France sous forme de cards. Nous avons intégré une barre de recherche qui permet de filtrer les résultats par nom d'évènement, par ville et même par dates. Nous avons fait le choix d'intégrer également une map pour afficher les résultats sous forme de marqueurs cliquables. L'utilisateur n'a plus qu'à cliquer sur un des festivals pour être redirigé vers la page de détails de l'évènement.",
      },
      {
        id: "musicroad-show",
        title: "Page d'un festival",
        imageSrc: musicroad_show,
        description: "Sur cette page, l'utilisateur peut voir tous les détails d'un festival. On affiche les prix de l'évènement qui redirigent vers la page de l'organisateur. On affiche également les artistes qui seront présents à l'évènement. L'utilisateur peut cliquer sur un des artistes pour être redirigé vers la page de l'artiste. Enfin, on affiche les dates de l'évènement, l'adresse, et un bouton qui permet de sauvegarder l'évènement dans ses favoris afin de pouvoir accéder à une chatroom dédiée à l'évènement.",
      },
      {
        id: "musicroad-artist",
        title: "Page d'un artiste",
        imageSrc: musicroad_artist,
        description: "Sur cette page, l'utilisateur peut voir tous les détails d'un artiste. On affiche les meilleurs albums ainsi que les meilleurs titres de l'artiste. L'utilisateur peut cliquer sur un des titres afin d'écouter un extrait de 30 secondes. Pour se faire nous avons intégré l'API Spotify qui nous permet d'accéder à un catalogue de plus de 50 millions de titres. Pour en écouter plus, l'utilisateur peut cliquer sur le bouton (Écouter plus) qui le redirigera vers la page Spotify de l'artiste. Enfin, on affiche les autres festivals auxquels l'artiste participe. ",
      },
      {
        id: "musicroad-favorite",
        title: "Page des favoris",
        imageSrc: musicroad_favorite,
        description: "Sur cette page, l'utilisateur peut voir tous les festivals qu'il a sauvegardé dans ses favoris. Il peut également supprimer un festival de ses favoris. Le petit plus de cette page est que l'utilisateur peut chatter avec les autres utilisateurs qui ont également sauvegardé le festival. Il suffit de cliquer sur le bouton (Chat) pour être redirigé vers la chatroom dédiée à l'évènement. ",
      },
      {
        id: "musicroad-chatroom",
        title: "Page d'une chatroom",
        imageSrc: musicroad_chatroom,
        description: "Sur cette page, l'utilisateur peut chatter avec les autres utilisateurs qui ont également sauvegardé le festival. Nous avons intégré différents canaux de conversations afin de permettre aux utilisateurs de discuter de différents sujets. Par exemple, si un festival a lieu dans une ville loin de chez l'utilisateur, il peut demander aux autres utilisateurs s'ils ont des bons plans pour se loger ou pour du covoiturage en fonction de la ville.",
      },
      {
        id: "musicroad-login",
        title: "Page de connexion",
        imageSrc: musicroad_login,
        description: "Sur cette page, l'utilisateur peut se connecter à son compte. Il peut également cliquer sur le bouton (S'inscrire) pour être redirigé vers la page d'inscription afin de créer un compte. Si l'utilisateur a oublié son mot de passe, il peut cliquer sur le bouton (Mot de passe oublié) pour être redirigé vers la page de réinitialisation du mot de passe. Nous avons utiliser la gem Devise pour gérer l'authentification des utilisateurs.",
      },
      {
        id: "musicroad-register",
        title: "Page d'inscription",
        imageSrc: musicroad_register,
        description: "Sur cette page, l'utilisateur peut créer un compte. Il doit renseigner son prénom, son nom, son email, et son mot de passe. Il a également la possibilité d'importer une photo de profil qui sera affichée en direct sur la page. Si l'utilisateur a déjà un compte, il peut cliquer sur le bouton (Se connecter) pour être redirigé vers la page de connexion. Nous avons utiliser la gem Devise pour gérer l'authentification des utilisateurs.",
      },
    ],
    youtubeLink: "https://www.youtube.com/embed/DHCdl63G2dQ?si=XhNqYWiPjx5yBIXN&amp;controls=0&amp;start=1176",
    youtube: [
      {
        title: "DemoDay - MusicRoad",
        link: "https://www.youtube.com/embed/DHCdl63G2dQ?si=XhNqYWiPjx5yBIXN&amp;controls=0&amp;start=1176",
        description: "Le 27 juin 2023, j'ai présenté l'application MusicRoad lors du DemoDay de la formation Le Wagon à Nantes. L'objectif était de présenter au public l'application que mon équipe et moi avions développé pendant 2 semaines durant notre formation. Nous devions répondre à une problèmatique, et déterminer la clible d'utilisateurs tout en présetant les  différentes fonctionnalités de l'application.",
        collaborators: [
          { name: "Elowan", avatar: elowan },
          { name: "Gonzague", avatar: gonzague },
        ]
      },
    ]
  },

  {
    id: "spacebnb",
    title: "SpaceBnB",
    imageSrc: spacebnb,
    description: "SpaceBnB est une application web qui permet de rechercher des planètes à louer dans l'espace. L'utilisateur peut rechercher une planète par son nom. L'application affiche les résultats sous forme de cards. L'utilisateur peut cliquer sur une des planètes pour être redirigé vers la page de détails de la planète. L'utilisateur peut également créer un compte et réserver une planète pour une durée déterminée.",
    shortDescription: "SpaceBnB est une application web de type AirBnB qui permet de rechercher des planètes à louer dans l'espace.",
    iconSrc: rails,
    stack: [
      { name: "Ruby on Rails", icon: rails },
      { name: "PostgreSQL", icon: postgresql },
    ],
    githubLink: "https://github.com/EloItsMe/space-bnb",
    // appLink: "",
    screenshots: [
      {
        id: "spacebnb_index",
        title: "Page de toutes les planètes",
        imageSrc: spacebnb_index,
        description: "Sur cette page, l'utilisateur peut voir toutes les planètes disponibles à la location. Nous avons intégré une barre de recherche qui permet de filtrer les résultats par nom de planète. L'utilisateur n'a plus qu'à cliquer sur une des planètes pour être redirigé vers la page de détails de la planète.",
      },
      {
        id: "spacebnb_show",
        title: "Page d'une planète",
        imageSrc: spacebnb_show,
        description: "Sur cette page, l'utilisateur peut voir tous les détails d'une planète. On affiche son nom, une description, son prix par jour, sa taille et aussi le nom de son propriétaire. L'utilisateur peut également réserver la planète pour une durée déterminée grâce à un calendrier. Enfin, il peut cliquer sur le bouton 'Booking' pour envoyer une demande de réservation au propriétaire de la planète.",
      },
      {
        id: "spacebnb_booking",
        title: "Page de réservation",
        imageSrc: spacebnb_booking,
        description: "Sur cette page, l'utilisateur peut voir toutes les planètes qu'il a réservé. Il à également la possibilité s'il le souhaite d'annuler une réservation. Enfin si l'utilisateur souhaite lui aussi ajouter une de ses planètes en location il n'a qu'à cliquer sur le bouton 'Add your planet' pour être redirigé vers la page de création d'une planète.",
      },
    ]
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

  // {
  //   id: "projet-4",
  //   title: "Titre de l'image 4",
  //   imageSrc: "https://plus.unsplash.com/premium_photo-1674543731143-ae366753d284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9udGFnbmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   description: "Description de l'image 4",
  //   iconSrc: rails,
  //   stack: [
  //     { name: "Ruby on Rails", icon: rails },
  //   ],
  //   screenshots: []
  // },

  // {
  //   id: "projet-5",
  //   title: "Titre de l'image 5",
  //   imageSrc: "https://images.unsplash.com/photo-1445855743215-296f71d4b49c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  //   description: "Description de l'image 5",
  //   iconSrc: rails,
  //   stack: [
  //     { name: "Ruby on Rails", icon: rails },
  //   ],
  //   screenshots: []
  // },

  // {
  //   id: "projet-6",
  //   title: "Titre de l'image 6",
  //   imageSrc: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
  //   description: "Description de l'image 6",
  //   iconSrc: rails,
  //   stack: [
  //     { name: "Ruby on Rails", icon: rails },
  //   ],
  //   screenshots: []
  // },
];
