import React from "react";
import { motion } from "framer-motion";

type Color = {
  green: string;
  yellow: string;
  blue: string;
  pink: string;
  lime: string;
  red: string;
  white: string;
};

const colorOption: Color = {
  lime: "#c8f031",
  green: "#01cc65",
  yellow: "#fee145",
  blue: "#3565e6",
  pink: "#e14f9d",
  red: "#dc2626",
  white: "#fff",
};

type ButtonProps = {
  color: keyof Color;
  text: string;
  className?: string;
};

function StyledButton({ color, text, className = "px-5 py-3" }: ButtonProps) {
  return (
    <motion.button
      style={{
        backgroundColor: colorOption[color], // Apply color dynamically
        // padding: "10px 20px",
        border: "2px solid #000", // Corrected the border definition
        borderRadius: "5px",
        color: "black",
        cursor: "pointer",
        width: "fit-content",
        boxShadow: "3.5px 3.5px 0px #000",
      }}
      className={`${className}`}
      initial={{ boxShadow: "3.5px 3.5px 0px #000" }} // Initial shadow
      whileHover={{
        boxShadow: "7px 7px 0px #000",
        x: "-3px", // Move 5px to the left
        y: "-3px", // Move 5px up
        transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
      }}
      whileTap={{
        scale: 0.98, // Slightly scale down when clicked
      }}
    >
      {text}
    </motion.button>
  );
}

export default StyledButton;
