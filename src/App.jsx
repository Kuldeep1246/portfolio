import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero/>
      <About />
      <Projects />
      <Skills/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
