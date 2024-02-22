import {
    mobile,
    backend,
    creator,
    web,
    celtx,
    scin,
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
      title: "React.js Developer",
      company_name: "Celtxs",
      icon: celtx,
      iconBg: "#383E56",
      date: "January 2022- May 2023",
      points: [
        "Engineered and optimized web services, significantly improving the responsiveness and scalability of payment systems, resulting in a 5% uplift in subscription rates.",
        "Pioneered the design and implementation of a innovative subscription pathway, leveraging REST APIs to enhance team collaboration features, boosting subscription collaboration by 25%.",
        "Enhanced application reliability and efficiency by integrating Java-based Selenium for automated testing, leading to a 15% increase in efficiency."
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "SCIN Scientific Publishing",
      icon: scin,
      iconBg: "#E6DEDD",
      date: "August 2023 - Present",
      points: [
        "Exhibited entrepreneurial spirit by designing and deploying a scalable web architecture on AWS, significantly improving system reliability and user engagement.",
        "Achieved a significant increase in website views and user interaction, with more than a 10x rise, as measured by Google Analytics.",
        "Built and deployed an open-source dashboard using EC2 and AWS RDS for database management, enhancing user experience and data accessibility."
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
