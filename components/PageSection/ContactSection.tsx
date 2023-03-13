import React from "react";
import Heading from "../Heading";

export default function ContactSection() {
  return (
    <div className="bg-[#333] py-[6.25rem]">
      <div className=" flex flex-col container mx-auto text-center  text-[#333] ">
        <div className="bg-[#f6ff7a] rounded-[20px] py-[8rem] px-[6.875rem]">
          <h2 className="max-w-[33rem] mx-auto cooper-md text-[2.5rem] font-[400] text-center">
            Send your requests today, <br /> get your designs tomorrow!
          </h2>
          <div className="flex gap-x-[1rem]  justify-center mt-[2rem] items-center">
            <button className="button-green  text-[#161616] flex items-center leading-[1.15rem] gap-x-[8px] inter-font  text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
              Get Started
              <img src="https://uploads-ssl.webflow.com/6352e9f1db028e490078b1df/639add9a6f642843c45770cf_btn-arrow.svg" />
            </button>
            <button className="button  text-[#161616] flex items-center leading-[1.15rem] gap-x-[8px] inter-font  text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
