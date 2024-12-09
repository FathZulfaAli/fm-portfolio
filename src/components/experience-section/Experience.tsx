import React from "react";

function Experience() {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-10 lg:h-screen lg:flex-row lg:py-0">
      <h3 className="text-pretty text-center font-coolvetica text-6xl lg:w-2/3">
        Through a variety of dynamic projects, honing expertise to tackle
        challenges and deliver impactful solutions.
      </h3>
      <div className="relative mt-10 lg:-mt-32 lg:pl-28">
        <div className="cartoon-shadow z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-green font-coolvetica">
          <h1 className="text-4xl">01+</h1> <h6>Experience</h6>
        </div>
        <div className="cartoon-shadow absolute left-16 top-28 z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-yellow font-coolvetica">
          <h1 className="text-4xl">05+</h1> <h6>Project Done</h6>
        </div>
      </div>
    </div>
  );
}

export default Experience;
