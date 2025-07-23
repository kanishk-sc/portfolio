import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "LawyerUp",
    description: "A chatbot that recommends lawyers based on user input using decision trees and keyword analysis.",
    tech: ["Python", "NLP", "Decision Trees", "Chatbot"],
    demo: "#",
    github: "#",
  },
  {
    title: "Canvas Clone",
    description: "A student information system with course management, grading, and notifications.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demo: "#",
    github: "#",
  },
  {
    title: "Sales and Customer Insights Dashboard",
    description: "Built using Python, SQL, and Power BI to preprocess 2,000+ records from Excel and cloud sources, improving processing by 20%. Developed an interactive dashboard visualizing sales trends and demographics, using DAX to uncover 5+ insights on retention and revenue growth.",
    tech: ["Python", "SQL", "Power BI", "DAX"],
    demo: "#",
    github: "#",
  },
  {
    title: "Customer Segmentation and Predictive Analytics",
    description: "Used Alteryx, Python, and Snowflake to segment and analyze 1,500 customer records. Built K-Means and Logistic Regression models with up to 75% accuracy. Power BI reports identified 3 key customer groups and provided predictive marketing insights.",
    tech: ["Alteryx", "Python", "Snowflake", "K-Means", "Logistic Regression", "Power BI"],
    demo: "#",
    github: "#",
  },
  {
    title: "Financial Risk Analysis and Forecasting System",
    description: "Developed an SSIS and Snowflake ETL pipeline to compute financial risk metrics. Implemented ARIMA forecasting models in Python with 85% accuracy. Visualized loan default trends and insights in Tableau to support decision-making.",
    tech: ["SSIS", "Snowflake", "Python", "ARIMA", "Tableau"],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 text-center relative overflow-hidden mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold code-glow mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.2 }}
              className="bg-cyber-bg/80 border border-matrix-green/20 rounded-xl shadow-glow p-6 flex flex-col items-start text-left hover:shadow-2xl hover:border-cyber-accent transition-all"
            >
              <h3 className="text-2xl font-mono font-bold code-glow mb-2">{project.title}</h3>
              <p className="text-matrix-green font-mono mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-cyber-accent/20 text-cyber-accent font-mono rounded text-xs">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
