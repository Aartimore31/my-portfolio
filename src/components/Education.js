import React from "react";
import "./Education.css";

const educationData = [
  {
    title: "SSC (10th)",
    institute: "Bhimashankar Primary & Secondary School",
    year: "2020",
    marks: "94.60%",
    highlights: [
      "Ranked among top performers in the academic batch",
      "Built strong analytical and problem-solving foundation",
      "Consistently maintained high academic discipline and focus"
    ],
    desc: "Successfully completed secondary education with exceptional academic performance. Developed a strong base in Mathematics, Science, and logical reasoning. Demonstrated consistency, dedication, and a deep commitment towards excellence from an early stage."
  },
  {
    title: "Diploma in Information Technology",
    institute: "Government Polytechnic Nashik",
    year: "2020 - 2023",
    marks: "91.41%",
    highlights: [
      "Developed strong programming and technical fundamentals",
      "Worked on real-world practicals and mini projects",
      "Strengthened database management and software logic building"
    ],
    desc: "Completed Diploma in IT with excellent academic performance and hands-on technical exposure. Gained in-depth knowledge of programming, DBMS, and system design. Actively engaged in practical learning, problem-solving, and real-world implementation of technical concepts."
  },
  {
    title: "B.Tech in Information Technology",
    institute: "K.K. Wagh Institute of Engineering Education and Research, Nashik",
    year: "2023 - Present",
    marks: "Ongoing",
    highlights: [
      "Specializing in Data Science, MERN Stack, and AI",
      "Building industry-level projects with real-world applications",
      "Continuously improving problem-solving and DSA skills"
    ],
    desc: "Currently pursuing B.Tech with a strong focus on industry-relevant technologies including Data Science, Full Stack Development, and Artificial Intelligence. Actively building real-world projects, enhancing coding skills, and preparing for top-tier placements with a growth mindset."
  }
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Academic Excellence Journey 🚀</h2>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              
              <div className="top-row">
                <h3>{edu.title}</h3>
                <span className="marks-badge">{edu.marks}</span>
              </div>

              <p className="institute">{edu.institute}</p>
              <p className="year">{edu.year}</p>

              <p className="desc">{edu.desc}</p>

              {/* Highlights */}
              <ul className="highlights">
                {edu.highlights.map((point, i) => (
                  <li key={i}>✔ {point}</li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;