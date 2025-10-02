import Envolope from '@/assets/icons/envelope.svg';
import Phone from '@/assets/icons/phone-disconnect.svg';
import WhatsApp from '@/assets/icons/whatsapp-logo.svg';
import LinkedIn from '@/assets/icons/linkedin-logo.svg';
import GitHub from '@/assets/icons/github-logo.svg';


const CONTACT = {
    methods: [
        {
            label: 'Email',
            value: 'Want to know more? Email me with any enquiries',
            link: 'mailto:jay.bourner@outlook.co.uk',
            icon: Envolope,
        },
        {
            label: 'LinkedIn',
            value: 'You can even checkout my more \'professional\' profile on LinkedIn',
            link: 'https://www.linkedin.com/in/jay-bourner/',
            icon: LinkedIn,
        },
        {
            label: 'GitHub',
            value: 'Or if you want to look at some of my previous work, checkout my GitHub',
            link: 'https://github.com/jay-bourner',
            icon: GitHub,
        },
    ]
};

export default CONTACT;