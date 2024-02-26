import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      // disable: "mobile",
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Prakash S</h6>
        <p>prakash s © All CopyRights Reserved 2024</p>
      </footer>
    </>
  );
}

export default App;
