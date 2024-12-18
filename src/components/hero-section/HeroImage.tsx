import Image from "next/image";
import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import SmoothTriangle from "@/public/icons/smooth-triangle";
import StyledButton from "../ui/StyledButton";
import Link from "next/link";
import { flyingThingsUrl, heroPhoto } from "@/public/cdns/heroImage.cdn";

function HeroImage() {
  const windowSize = useWindowSize();
  return (
    <>
      <div className="relative mt-10 flex lg:ml-60">
        <Image
          className="-z-10"
          src={heroPhoto}
          width={windowSize.width > 1024 ? 500 : 350}
          height={150}
          alt={"fath zulfa ali photo"}
        />
        <Image
          className="absolute -left-14 top-16 z-10 lg:-left-16"
          src={flyingThingsUrl}
          width={500}
          height={100}
          alt={"agile management, development growth flying image"}
        />
        <div className="absolute bottom-24 left-[165px]">
          <SmoothTriangle />
        </div>
        <Link href={"https://www.linkedin.com/in/fathzulfaali/"}>
          <StyledButton
            color="pink"
            text="Open to work"
            className="absolute bottom-16 left-48 h-7 min-w-40 rounded-full px-0 font-extrabold lg:disabled:cursor-default"
          />
        </Link>
      </div>
    </>
  );
}

export default HeroImage;
