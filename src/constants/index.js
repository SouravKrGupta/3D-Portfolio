import { color } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
  letsgrowmore,
  code,
  nathcorp,
  sikharthy1,
    yhills,
    doc,
    noteapp,
    fitness,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Software Developer Internships",
      company_name: "Sikharthy Infotech Pvt. Ltd.",
      icon: sikharthy1,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Skills : MongoDB , ExpressJS , ReactJS , NodeJS , MaterialUI , RapidAPI , Formspree ",
"During my internship at Sikharthy Infotech Pvt. Ltd, I played a key role in developing Fitness-Application using the MERN stack. I contributed to both the backend and frontend.",
"I played the role of team leader during this internship and I expanded my full-stack development knowledge and gained practical experience in building real-world applications.",
'Additionally, I successfully completed a certification program offered by Sikharthy Infotech Pvt. Ltd, validating my proficiency in MERN stack development.',
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "NathCorp Inc.",
      icon: nathcorp,
      iconBg: "#E6DEDD",
      date: "30th May 2023 - 5th July 2023",
      points: [
"Skills : MongoDB , ExpressJS , ReactJS , NodeJS , MaterialUI ",
"During my internship at Nathcorp, I played a key role in developing TakeIt!, a note-taking application using the MERN stack. I contributed to both the backend and frontend.",
  "Additionally, I successfully completed a certification program offered by Nathcorp, validating my proficiency in MERN stack development.",
' My time at Nathcorp was rewarding, as I expanded my full-stack development knowledge and gained practical experience in building real-world applications.',
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "CodeClause",
      icon: code,
      iconBg: "#383E56",
      date: "1st May 2023- 1st June 2023",
      points: [
        "Skills : MongoDB , ExpressJS , ReactJS , NodeJS , MaterialUI ",
       "During my internship at CodeClause,I successfully completed three tasks:- (1) designing and developing a Portfolio Website,(2) creating engaging content for a Personal Blog, (3) building a user-friendly Note-taking Application.",
"These experiences showcased my skills in web development, content creation, and application development, allowing me to demonstrate my ability to design and build functional websites and applications. ",
        "I am proud to have contributed to these projects and gained valuable experience in the process.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "YHills",
      icon: yhills,
      iconBg: "#E6DEDD",
      date: "1st Nov 2022 - 31st Dec 2022",
      points: [
        "Skills :  Cascading Style Sheets (CSS) · Bootstrap · JavaScript · HTML ",
        "During my internship at YHills, I successfully completed two tasks :- ",
        "Major Project : Responsive E-commerce website.",
      'Minor project : Responsive personal portfolio website',
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "LetsGrowMore",
      icon: letsgrowmore,
      iconBg: "#E6DEDD",
      date: "1st July 2022 - 1 Aug 2022 ",
      points: [
        "Skills : React.js ",
       "During my internship at LetsGrowMore, I successfully completed four tasks :- ",
       "Designed and developed TO DO List and Created a Web Application with API which as part of the internship. ",
       'Developed Registration form whose data display in same page and Developed a calculator',
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Doctors Appointment System",
      description:
       " Doctors Appointment is platform where any user an easy way of booking a doctor’s appointment online. Available and booked slots are shown This platform has two parts Admin Side And User Side.Developed the backend using Node and Express, MongoDB as database and React as frontend .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name:"nodejs",
          color:"blue-text-gradient"
        },
      ],
      image: doc,
      source_code_link: "https://github.com/SouravKrGupta/Appointment_System",
    },
    {
      name: "TakeIT! (Notes Taking Application)",
      description:
     "TakeIt! used React to create UI pages, used Nodejs with MongoDB for backend developement. Implemented APIs for notes creation/update/ deletion and note search functionality, Recycle feature for deleted notes. Implemented real time sharing of notes on Gmail, whatsapp and Twitter apis.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: noteapp,
      source_code_link: "https://github.com/SouravKrGupta/NotesApp",
    },
    {
      name: "Fitness Application website",
      description:
        "Implemented authentication for the Login and register, saw 20% increase in monthly active users.Implemented BMI Calculator, created diet plan and blog pages for the users. Implemented Rapid API integration to seamlessly show exercise data, resulting in a 50% increase in user engagement.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: fitness,
      source_code_link: "https://github.com/SouravKrGupta/Fitness-Application",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  