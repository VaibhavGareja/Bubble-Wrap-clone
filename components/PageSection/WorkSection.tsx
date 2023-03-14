import React from "react";
import Heading from "../Heading";

export default function WorkSection() {
  return (
    <div className="bg-[#333] py-[5.5rem] lg:py-[6.25rem]">
      <div className="container flex flex-col mx-auto text-[white] items-center">
        <Heading
          title="Work, rather masterpieces"
          desc="
Designs so good they think aliens did it"
          headingColor="text-[white]"
          descColor="text-[white]"
        />
        <button className="button mt-[2.5rem]  esm:mt-[3rem]  md:mt-[3.5rem] text-[#161616] flex items-center leading-[1.15rem]  inter-font text-[1rem] md:text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
          View Recent Work
        </button>
        <div className="mt-[4.375rem] flex ">
          <div className="flex justify-center flex-col flex-nowrap md:flex-row md:flex-wrap  items-center gap-x-[0rem] md:gap-x-[3rem] gap-y-[2rem] md:gap-y-[3rem]">
            <div className=" h-[90vw] w-[90vw] md:h-[44vw] md:w-[44vw]  lg:h-[45vw] lg:w-[45vw]  xl:h-[40vw] xl:w-[40vw]  2xl:h-[35rem] 2xl:w-[35rem]  ">
              <div className="w-[100%] h-[100%]  overflow-hidden rounded-[20px]">
                <img
                  src="image-1.png"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
            </div>
            <div className=" h-[90vw] w-[90vw] md:h-[44vw] md:w-[44vw]  lg:h-[45vw] lg:w-[45vw]  xl:h-[40vw] xl:w-[40vw]  2xl:h-[35rem] 2xl:w-[35rem]  ">
              <div className=" w-[100%] h-[100%] overflow-hidden rounded-[20px]">
                <img
                  src="image-2.webp"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
