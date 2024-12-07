import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lime: "#c8f031",
        green: "#01cc65",
        yellow: "#fee145",
        blue: "#3565e6",
        pink: "#e14f9d",
      },
      fontFamily: {
        cabin: "var(--font-cabin)",
        coolvetica: "var(--font-coolvetica)",
      },
    },
  },
  plugins: [],
} satisfies Config;
