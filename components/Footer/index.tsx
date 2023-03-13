import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#000] pb-[6.25rem] pt-[4.5rem] relative">
      <div className="container mx-auto">
        <div className="flex mt-[0rem] lg:mt-[1rem] text-[white] items-start justify-between">
          <div className="w-[50%]">
            <img src="/white-logo.svg" className="w-[15rem]" />
            <h4 className="text-[1.1rem] cooper-md leading-[1.4rem] xl:text-[1.25rem] xl:leading-[1.5rem] mt-[1.875rem]">
              Get unlimited designs with unlimited iterations with just one
              subscription
            </h4>
          </div>
          <div className="flex w-[41%] justify-between  ">
            <div className="flex flex-col text-[1rem] cursor-pointer w-[40%] gap-y-[0.9rem]">
              <a className="leading-[1.7rem] font-[600] lett">Latest Project</a>
              <a className="leading-[1.7rem] font-[600] lett">Pricing</a>
            </div>
            <div className="flex flex-col  cursor-pointer w-[40%] gap-y-[0.9rem]">
              <a>FAQs</a>
              <a>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
