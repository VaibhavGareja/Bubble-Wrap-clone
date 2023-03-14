import React from "react";

export default function Announcement() {
  return (
    <div className="flex justify-center items-center xl:px-[9.5rem] px-0 bg-[#ef8fe7] h-[2.5rem]">
      <a className=" cursor-pointer">
        <p className="text-[1rem] leading-[1.3rem] text-[#000] text-center">
          Let's chat about your project.{" "}
          <span className="font-[500] underline">Book a call</span>
        </p>
      </a>
    </div>
  );
}
