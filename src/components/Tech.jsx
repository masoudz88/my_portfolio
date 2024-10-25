import React from "react";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 sm:py-[100px] py-[50px] sm:px-[100px] px-[20px]'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex justify-center items-center' key={technology.name}>
          <img src={technology.icon} alt={technology.name} />
        </div>
      ))}
    </div>
  );
};

export default Tech
