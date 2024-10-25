import { Navbar, Hero, About, Experience, Tech, Project, Contact } from './components';


function App() {
  return (
   <>
      <div className='relative'>
        <div>
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
