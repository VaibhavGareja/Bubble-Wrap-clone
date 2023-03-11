import React from "react";

export default function WorkSection() {
  return (
    <div className="bg-[#333] py-[6.25rem]">
      <div className="container flex flex-col mx-auto text-[white] items-center">
        <h2 className="text-center text-[2.5rem] cooper-md">
          Work, rather masterpieces
        </h2>
        <p className="mt-[0.9rem] text-center text-[1.5rem] leading-[2.1875rem]">
          Designs so good they think aliens did it
        </p>
        <button className="button mt-[1.6rem] text-[#161616] leading-[1.15rem] gap-x-[8px] inter-font  text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
          View Recent Work
        </button>
        <div className="mt-[4.375rem]">
          <div className="flex justify-center  items-center gap-[3rem]">
            <div className="xl:h-[40vw] xl:w-[40vw]  2xl:h-[30vw] 2xl:w-[30vw]">
              <div className="w-[100%] h-[100%]  overflow-hidden rounded-[20px]">
                <img src="image-1.png" className="w-[100%] h-[100%]" />
              </div>
            </div>
            <div className="xl:h-[30vw] xl:w-[30vw]">
              <div className=" w-[100%] h-[100%] overflow-hidden rounded-[20px]">
                <img src="image-2.webp" className="w-[100%] h-[100%]" />
              </div>
            </div>
            {/* <div className="col-span-6 h-[40vw] w-[40vw]">
              <div className="w-[100%] h-[100%] overflow-hidden rounded-[20px]">
                <img src="image-2.webp" className="" />
              </div>
            </div>
            <div className="col-span-6 h-[40vw] w-[40vw]">
              <div className="w-[100%] h-[100%] overflow-hidden rounded-[20px]">
                <img src="image-1.png" className="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
