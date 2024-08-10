import React, { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tooltip = ({ text, position }) => {
  return (
    <div
      style={{
        top: position.y,
        left: position.x,
        position: "fixed",
        pointerEvents: "none",
      }}
      className="px-2 py-1 bg-black text-white text-sm rounded"
    >
      {text}
    </div>
  );
};

const Technologies = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    position: { x: 0, y: 0 },
  });

  const handleMouseMove = (e, text) => {
    setTooltip({
      visible: true,
      text,
      position: { x: e.clientX + 10, y: e.clientY + 10 },
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, text: "", position: { x: 0, y: 0 } });
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "HTML5")}
          onMouseLeave={handleMouseLeave}
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "CSS3")}
          onMouseLeave={handleMouseLeave}
        >
          <IoLogoCss3 className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "JavaScript")}
          onMouseLeave={handleMouseLeave}
        >
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "ReactJS")}
          onMouseLeave={handleMouseLeave}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "Tailwind CSS")}
          onMouseLeave={handleMouseLeave}
        >
          <RiTailwindCssLine className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "Bootstrap")}
          onMouseLeave={handleMouseLeave}
        >
          <FaBootstrap className="text-7xl text-violet-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "MySQL")}
          onMouseLeave={handleMouseLeave}
        >
          <SiMysql className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "PHP")}
          onMouseLeave={handleMouseLeave}
        >
          <SiPhp className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "NodeJS")}
          onMouseLeave={handleMouseLeave}
        >
          <FaNodeJs className="text-7xl text-[#84ba64]" />
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "ExpressJS")}
          onMouseLeave={handleMouseLeave}
        >
          <SiExpress className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(7.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "MongoDB")}
          onMouseLeave={handleMouseLeave}
        >
          <BiLogoMongodb className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(7.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          onMouseMove={(e) => handleMouseMove(e, "Firebase")}
          onMouseLeave={handleMouseLeave}
        >
          <IoLogoFirebase className="text-7xl text-[#FFB22C]" />
        </motion.div>
      </motion.div>
      {tooltip.visible && (
        <Tooltip text={tooltip.text} position={tooltip.position} />
      )}
    </div>
  );
};

export default Technologies;
