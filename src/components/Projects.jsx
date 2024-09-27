import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { GiClick } from "react-icons/gi";
import classNames from "classnames";
import Note from "./Note";
import PropType from "prop-types";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text.jsx";

const Projects = ({ theme }) => {
  const [dropdown, setDropdown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

  const handleSeeMore = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

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
                <div className="relative">
                  <button
                    ref={dropdownRef}
                    onClick={handleDropdown}
                    className="bg-[#8C3061] p-2 py-1 rounded-[3px] flex items-center text-white mb-2"
                  >
                    Note <GiClick className="ml-1" />
                  </button>
                  <AnimatePresence>
                    {dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute z-10 mt-2 bg-[#8C3061] shadow-lg text-white rounded p-4"
                      >
                        <Note />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              <p
                className={classNames("mb-4 text-justify", {
                  "text-neutral-400": theme === "dark",
                  "text-neutral-700": theme === "light",
                })}
              >
                {project.description.length > 350
                  ? `${project.description.slice(0, 350)}... `
                  : project.description}
                {project.description.length > 350 && (
                  <button
                    onClick={() => handleSeeMore(project)}
                    className="text-blue-500 hover:underline ml-1"
                  >
                    See more
                  </button>
                )}
              </p>
              <div className="mb-2 flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={classNames(
                      "mr-2 mb-2 rounded px-2 py-1 text-sm font-medium ",
                      {
                        "bg-neutral-800 text-white": theme === "dark",
                        "bg-neutral-200 opacity-70 text-black":
                          theme === "light",
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
                className="inline-block font-semibold transition duration-300 ease-in-out"
              >
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-800  dark:hover:bg-neutral-800"
                  )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-200 hover:duration-300 hover:dark:text-neutral-200">
                    <span> Take a look</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </div>
              </a>
            </motion.div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white dark:bg-neutral-800 p-8 rounded-lg max-w-2xl w-full m-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">{selectedProject.title}</h2>
              <p className="mb-6 text-neutral-700 dark:text-neutral-300">{selectedProject.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Visit Project
                </a>
                <button
                  onClick={closeModal}
                  className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Projects.propTypes = {
  theme: PropType.string.isRequired,
};

export default Projects;
