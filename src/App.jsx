import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-portfolio-primary selection:bg-[#d4d4d8] selection:text-[#09090b] font-sans antialiased overflow-x-hidden">
      {/* Floating Glassmorphism Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
