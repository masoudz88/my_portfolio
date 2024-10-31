import React from "react";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ index, experience }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', delay: index * 0.3, stiffness: 100 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="xs:w-[450px] w-full mx-auto"
    >
      <div className='w-full p-2 bg-secondary rounded-[20px] shadow-card overflow-hidden'>
        <div className='bg-secondary rounded-[20px] p-4 flex flex-col justify-between h-full'>
          <div className="flex items-center space-x-3">
            <img src={experience.icon} alt={experience.company_name} className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" />
            <div>
              <h3 className='text-white text-xl font-bold'>{experience.title}</h3>
              <p className='text-white'>{experience.company_name}</p>
            </div>
          </div>
          <p className="text-sm text-[#D3D3D3] mt-2 pl-5">{experience.date}</p>
          <ul className='list-disc space-y-2 pl-5 text-white my-4'>
            {experience.points.map((point, idx) => (
              <li key={`experience-point-${idx}`} className='text-sm'>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};


const Experience = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="sm:my-[100px] my-[50px] sm:px-[100px] px-[20px] flex flex-col justify-center items-center" id="work">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience.
          </h2>
        </motion.div>

        <motion.div 
          className='mt-20 flex flex-wrap gap-10 justify-center items-center'
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              index={index}
              experience={experience}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
