import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "HealthLens AI",
    description:
      "AI-powered healthcare platform: symptom analysis, medicine tracker, health insights, and personalized Ayurveda recommendations for proactive health monitoring.",
    tech: ["React", "Node.js", "MongoDB", "Express", "AI/ML", "MERN"],
    github: "https://github.com/Aartimore31",
    live: "#"
  },
  {
    title: "Automatic Fruit Grading System",
    description:
      "Real-time video processing system that grades fruits based on size, color, and ripeness using computer vision, improving efficiency for agricultural businesses.",
    tech: ["Python", "OpenCV", "ML", "Video Processing"],
    github: "https://github.com/Aartimore31",
    live: "#"
  },
  {
    title: "Smart IoT Traffic Management",
    description:
      "IoT system monitoring urban traffic in real-time using sensors and AI. Optimizes signals and alerts authorities to reduce congestion.",
    tech: ["IoT", "Node.js", "React", "Sensors", "AI"],
    github: "https://github.com/Aartimore31",
    live: "#"
  },
  {
    title: "Training & Placement Management System",
    description:
      "Full-stack MERN application to manage student profiles, track placement activities, and provide analytics to improve placement efficiency in colleges.",
    tech: ["MongoDB", "Express", "React", "Node.js", "MERN"],
    github: "https://github.com/Aartimore31",
    live: "#"
  },
  {
    title: "DSBDA College Analytics",
    description:
      "Data Science & Big Data Analytics project predicting student performance, analyzing trends, and providing actionable insights for college administration.",
    tech: ["Python", "Pandas", "NumPy", "ML", "Data Visualization"],
    github: "https://github.com/Aartimore31",
    live: "#"
  },
  {
    title: "AI Resume Screening Tool",
    description:
      "Smart AI tool to evaluate resumes, extract skills, and rank candidates, improving recruitment efficiency for HR departments.",
    tech: ["Python", "NLP", "ML", "React", "Node.js"],
    github: "https://github.com/Aartimore31",
    live: "#"
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-intro">
          Highlighting real-world projects demonstrating my expertise in AI, IoT, MERN stack, and Data Analytics. Each project focuses on innovation, scalability, and impactful solutions.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn primary">
                GitHub
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn secondary">
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;