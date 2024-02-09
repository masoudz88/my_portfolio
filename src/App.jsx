import './App.css';
import { Hero } from './components'
import { Navbar } from './components';

function App() {
  return (
   <>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
   
  );
}

export default App;
