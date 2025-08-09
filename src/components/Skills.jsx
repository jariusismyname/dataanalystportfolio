import React from 'react';
import './Skills.css';
import FadeSection from "./FadeSection";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <FadeSection> 
        <div className="skills-container">
          <div className="skills-left">
            <h2>Technical Skills</h2>
            <ul>
              <li>📊 Data Visualization with Tableau and Power BI — creating clear, actionable dashboards for business insights</li>
              <li>📈 Advanced Microsoft Excel — proficient with Pivot Tables, VLOOKUP, and data analysis functions</li>
              <li>🧮 Python for Data Analysis — experienced with Pandas, NumPy, and Matplotlib for data manipulation and visualization</li>
              <li>💾 SQL querying — skilled in writing efficient queries, including JOINs, CTEs, and Window Functions to extract and analyze complex datasets</li>
            </ul>
          </div>    
          <div className="skills-right">
            <h2>Projects Highlight</h2>
            <ul>
              <li>🧠 Sentiment Analysis on Product Reviews — applying NLP techniques to uncover customer insights</li>
              <li>🏙️ Real Estate Price Prediction Model — developed regression models to forecast housing prices based on market trends</li>
              <li>📉 COVID-19 Trend Dashboard — designed an interactive dashboard to monitor pandemic data and support public health decisions</li>
              <li>📦 Sales Forecasting Model — built predictive analytics to optimize inventory and improve business planning</li>
            </ul>
          </div>
        </div>
      </FadeSection>   
    </section>
  );
}

export default Skills;
