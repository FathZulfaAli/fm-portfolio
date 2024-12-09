"use client";

import ExperienceSection from "@/src/components/experience-section/ExperienceSection";
import CollabForm from "@/src/components/footer/CollabForm";
import Footer from "@/src/components/footer/Footer";
import HeroSection from "@/src/components/hero-section/HeroSection";
import Navbar from "@/src/components/navigation-bar/Navbar";

export default function Home() {
  return (
    <main className="font-cabin">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <CollabForm />
      <Footer />
    </main>
  );
}
