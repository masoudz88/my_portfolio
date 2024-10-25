import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, staggerContainer } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#FFF] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-[#000] text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    </div>
);

const About = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className='w-full bg-[#6E07F3] py-8 px-4 sm:py-10 sm:px-10 mt-[60px] sm:mt-[100px] pt-[60px] sm:pt-[100px] sm:pb-[100px] flex flex-col items-center'  id='about'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-[#FFF] text-[15px] sm:text-[20px] px-4 sm:px-[100px] text-center max-w-6xl leading-relaxed tracking-wide'
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Django. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
