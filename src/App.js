import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // For global styles like scroll
import Education from './components/Education';

function App() {
  return (
    <div className="font-sans bg-[#010101] text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
