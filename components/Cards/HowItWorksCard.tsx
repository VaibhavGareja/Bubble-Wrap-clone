import React from "react";

export default function HowItWorksCard({ image, title, desc }: any) {
  return (
    <div className="w-[30%] max-w-[19.5rem] text-left">
      <img src={image} className="rounded-[8px] p-[0.5rem] bg-[#555]" />
      <h3 className="text-[1.5rem] font-[400]  cooper-md leading-[1.75rem] text-[#222] mt-[1.625rem]">
        {title}
      </h3>
      <p className=" inter-font text-[1.251rem] text-[#333] leading-[1.8571rem] mt-[0.9rem]">
        {desc}
      </p>
    </div>
  );
}
