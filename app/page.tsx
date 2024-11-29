"use client";

import HeroSection from "@/src/components/HeroSection";
import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
    <main className="font-cabin">
      <Navbar />
      <HeroSection />
    </main>
  );
}
