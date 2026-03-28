import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left Side */}
        <div className="about-text">
          <h2>About Me 🚀</h2>

          <p className="main-desc">
            I am a highly motivated and passionate Information Technology student,
            currently pursuing B.Tech with a strong academic background and a deep
            interest in building real-world software solutions. With consistent
            performance throughout my academic journey, I have developed a strong
            foundation in problem-solving, logical thinking, and software development.
          </p>

          <p>
            I specialize in <span>MERN Stack Development</span> and have hands-on
            experience in building responsive, user-friendly, and scalable web
            applications. I am continuously improving my skills in
            <span> Data Science</span>, <span>AI</span>, and modern development
            technologies to stay industry-ready.
          </p>

          <p>
            I believe in continuous learning, consistency, and practical
            implementation. My goal is to contribute to impactful projects,
            solve real-world problems, and grow into a highly skilled software engineer.
          </p>

          {/* Key Points */}
          <div className="about-points">
            <div>✔ Strong Academic Background (94% + 91%)</div>
            <div>✔ MERN Stack Developer</div>
            <div>✔ Problem Solving & DSA Focused</div>
            <div>✔ Quick Learner & Self-Motivated</div>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="about-cards">

          <div className="about-card">
            <h3>🚀 Tech Stack</h3>
            <p>React.js, Node.js, Express.js, MongoDB, JavaScript, Python, C++</p>
          </div>

          <div className="about-card">
            <h3>💡 Core Strengths</h3>
            <p>Problem Solving, Logical Thinking, Clean Code, Team Collaboration</p>
          </div>

          <div className="about-card">
            <h3>🎯 Career Goal</h3>
            <p>
              To secure a challenging role in a reputed company where I can apply
              my skills, contribute to impactful projects, and grow continuously
              as a software developer.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;