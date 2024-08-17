import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import classNames from "classnames";
import LoadingLetters from "./components/LoadingLetters";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let time = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(time);
  }, []);

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
          "text-neutral-300": theme === "dark",
          "bg-transparent text-neutral-900": theme === "light",
        }
      )}
    >
      {isLoading ? (
        <LoadingLetters />
      ) : (
        <>
          {/* Background for Dark Mode */}
          {theme === "dark" && (
            <div className="fixed inset-0 z-[-1] bg-[#111010]">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1E201E,transparent)]"></div>
            </div>
          )}
          {/* Background for Light Mode */}
          {theme === "light" && (
            <div className="fixed inset-0 z-[-1] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          )}
          <div className="relative z-10 container mx-auto px-8 min-h-screen">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <Technologies />
            <Experience theme={theme} />
            <Projects theme={theme} />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
};
export default App;
