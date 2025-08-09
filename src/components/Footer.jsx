import React, { useState } from 'react';
import './Footer.css';
 
function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // In real app, you'd call API to subscribe
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column about">
          <h3>About Me</h3>
          <p>
            I’m Jarius Miguel C. Ballesteros, aspiring Junior Data Analyst eager to support data collection, verification, and analysis with strong attention to detail.
          </p>
        </div>

        <div className="footer-column links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#graphs">KnowMeMore</a></li>
            <li><a href="#resume">WorkExperiences</a></li>
            <li><a href="#contact">ContactMe</a></li>
                </ul>
        </div>

        <div className="footer-column social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/jariusismyname" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.43 7.9 10.97.6.1.8-.25.8-.56v-2c-3.2.7-3.8-1.4-3.8-1.4-.55-1.4-1.35-1.8-1.35-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.25 1.8 1.25 1.1 1.9 2.9 1.35 3.6 1 .1-.8.4-1.35.7-1.65-2.55-.3-5.25-1.3-5.25-5.85 0-1.3.45-2.4 1.2-3.25-.15-.3-.55-1.55.1-3.25 0 0 1-.3 3.3 1.25a11.3 11.3 0 013-.4c1 .005 2.05.14 3 .4 2.3-1.55 3.3-1.25 3.3-1.25.65 1.7.25 2.95.1 3.25.75.85 1.2 1.95 1.2 3.25 0 4.6-2.7 5.55-5.25 5.85.45.4.85 1.15.85 2.3v3.4c0 .3.2.7.8.55 4.6-1.55 7.9-5.9 7.9-11C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ballesteros-jarius-miguel-c-4b7a43277/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48c0 1.65 1.33 2.98 2.98 2.98 1.65 0 2.98-1.33 2.98-2.98 0-1.65-1.33-2.98-2.98-2.98zM2.5 21.5h5v-11h-5v11zm7-11h4.75v1.54h.06c.66-1.26 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.67v8.39h-5v-7.44c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94v7.57h-5v-11z" />
              </svg>
            </a>
            <a href="mailto:jmjmjmj160@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                <path d="M12 13.5L2 6v12h20V6l-10 7.5zM12 12l10-7H2l10 7z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-column newsletter">
          <h3>Subscribe to Newsletter</h3>
          {!subscribed ? (
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
          ) : (
            <p>Thank you for subscribing!</p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Jarius Miguel C. Ballesteros. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
