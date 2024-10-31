import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ContactInfo = ({ label, value, link }) => {
  return (
    <div className="bg-secondary p-5 sm:mx-5 mx-2 rounded-2xl sm:w-[360px] w-full sm:my-4 my-2 shadow-card">
      <motion.div variants={fadeIn("up")}>
        <h3 className="text-white font-bold text-[20px]">{label}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-white-100 text-[16px]"
        >
          {value}
        </a>
      </motion.div>
    </div>
  );
};

const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="sm:my-[100px] my-[50px] flex flex-col justify-center items-center" id="contact">
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact Me</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-7">
        <ContactInfo
          label="Email"
          value="masoudz@mun.ca"
          link="mailto:masoudz@mun.ca"
        />
        <ContactInfo
          label="Linkedin"
          value="linkedin.com/masoudzare"
          link="https://www.linkedin.com/in/masoudzare/"
        />
        <ContactInfo
          label="GitHub"
          value="github.com/masoudz88"
          link="https://github.com/masoudz88"
        />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
