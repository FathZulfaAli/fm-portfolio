"use client";

import ArrowRight from "@/public/arrow-right";
import { motion } from "framer-motion";
import Image from "next/image";

const logoUrl =
  "https://res.cloudinary.com/dzdrs7dkj/image/upload/v1732522765/fm-portfolio-assets/fm-logo.png";

const textMotion = {
  initial: {
    x: -30,
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
};

const arrowMotion = {
  rest: { x: -10, opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export default function Navbar() {
  return (
    <div
      className="flex justify-between items-center w-screen px-8 py-3 font-cabin"
      style={{ fontVariationSettings: '"wght" 700' }}
    >
      {/* logo */}
      <div className="flex items-center gap-x-3">
        <Image
          src={logoUrl}
          width={35}
          height={300}
          quality={90}
          alt="Fath & Mayang Production main logo, a startup logo for web dev, react dev"
        />
        <h2 className="text-xl font-coolvetica">fath & mayang production</h2>
      </div>

      {/* menu */}
      <div className="flex flex-row gap-x-4">
        <motion.button
          className="flex items-center cursor-pointer pr-3 overflow-hidden"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div
            className="flex items-center translate-x-10"
            variants={arrowMotion}
          >
            <ArrowRight />
          </motion.div>
          <motion.div variants={textMotion}>My Work</motion.div>
        </motion.button>

        <motion.button
          className="flex items-center gap-x-1 cursor-pointer pr-3 overflow-hidden"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div className="flex items-center" variants={arrowMotion}>
            <ArrowRight />
          </motion.div>
          <motion.div className="-translate-x-1" variants={textMotion}>
            About me
          </motion.div>
        </motion.button>
        <motion.button
          className="flex items-center gap-x-1 cursor-pointer pr-3 overflow-hidden"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div className="flex items-center" variants={arrowMotion}>
            <ArrowRight />
          </motion.div>
          <motion.div className="-translate-x-1" variants={textMotion}>
            Blog
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
