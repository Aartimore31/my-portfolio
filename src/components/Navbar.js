import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Aarti More</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/AartiMore.pdf" download className="cv-button">Download CV</a>

        {/* Social Icons */}
        <div className="social-icons">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.728v20.543C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.271V1.728C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.545c-1.14 0-2.06-.924-2.06-2.062 0-1.138.92-2.063 2.06-2.063s2.06.925 2.06 2.063c0 1.138-.92 2.062-2.06 2.062zM20.452 20.452h-3.56v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.46-2.154 2.968v5.699h-3.56V9h3.42v1.561h.049c.477-.905 1.637-1.862 3.37-1.862 3.6 0 4.268 2.368 4.268 5.446v6.305z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.403c1.018.005 2.045.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.628-5.479 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;