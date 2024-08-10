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
      className="hidden sm:block px-2 py-1 bg-black text-white text-sm rounded"
    >
      {text}
    </div>
  );
};

const IconNameDisplay = ({ text, onClose }) => {
  return (
    <div className="sm:hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">{text}</h2>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Technologies = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    position: { x: 0, y: 0 },
  });
  const [activeIcon, setActiveIcon] = useState("");

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

  const handleIconClick = (text) => {
    setActiveIcon(text);
  };

  const handleClose = () => {
    setActiveIcon("");
  };

  const renderIcon = (IconComponent, text, color, duration) => (
    <motion.div
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
      onMouseMove={(e) => handleMouseMove(e, text)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleIconClick(text)}
    >
      <IconComponent className={`text-7xl ${color}`} />
    </motion.div>
  );

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
        {renderIcon(FaHtml5, "HTML5", "text-orange-500", 2.5)}
        {renderIcon(IoLogoCss3, "CSS3", "text-blue-500", 3)}
        {renderIcon(RiJavascriptFill, "JavaScript", "text-yellow-400", 3.5)}
        {renderIcon(RiReactjsLine, "ReactJS", "text-cyan-400", 4)}
        {renderIcon(RiTailwindCssLine, "Tailwind CSS", "text-blue-500", 4.5)}
        {renderIcon(FaBootstrap, "Bootstrap", "text-violet-800", 5)}
        {renderIcon(SiMysql, "MySQL", "text-blue-400", 5.5)}
        {renderIcon(SiPhp, "PHP", "text-purple-400", 6)}
        {renderIcon(FaNodeJs, "NodeJS", "text-[#84ba64]", 6.5)}
        {renderIcon(SiExpress, "ExpressJS", "text-white", 7)}
        {renderIcon(BiLogoMongodb, "MongoDB", "text-green-700", 7.5)}
        {renderIcon(IoLogoFirebase, "Firebase", "text-[#FFB22C]", 7.5)}
      </motion.div>
      {tooltip.visible && (
        <Tooltip text={tooltip.text} position={tooltip.position} />
      )}
      {activeIcon && (
        <IconNameDisplay text={activeIcon} onClose={handleClose} />
      )}
    </div>
  );
};

export default Technologies;
