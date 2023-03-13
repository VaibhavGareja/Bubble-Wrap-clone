import React from "react";
import Heading from "../Heading";

export default function ReviewSection() {
  return (
    <div className="bg-[#f191a2] py-[6.25rem]">
      <div className=" flex flex-col mx-auto text-center  text-[#333] ">
        <Heading
          title="Talk of the town"
          desc="For good reasons, obviously"
          headingColor="text-[#333]"
          descColor="text-[#191919]"
        />
        <div className="my-[4.375rem]">
          <div className="flex w-[80%] mx-auto inter-font flex-col h-[15rem] justify-center bg-[white] shadow-sm review-box-shadow rounded-[44px] border-[3px] border-[#282828] items-center">
            <p className="text-[2rem] xl:text-[2.5rem] leading-[3.2rem] mt-[1rem] max-w-[50rem]">
              Design is everything, and these guys have nailed it
            </p>
            <p className="mt-[1rem] text-[1rem] ">- Bala N. (Meta)</p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-between text-center items-center content-between ">
            <div className="w-[20%] text-center items-center flex justify-center">
              <img
                src="/brand/dribble.svg"
                className="w-[6.5rem] xl:w-[8.5rem]"
              />
            </div>
            <div className="w-[20%] text-center items-center flex justify-center">
              <img src="/brand/lapa.svg" className="w-[6.5rem] xl:w-[8.5rem]" />
            </div>
            <div className="w-[20%] text-center items-center flex justify-center">
              <img
                src="/brand/awwwards.svg"
                className="w-[6.5rem] xl:w-[8.5rem]"
              />
            </div>
            <div className="w-[20%] text-center items-center flex justify-center">
              <img
                src="/brand/behance.png"
                className="w-[6.5rem] xl:w-[8.5rem]"
              />
            </div>
            <div className="w-[20%] text-center items-center flex justify-center">
              <img
                src="/brand/product-hunt.svg"
                className="w-[6.5rem] xl:w-[8.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
