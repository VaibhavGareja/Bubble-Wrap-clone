import React from "react";
import Heading from "../Heading";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#bcfbba] py-[5.5rem] lg:py-[6.25rem]">
      <div className="container flex flex-col mx-auto text-center  text-[#333] ">
        <Heading
          title="Why choose BubbleWrap?"
          desc="We help you save approx $2,28,000 a year. No kidding"
          headingColor="text-[#333]"
          descColor="text-[#333]"
        />
        <div className="relative">
          <div className=" mt-[2.625rem] rounded-[20px] bg-[#fbf8b6] xl:px-[9.3rem] lg:py-[4.24rem] py-[3rem]  border-[2px] border-[#333]">
            <p className="cooper-md  px-[1rem] esm:px-0  mt-[1.4rem] lg:mt-0 text-[1.3rem] md:text-[1.4rem] lg:text-[1.875rem] leading-[2rem] lg:leading-[2.25rem] text-[#333] font-[400] ">
              When you build your own design team
            </p>
            <div className="flex flex-col md:flex-row px-[1.5rem] items-center mt-[2.5rem] lg:mt-[3.625rem] max-w-[45rem] mx-auto lg:max-w-full pb-[0.7rem] justify-between">
              <img src="/ui-logo.svg" className="w-[7rem] lg:w-auto" />
              <h3 className="text-[1.4rem] lg:text-[1.875rem] leading-[2.25rem]">
                +
              </h3>
              <img src="/ux-logo.svg" className="w-[7rem] lg:w-auto" />
              <h3 className="text-[1.4rem] lg:text-[1.875rem] leading-[2.25rem]">
                +
              </h3>
              <img src="/graphic-logo.svg" className="w-[7rem] lg:w-auto" />
              <h3 className="text-[2.5rem] lg:text-[3.25rem] leading-[3.875rem]">
                =
              </h3>
              <img src="/final-cost-logo.svg" className="w-[9rem] lg:w-auto" />
            </div>
          </div>
          <h4 className="text-[8rem] lg:text-[12rem]  cooper-md left-[50%] top-[69.5%] md:top-[47%] lg:top-[50%] mt-0  md:mt-[1rem] font-[400] vs-class text-[rgba(255,6,6,0.2)] absolute">
            VS
          </h4>
          <div className="mt-[2.625rem]  rounded-[20px] bg-[#e4feef] xl:px-[9.3rem] lg:py-[4.24rem] py-[3rem]  border-[2px] border-[#333]">
            <p className="cooper-md  px-[1rem] esm:px-0  mt-[1.4rem] lg:mt-0 text-[1.3rem] md:text-[1.4rem] lg:text-[1.875rem] leading-[2rem] lg:leading-[2.25rem] text-[#333] font-[400] ">
              When you let BubbleWrap do your designs
            </p>
            <div className="flex flex-col  items-center px-[1.5rem] mt-[2.5rem] lg:mt-[3.375rem] ">
              <p className="text-[1.2rem] md:text-[1.5rem] leading-[1.8rem] md:leading-[1.875rem]">
                subscriptions start from just
              </p>
              <h3 className=" text-[2rem] esm:text-[2.7rem] md:text-[3.2rem] lg:text-[3.375rem] inter-font font-[600] leading-[2.6rem] esm:leading-[3.3rem] md:leading-[4rem] lg:leading-[4.125rem]">
                $1,999/month
              </h3>
              <button className="button-green mt-[2rem] md:mt-[3rem] text-[#161616] flex items-center leading-[1.15rem]  inter-font text-[1rem] md:text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
                Get Started
                <img
                  src="https://uploads-ssl.webflow.com/6352e9f1db028e490078b1df/639add9a6f642843c45770cf_btn-arrow.svg"
                  className="w-[17px] ml-[5px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
