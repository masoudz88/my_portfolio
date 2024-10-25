import { styles } from "../styles";
import { developer } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-[85vh] mx-auto flex justify-center items-center sm:mt-[100px] mt-[50px]`}>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-primary text-center mt-10`}>
            Hi, I'm <span className='text-[#6E07F3]'>Masoud</span>
          </h1>
          <p className={`${styles.heroSubText} mt-10 text-primary text-center`}>
            Full Stack Developer, Machine Learning Engineer & Mobile Application Developer
          </p>
          <div className='flex justify-center items-center'>
            <img
              src={developer}
              alt='developer'
              className='w-60 h-60 object-contain mt-10'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
