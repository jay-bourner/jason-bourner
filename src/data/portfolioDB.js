import completeFitnessImage from '../assets/images/FITNESS-dgrey.png';
import jpfMoveWithMeImage from '../assets/images/jpfitnesslogo2025.png';
import nakedKitchensImage from '../assets/images/nk-logo.svg';
import iceKitchensImage from '../assets/images/ice-logo.png';

const PORTFOLIO = {
    projects: [
        {
            id: 1,
            title: "Em's Complete Fitness and Wellbeing",
            description: "Web site for a personal trainer around the Rudham area",
            image: completeFitnessImage,
            link: "https://www.completefitnessandwellbeing.co.uk/"
        },
        {
            id: 2,
            title: "JPF Move With Me",
            description: "A web site for a fitness coach specialising in Move Therapy.",
            image: jpfMoveWithMeImage,
            link: "https://www.jpf-movewithme.co.uk/"
        },
        // {
        //     id: 3,
        //     title: "Project Three",
        //     description: "Description for project three.",
        //     image: "project3.jpg",
        //     link: "https://example.com/project-three"
        // }
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