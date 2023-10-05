import { Link } from "react-router-dom";

import javascript from "../../../assets/icons/javascript.svg";
import typescript from "../../../assets/icons/typescript.svg";
import react from "../../../assets/icons/react.svg";
import sass from "../../../assets/icons/sass.svg";
import figma from "../../../assets/icons/figma.svg";
import responsive from "../../../assets/icons/responsive.svg";

export const data = [
    {
        sectionTitle: "Langages de programmation",
        items: [
            {
                title: "Javascript",
                icon: javascript,
                description:
                    "J'ai commencé à apprendre Javascript durant ma formation au Wagon. Il m'a permis de comprendre les bases de la programmation dynamique.",
            },
            {
                title: "Typescript",
                icon: typescript,
                description:
                    "Voulant me perfectionner dans la programmation orientée objet claire et précise, j'ai décidé d'apprendre Typescript. J'ai pu l'utiliser sur en particulier pour le développement de ce portfolio.",
            },
        ],
    },
    {
        sectionTitle: "Frameworks",
        items: [
            {
                title: "React",
                icon: react,
                description: (
                    <>
                        React est le framework que j'utilise le plus. J'ai pu
                        l'utiliser sur plusieurs projets personnels.
                        Aujourd'hui, je l'utilise pour le développement de ce{" "}
                        <strong>
                            <Link to="/projects/portfolio">portfolio</Link>
                        </strong>
                        .
                    </>
                ),
            },
        ],
    },

    {
        sectionTitle: "Outils et technologies",
        items: [
            {
                title: "Sass",
                icon: sass,
                description:
                    "J'utilise Sass pour la plupart de mes projets. Il me permet de rendre mon code CSS plus lisible et plus facile à maintenir.",
            },
        ],
    },

    {
        sectionTitle: "DESIGN & UX/UI",
        items: [
            {
                title: "Figma",
                icon: figma,
                description:
                    "Afin de pouvoir réaliser des applications web avec un design moderne et épuré, j'ai appris à utiliser Figma. Il me permet de réaliser des maquettes et des prototypes.",
            },
            {
                title: "Responsive Design",
                icon: responsive,
                description:
                    "J'ai appris à rendre mes applications web responsive. La prochaine étape est de commencer par le mobile first.",
            },
        ],
    }
];
