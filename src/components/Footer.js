import React from "react";
import "./Footer.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-left">

          <h2>
            Aarti <span>More</span>
          </h2>

          <p>
            Passionate MERN Stack Developer dedicated to building
            modern, scalable and user-friendly web applications.
            Always learning, always creating.
          </p>

        </div>

        {/* CENTER */}

        <div className="footer-center">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

        {/* RIGHT */}

        <div className="footer-right">

          <h3>Connect</h3>

          <div className="footer-social">

            <a
              href="https://github.com/Aartimore31"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aarti-more-1508a5277"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          <a href="#home" className="back-top">

            <FaArrowUp />

            Back to Top

          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>

          © {year} Aarti More.

          Made with <FaHeart className="heart" />

          using React.

        </p>

      </div>

    </footer>
  );
};

export default Footer;