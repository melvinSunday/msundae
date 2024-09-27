import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import classNames from "classnames";

const Experience = ({ theme }) => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="flex justify-center">
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p
                  className={classNames("mb-2 text-sm", {
                    "text-neutral-400": theme === "dark",
                    "text-neutral-700": theme === "light",
                  })}
                >
                  {experience.year}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role} -{" "}
                  <span
                    className={classNames("text-sm", {
                      "text-purple-100": theme === "dark",
                      "text-black": theme === "light",
                    })}
                  >
                    {experience.company}
                  </span>
                </h6>
                <p
                  className={classNames("mb-4 text-justify", {
                    "text-neutral-400": theme === "dark",
                    "text-neutral-700": theme === "light",
                  })}
                >
                  {experience.description}
                </p>
                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, index) => (
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
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
