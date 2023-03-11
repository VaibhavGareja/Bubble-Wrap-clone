import React from "react";

export default function HeroSection() {
  return (
    <div className="">
      <div className="bg-[#f6ff7a] pt-[15rem] pb-[10rem] flex flex-col justify-center items-center">
        <div className="flex items-center flex-col text-center">
          <h1 className="text-[3rem] cooper-md font-[400] leading-[3.75rem] text-[#333333]">
            Your design partner <br />
            with no strings attached!
          </h1>
          <p className="mt-[0.75rem] text-[1.75rem] inter-font leading-[2.3751rem]">
            Get unlimited designs with unlimited iterations with just one
            subscription
          </p>
          <button className="button-green mt-[3.5rem] text-[#161616] flex items-center leading-[1.15rem] gap-x-[8px] inter-font  text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
            Get Started
            <img src="https://uploads-ssl.webflow.com/6352e9f1db028e490078b1df/639add9a6f642843c45770cf_btn-arrow.svg" />
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
}
