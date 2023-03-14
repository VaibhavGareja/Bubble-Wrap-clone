import React from "react";

export default function HeroSection() {
  return (
    <div className="relative" id="hero">
      <div className="bg-[#f6ff7a]  pb-[6rem] pt-[10rem] esm:pb-[6rem] esm:pt-[15rem] md:pt-[15rem] md:pb-[10rem] flex flex-col justify-center items-center">
        <div className="flex container  mx-auto  items-center flex-col text-center">
          <h1 className="text-[2.4rem] esm:text-[2.5rem] md:text-[3rem] text-center cooper-md font-[400] leading-[2.9rem] esm:leading-[3.25rem] md:leading-[3.75rem] text-[#333333]">
            Your design partner <br />
            with no strings attached!
          </h1>
          <p className="mt-[0.75rem]  max-w-[35.5rem] lg:max-w-full  text-[1.2rem] esm:text-[1.25rem] md:text-[1.5rem] xl:text-[1.75rem] inter-font leading-[1.8rem]  esm:leading-[1.875rem] md:leading-[1.375rem] xl:leading-[2.3751rem]">
            Get unlimited designs with unlimited iterations with just one
            subscription
          </p>
          <button className="button-green mt-[2.5rem]  esm:mt-[3rem]  md:mt-[3.5rem] text-[#161616] flex items-center leading-[1.15rem]  inter-font text-[1rem] md:text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
            Get Started
            <img
              src="https://uploads-ssl.webflow.com/6352e9f1db028e490078b1df/639add9a6f642843c45770cf_btn-arrow.svg"
              className="w-[17px] ml-[5px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
