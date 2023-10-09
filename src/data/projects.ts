import rails from "../assets/icons/rails.svg";
import react from "../assets/icons/react.svg";
import typescript from "../assets/icons/typescript.svg";
import postgresql from "../assets/icons/postgresql.svg";
import javascript from "../assets/icons/javascript.svg";

const musicroad =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695331558/portfolio_react/projects/musicroad/cover.webp";
const musicroadIndex =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/index.png";
const musicroadShow =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/show.png";
const musicroadArtist =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/artist.png";
const musicroadChatroom =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/chatroom.png";
const musicroadFavorite =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/favorite.png";
const musicroadLogin =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/login.png";
const musicroadRegister =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/register.png";

const elowan =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695144483/portfolio_react/projects/musicroad/contributors/elowan.png";
const gonzague =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695143301/portfolio_react/projects/musicroad/contributors/gonzague.png";

const spacebnb =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695331619/portfolio_react/projects/spacebnb/cover.webp";
const spacebnbIndex =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695144239/portfolio_react/projects/spacebnb/index.png";
const spacebnbShow =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695144239/portfolio_react/projects/spacebnb/show.png";
const spacebnbBooking =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695144239/portfolio_react/projects/spacebnb/book.png";

const portfolio =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1695331338/portfolio_react/projects/portfolio_thomas/cover.webp";
const portfolioHeader =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1696683242/portfolio_react/projects/portfolio_thomas/header.webp";
const portfolioCarrousel =
    "https://res.cloudinary.com/dimfha9hq/image/upload/v1696683518/portfolio_react/projects/portfolio_thomas/Carrousel.webp";
const portfolioIndex =
"https://res.cloudinary.com/dimfha9hq/image/upload/v1696686429/portfolio_react/projects/portfolio_thomas/index.webp";
const portfolioComponent =
"https://res.cloudinary.com/dimfha9hq/image/upload/v1696686428/portfolio_react/projects/portfolio_thomas/component.webp";
const portfolioScreenshots =
"https://res.cloudinary.com/dimfha9hq/image/upload/v1696686428/portfolio_react/projects/portfolio_thomas/screenshots.webp";
const portfolioContact =
"https://res.cloudinary.com/dimfha9hq/image/upload/v1696686429/portfolio_react/projects/portfolio_thomas/form.webp";
const portfolioSkillsBackend =
"https://res.cloudinary.com/dimfha9hq/image/upload/v1696686428/portfolio_react/projects/portfolio_thomas/skills-backend.webp";
const portfolioSkillsFrontend =
"https://res.cloudinary.com/dimfha9hq/image/upload/v1696686428/portfolio_react/projects/portfolio_thomas/skills-frontend.webp";

