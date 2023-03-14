import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#000] pb-[5rem] pt-[5rem] md:pb-[6.25rem] md:pt-[4.5rem] relative">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col gap-y-[5rem] md:gap-y-0 mt-[0rem] lg:mt-[1rem] text-[white] items-start justify-between">
          <div className="w-full md:w-[50%]">
            <img src="/white-logo.svg" className="w-[15rem]" />
            <h4 className="text-[1.1rem] cooper-md leading-[1.4rem] xl:text-[1.25rem] xl:leading-[1.5rem] mt-[1.875rem]">
              Get unlimited designs with unlimited iterations with just one
              subscription
            </h4>
          </div>
          <div className="flex w-[100%] md:w-[41%] md:justify-between  ">
            <div className="flex flex-col text-[1rem] cursor-pointer w-[35%] md:w-[40%] gap-y-[0.9rem]">
              <a className="leading-[1.7rem] font-[600] ">Latest Project</a>
              <a className="leading-[1.7rem] font-[600] ">Pricing</a>
            </div>
            <div className="flex flex-col  cursor-pointer w-[35%] md:w-[40%] gap-y-[0.9rem]">
              <a className="leading-[1.7rem] font-[600]">FAQs</a>
              <a className="leading-[1.7rem] font-[600]">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
