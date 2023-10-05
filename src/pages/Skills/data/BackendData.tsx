import { Link } from "react-router-dom";


import ruby from "../../../assets/icons/ruby.svg";
import nestjs from "../../../assets/icons/nestjs.svg";
import rails from "../../../assets/icons/rails.svg";
import postgresql from "../../../assets/icons/postgresql.svg";
import docker from "../../../assets/icons/docker.svg";



export const data = [
    {
        sectionTitle: "Langages de programmation",
        items: [
            {
                title: "Ruby",
                icon: ruby,
                description: (
                    <>
                        J'ai découvert l'existance de Ruby durant ma
                                formation au Wagon. J'ai nottament pu l'utiliser
                                pour réaliser les projets{" "}
                                <strong>
                                    <Link to="/projects/musicroad">
                                        MusicRoad
                                    </Link>{" "}
                                </strong>{" "}
                                et{" "}
                                <strong>
                                    <Link to="/projects/spacebnb">
                                        SpaceBnb
                                    </Link>
                                </strong>
                                .
                    </>

                )

            },
        ],
    },
    {
        sectionTitle: "Frameworks",
        items: [
            {
                title: "Rails",
                icon: rails,
                description: "La découverte de Rails à été une révolution durant ma formation au Wagon. Le fait de pouvoir créer une application web en mono-repo m'a permis de comprendre le fonctionnement d'un frameword MVC."
            },
            {
                title: "NestJS",
                icon: nestjs,
                description: "J'ai appris à utiliser Nestjs afin de pouvoir développer des API REST. Il m'a permis de comprendre le fonctionnement d'une API et de pouvoir créer des applications web en micro-services."
            }
        ],
    },

    {
        sectionTitle: "Outils et technologies",
        items: [
            {
                title: "Docker",
                icon: docker,
                description:
                    "J'ai appris à utiliser Docker en autodidacte pour différents projets privés. Il m'a permit de comprendre le fonctionnement des conteneurs et des images et ainsi permettre de séparer les différentes processus de mes applications web.",
            },
        ],
    },

    {
        sectionTitle: "Base de données",
        items: [
            {
                title: "PostgreSQL",
                icon: postgresql,
                description:
                    "Que serait une application web sans base de données ? J'ai appris à utiliser Postgresql pour pouvoir stocker les données de mes applications web. Ça a été pour moi une grande partie de plaisir de pouvoir jouer et contrôler avec les données afin de comprendre le fonctionnement même d'une application web.",
            },
        ],
    }
];
