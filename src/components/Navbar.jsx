import logo from "../assets/kevinRushLogo.png";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Navbar = () => {
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
      <div className="m-8 mr-0 flex items-center justify-content gap-4 text-2xl">
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
      </div>
    </nav>
  );
};

export default Navbar;
