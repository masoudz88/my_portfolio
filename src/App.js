import './App.css';
import { Route,Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
   <>
    <NavMenu/>
      <div>
      <Routes>        
        <Route path="/"  element={<About/>} />
        <Route path="/projects"  element={<Project />}/>
      </Routes>
    </div>
    </>
   
  );
}

export default App;
