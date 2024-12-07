"use client";

import ExperienceSection from "@/src/components/experience-section/ExperienceSection";
import HeroSection from "@/src/components/hero-section/HeroSection";
import Navbar from "@/src/components/hero-section/Navbar";

export default function Home() {
  return (
    <main className="font-cabin">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
    </main>
  );
}
