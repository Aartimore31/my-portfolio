import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "HealthLens AI",
    description:
      "AI-powered healthcare platform that provides symptom analysis, medicine reminders, health dashboards, and personalized Ayurveda recommendations for proactive healthcare management.",
    tech: ["React", "Node.js", "MongoDB", "Express", "AI/ML", "MERN"],
    github: "https://github.com/Aartimore31",
    live: "#",
  },
  {
    title: "Automatic Fruit Grading System",
    description:
      "Computer vision-based application that automatically grades fruits according to size, color, quality, and ripeness using machine learning and real-time image processing.",
    tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    github: "https://github.com/Aartimore31",
    live: "#",
  },
  {
    title: "Smart IoT Traffic Management",
    description:
      "IoT-enabled traffic monitoring system using sensors and AI algorithms to optimize traffic signals, reduce congestion, and improve smart city transportation.",
    tech: ["React", "Node.js", "IoT", "Sensors", "AI"],
    github: "https://github.com/Aartimore31",
    live: "#",
  },
  {
    title: "Training & Placement Management System",
    description:
      "A complete MERN stack application for managing student profiles, placement activities, company drives, and placement analytics in colleges.",
    tech: ["MongoDB", "Express", "React", "Node.js", "MERN"],
    github: "https://github.com/Aartimore31",
    live: "#",
  },
  {
    title: "DSBDA College Analytics",
    description:
      "Data analytics project that predicts student performance, visualizes academic trends, and generates useful reports using machine learning techniques.",
    tech: ["Python", "Pandas", "NumPy", "ML", "Visualization"],
    github: "https://github.com/Aartimore31",
    live: "#",
  },
  {
    title: "AI Resume Screening Tool",
    description:
      "AI-powered recruitment platform that extracts resume information, analyzes candidate skills, and ranks applicants automatically using NLP.",
    tech: ["Python", "NLP", "React", "Node.js", "AI"],
    github: "https://github.com/Aartimore31",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="section-tag">MY WORK</span>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <p className="projects-intro">
          A collection of projects demonstrating my expertise in Full Stack
          Development, Artificial Intelligence, Machine Learning, IoT, and Data
          Analytics. Every project reflects my passion for solving real-world
          problems through technology.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <div className="card-glow"></div>

            <div className="card-header">
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="title-box">
                <h3>{project.title}</h3>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-footer">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Live Demo →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;