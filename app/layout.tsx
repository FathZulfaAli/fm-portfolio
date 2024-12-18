import type { Metadata } from "next";
import "./globals.css";
import { cabin, coolveticaRg } from "@/public/fonts/fonts";

export const metadata: Metadata = {
  title: "🚀 Turning Ideas into Digital Reality 🤙 Fath Zulfa",
  description:
    "Fath Zulfa is a Freelance Developer with a management background specializing in WebApp and Mobile development. I can help content creators and solopreneurs overcome their media platform challenges.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#f9f5f2] text-[#282825] ${cabin.variable} ${coolveticaRg.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
