import React, { useEffect, useState, useRef } from 'react';
import '../components/Hero.css';
import FadeSection from '../components/FadeSection';

const headingText = "  Hi, I'm Jarius Miguel C. Ballesteros";
const descriptionText = [
  "  Aspiring Junior Data Analyst eager to support data collection, verification, and analysis with strong attention to detail.",
  "  Skilled in MS Office and quick to learn new concepts, committed to accuracy and meeting tight deadlines.",
  "  Experienced in transforming raw data into meaningful insights that align with business and governance needs.",
  "  Excellent communication skills with a willingness to collaborate and adapt in a remote, hybrid, or onsite work environment.",
  "  Dedicated to continuous growth, ready to contribute effectively to data quality and reporting initiatives.",
];

const Hero = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const headingIndex = useRef(0);
  const descSentenceIndex = useRef(0);
  const descCharIndex = useRef(0);
  const typingTimeout = useRef(null);
  const pauseTimeout = useRef(null);

  useEffect(() => {
    const typeHeading = () => {
      if (headingIndex.current < headingText.length) {
        setHeading((prev) => prev + headingText.charAt(headingIndex.current));
        headingIndex.current += 1;
        typingTimeout.current = setTimeout(typeHeading, 20);
      } else {
        pauseTimeout.current = setTimeout(typeDescription, 500);
      }
    };

    const typeDescription = () => {
      const currentSentence = descriptionText[descSentenceIndex.current];
      if (!currentSentence) {
        pauseTimeout.current = setTimeout(() => {
          setHeading('');
          setDescription('');
          headingIndex.current = 0;
          descSentenceIndex.current = 0;
          descCharIndex.current = 0;
          typingTimeout.current = setTimeout(typeHeading, 100);
        }, 7000);
        return;
      }

      if (descCharIndex.current < currentSentence.length) {
        setDescription((prev) => prev + currentSentence.charAt(descCharIndex.current));
        descCharIndex.current += 1;
        typingTimeout.current = setTimeout(typeDescription, 10);
      } else {
        setDescription((prev) => prev + ' ');
        descSentenceIndex.current += 1;
        descCharIndex.current = 0;
        pauseTimeout.current = setTimeout(typeDescription, 800);
      }
    };

    typeHeading();

    return () => {
      clearTimeout(typingTimeout.current);
      clearTimeout(pauseTimeout.current);
    };
  }, []); // No warning here because descriptionText is stable

  return (
    <section id="home" className="hero-section">
     <FadeSection> <div className="hero-content">
        <div className="hero-left">
          <img src="/profile.jpg" alt="Profile" className="profile-image" />
        </div>
       <div className="hero-right">
  <h1>{heading}</h1>
  <p>{description}</p>
  
  {/* Download CV button */}
  <a 
    href="/jarius-ballesteros-cv.pdf" 
    download 
    className="download-cv-button"
  >
    Download CV
  </a>
</div>

        
      </div>
    </FadeSection>
    </section>
  );
};

export default Hero;
