import React from "react";

export default function HowItWorksCard({ image, title, desc }: any) {
  return (
    <div className="w-[100%] md:w-[30%] max-w-[100%] md:max-w-[19.5rem] mb-[2.5rem] md:mb-0 text-center md:text-left">
      <img
        src={image}
        className="rounded-[8px] p-[0.5rem]  bg-[#555] mx-auto md:mx-0"
      />
      <h3 className="text-[1.2rem] lg:text-[1.5rem] font-[400]  cooper-md leading-[1.6rem] lg:leading-[1.75rem] text-[#222] mt-[1.625rem]">
        {title}
      </h3>
      <p className=" inter-font text-[1.1rem] md:text-[1.251rem] text-[#333] leading-[1.7rem] md:leading-[1.8571rem] mt-0 md:mt-[0.9rem]">
        {desc}
      </p>
    </div>
  );
}
