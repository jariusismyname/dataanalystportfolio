import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../components/ResumeSection.css";
import FadeSection from "./FadeSection";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
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
      "Passionate junior data analyst skilled in SQL and Python, eager to support data cleansing and transformation projects.", 3000,
      "Experienced in analyzing data trends, generating actionable insights, and building clear reports to aid decision-making.", 3000,
      "Committed to continuous learning and collaboration to deliver impactful business insights.", 3000,
      "Ready to contribute to dynamic teams and fast-paced environments, bringing attention to detail and problem-solving skills.", 3000,
    ]}
    speed={90}
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
