import React from 'react';
import './ContactSection.css';
import FadeSection from "./FadeSection";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <FadeSection><h2>Let’s Connect</h2>
      <div className="contact-container">
        <div className="contact-left">
          <p>You can reach me anytime via this form.</p>
          <p>Email replies go straight to my Gmail inbox.</p>
        </div>

        <div className="contact-right">
          <form
            action="https://formsubmit.co/jmjmjmj160@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://your-portfolio-url.com/thankyou" />

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </FadeSection></section>
  );
}

export default ContactSection;
