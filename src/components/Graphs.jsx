import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import './Graphs.css';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import FadeSection from "./FadeSection";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function Graphs() {
  // Monthly data accuracy improvements reflecting dedication to data quality and integrity
  const barData = {
    labels: ['2024 (1st Sem)', '2024 (2nd Sem)', '2025 (1st Sem)', '2025 (2nd Sem)'],
    datasets: [
      {
        label: 'Data Accuracy (%)',
        data: [85, 90, 94, 97],
        backgroundColor: '#2563EB', // a professional blue shade
      },
    ],
  };

  // Customer segmentation showing analytical skills to derive meaningful insights for stakeholders
  const pieData = {
    labels: ['New Customers', 'Returning Customers', 'Churned Customers'],
    datasets: [
      {
        data: [42, 43, 15],
        backgroundColor: ['#EF4444', '#10B981', '#3B82F6'],
      },
    ],
  };

  // Visitor growth to demonstrate understanding of trends and business impact through data-driven strategies
  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Website Visitors',
        data: [130, 185, 220, 280],
        fill: false,
        borderColor: '#F59E0B',
        tension: 0.4,
      },
    ],
  };

  return (
    <section id="achievements" className="graphs-section">
      <FadeSection>
        <h2>Demonstrating My Data Analysis Capabilities</h2>
        <div className="graphs-container">
          <div className="graph-item">
            <h3>Consistent Data Quality Enhancement</h3>
            <Bar data={barData} />
            <p>
              Proven commitment to maintaining high data integrity by improving accuracy through rigorous validation and review processes. This ensures reliable data for informed business decisions.
            </p>
          </div>
          <div className="graph-item">
            <h3>Insightful Customer Segmentation Analysis</h3>
            <Pie data={pieData} />
            <p>
              Skilled in breaking down complex customer data to identify key segments, empowering teams to tailor strategies that boost customer retention and acquisition.
            </p>
          </div>
          <div className="graph-item">
            <h3>Tracking User Engagement Trends</h3>
            <Line data={lineData} />
            <p>
              Utilizing trend analysis to monitor website visitor growth, helping stakeholders evaluate the impact of data-driven initiatives and optimize user experience.
            </p>
          </div>
        </div>
      </FadeSection>
    </section>
  );
}

export default Graphs;
