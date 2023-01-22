import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Experience from "./components/Experience";

export const Portfolio = React.createContext();

function App() {
  const [goToTop, setGoToTop] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClickBar = () => {
    // Click => Show Navbar
    setNav(!nav);
  };

  const handleToTop = () => {
    setGoToTop(window.scrollY >= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleToTop);
    return () => {
      window.removeEventListener("scroll", handleToTop);
    };
  }, []);

  return (
    <Portfolio.Provider value={{ nav, handleClickBar }}>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {goToTop && (
          <Link to="home" smooth={true} duration={500}>
            <button className="hidden md:block fixed right-8 bottom-5 cursor-pointer text-white text-5xl">
              <BsArrowUpCircleFill className="hover:text-pink-600 hover:bg-white hover:rounded-full" />
            </button>
          </Link>
        )}
      </div>
    </Portfolio.Provider>
  );
}

export default App;
