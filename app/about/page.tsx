import { aboutMeFlyingThings, aboutMePhoto } from "@/public/cdns/about.cdn";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="px-20">
      <div className="flex flex-col-reverse items-center gap-x-10 lg:flex-row lg:justify-between">
        <div className="max-w-2xl">
          <h1 className="font-coolvetica text-7xl">About me</h1>
          <div className="space-y-3 pt-10 text-lg">
            <h6 className="text-pretty">
              I’m a recent graduate (end of 2023) with a degree in Applied
              Management, eager to kickstart my career in management field.
              During my studies, I developed strong skills in{" "}
              <b>Project Management</b>, I completed managed several business
              projects during my studies, as part of a recurring semester task,
              as each that gave me hands-on experience in <b>Management</b>
            </h6>
            <h6 className="text-pretty">
              Although I’m just starting out, I’m passionate about solving
              problems, team player and creating impactful solutions
            </h6>
            <h6 className="text-pretty">
              I start my journey in <b>Digital Marketing Intern</b> on June
              2022. Working with Kopinka and honing my skills in{" "}
              <b>Management</b> and <b>Content Creation</b>. Achieving several
              product and streamlined management through effective scheduling
              and reporting on digital platforms.
            </h6>
            <h6 className="text-pretty">
              Later, I worked remotely with Cfund as a{" "}
              <b>Junior Project Manager</b> in October 2022. where I focused on
              managing and coordinating projects to ensure successful outcomes.
              I developed skills in <b>resource management</b>,{" "}
              <b>team coordination</b>, <b>quality assurance</b>, and{" "}
              <b>Agile methodologies</b>, contributing to successful product
              launches and reinforcing my ability to lead teams and deliver
              results.
            </h6>
            <h6 className="text-pretty">
              Finally, I graduated from college in October 2023 achieving{" "}
              <b>3.62 on GPA</b>
            </h6>
          </div>
        </div>
        <div className="relative pr-10">
          <Image
            src={aboutMePhoto}
            width={500}
            height={500}
            alt="Fath Zulfa Ali's photo"
          />
          <Image
            src={aboutMeFlyingThings}
            alt="Fath Zulfa Ali's accessory"
            width={250}
            height={250}
            className="absolute -right-20 bottom-10"
          />
        </div>
      </div>
      <div className="pt-5 text-lg">
        <h6 className="text-pretty">
          Since then, I have been working as a Fullstack Developer., I have been
          working remotely as a freelancer . I specialize in building web
          applications using <b>Next.js</b>, <b>React</b>, <b>TypeScript</b>,
          and <b>JavaScript</b>, developing and integrating frontend components
          with seamless interaction with serverless functions. I am proficient
          in <b>state management</b> using React Reducer and Zustand and have
          experience creating mobile applications with <b>React Native Expo</b>{" "}
          and <b>NativeWind</b>. Additionally, I am skilled in working with
          APIs, including fetching, manipulating, and integrating data to
          deliver dynamic and functional user experiences.
        </h6>
      </div>
    </section>
  );
}
