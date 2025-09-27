import google from '../assets/icons/google-logo.svg';
import design from '../assets/icons/app-window.svg';
import database from '../assets/icons/database.svg';
import dev from '../assets/icons/dev-to-logo.svg';
import devices from '../assets/icons/devices.svg';
import mobile from '../assets/icons/device-mobile.svg';

const INTRO = {
    title: 'Welcome to My Portfolio',
    subtitle: 'Showcasing My Work and Skills',
    description: 'I specialize in creating responsive and user-friendly web applications using modern technologies. With a strong foundation in HTML, CSS, JavaScript and PHP (including frameworks such as Laravel and Vue.js), I bring designs to life and ensure seamless user experiences across all devices.',
    services: [
        {
            name: 'Web Development',
            icon: dev,
            description: ''
        },
        {
            name: 'UI/UX Design',
            icon: design,
            description: ''
        },
        {
            name: 'Backend Development',
            icon: database,
            description: ''
        },
        {
            name: 'Mobile Friendly Apps',
            icon: mobile,
            description: ''
        },
        {
            name: 'Search Engine Optimization',
            icon: google,
            description: ''
        },
        {
            name: 'Single Page Applications',
            icon: devices,
            description: ''
        }
    ]
};

export default INTRO;