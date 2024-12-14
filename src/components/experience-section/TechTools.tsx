import Expo from "@/public/icons/expo";
import FramerMotion from "@/public/icons/framer-motion";
import MongoDb from "@/public/icons/mongo-db";
import NextJs from "@/public/icons/next-js";
import ReactNative from "@/public/icons/react-native";
import TailwindCss from "@/public/icons/tailwind-css";
import React from "react";
import StyledButton from "../ui/StyledButton";
import Link from "next/link";

function TechTools() {
  return (
    <section
      id="tech-tools"
      className="mt-28 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center text-pretty text-center font-coolvetica text-6xl">
        <h1>Tech and Tools</h1>
        <h6 className="items-center text-pretty text-center font-cabin text-xl lg:w-2/4">
          I primarily work with these tools and technologies, but my experience
          extends beyond them, including{" "}
          <Link href={"https://www.prisma.io/"} target="_blank">
            <b>Prisma</b>
          </Link>
          ,{" "}
          <Link
            href={"https://solana.com/docs/clients/javascript"}
            target="_blank"
          >
            <b>Solana Web3 Js</b>
          </Link>
          ,{" "}
          <Link href={"https://www.chakra-ui.com/"} target="_blank">
            <b>Chakra Ui</b>
          </Link>
          , and others. My performance is:
        </h6>
      </div>
      <div className="cartoon-shadow relative mt-10 flex flex-col rounded-3xl p-5 lg:pb-10">
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:grid-rows-2">
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <Link href={"https://nextjs.org/"} target="_blank">
              <NextJs width={48} height={48} />
            </Link>
            <h1 className="font-coolvetica text-3xl">Web Development</h1>
            <p>
              React Full-Stack Framework Leverages serverless architecture for
              scalable and efficient web applications.
            </p>
          </div>
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <Link href={"https://reactnative.dev/"} target="_blank">
              <ReactNative width={48} height={48} />
            </Link>
            <h1 className="font-coolvetica text-3xl">Mobile Development</h1>
            <p>
              Build cross-platform mobile apps effortlessly with{" "}
              <Link href={"https://reactnative.dev/"} target="_blank">
                <b>React Native</b>
              </Link>{" "}
              and{" "}
              <Link href={"https://expo.dev/"} target="_blank">
                <b>Expo</b>
              </Link>
              .
            </p>
          </div>
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <Link href={"https://expo.dev/"} target="_blank">
              <Expo width={48} height={48} />
            </Link>
            <h1 className="font-coolvetica text-3xl">Server and Deploy</h1>
            <p>
              Web apps hosted on{" "}
              <Link href={"https://vercel.com/home"} target="_blank">
                <b>Vercel</b>
              </Link>{" "}
              , mobile apps built via{" "}
              <Link href={"https://expo.dev/"} target="_blank">
                <b>Expo</b>
              </Link>{" "}
              . Server built with{" "}
              <Link
                href={"https://nodejs.org/en/learn/typescript/run"}
                target="_blank"
              >
                <b>TS Node</b>
              </Link>{" "}
              and{" "}
              <Link href={"https://expressjs.com/"} target="_blank">
                <b>Express Js</b>
              </Link>
              .
            </p>
          </div>
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <Link href={"https://www.mongodb.com/"} target="_blank">
              <MongoDb width={48} height={48} />
            </Link>
            <h1 className="font-coolvetica text-3xl">Database</h1>
            <p>
              Utilizing{" "}
              <Link href={"https://www.mongodb.com/"} target="_blank">
                <b>MongoDB</b>
              </Link>{" "}
              for NoSQL and{" "}
              <Link href={"https://www.mysql.com/"} target="_blank">
                <b>MySQL</b>
              </Link>{" "}
              for relational data storage.
            </p>
          </div>
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <Link href={"https://tailwindcss.com/"} target="_blank">
              <TailwindCss width={48} height={48} />
            </Link>
            <h1 className="font-coolvetica text-3xl">Styling</h1>
            <p>
              Fast, efficient, and responsive with{" "}
              <Link href={"https://tailwindcss.com/"} target="_blank">
                <b>Tailwind CSS</b>
              </Link>
              . Mostly mobile based for responsive development.
            </p>
          </div>
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <Link href={"https://motion.dev/"} target="_blank">
              <FramerMotion width={48} height={48} />
            </Link>
            <h1 className="font-coolvetica text-3xl">Animating</h1>
            <p>
              Bringing interfaces to life with Smooth, interactive UI with{" "}
              <Link href={"https://motion.dev/"} target="_blank">
                <b>Framer Motion</b>
              </Link>
              .
            </p>
          </div>
        </div>
        <div
          id="button"
          className="mt-20 hidden w-full justify-between px-5 lg:flex lg:flex-row"
        >
          <StyledButton color="red" text="   " />
          <div className="flex flex-row gap-x-5">
            <StyledButton color="yellow" text="   " />
            <StyledButton color="green" text="   " />
            <StyledButton color="blue" text="   " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechTools;
