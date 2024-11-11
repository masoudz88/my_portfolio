import { Navbar, Hero, About, Experience, Tech, Project, Contact, Chatbot } from './components';
import ChatbotOpen from './components/chatbot/ChatbotOpen';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
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
      <div>
        {isOpen ? <ChatbotOpen setIsOpen={setIsOpen}/> : <Chatbot setIsOpen={setIsOpen}/>}
      </div>
    </>
   
  );
}

export default App;
