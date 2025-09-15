import Envolope from '@/assets/icons/envelope.svg';
import Phone from '@/assets/icons/phone-disconnect.svg';
import WhatsApp from '@/assets/icons/whatsapp-logo.svg';
import LinkedIn from '@/assets/icons/linkedin-logo.svg';
import GitHub from '@/assets/icons/github-logo.svg';


const CONTACT = {
    methods: [
        {
            label: 'Email',
            value: 'Email me with any enquiries',
            link: 'mailto:jay.bourner@gmail.com',
            icon: Envolope,
        },
        {
            label: 'Telephone',
            value: 'Or call me to discuss your requirements',
            link: 'tel:07881107738',
            icon: Phone,
        },
        {
            label: 'WhatsApp',
            value: 'Even keeping with the times, you can WhatsApp me',
            link: 'https://wa.me/+447881107738',
            icon: WhatsApp,
        },
        {
            label: 'LinkedIn',
            value: 'You can even checkout my more \'professional\' profile on LinkedIn',
            link: 'https://www.linkedin.com/in/jay-bourner/',
            icon: LinkedIn,
        },
        {
            label: 'GitHub',
            value: 'Or if you want to look at some of my previous work, checkout my GitHub (be warned... it is all code!)',
            link: 'https://www.github.com/',
            icon: GitHub,
        },
    ]
};

export default CONTACT;