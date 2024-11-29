import Image from "next/image";
import React from "react";

const heroImageUrl =
  "https://res.cloudinary.com/dzdrs7dkj/image/upload/f_auto,q_auto/v1/fm-portfolio-assets/fm-hero";

function HeroSection() {
  return (
    <section className="flex flex-row items-center ">
      <Image
        className="mt-3"
        src={heroImageUrl}
        alt="Fath & Mayang Production. Web Apps | Websites | Android APKs, Turning Ideas into Digital Reality, User Experience Focused Development"
        width={600}
        height={100}
      />
      <div className="flex flex-col">
        <h3>Hai, I&apos;m Fath</h3>
        <h1 className="text-9xl font-bold font-coolvetica">
          Front-end <br /> Developer
          {/* TODO: Add typing animation as the title 
          Project Manager,  Digital Marketer, Back-end Developer */}
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
