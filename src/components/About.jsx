import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import { useInView } from "react-intersection-observer";
import "./About.css";
import FadeSection from "./FadeSection";

const carouselImages = [
  { src: "/project1.png", alt: "Project 1", caption: "Interactive Power BI Dashboard: Sales Performance Analysis" },
  { src: "/project2.png", alt: "Project 2", caption: "Customer List Report: SQL-Driven Customer Segmentation" },
  { src: "/project3.png", alt: "Project 3", caption: "Customer List Report: Data Visualization and Insights" },
  { src: "/project4.png", alt: "Project 4", caption: "Top Customer Report: Identifying Key Revenue Contributors" },
  { src: "/project5.png", alt: "Project 5", caption: "Customer List Report: Comprehensive Client Database Overview" },
  { src: "/project6.png", alt: "Project 6", caption: "Expiration Monitoring Report: Proactive Inventory Management" },
  { src: "/project7.png", alt: "Project 7", caption: "Top Customer Report: Performance Metrics and Trends" },
  { src: "/project8.png", alt: "Project 8", caption: "Expiration Monitoring Report: Alert System for Inventory Aging" },
  { src: "/project9.png", alt: "Project 9", caption: "Customer List Report: Dynamic Filtering and Reporting with SQL" },
  { src: "/project10.png", alt: "Project 10", caption: "Inventory on Hand Report: Real-Time Stock Level Insights" }
];
export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [isMaximized, setIsMaximized] = useState(false);
  const typedTitleRef = useRef(null);
  const typedDescRef = useRef(null);
  const typedTitleInstance = useRef(null);
  const typedDescInstance = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ... your existing typed.js refs and useEffects here ...

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

useEffect(() => {
  if (typedTitleRef.current) {
    typedTitleInstance.current = new Typed(typedTitleRef.current, {
      strings: [
        "Projects",
        "My Works",
        "What I’ve Built",
        "Data Solutions in Action"
      ],
      typeSpeed: 10,
      backSpeed: 30,
      loop: true,
      showCursor: true,
    });
  }
  return () => {
    typedTitleInstance.current?.destroy();
  };
}, []);

useEffect(() => {
  if (typedDescRef.current) {
    typedDescInstance.current = new Typed(typedDescRef.current, {
      strings: [
        "Sales Performance Dashboard – Designed an interactive Power BI dashboard analyzing regional sales trends, reducing reporting time by 35%.",
        "Top Customer Insights – Developed SQL queries and visualizations to identify high-value clients, enabling targeted marketing strategies that boosted revenue.",
        "Expiry Monitoring Report – Built an automated system to track and alert for product expirations, cutting waste by 25% and improving inventory turnover.",
        "Customer Churn Analysis – Created Python-based retention tracking models, improving churn prediction accuracy by 18%.",
        "Ride-Hailing Data Insights – Processed large trip datasets to optimize pricing models and identify demand hotspots for operational efficiency.",
        "Geospatial Delivery Optimization – Built a route-mapping visualization tool that reduced delivery delays by 20%.",
        "Market Trend Analysis – Automated data collection pipelines, delivering weekly BI reports to executives for data-driven decision-making.",
      ],
      typeSpeed: 60 ,
      backSpeed: 20,
      loop: true,
      showCursor: true,
    });
  }
  return () => {
    typedDescInstance.current?.destroy();
  };
}, []);
const typedCaptionRef = useRef(null);
const typedCaptionInstance = useRef(null);
useEffect(() => {
  if (typedCaptionRef.current) {
    typedCaptionInstance.current?.destroy();
    typedCaptionInstance.current = new Typed(typedCaptionRef.current, {
      strings: [carouselImages[currentIndex].caption || ""],
      typeSpeed: 40,
      backSpeed: 25,
      loop: false,
      showCursor: false,
    });
  }
  return () => {
    typedCaptionInstance.current?.destroy();
  };
}, [currentIndex]);

  // Toggle maximize modal
  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`about-section vertical-layout ${inView ? "fade-in" : ""}`}
    >
      <FadeSection>
        <div className="typed-text-container">
          <h2>
            <span ref={typedTitleRef}></span>
          </h2>

          <div className="large-image-container">
         <div className="large-image-container" style={{ position: "relative" }}>
  <img
    src={carouselImages[currentIndex].src}
    alt={carouselImages[currentIndex].alt}
    className="large-image"
    style={{ cursor: "pointer", display: "block", width: "100%" }}
    onClick={toggleMaximize} // click image to maximize
  />

     {isMaximized && (
  <div
    className="modal-overlay"
    onClick={toggleMaximize}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.85)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()} // prevent closing modal on image click
      style={{ position: "relative" }}
    >
      {/* Close (X) button */}
      <button
        onClick={toggleMaximize}
        aria-label="Close maximize"
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          marginRight: "40px",
        }}
      >
        &times;
      </button>

      {/* Minimize button */}
      <button
        onClick={toggleMaximize}
        aria-label="Minimize image"
        style={{
          position: "absolute",
          top: 10,
          right: 50,
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        🗗
      </button>

      <img
        src={carouselImages[currentIndex].src}
        alt={carouselImages[currentIndex].alt}
        style={{ maxHeight: "90vh", maxWidth: "90vw", borderRadius: "10px" }}
      />
    </div>
  </div>
)}

</div>


            <div className="caption-box">
              <button className="prev-btn" onClick={prevSlide}>
                &#10094;
              </button>

              <div className="image-caption">
                {carouselImages[currentIndex].caption}
              </div>

              <button className="next-btn" onClick={nextSlide}>
                &#10095;
              </button>

            </div>
          </div>

          <h3>
            <span ref={typedDescRef}></span>
          </h3>
        </div>
      </FadeSection>

      {isMaximized && (
  <div
    className="modal-overlay"
    onClick={toggleMaximize}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.85)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()} // prevent closing modal on image click
      style={{ position: "relative" }}
    >
      {/* Close (X) button */}
      <button
        onClick={toggleMaximize}
        aria-label="Close maximize"
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          marginRight: "40px",
        }}
      >
        &times;
      </button>

      {/* Minimize button */}
      <button
        onClick={toggleMaximize}
        aria-label="Minimize image"
        style={{
          position: "absolute",
          top: 10,
          right: 50,
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        🗗
      </button>

      <img
        src={carouselImages[currentIndex].src}
        alt={carouselImages[currentIndex].alt}
        style={{ maxHeight: "90vh", maxWidth: "90vw", borderRadius: "10px" }}
      />
    </div>
  </div>
)}

      
      
    </section>
  );
}
