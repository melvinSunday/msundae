import { HERO_CONTENT } from "../constants";
import { color, delay, motion } from "framer-motion";
import profilePic from "../assets/profile4.webp";
import BlurIn from "@/components/magicui/blur-in";
import BlurFade from "@/components/magicui/blur-fade";
import "./Hero.css";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start sm:items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-3 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              <BlurIn word={"Melvin Domingo"} />
            </motion.h1>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl tracking-tight text-left sm:text-center lg:text-left"
            >
              <div className="gradient-text">
                <BlurIn word={"Full Stack Developer"} />
              </div>
            </motion.div>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-left sm:text-center lg:text-left"
              style={{ fontSize: "1.2rem" }}
            >
              <BlurIn word={HERO_CONTENT} />
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <BlurFade delay={1.2} duration={1} blur="10px">
              <img
                className="rounded-2xl w-[500px] h-[500px] object-cover"
                src={profilePic}
                alt="profile pic"
              />
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
