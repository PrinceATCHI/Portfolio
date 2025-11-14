import React, { useState } from "react";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ... imports inchangés
export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Intro onEnter={() => setEntered(true)} />
      <div className={`transition-opacity duration-700 ${entered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full shadow-md">
          {/* header */}
        </header>

        <main className="pt-28">
          {/* Passe entered à Hero */}
          <Hero started={entered} />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
