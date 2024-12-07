import React from "react";
import { motion } from "framer-motion";
import ArrowRight from "@/public/icons/arrow-right";

type ModalMenuProps = {
  isOpen: boolean;
};

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

function ModalMenu({ isOpen }: ModalMenuProps) {
  return (
    <motion.div
      className="fixed left-0 top-0 flex w-full items-center justify-center lg:hidden"
      initial={{ y: "-120%" }}
      animate={{ y: isOpen ? "60%" : "-120%" }}
      exit={{ y: "-120%" }}
      transition={{ duration: 1, ease: "backInOut" }}
    >
      <div className="modal-content w-11/12 rounded-3xl border-black bg-white p-6">
        <div className="flex -translate-x-5 flex-col gap-y-4">
          <motion.button
            className="flex cursor-pointer items-center gap-x-1 overflow-hidden pr-3"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div className="flex items-center" variants={arrowMotion}>
              <ArrowRight />
            </motion.div>
            <motion.div variants={textMotion}> My Work</motion.div>
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
    </motion.div>
  );
}

export default ModalMenu;
