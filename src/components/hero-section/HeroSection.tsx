import React from "react";
import HeroImage from "./HeroImage";
import StyledButton from "../ui/StyledButton";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="flex flex-col-reverse items-center justify-center lg:flex-row">
      <HeroImage />
      <div className="flex flex-col items-center gap-y-9 text-center text-lg text-[#52514e] lg:ml-10 lg:items-start lg:gap-y-3 lg:text-left">
        <h3>Hai, I&apos;m Fath</h3>
        <h1 className="font-coolvetica text-7xl font-extrabold text-[#282825] lg:text-8xl">
          FRONTEND <br /> DEVELOPER
          {/* TODO: Add typing animation as the title 
      Project Manager,  Digital Marketer, Back-end Developer */}
        </h1>
        <h3 className="mx-4 text-pretty lg:w-4/6">
          Transforming ideas into visually stunning and highly functional
          digital solutions, with a focus on performance, accessibility, and
          user experience.
        </h3>
        <div className="lg:mr-14 lg:mt-9 lg:place-self-end">
          {/* <HandleScroll targetId={targetCollab}> */}
          <Link href={"#collab-form"}>
            <StyledButton color="pink" text="Lets Collaborate" />
          </Link>
          {/* </HandleScroll> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
