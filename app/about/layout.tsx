import type { Metadata } from "next";
import { cabin, coolveticaRg } from "@/public/fonts/fonts";
import Navbar from "@/src/components/navigation-bar/Navbar";
import Footer from "@/src/components/footer/Footer";

export const metadata: Metadata = {
  title: "About Me",
  description: "About Fath Zulfa Ali, Freelance WebApp and Mobile Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`bg-[#f9f5f2] ${cabin.variable} ${coolveticaRg.variable}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
