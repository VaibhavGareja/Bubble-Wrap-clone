import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#bcfbba] py-[6.25rem]">
      <div className="container flex flex-col mx-auto text-center text-[#333] ">
        <h2 className="text-center text-[2.5rem] cooper-md leading-[3rem] ">
          Why choose BubbleWrap?
        </h2>
        <p className="mt-[0.75rem] text-center text-[1.5rem] leading-[2.1875rem]">
          We help you save approx $2,28,000 a year. No kidding
        </p>
        <div>
          <div className="mt-[2.625rem]  rounded-[20px] bg-[#fbf8b6] xl:px-[9.3rem] lg:py-[4.24rem] py-[3rem]  border-[2px] border-[#333]">
            <p className="cooper-md text-[1.875rem] leading-[2.25rem] text-[#333] font-[400] ">
              When you build your own design team
            </p>
            <div className="flex px-[1.5rem] mt-[3.625rem] pb-[0.7rem] justify-between">
              <img src="/ui-logo.svg" />
              <img src="/ux-logo.svg" />
              <img src="/graphic-logo.svg" />
              <img src="/final-cost-logo.svg" />
            </div>
          </div>
          <div className="mt-[2.625rem]  rounded-[20px] bg-[#fbf8b6] xl:px-[9.3rem] lg:py-[4.24rem] py-[3rem]  border-[2px] border-[#333]">
            <p className="cooper-md text-[1.875rem] leading-[2.25rem] text-[#333] font-[400] ">
              When you let BubbleWrap do your designs
            </p>
            <div className="flex px-[1.5rem] mt-[3.375rem] ">
              <p className="text-[1.5rem] leading-[1.875rem]">
                subscriptions start from just
              </p>
              <h3>$1,999/month</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
