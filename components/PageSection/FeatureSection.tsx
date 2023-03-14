import React from "react";
import Heading from "../Heading";

export default function FeatureSection() {
  return (
    <div className="relative py-[5.5rem] lg:py-[6.25rem]">
      <div className=" container flex flex-col mx-auto text-center  items-center text-[#333] ">
        <Heading
          title="Unlove us, we dare you <3"
          desc="The only design subscription you’ll ever need"
          headingColor="text-[#333]"
          descColor="text-[#333]"
        />
        <div className="  z-[2] w-[100%] mt-[4.375rem] justify-start flex-wrap  items-stretch gap-y-[1.5rem] md:gap-y-[0]   flex flex-col md:flex-row ">
          <div className="flex justify-between border-[2px] rounded-[20px] border-[#333]    bg-[#f2e6f4] px-[1.5rem] flex-col pt-[1.5rem] pb-[2rem] w-[100%]  md:w-[38%] mr-[1.5%] mb-[1.5%]">
            <div className=" flex justify-end w-full">
              <img
                src="/features/pause.svg"
                className="w-[3rem] xl:w-[3.5rem]"
              />
            </div>
            <div className="text-[#333] text-start">
              <h4 className=" cooper-md text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] leading-[2rem] font-[400] text-[#333] mt-[2rem] md:mt-[3rem]">
                Pause / Cancel
              </h4>
              <p className="text-[0.9rem] md:text-[1rem] xl:text-[1.25rem]  inter-font leading-[1.5rem] mt-[0.5rem] md:mt-[0.7rem] max-w-[19rem]">
                You can pause or cancel BubbleWrap’s subscription anytime
              </p>
            </div>
          </div>
          <div className="flex justify-between border-[2px] rounded-[20px] border-[#333]    bg-[#fae8ce] px-[1.5rem] flex-col pt-[1.5rem] pb-[2rem] w-[100%]  md:w-[25%] mr-[1.5%] mb-[1.5%]">
            <div className=" flex justify-start w-full">
              <img
                src="/features/faster.svg"
                className="w-[3rem] xl:w-[3.5rem]"
              />
            </div>
            <div className="text-[#333] text-start">
              <h4 className=" cooper-md text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] leading-[2rem] font-[400] text-[#333] mt-[2rem] md:mt-[3rem]">
                Faster, Smarter & Better
              </h4>
              <p className="text-[0.9rem] md:text-[1rem] xl:text-[1.25rem]  inter-font leading-[1.5rem] mt-[0.5rem] md:mt-[0.7rem] max-w-[19rem]">
                Get your designs delivered within 24-48 hours of submitting the
                request
              </p>
            </div>
          </div>
          <div className="flex justify-between border-[2px] rounded-[20px] border-[#333]    bg-[#e4f5d7] px-[1.5rem] flex-col pt-[1.5rem] pb-[2rem] w-[100%]  md:w-[34%] mb-[1.5%]">
            <div className=" flex justify-start w-full">
              <img
                src="/features/money-back.svg"
                className="w-[3rem] xl:w-[3.5rem]"
              />
            </div>
            <div className="text-[#333] text-start">
              <h4 className=" cooper-md text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] leading-[2rem] font-[400] text-[#333] mt-[2rem] md:mt-[3rem]">
                100% MoneyBack
              </h4>
              <p className="text-[0.9rem] md:text-[1rem] xl:text-[1.25rem]  inter-font leading-[1.5rem] mt-[0.5rem] md:mt-[0.7rem] max-w-[19rem]">
                Get a 100% moneyback if you are not satisfied with our work, we
                bet you won’t
              </p>
            </div>
          </div>
          <div className="flex justify-between border-[2px] rounded-[20px] border-[#333]    bg-[#fce3e7] px-[1.5rem] flex-col pt-[1.5rem] pb-[2rem] w-[100%]  md:w-[26%] mr-[1.5%] mb-[1.5%]">
            <div className=" flex justify-start w-full">
              <img
                src="/features/good-design.svg"
                className="w-[3rem] xl:w-[3.5rem]"
              />
            </div>
            <div className="text-[#333] text-start">
              <h4 className=" cooper-md text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] leading-[2rem] font-[400] text-[#333] mt-[2rem] md:mt-[3rem]">
                Insanely Good Designs
              </h4>
              <p className="text-[0.9rem] md:text-[1rem] xl:text-[1.25rem]  inter-font leading-[1.5rem] mt-[0.5rem] md:mt-[0.7rem] max-w-[19rem]">
                Designs so good, they will think the Aliens did it! Try it for
                yourself
              </p>
            </div>
          </div>
          <div className="flex justify-between border-[2px] rounded-[20px] border-[#333]    bg-[#faf8cd] px-[1.5rem] flex-col pt-[1.5rem] pb-[2rem] w-[100%]  md:w-[40%] mr-[1.5%] mb-[1.5%]">
            <div className=" flex justify-end w-full">
              <img
                src="/features/free-trial.svg"
                className="w-[3rem] xl:w-[3.5rem]"
              />
            </div>
            <div className="text-[#333] text-start">
              <h4 className=" cooper-md text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] leading-[2rem] font-[400] text-[#333] mt-[2rem] md:mt-[3rem]">
                7 Days Free Trial
              </h4>
              <p className="text-[0.9rem] md:text-[1rem] xl:text-[1.25rem]  inter-font leading-[1.5rem] mt-[0.5rem] md:mt-[0.7rem] max-w-[19rem]">
                Not sure about purchasing subscription? We offer a free 7 days
                trail which helps you decide
              </p>
            </div>
          </div>
          <div className="flex justify-between border-[2px] rounded-[20px] border-[#333]    bg-[#e1f2f1] px-[1.5rem] flex-col pt-[1.5rem] pb-[2rem] w-[100%]  md:w-[31%]  mb-[1.5%]">
            <div className=" flex justify-end w-full">
              <img
                src="/features/unlimited-req.svg"
                className="w-[3rem] xl:w-[3.5rem]"
              />
            </div>
            <div className="text-[#333] text-start">
              <h4 className=" cooper-md text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] leading-[2rem] font-[400] text-[#333] mt-[2rem] md:mt-[3rem]">
                Unlimited Requests
              </h4>
              <p className="text-[0.9rem] md:text-[1rem] xl:text-[1.25rem]  inter-font leading-[1.5rem] mt-[0.5rem] md:mt-[0.7rem] max-w-[19rem]">
                We’re satisfied when you are, request unlimited designs with
                unlimited iteration
              </p>
            </div>
          </div>
        </div>
        <button className="button mt-[3rem]  text-[#161616] flex justify-center items-center leading-[1.15rem] gap-x-[8px] inter-font  text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
          Get Started
        </button>
        <img
          src="/blue-shape.svg"
          className="hidden md:absolute left-[4.5%] top-[16.125rem] z-1  xl:w-auto w-[4.5rem]"
        />
        <img
          src="/gray-shape.svg"
          className="hidden md:absolute top-[2.5rem] xl:top-[3.5rem] right-[14%] z-[1] xl:right-[22%] w-[5rem] xl:w-auto"
        />
        <img
          src="/red-shape.svg"
          className="hidden md:absolute top-[18.5rem] xl:top-[17.5rem] right-[2%] w-[6.5rem] xl:w-auto"
        />
      </div>
    </div>
  );
}
