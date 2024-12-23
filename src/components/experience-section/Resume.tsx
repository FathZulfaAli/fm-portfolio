"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ArrowRight from "@/public/icons/arrow-right";
import StyledButton from "../ui/StyledButton";
import Link from "next/link";
import {
  bloggingImage,
  githubProfileImage,
  mobileDevicon,
  muslimPrayperpalIcon,
  projectManagerIcon,
  resumeIcon,
  techAndToolsImage,
  webDevIcon,
} from "@/public/cdns/resume.cdn";

const textMotion = {
  initial: {
    x: 0,
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
};

const arrowMotion = {
  rest: { x: 5, opacity: 1, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    x: 25,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
};

function Resume() {
  return (
    <div className="mt-28">
      <h1 className="text-center font-coolvetica text-6xl font-bold">
        Ways I Can Support You
      </h1>
      <div className="grid-col-3 my-20 grid justify-items-center gap-6 lg:mx-10 lg:grid-cols-3">
        <div className="cartoon-shadow flex h-[600px] w-5/6 flex-col justify-between rounded-2xl bg-white p-5">
          <div>
            <Image
              src={projectManagerIcon}
              alt="Logo"
              width={120}
              height={120}
            />
            <div>
              <h1 className="font-coolvetica text-4xl">Project Management</h1>
              <p className="mt-2 text-pretty text-lg">
                I can manage your projects from start to finish,
                <br />
                <br />
                Ensuring smooth workflows, effective communication, and timely
                delivery. By leveraging agile methodologies and effective
                communication,
              </p>
            </div>
          </div>
          <Link href={"#collab-form"}>
            <motion.button
              className="flex cursor-pointer items-center overflow-hidden pr-3"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div variants={textMotion} className="font-coolvetica">
                Whats the project ?
              </motion.div>
              <motion.div
                className="flex translate-x-20 items-center"
                variants={arrowMotion}
              >
                <ArrowRight />
              </motion.div>
            </motion.button>
          </Link>
        </div>
        <div className="cartoon-shadow flex h-[600px] w-5/6 flex-col justify-between rounded-2xl bg-white p-5">
          <div>
            <Image src={webDevIcon} alt="Logo" width={120} height={120} />
            <div>
              <h1 className="font-coolvetica text-4xl">Web App Development</h1>
              <p className="mt-2 text-pretty text-lg">
                I can develop custom web applications tailored to your needs.
                <br />
                <br />I specialize in creating responsive and feature-rich web
                applications that deliver user experiences. Whether it’s an
                single landing page, a custom dashboard, or a dynamic web
                application,
              </p>
            </div>
          </div>
          <Link href={"#collab-form"}>
            <motion.button
              className="flex cursor-pointer items-center overflow-hidden pr-3"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div variants={textMotion} className="font-coolvetica">
                Lets Collab
              </motion.div>
              <motion.div
                className="flex translate-x-20 items-center"
                variants={arrowMotion}
              >
                <ArrowRight />
              </motion.div>
            </motion.button>
          </Link>
        </div>
        <div className="cartoon-shadow flex h-[600px] w-5/6 flex-col justify-between rounded-2xl bg-white p-5">
          <div>
            <Image src={mobileDevicon} alt="Logo" width={120} height={120} />
            <div>
              <h1 className="font-coolvetica text-4xl">Mobile Development</h1>
              <p className="mt-2 text-pretty text-lg">
                I can build mobile apps for iOS and Android using React Native
                Expo. Whether it’s a personal idea or a business solution, I
                deliver intuitive, high-performance applications that engage
                users.
              </p>
            </div>
          </div>
          <Link href={"#collab-form"}>
            <motion.button
              className="flex cursor-pointer items-center overflow-hidden pr-3"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div variants={textMotion} className="font-coolvetica">
                Learn more
              </motion.div>
              <motion.div
                className="flex translate-x-20 items-center"
                variants={arrowMotion}
              >
                <ArrowRight />
              </motion.div>
            </motion.button>
          </Link>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center">
        <h1 className="px-4 text-center font-coolvetica text-4xl">
          Better to be done than to dream endlessly.
        </h1>
        <div className="mt-8 flex w-full flex-col gap-y-5 px-4 lg:w-9/12">
          <div className="flex flex-col gap-x-5 gap-y-5 lg:flex-row">
            {/* Card 1 */}
            <div className="cartoon-shadow flex h-[400px] flex-col rounded-2xl bg-yellow p-5 lg:basis-1/3">
              <div className="h-1/2 w-full overflow-hidden rounded-2xl border-2 border-black">
                <Image
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  src={resumeIcon}
                  width={700}
                  height={450}
                />
              </div>
              <div className="p-4 font-bold">
                <p className="text-md font-coolvetica">Resume</p>
                <p className="text-3xl">View or Download Resume in PDF</p>
              </div>
              <div className="flex justify-end">
                <Link
                  href={
                    "https://drive.google.com/file/d/1_DSrPBfor5ZxdoSrmr9bfhD30U3MugdH/view"
                  }
                  target="_blank"
                >
                  <StyledButton
                    color="red"
                    text="Lets Check it"
                    className="rounded-md p-2"
                  />
                </Link>
              </div>
            </div>
            {/* Card 2 */}
            <div className="cartoon-shadow flex h-[400px] flex-col justify-between rounded-2xl bg-red-600 p-5 lg:basis-2/3">
              <div className="h-1/2 w-full overflow-hidden rounded-2xl border-2 border-black">
                <Image
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  src={muslimPrayperpalIcon}
                  width={700}
                  height={450}
                />
              </div>
              <div className="p-4 font-bold">
                <p className="text-md font-coolvetica">Featured Project</p>
                <p className="text-3xl">Muslim Prayerpal</p>
                <p className="text-lg">Using React Native Expo</p>
              </div>
              <div className="flex justify-end">
                <Link
                  href={"https://github.com/FathMayangLabs/muslim-prayerpal"}
                  target="_blank"
                >
                  <StyledButton
                    color="white"
                    text="Learn more"
                    className="rounded-md p-2"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-x-5 gap-y-5 lg:flex-row">
            {/* Card 3 */}
            <div className="cartoon-shadow flex h-[400px] flex-col justify-between rounded-2xl bg-white p-5 lg:basis-1/3">
              <div className="h-1/2 w-full overflow-hidden rounded-2xl border-2 border-black">
                <Image
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  src={techAndToolsImage}
                  width={700}
                  height={450}
                />
              </div>
              <div className="p-4 font-bold">
                <p className="text-3xl">Tech and Tools</p>
                <p className="text-lg">Web and Android Development</p>
              </div>
              <div className="flex justify-end">
                <Link href={"#tech-tools"}>
                  <StyledButton
                    color="blue"
                    text="Learn more"
                    className="rounded-md p-2"
                  />
                </Link>
              </div>
            </div>
            {/* Card 4 */}
            <div className="cartoon-shadow bg- flex h-[400px] flex-col justify-between rounded-2xl p-5 lg:basis-1/3">
              <div className="h-1/2 w-full overflow-hidden rounded-2xl border-2 border-black">
                <Image
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  src={bloggingImage}
                  width={700}
                  height={450}
                />
              </div>
              <div className="p-4 font-bold">
                <p className="text-3xl">Comming Soon</p>
                <p className="text-lg">News Letter and Blog</p>
              </div>
              <div className="flex justify-end">
                <StyledButton
                  color="yellow"
                  text="Soon"
                  className="rounded-md p-2 px-8"
                />
              </div>
            </div>
            {/* Card 5 */}
            <div className="cartoon-shadow flex h-[400px] flex-col justify-between rounded-2xl bg-white p-5 lg:basis-1/3">
              <div className="h-1/2 w-full overflow-hidden rounded-2xl border-2 border-black">
                <Image
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  src={githubProfileImage}
                  width={700}
                  height={450}
                />
              </div>
              <div className="p-4 font-bold">
                <p className="text-3xl">Visit my Github profile</p>
                <p className="text-lg">All my masterpiece is here</p>
              </div>
              <div className="flex justify-end">
                <Link href={"https://github.com/FathZulfaAli"} target="_blank">
                  <StyledButton
                    color="pink"
                    text="Let's go !!"
                    className="rounded-md p-2 px-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
