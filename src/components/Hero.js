import React from "react";
import "./Hero.css";
import profileImg from "./aartipic4.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* TEXT */}
        <div className="hero-content fade-left">
          <p className="hero-subtitle">Software Developer Portfolio</p>

          <h1 className="hero-title">Aarti More</h1>

          <h2 className="hero-tagline">
            Crafting Scalable, Modern & Impactful Digital Solutions
          </h2>

          <p className="hero-description">
            Passionate and detail-oriented Information Technology student
            specializing in MERN Stack development. Focused on building
            high-performance, user-centric web applications.
          </p>

          <div className="hero-buttons">
            <a href="/AartiMore.pdf" download className="btn primary">
              Download Resume
            </a>

            <a href="#projects" className="btn secondary">
              Explore Work
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hero-image fade-right">
          <div className="image-frame float">
            <img src={profileImg} alt="Aarti More" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;