export const projects = [
    {
        id: "musicroad",
        title: "MusicRoad",
        imageSrc: musicroad,
        description:
            "MusicRoad est une application web qui permet de rechercher des festivals de musique en France. L'utilisateur peut rechercher un festival par nom, par ville ou par département. Il peut également rechercher un évènement par dates. L'application affiche les résultats sur une carte et permet de les trier par distance par rapport à l'utilisateur.",
        shortDescription:
            "MusicRoad est une application web qui permet de rechercher des festivals de musique en France.",
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
                imageSrc: musicroadIndex,
                description:
                    "Sur cette page, l'utilisateur peut voir tous les festivals de musique en France sous forme de cards. Nous avons intégré une barre de recherche qui permet de filtrer les résultats par nom d'évènement, par ville et même par dates. Nous avons fait le choix d'intégrer également une map pour afficher les résultats sous forme de marqueurs cliquables. L'utilisateur n'a plus qu'à cliquer sur un des festivals pour être redirigé vers la page de détails de l'évènement.",
            },
            {
                id: "musicroad-show",
                title: "Page d'un festival",
                imageSrc: musicroadShow,
                description:
                    "Sur cette page, l'utilisateur peut voir tous les détails d'un festival. On affiche les prix de l'évènement qui redirigent vers la page de l'organisateur. On affiche également les artistes qui seront présents à l'évènement. L'utilisateur peut cliquer sur un des artistes pour être redirigé vers la page de l'artiste. Enfin, on affiche les dates de l'évènement, l'adresse, et un bouton qui permet de sauvegarder l'évènement dans ses favoris afin de pouvoir accéder à une chatroom dédiée à l'évènement.",
            },
            {
                id: "musicroad-artist",
                title: "Page d'un artiste",
                imageSrc: musicroadArtist,
                description:
                    "Sur cette page, l'utilisateur peut voir tous les détails d'un artiste. On affiche les meilleurs albums ainsi que les meilleurs titres de l'artiste. L'utilisateur peut cliquer sur un des titres afin d'écouter un extrait de 30 secondes. Pour se faire nous avons intégré l'API Spotify qui nous permet d'accéder à un catalogue de plus de 50 millions de titres. Pour en écouter plus, l'utilisateur peut cliquer sur le bouton (Écouter plus) qui le redirigera vers la page Spotify de l'artiste. Enfin, on affiche les autres festivals auxquels l'artiste participe. ",
            },
            {
                id: "musicroad-favorite",
                title: "Page des favoris",
                imageSrc: musicroadFavorite,
                description:
                    "Sur cette page, l'utilisateur peut voir tous les festivals qu'il a sauvegardé dans ses favoris. Il peut également supprimer un festival de ses favoris. Le petit plus de cette page est que l'utilisateur peut chatter avec les autres utilisateurs qui ont également sauvegardé le festival. Il suffit de cliquer sur le bouton (Chat) pour être redirigé vers la chatroom dédiée à l'évènement. ",
            },
            {
                id: "musicroad-chatroom",
                title: "Page d'une chatroom",
                imageSrc: musicroadChatroom,
                description:
                    "Sur cette page, l'utilisateur peut chatter avec les autres utilisateurs qui ont également sauvegardé le festival. Nous avons intégré différents canaux de conversations afin de permettre aux utilisateurs de discuter de différents sujets. Par exemple, si un festival a lieu dans une ville loin de chez l'utilisateur, il peut demander aux autres utilisateurs s'ils ont des bons plans pour se loger ou pour du covoiturage en fonction de la ville.",
            },
            {
                id: "musicroad-login",
                title: "Page de connexion",
                imageSrc: musicroadLogin,
                description:
                    "Sur cette page, l'utilisateur peut se connecter à son compte. Il peut également cliquer sur le bouton (S'inscrire) pour être redirigé vers la page d'inscription afin de créer un compte. Si l'utilisateur a oublié son mot de passe, il peut cliquer sur le bouton (Mot de passe oublié) pour être redirigé vers la page de réinitialisation du mot de passe. Nous avons utiliser la gem Devise pour gérer l'authentification des utilisateurs.",
            },
            {
                id: "musicroad-register",
                title: "Page d'inscription",
                imageSrc: musicroadRegister,
                description:
                    "Sur cette page, l'utilisateur peut créer un compte. Il doit renseigner son prénom, son nom, son email, et son mot de passe. Il a également la possibilité d'importer une photo de profil qui sera affichée en direct sur la page. Si l'utilisateur a déjà un compte, il peut cliquer sur le bouton (Se connecter) pour être redirigé vers la page de connexion. Nous avons utiliser la gem Devise pour gérer l'authentification des utilisateurs.",
            },
        ],
        youtube: [
            {
                title: "DemoDay - MusicRoad",
                link: "https://www.youtube-nocookie.com/embed/DHCdl63G2dQ?si=lS7G2Fs4x-o3rYRa&amp;start=1176",
                description:
                    "Le 27 juin 2023, j'ai présenté l'application MusicRoad lors du DemoDay de la formation Le Wagon à Nantes. L'objectif était de présenter au public l'application que mon équipe et moi avions développé pendant 2 semaines durant notre formation. Nous devions répondre à une problèmatique, et déterminer la clible d'utilisateurs tout en présetant les  différentes fonctionnalités de l'application.",
                collaborators: [
                    { name: "Elowan", avatar: elowan },
                    { name: "Gonzague", avatar: gonzague },
                ],
            },
        ],
    },

    {
        id: "spacebnb",
        title: "SpaceBnB",
        imageSrc: spacebnb,
        description:
            "SpaceBnB est une application web qui permet de rechercher des planètes à louer dans l'espace. L'utilisateur peut rechercher une planète par son nom. L'application affiche les résultats sous forme de cards. L'utilisateur peut cliquer sur une des planètes pour être redirigé vers la page de détails de la planète. L'utilisateur peut également créer un compte et réserver une planète pour une durée déterminée.",
        shortDescription:
            "SpaceBnB est une application web de type AirBnB qui permet de rechercher des planètes à louer dans l'espace.",
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
                imageSrc: spacebnbIndex,
                description:
                    "Sur cette page, l'utilisateur peut voir toutes les planètes disponibles à la location. Nous avons intégré une barre de recherche qui permet de filtrer les résultats par nom de planète. L'utilisateur n'a plus qu'à cliquer sur une des planètes pour être redirigé vers la page de détails de la planète.",
            },
            {
                id: "spacebnb_show",
                title: "Page d'une planète",
                imageSrc: spacebnbShow,
                description:
                    "Sur cette page, l'utilisateur peut voir tous les détails d'une planète. On affiche son nom, une description, son prix par jour, sa taille et aussi le nom de son propriétaire. L'utilisateur peut également réserver la planète pour une durée déterminée grâce à un calendrier. Enfin, il peut cliquer sur le bouton 'Booking' pour envoyer une demande de réservation au propriétaire de la planète.",
            },
            {
                id: "spacebnb_booking",
                title: "Page de réservation",
                imageSrc: spacebnbBooking,
                description:
                    "Sur cette page, l'utilisateur peut voir toutes les planètes qu'il a réservé. Il à également la possibilité s'il le souhaite d'annuler une réservation. Enfin si l'utilisateur souhaite lui aussi ajouter une de ses planètes en location il n'a qu'à cliquer sur le bouton 'Add your planet' pour être redirigé vers la page de création d'une planète.",
            },
        ],
    },

    {
        id: "portfolio",
        title: "Portfolio",
        imageSrc: portfolio,
        description:
            "Mon portfolio représente mes compétences, mes projets et mon parcours en développement web. Réalisé avec React et Typescript, il met en avant mon expertise en développement front-end et back-end à travers une interface utilisateur intuitive et moderne. L'application propose une navigation fluide permettant aux visiteurs de découvrir mes réalisations, mes collaborations et de me contacter facilement pour des opportunités professionnelles.",
        shortDescription:
            "Une vitrine numérique mettant en lumière mes compétences et réalisations en développement web.",
        iconSrc: react,
        stack: [
            { name: "React", icon: react },
            { name: "Typescript", icon: typescript },
        ],
        githubLink: "https://github.com/ThomasDpr/portfolio",
        appLink: "https://www.tdupre.fr",
        screenshots: [
            {
                id: "portfolio-header",
                title: "Composant header",
                imageSrc: portfolioHeader,
                description:
                    "Sur la page d'accueil, j'ai créer mon tout premier composant React. Il contient un titre avec mon prénom et mon nom, l'intitulé de mon poste, ainsi qu'une courte description de mon profil. J'ai également intégré un avatar pour illustrer le composant. Côté challenge, j'ai voulu intégrer une bannière reflettant quelques unes de mes compétences. Pour cela, j'ai utilisé la librairie Marquee afin de faire défiler des éléments en boucle.",
            },

            {
                id: "portfolio-carrousel",
                title: "Composant carrousel",
                imageSrc: portfolioCarrousel,
                description: "Ici, j'ai souhaité créer quelque chose de dynamique et d'interactif. J'ai donc intégré un carrousel qui permet de faire défiler mes différents projets en boucle. J'ai appris à concevoir un caroussel entièrement personnalisé mais j'ai été séduit par la librairie SwiperJS qui permet de créer des caroussels modernes et responsive tout en étant très facile à mettre en place. J'ai également pu développer différentes compétences en CSS en concevant ce composant.",
            },

            {
                id: "portfolio-index",
                title: "Page de tous les projets",
                imageSrc: portfolioIndex,
                description: "Bien que cette page soit très simple, elle m'a permis de mettre en pratique mes connaissances en React et la réutilisation de composants. Son objectif est de d'afficher tous les projets realisés. La prochaine étape sera de mettre en place un système de filtre afin de pouvoir trier les projets par catégories (stack, type de projet, etc...)",
            },


            {
                id: "portfolio-component",
                title: "Composant d'un projet",
                imageSrc: portfolioComponent,
                description: "Lors de votre navigation sur l'app, vous avez pu voir que chaque projet possède sa propre page et certains projets possèdent différents composants. Ce composant permet d'afficher une vidéo youtube représentant le projet en question ainsi qu'une description et la liste des collaborateurs. La partie dynamique et intelligente de ce composant est qu'il est capable de s'adapter en fonction du projet. Par exemple, si le projet ne possède pas de vidéo, le composant n'affichera pas la vidéo youtube. Si le projet ne possède pas de collaborateurs, le composant n'affichera pas la liste des collaborateurs.",
            },

            {
                id: "portfolio-screenhots",
                title: "Composant Screenshots",
                imageSrc: portfolioScreenshots,
                description: "Vous y êtes ! Vous êtes sur le composant que vous êtes en train de lire. Ce composant permet d'afficher les screenshots d'un projet tout en affichant une description pour chacun d'entre eux. ",
            },

            {
                id: "portfolio-skills-frontend",
                title: "Page des compétences",
                imageSrc: portfolioSkillsFrontend,
                description: "En arrivant sur la page des compétences, vous avez pu voir que j'ai fait le choix de sectoriser mes compétences en deux catégories : Front-end et Back-end. J'ai également choisi de mettre en place une catégorisation des compétences en fonction de leur type (Langages, Frameworks, outils, etc...). Voici un aperçu de la partie Front-end.",
            },

            {
                id: "portfolio-skills-backend",
                title: "Page des compétences",
                imageSrc: portfolioSkillsBackend,
                description: "Voici un aperçu de la partie Back-end.",
            },

            {
                id: "portfolio-contact",
                title: "Page de contact",
                imageSrc: portfolioContact,
                description: "Cette page permet aux visiteurs de me contacter facilement. J'ai intégré un formulaire de contact qui permet d'envoyer un email directement depuis l'application grâce à la libraiire EmailJS. Intérêt de cette librairie : Rapidité de mise en place et simplicité d'utilisation. La prochaine étape sera de développer un back-end pour gérer l'envoi des emails.",
            },
        ],
    },
];
