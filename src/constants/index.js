import {
    mobile,
    backend,
    creator,
    web,
    celtx,
    scin,
    scaleai,
    cakeyhand,
    vha,
    javascript,
    typescript,
    python,
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
    gigplus
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
    title: "Software Developer",
    company_name: "Voronoi Health Analytics",
    icon: vha,
    iconBg: "#383E56",
    date: "April 2024- Present",
    points: [
      "Engineered a React/Redux and TypeScript-based image labelling tool to enhance image classification accuracy for machine learning model training and optimization.",
      "Collaborated in the development of a desktop server application using Electron.js and Django to facilitate uploading medical images from hospital PACS servers to the application server, enhancing workflow efficiency and data integration.",
      "Conducted comprehensive testing and debugging to ensure reliable application performance and user experience.",
    ],
    },
    {
      title: "Freelance AI Trainer and Code Review Analyst",
      company_name: "Scale AI",
      icon: scaleai,
      iconBg: "#383E56",
      date: "January 2024- June 2024",
      points: [
        "Craft complex code prompts to evaluate and test the capabilities of large language models (LLMs).",
        "Analyze responses from AI models to assess their programming skill proficiency and accuracy.",
        "Conduct detailed code reviews to ensure the quality and functionality of AI-generated code.",
        "Rate and provide structured feedback on the performance of AI models in coding tasks.",
        "Participate in continuous improvement initiatives to enhance AI model reliability and performance.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "SCIN Scientific Publishing",
      icon: scin,
      iconBg: "#E6DEDD",
      date: "June 2023 - December 2024",
      points: [
          "Launched a startup's MVP, skyrocketing user engagement by 1000% via MERN stack and AWS CI/CD.",
          "Doubled session times and increased page views by 50% with responsive design.",
          "Cut deployment time by 30% and sped up delivery 25% with reusable code libraries.",
          "Translated stakeholder needs to specs, enhancing feature integration and success.",
          "Improved collaboration and efficiency with open-source version control strategies.",
          
      ],
    },
    {
      title: "Web Developer",
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
      name: "Python",
      icon: python,
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
      name: "Gigplus Analytics",
      description:
      "A mobile app that helps gig workers boost their income by providing analytics data based on their income and their expenses and showing them best time and places to work.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "AWS Lambda",
          color: "pink-text-gradient",
        },
      ],
      image: gigplus,
      source_code_link: "https://youtu.be/pOqHOB0BwCw",
    },
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
];