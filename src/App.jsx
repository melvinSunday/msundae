import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import classNames from "classnames";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={classNames(
        "overflow-x-hidden overflow-y-auto antialiased selection:bg-cyan-300 selection:text-cyan-900 relative min-h-screen",
        {
          "bg-transparent text-neutral-300": theme === "dark",
          "bg-transparent text-neutral-900": theme === "light",
        }
      )}
    >
      {/* Background for Dark Mode */}
      {theme === "dark" && (
        <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      )}

      {/* Background for Light Mode */}
      {theme === "light" && (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      )}

      <div className="container mx-auto px-8 min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Technologies />
        <Experience theme={theme} />
        <Projects theme={theme} />
        <Contact />
      </div>
    </div>
  );
};

export default App;
