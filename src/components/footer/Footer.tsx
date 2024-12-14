import Github from "@/public/icons/github";
import Instagram from "@/public/icons/instagram";
import LinkedIn from "@/public/icons/linked-in";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const logoUrl =
  "https://res.cloudinary.com/dzdrs7dkj/image/upload/f_auto,q_auto/v1/fm-portfolio-assets/ce2jz2xgl4fttrz8ccrk";

function Footer() {
  return (
    <footer className="mt-28 flex flex-col items-center justify-between border-t-2 border-t-black bg-white px-20 py-5 lg:flex-row">
      <div className="flex items-center gap-x-3">
        <Image
          src={logoUrl}
          width={35}
          height={300}
          quality={100}
          alt="Fath & Mayang Production main logo, a startup logo for web dev, react dev"
        />
        <div className="text-[#52514e]">
          <h2 className="font-coolvetica text-xl">Fath Zulfa Ali</h2>
          <h2 className="font-coolvetica text-xl">Wep App Developer</h2>
        </div>
      </div>
      <div className="my-5 flex flex-col items-center lg:my-0">
        <p className="self-center lg:self-start">Follow:</p>
        <div className="flex flex-row gap-x-3">
          <Link
            href={"https://www.linkedin.com/in/fathzulfaali/"}
            target="_blank"
          >
            <LinkedIn width={24} height={24} />
          </Link>
          <Link
            href={"https://www.instagram.com/fathandmayang"}
            target="_blank"
          >
            <Instagram width={24} height={24} />
          </Link>
          <Link href={"https://github.com/FathZulfaAli"} target="_blank">
            <Github width={24} height={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
