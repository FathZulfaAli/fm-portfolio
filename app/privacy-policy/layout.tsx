import type { Metadata } from "next";
import { cabin, coolveticaRg } from "@/public/fonts/fonts";
import Navbar from "@/src/components/navigation-bar/Navbar";
import Footer from "@/src/components/footer/Footer";

export const metadata: Metadata = {
  title: "privacy policy",
  description:
    "Fath Zulfa is a Freelance Developer with a management background specializing in WebApp and Mobile development. I can help content creators and solopreneurs overcome their media platform challenges.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`bg-[#f9f5f2] text-[#282825] ${cabin.variable} ${coolveticaRg.variable}`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
