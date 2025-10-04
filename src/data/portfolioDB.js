import completeFitnessImage from '../assets/images/FITNESS-dgrey.png';
import jpfMoveWithMeImage from '../assets/images/jpfitnesslogo2025.png';
import nakedKitchensImage from '../assets/images/nk-logo.svg';
import iceKitchensImage from '../assets/images/ice-logo.png';

const PORTFOLIO = {
    projects: [
        {
            id: 1,
            title: "Em's Complete Fitness and Wellbeing",
            description: [
                "This site was built in the early days of my career, for a personal trainer and fitness coach.",
                "There was significant colaboration with the client to ensure the site met their needs and vision.",
                "The site has a bespoke CMS allowing the client to update content relating to classes, events, venues, and their clients stats and requirements."
            ],
            technologies: [
                "PHP",
                "MySQL",
                "HTML",
                "Bootstrap",
                "jQuery"
            ],
            image: completeFitnessImage,
            link: "https://www.completefitnessandwellbeing.co.uk/",
            isActive: false
        },
        {
            id: 2,
            title: "JPF Move With Me",
            description: [
                "This site was built for a fitness coach in my local area.",
                "There was collaboration with the client, to discuss the design and functionality.",
                "The site has a bespoke CMS allowing the client to update content relating to classes, events, venues, and their pricing.",
                "Initially, this was built with Vanilla PHP using an MVC Framework I built myself, but has recently been rebuilt using the Laravel framework.",
            ],
            technologies: [
                "PHP",
                "Laravel",
                "MySQL",
                "HTML",
                "Vanilla JavaScript",
                "CSS3, SASS",
                "Webpack/vite"
            ], 
            image: jpfMoveWithMeImage,
            link: "https://www.jpf-movewithme.co.uk/",
            isActive: false
        },
    ],
    workRelated: [
        {
            id: 1,
            title: "Naked Kitchens",
            description: "",
            image: nakedKitchensImage,
            link: "https://www.nakedkitchens.com/"
        },
        {
            id: 2,
            title: "Ice Kitchens",
            description: "",
            image: iceKitchensImage,
            link: "https://www.icekitchens.co.uk/"
        }
    ]
};

export default PORTFOLIO;