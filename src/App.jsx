import { Navbar, Hero, About, Experience, Tech, Project, Contact } from './components';


function App() {
  return (
   <>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Project />
        <Contact />
      </div>
    </>
   
  );
}

export default App;
