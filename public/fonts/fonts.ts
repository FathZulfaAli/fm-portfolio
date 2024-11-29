import { Cabin } from "next/font/google";
import localFont from "next/font/local";

export const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
  display: "swap",
});

export const coolveticaRg = localFont({
  src: "./CoolveticaRg.woff2",
  variable: "--font-coolvetica",
  preload: true,
});
