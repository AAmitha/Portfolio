import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaFileInvoice
  
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import {GrCertificate} from "react-icons/gr";

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-7.jpg';
import Work8 from './assets/project-8.png';
import cert1 from './assets/cert1.png';
import cert2 from './assets/cert2.png';
import cert3 from './assets/cert3.png';
import cert4 from './assets/cert4.png';
import cert5 from './assets/cert6.png';
import cert6 from './assets/cert7.png';
import cert8 from './assets/cert8.png';
import cert9 from './assets/cert9.png';


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },
  {
    id: 4,
    name: 'Certifications',
    icon: <FaFileInvoice className='nav__icon' />,
    path: '/cert',
  },

  {
    id: 5,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 6,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Amitha',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Akepati',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  

  {
    id: 5,
    title: 'Address : ',
    description: '4/219-L-1, Rajampet, AP',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+1 469-318-8841',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'akepati.amitha@gmail.com',
  },

  {
    id: 8,
    title: 'Langages : ',
    description: 'Telugu, Hindi, English',
  },
];


export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'June 2021-Aug 2022',
    title: 'Associate Professional Software Engineer <span> DXC Technology </span>',
    desc: "I worked with HPSB (Hewlett Packard Service Bus), a middleware tool, There I created components, managed permissions, and resolved issues in both development and production environments, ensuring smooth and scheduled Data transfer, even in cases of interruptions or unstructured data.",
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Graduating: May 2024',
    title: 'Masters in  <span> University of Texas at Arlington, Arlington, Texas </span>',
    desc: 'Data Science',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2020',
    title: 'Bachelors <span> Annamacharya Institute of Technology and Sciences, Rajampet, Andhra Pradesh, India </span>',
    desc: 'Computer Science and Engineering',
  },

  
];

export const skills = [
  {
    id: 5,
    title: 'Python',
    percentage: '90',
  },

  {
    id: 6,
    title: 'MySql',
    percentage: '85',
  },
  {
    id: 5,
    title: 'HTML/CSS',
    percentage: '70',
  },

  {
    id: 6,
    title: 'GO Lang',
    percentage: '60',
  },
  {
    id: 8,
    title: 'Git',
    percentage: '70',
  },
  
];

export const portfolio = [
  {
    id: 1,
    img: Work8,
    title: 'Ecommerce Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ecommerce-dusky-xi.vercel.app/',
      },
    ],
  },

  {
    id: 1,
    img: Work1,
    title: 'Developed Chatbot Using IBM Watson ',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://imdb-clone-three-gamma.vercel.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Expense Tracker',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN Stack',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://expense-tracker-frontend-mu.vercel.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Business Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS,JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://akashreddy2003.github.io/srisaiagencies/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
     
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS,JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://wfe-rho.vercel.app',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: '3D Models',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
     
      {
        title: 'Language : ',
        desc: 'ThreeJs',
      },
      {
        title: 'Preview : ',
        desc: 'https://3-d-geometry.vercel.app/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Car Price Prediction',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Machine Learning Model',
      },
    
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python(Linear Regression)',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/AkashReddy2003/CAR-PRICE-PREDICTION',
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Quick Chat',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Android App',
      },
    
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Native',
      },
      
    ],
  },
];
export const Certifications = [
  
  {
    id: 1,
    img: cert5,
    title: 'Alteryx Designer Core',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'Alteryx',
      },
      
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: 'https://www.credly.com/badges/95a527ac-d07f-4811-9bca-6f2bd24fabd9/linked_in_profile',
      },
      
    ],
  },
  {
    id: 1,
    img: cert1,
    title: 'PowerBi - PWC - Forage Virutal Internship',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'PWC',
      },
      
      {
        icon: <FaCode />,
        title: 'Skills : ',
        desc: 'PowerBi',
      },
     
    ],
  },

  {
    id: 2,
    img: cert2,
    title: 'Microsoft Certified Azure Fundamentals - AZ900',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'Microsoft ',
      },
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: 'https://www.credly.com/badges/6267b0f0-76f2-40db-8a3d-248fb63145db',
      },
      
    ],
  },

  {
    id: 3,
    img: cert3,
    title: 'Python',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'HackkerRank',
      },
     
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: 'https://www.hackerrank.com/certificates/30b025095c09',
      },
    ],
  },

  {
    id: 4,
    img: cert4,
    title: 'Problem Solving',
    details: [
      {
        icon: <FiFileText />,
        title: 'Authorized By : ',
        desc: 'HackkerRank',
      },
     
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: 'https://www.hackerrank.com/certificates/68d48e706aae',
      },
     
    ],
  },

  {
    id: 5,
    img: cert6,
    title: 'HTMl5',
    details: [
      {
        title: 'Authorized By : ',
        desc: 'SOLOLearn',
      },
     
      {
        title: 'Skills : ',
        desc: 'HTML',
      },
      
    ],
  },
  {
    id: 5,
    img: cert8,
    title: 'Game Development using PyGame',
    details: [
      {
        title: 'Authorized By : ',
        desc: 'GUVI',
      },
     
      {
        title: 'Link : ',
        desc: 'https://www.guvi.in/verify-certificate?id=51hg21982H2JD3B45y',
      },
      
    ],
  },
  {
    id: 5,
    img: cert9,
    title: 'Python for Data Scince',
    details: [
      {
        title: 'Authorized By : ',
        desc: 'IBM Cognitive Classification',
      },
     
      {
        title: 'Link : ',
        desc: 'https://www.credly.com/badges/702ec324-e29e-462e-98dc-73028151bfa2',
      },
      
    ],
  },
  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
