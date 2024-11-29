import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cabin: "var(--font-cabin)",
        coolvetica: "var(--font-coolvetica)",
      },
    },
  },
  plugins: [],
} satisfies Config;
