import React, { useState } from 'react';
import '../components/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    const currentTheme = document.querySelector('.app').getAttribute('data-theme');
    document.querySelector('.app').setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">Jarius Miguel Catapang Ballesteros The Data Analyst</div>
      
      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#graphs">KnowMeMore</a>
        <a href="#resume">WorkExperiences</a>        
        <a href="#contact">ContactMe</a>
        <button onClick={toggleTheme} className="dark-toggle">🌓</button>
      </nav>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Navbar;
