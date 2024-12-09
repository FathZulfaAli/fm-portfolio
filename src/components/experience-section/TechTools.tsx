import Expo from "@/public/icons/expo";
import FramerMotion from "@/public/icons/framer-motion";
import MongoDb from "@/public/icons/mongo-db";
import NextJs from "@/public/icons/next-js";
import ReactNative from "@/public/icons/react-native";
import TailwindCss from "@/public/icons/tailwind-css";
import React from "react";
import StyledButton from "../ui/StyledButton";

function TechTools() {
  return (
    <section className="mt-28 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-pretty text-center font-coolvetica text-6xl">
        <h1>Tech and Tools</h1>
        <h6 className="items-center text-pretty text-center font-cabin text-xl lg:w-2/4">
          I primarily work with these tools and technologies, but my experience
          extends beyond them, including ORM Prisma, Solana Web3 Js, Chakra Ui,
          and others. My performance is:
        </h6>
      </div>
      <div className="cartoon-shadow relative mt-10 flex flex-col rounded-3xl p-5 lg:pb-10">
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:grid-rows-2">
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <NextJs width={48} height={48} />
            <h1 className="font-coolvetica text-3xl">Web Development</h1>
            <p>
              React Full-Stack Framework Leverages serverless architecture for
              scalable and efficient web applications.
            </p>
          </div>
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <ReactNative width={48} height={48} />
            <h1 className="font-coolvetica text-3xl">Mobile Development</h1>
            <p>
              Build cross-platform mobile apps effortlessly with React Native
              and Expo.
            </p>
          </div>
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <Expo width={48} height={48} />
            <h1 className="font-coolvetica text-3xl">Server and Deploy</h1>
            <p>
              Web apps hosted on Vercel, mobile apps built via Expo. Server
              built with TsNode and Express Js.
            </p>
          </div>
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <MongoDb width={48} height={48} />
            <h1 className="font-coolvetica text-3xl">Database</h1>
            <p>
              Utilizing MongoDB for NoSQL and MySQL for relational data storage.
            </p>
          </div>
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <TailwindCss width={48} height={48} />
            <h1 className="font-coolvetica text-3xl">Styling</h1>
            <p>
              Fast, efficient, and responsive with Tailwind CSS. Mostly mobile
              based while responsive development.
            </p>
          </div>
          <div className="flex h-56 w-80 flex-col gap-y-2 rounded-3xl border border-black bg-white p-5">
            <FramerMotion width={48} height={48} />
            <h1 className="font-coolvetica text-3xl">Styling</h1>
            <p>
              Bringing interfaces to life with Smooth, interactive UI with
              Framer Motion.
            </p>
          </div>
          {/* Positioned div at the top of the container */}
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
