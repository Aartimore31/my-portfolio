import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Aarti More. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/aarti-more-1508a5277" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Aartimore31" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
