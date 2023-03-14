import React from "react";
import Heading from "../Heading";

export default function ContactSection() {
  return (
    <div className="bg-[#333] py-[2rem] md:py-[5.5rem] lg:py-[6.25rem]">
      <div className=" flex flex-col container mx-auto text-center  text-[#333] ">
        <div className="bg-[#f6ff7a] rounded-[20px] lg:py-[8rem] py-[2rem] md:py-[5.5rem] px-[1.5rem] md:px-[3.5rem] lg:px-[6.875rem]">
          <h2 className="max-w-[33rem] mx-auto cooper-md  text-[1.4rem] md:text-[3rem] lg:text-[2.5rem] font-[400] text-center">
            Send your requests today, <br /> get your designs tomorrow!
          </h2>
          <div className="flex esm:flex-row flex-col gap-x-[1rem] gap-y-[0.5rem] md:gap-y-0  justify-center mt-[1rem] md:mt-[2rem] md:items-center">
            <button className="button-green justify-center text-[#161616] flex items-center leading-[1.15rem]  inter-font text-[1rem] md:text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
              Get Started
              <img
                src="https://uploads-ssl.webflow.com/6352e9f1db028e490078b1df/639add9a6f642843c45770cf_btn-arrow.svg"
                className="w-[17px] ml-[5px]"
              />
            </button>
            <button className="button  justify-center text-[#161616] flex items-center leading-[1.15rem]  inter-font text-[1rem] md:text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
