import {
    mobile,
    backend,
    creator,
    web,
    celtx,
    scin,
    cakeyhand,
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
    daycare,
    waste
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

export const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Application Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI Trainer",
      icon: creator,
    },
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "SCIN Scientific Publishing",
        icon: scin,
        iconBg: "#E6DEDD",
        date: "August 2023 - Present",
        points: [
            "Launched a startup's MVP, skyrocketing user engagement by 1000% via MERN stack and AWS CI/CD.",
            "Doubled session times and increased page views by 50% with responsive design.",
            "Cut deployment time by 30% and sped up delivery 25% with reusable code libraries.",
            "Translated stakeholder needs to specs, enhancing feature integration and success.",
            "Improved collaboration and efficiency with open-source version control strategies.",
            
        ],
    },
    {
      title: "React.js Developer",
      company_name: "Celtx",
      icon: celtx,
      iconBg: "#383E56",
      date: "January 2022- May 2023",
      points: [
        "Boosted subscription rates by 5% by developing a modern React-based customer experience and upgrading payment systems.",
        "Increased collaborative subscriptions by 25% through a new React-driven team subscription pathway, enhancing UX.",
        "Improved application validation and operational efficiency by 15% with React framework and automated unit tests.",
        "Delivered top-tier React web products on time, adhering to budgetary constraints and project schedules.",
        "Continuously advanced UI quality with React-based usability testing cycles and user feedback.",
      ],
    },
    {
        title: "Full Stack Developer - Freelancer",
        company_name: "CakeyHand Dessert Factory",
        icon: cakeyhand,
        iconBg: "#383E56",
        date: "January 2023- August 2023",
        points: [
            "Led CakeyHand's online system and wedding automation module development using MERN stack for enhanced customer service.",
            "Integral in fusing advanced technologies into CakeyHand, boosting user experience and efficiency.",
            "Drove reliability and performance upgrades by instituting thorough Jest unit testing protocols.",
            
        ],
    },
];

export const technologies = [
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
];

export const projects = [
    {
      name: "CareConnect NL",
      description:
        "Mobile application that allows users to search, contact, and rate daycares in Newfoundland, providing a convenient and efficient solution for parents needs.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "google fonts",
          color: "pink-text-gradient",
        },
      ],
      image: daycare,
      source_code_link: "https://www.youtube.com/watch?v=BKND9y68cUw",
    },
    {
      name: "Waste Management",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: waste,
      source_code_link: "https://www.loom.com/share/86d2fcf2dcea44b6b891d228f3e8222b?sid=cd82f597-125b-422c-9065-82cc0ef65003",
    },
];