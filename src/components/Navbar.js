import React, { useState, useEffect } from "react";
import "./Navbar.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? "navbar navbar-scroll" : "navbar"}>

      <div className="navbar-container">

        {/* LOGO */}

        <a href="#home" className="logo">
          <span>Aarti</span> More
        </a>

        {/* NAVIGATION */}

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="/AartiMore.pdf"
            download
            className="resume-btn mobile-btn"
            onClick={closeMenu}
          >
            <FaDownload />
            Resume
          </a>

        </nav>

        {/* RIGHT */}

        <div className="nav-right">

          <div className="nav-social">

            <a
              href="https://github.com/Aartimore31"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aarti-more-1508a5277/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

          </div>

          <a
            href="/Aarti_More_Information_Technology_B.pdf (2).pdf"
            download
            className="resume-btn desktop-btn"
          >
            <FaDownload />
            Resume
          </a>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;