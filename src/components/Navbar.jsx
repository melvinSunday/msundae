import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import classNames from "classnames";
import "./Navbar.css";
const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <h1
          style={{ fontSize: "1.7rem", fontFamily: "Inter", fontWeight: "500" }}
        >
          m.sundae
        </h1>
      </div>
      <div className="m-8 mr-0 flex items-center justify-content gap-4 text-2xl socmeds">
        <a
          href="https://www.facebook.com/tezuka.kunimtsu.5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/melvinSunday"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/m.sundae_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/melvin-domingo-3ab6ba2a7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <button
          onClick={toggleTheme}
          className="focus:outline-none"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-500 transition-transform transform hover:scale-110" />
          ) : (
            <FaMoon className="text-gray-800 transition-transform transform hover:scale-110" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
