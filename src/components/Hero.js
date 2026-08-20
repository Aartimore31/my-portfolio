import React from "react";
import "./Hero.css";
import profile from "./aartipic5.jpg";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaJava
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript
} from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Background */}

      <div className="hero-bg"></div>

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">

          <div className="hero-badge">
            <span className="dot"></span>
            Available for Internship & Full-Time Opportunities
          </div>

          <h4>
            HELLO, I'M
          </h4>

          <h1>
            Aarti
            <span> More</span>
          </h1>

          <h2>
            Full Stack MERN Developer
          </h2>

          <p>
            Passionate Information Technology student specializing in
            modern web development using the MERN Stack.
            I enjoy building scalable, responsive and user-friendly
            applications with clean code and elegant UI.
          </p>

          {/* Quick Skills */}

          <div className="quick-skills">

            <span>MERN Stack</span>

            <span>React</span>

            <span>Node.js</span>

            <span>MongoDB</span>

            <span>Express</span>

            <span>Java</span>

          </div>

          {/* Buttons */}

          <div className="hero-buttons">

            <a
              href="/Aarti_More_Information_Technology_B.pdf (2).pdf"
              download
              className="resume-btn"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#projects"
              className="project-btn"
            >
              <FaArrowRight />
              Projects
            </a>

          </div>

          {/* Social */}

          <div className="social">

            <a
              href="https://github.com/Aartimore31"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a href="mailto:your@email.com">
              <FaEnvelope />
            </a>

          </div>

          {/* Stats */}

          <div className="stats">

            <div>

              <h3>6+</h3>

              <p>Projects</p>

            </div>

            <div>

              <h3>15+</h3>

              <p>Technologies</p>

            </div>

            <div>

              <h3>2</h3>

              <p>Internships</p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="circle one"></div>

          <div className="circle two"></div>

          <div className="circle three"></div>

          <img
            src={profile}
            alt="Aarti More"
          />

          {/* Floating Tech */}

          <div className="floating react">

            <FaReact />

          </div>

          <div className="floating node">

            <FaNodeJs />

          </div>

          <div className="floating mongo">

            <SiMongodb />

          </div>

          <div className="floating express">

            <SiExpress />

          </div>

          <div className="floating js">

            <SiJavascript />

          </div>

          <div className="floating java">

            <FaJava />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;