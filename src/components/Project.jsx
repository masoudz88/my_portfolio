import React from "react";
import { motion } from "framer-motion";
import { video } from "../assets";
import { projects } from "../constants";
import { fadeIn} from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-white p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={video}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <div className="w-full bg-[#6E07F3] py-8 px-4 sm:py-10 sm:px-10 mt-[60px] sm:mt-[100px] pt-[60px] sm:pt-[100px] sm:pb-[100px]" id="projects">

      <div className='w-full flex justify-center items-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-[#FFF] text-[15px] sm:text-[20px] px-4 sm:px-[100px] text-center max-w-6xl leading-relaxed tracking-wide'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to live demos of it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 bg-transparent text-[#FFF] pt-4 rounded-md underline text-[18px] hover:text-[#CCCCCC] transition-all duration-300">
        <a href="https://github.com/masoudz88?tab=repositories" target="_blank" rel="noopener noreferrer">
            Explore More
        </a>
      </div>
    </div>
  );
};

export default Project;
