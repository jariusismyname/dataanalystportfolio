import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../components/ResumeSection.css";
import FadeSection from "./FadeSection";

const Resume = () => {
  return (
    <section id="experiences" className="resume-section">
      <FadeSection>
      <h2 className="resume-title">
       <TypeAnimation
  sequence={[
    "OJT Documentation", 1500,
    "Practical Work Experience", 1500,
    "Data Analysis Journey", 1500,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
 </h2>
<p className="resume-description">
  <TypeAnimation
    sequence={[
  "Driven junior data analyst with hands-on experience gained in 2024, proficient in SQL and Python, passionate about transforming raw data into actionable business insights.",
  6000,  // pause after typing
  "",    // triggers deletion
  100,   // short pause before typing next

  "Skilled in identifying trends, generating clear and impactful reports, and supporting data-driven decision-making to help teams succeed.",
  6000,
  "",
  100,

  "Committed to rapid learning and collaboration, with a strong focus on delivering quality results and continuous improvement.",
  6000,
  "",
  100,

  "Eager to contribute attention to detail, problem-solving abilities, and a proactive mindset to dynamic and fast-paced work environments.",
  6000,
  "",
  100,
]}

    speed={50}  // Adjust typing speed as desired
    repeat={Infinity}
  />
</p>



      <div className="pdf-frame">
        <iframe
          src="/ojtdocumentation.pdf"
          title="OJT Documentation"
          width="100%"
          height="500px"
          style={{
            border: "2px solid var(--frame-border)",
            borderRadius: "10px",
          }}
        ></iframe>
      </div>

      <a
        href="/ojtdocumentation.pdf"
        download
        className="resume-download-btn"
      >
        Download PDF
      </a>
    </FadeSection>
    </section>
  );
};

export default Resume;
