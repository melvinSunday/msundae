import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { GiClick } from "react-icons/gi";
import classNames from "classnames";
import Note from "./Note";
const Projects = ({ theme }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%" }}
                className="mb-6 pr-5 rounded object-cover"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              {project.hasNotebutton && (
                <button
                  ref={dropdownRef}
                  onClick={handleDropdown}
                  className="bg-pink-700 p-2 py-1 rounded-[3px] flex items-center mb-2"
                >
                  Note <GiClick className="ml-1" /> {dropdown && <Note />}
                </button>
              )}

              <p
                className={classNames("mb-4", {
                  "text-neutral-400": theme === "dark",
                  "text-neutral-700": theme === "light",
                })}
              >
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={classNames(
                      "mr-2 mb-2 rounded px-2 py-1 text-sm font-medium text-purple-600",
                      {
                        "bg-neutral-900": theme === "dark",
                        "bg-neutral-200 opacity-70": theme === "light",
                      }
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-1 font-semibold text-white bg-purple-600 rounded hover:bg-purple-700 transition duration-300 ease-in-out"
              >
                Take a look
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
