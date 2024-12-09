"use client";

import ArrowRight from "@/public/icons/arrow-right";
import { motion } from "framer-motion";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

const logoUrl =
  "https://res.cloudinary.com/dzdrs7dkj/image/upload/f_auto,q_auto/v1/fm-portfolio-assets/ce2jz2xgl4fttrz8ccrk";

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
      className="sticky flex items-center justify-between bg-[#f9f5f2] px-5 py-3 font-cabin lg:px-16"
      style={{ fontVariationSettings: '"wght" 700' }}
    >
      {/* logo */}
      <div className="flex items-center gap-x-3">
        <Image
          src={logoUrl}
          width={35}
          height={300}
          quality={100}
          alt="Fath & Mayang Production main logo, a startup logo for web dev, react dev"
        />
        <h2 className="hidden font-coolvetica text-xl lg:block">
          fath & mayang production
        </h2>
      </div>

      {/* burgermenu */}
      <BurgerMenu />

      {/* menu */}
      <div className="hidden flex-row gap-x-4 lg:flex">
        <motion.button
          className="flex cursor-pointer items-center overflow-hidden pr-3"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div
            className="flex translate-x-10 items-center"
            variants={arrowMotion}
          >
            <ArrowRight />
          </motion.div>
          <motion.div variants={textMotion}>My Work</motion.div>
        </motion.button>

        <motion.button
          className="flex cursor-pointer items-center gap-x-1 overflow-hidden pr-3"
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
          className="flex cursor-pointer items-center gap-x-1 overflow-hidden pr-3"
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
