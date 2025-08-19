import React from 'react';
import '../src/App.css';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Footer from '../src/components/Footer';
import About from './components/About'; // new
import Skills from './components/Skills'; // Add this
import Graphs from './components/Graphs';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Gallerry from './components/Gallerry'; // Add this line for the gallery
 

function App() {
  return (
    <div className="app" data-theme="light">
      
       <Navbar />
       <Hero /> 
      <About /> 

      <Gallerry /> {/* Add this line for the gallery */}
      <Skills /> {/* Add this */}
       <Graphs /> {/* Add this line */}
      <ResumeSection />  {/* Add this line */}
      <ContactSection />  {/* Add this at the end */}
      <Footer /> {/* Add this at the bottom */}
    </div>
  );
}

export default App;
