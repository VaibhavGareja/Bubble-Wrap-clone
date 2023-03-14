import React from "react";
import Heading from "../Heading";

export default function PricingSection() {
  return (
    <div className="bg-[white] py-[5.5rem] lg:py-[6.25rem]">
      <div className=" flex flex-col container mx-auto text-center  text-[#333] ">
        <Heading
          title="Transparent pricing"
          desc="Subscriptions for every requirement"
          headingColor="text-[#333]"
          descColor="text-[#191919]"
        />
        <div className="flex md:flex-row gap-y-[2rem] md:gap-y-0 flex-col mt-[4.375rem] mx-auto w-[100%] justify-between">
          <div className="py-[3.75rem] w-[100%] md:w-[31%] px-[1.875rem] bg-[rgb(188,251,186,0.8)] rounded-[20px] pricing-box-shadow border-[2px] border-[#333]">
            <div className="xl:h-[9rem]  text-left h-[7.5rem]">
              <h2 className="text-[1.75rem] leading-[2.0625rem] text-left font-[600] inter-font text-[#000]">
                Monthly
              </h2>
              <p className="mt-[0.5rem] text-[1.1251rem] leading-[1.751rem] text-[#1d1d1f]">
                No minimum commitment. Pause or cancel anytime
              </p>
            </div>
            <div className="xl:h-[8.5rem] h-[6.5rem] text-left">
              <h2 className="text-[1.75rem] leading-[2.0625rem] text-left font-[600] inter-font text-[#000]">
                $2,999/m
              </h2>
              <p className=" mt-[0.5em] text-[1.1251rem] leading-[1.751rem] text-[#1d1d1d]">
                Pause or cancel anytime
              </p>
            </div>
            <div className="text-left  text-[#1d1d1f] xl:h-[18.5rem] h-[17rem] ">
              <h2 className="text-[1.2rem] leading-[1.3rem] font-[600]">
                What's included:
              </h2>
              <div className="mt-[1.5rem] text-[0.9rem]  xl:text-[1rem] inter-font text-left text-[#1d1d1f]">
                <h3 className="relative leading-[2rem] pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited requests
                </h3>
                <h3 className="relative leading-[2rem] pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited brands
                </h3>
                <h3 className="leading-[2rem] relative pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited users
                </h3>
                <h3 className="leading-[2rem] relative pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited stock photos via Shutterstock
                </h3>
                <h3 className="leading-[2rem] relative pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Pause or cancel anytime
                </h3>
              </div>
            </div>
            <div className="">
              <button className="button-green text-[#161616] w-full items-center leading-[1.15rem] gap-x-[8px] inter-font  text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
                Get Started
              </button>
              <h2 className="book-call cursor-pointer text-[1rem] xl:text-[1.1rem]  text-[#1d1d1f] hover:text-[red]  leading-[1.375rem]  mt-[0.7rem] font-[600] xl:leading-[1.3rem]">
                Book a Call
              </h2>
            </div>
          </div>
          <div className="py-[3.75rem] w-[100%] md:w-[31%] px-[1.875rem] bg-[#faf8cd] rounded-[20px] pricing-box-shadow border-[2px] border-[#333]">
            <div className="xl:h-[9rem] h-[7.5rem]">
              <h2 className="text-[1.75rem] leading-[2.0625rem] text-left font-[600] inter-font text-[#000]">
                Quarterly
              </h2>
              <p className="mt-[0.5rem] text-[1.1251rem] text-left leading-[1.751rem] text-[#1d1d1f]">
                Save $500 per month
              </p>
            </div>
            <div className="xl:h-[8.5rem] h-[6.5rem] text-left">
              <h2 className="text-[1.75rem] leading-[2.0625rem] inter-font text-left font-[600] inter-font text-[#000]">
                $2,499/m
              </h2>
              <p className=" mt-[0.5em] text-[1.1251rem] leading-[1.751rem] text-[#1d1d1d]">
                Paid quarterly
              </p>
            </div>
            <div className="text-left  text-[#1d1d1f] xl:h-[18.5rem] h-[17rem] ">
              <h2 className="text-[1.2rem] leading-[1.3rem] font-[600]">
                What's included:
              </h2>
              <div className="mt-[1.5rem] text-[0.9rem]  xl:text-[1rem] inter-font text-left text-[#1d1d1f]">
                <h3 className="relative leading-[2rem] pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited requests
                </h3>
                <h3 className="relative leading-[2rem] pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited brands
                </h3>
                <h3 className="leading-[2rem] relative pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited users
                </h3>
                <h3 className="leading-[2rem] relative pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited stock photos via Shutterstock
                </h3>
              </div>
            </div>
            <div>
              <button className="button-yellow text-[#161616] w-full items-center leading-[1.15rem] gap-x-[8px] inter-font  text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
                Get Started
              </button>
              <h2 className="book-call cursor-pointer text-[1rem] xl:text-[1.1rem]  text-[#1d1d1f] hover:text-[red]  leading-[1.375rem]  mt-[0.7rem] font-[600] xl:leading-[1.3rem]">
                Book a Call
              </h2>
            </div>
          </div>
          <div className="py-[3.75rem] w-[100%] md:w-[31%] px-[1.875rem] bg-[#e7e6de] rounded-[20px] pricing-box-shadow border-[2px] border-[#333]">
            <div className="xl:h-[9rem] h-[7.5rem]">
              <h2 className="text-[1.75rem] leading-[2.0625rem] text-left font-[600] inter-font text-[#000]">
                Yearly
              </h2>
              <p className="mt-[0.5rem] text-[1.1251rem] leading-[1.751rem] text-[#1d1d1f]">
                Save $1,000 per month
              </p>
            </div>
            <div className="xl:h-[8.5rem] h-[6.5rem] text-left">
              <h2 className="text-[1.75rem] leading-[2.0625rem] text-left font-[600] inter-font text-[#000]">
                $1,999/m
              </h2>
              <p className=" mt-[0.5em] text-[1.1251rem] leading-[1.751rem] text-[#1d1d1d]">
                Paid annually
              </p>
            </div>
            <div className="text-left  text-[#1d1d1f] xl:h-[18.5rem] h-[17rem] ">
              <h2 className="text-[1.2rem] leading-[1.3rem] font-[600]">
                What's included:
              </h2>
              <div className="mt-[1.5rem] text-[0.9rem]  xl:text-[1rem] inter-font text-left text-[#1d1d1f]">
                <h3 className="relative leading-[2rem] pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited requests
                </h3>
                <h3 className="relative leading-[2rem] pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited brands
                </h3>
                <h3 className="leading-[2rem] relative pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited users
                </h3>
                <h3 className="leading-[2rem] relative pl-[1.55rem] xl:leading-[2.1rem]">
                  <span className="point-img xl:h-[1rem] xl:w-[1rem] h-[0.9rem] w-[0.9rem]"></span>
                  Unlimited stock photos via Shutterstock
                </h3>
              </div>
            </div>
            <div>
              <button className="button text-[#161616] w-full items-center leading-[1.15rem] gap-x-[8px] inter-font  text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
                Get Started
              </button>
              <h2 className="book-call cursor-pointer text-[1rem] xl:text-[1.1rem]  text-[#1d1d1f] hover:text-[red]  leading-[1.375rem]  mt-[0.7rem] font-[600] xl:leading-[1.3rem]">
                Book a Call
              </h2>
            </div>
          </div>
        </div>
        <div className="p-[1.7375rem] xl:p-[2.7rem] border-dashed border-[2px] justify-between items-center  rounded-[20px] border-[#000] mt-[5.625rem] flex md:flex-row flex-col">
          <div className="flex md:flex-row flex-col items-center">
            <img src="/dollar-icon.svg" className="mr-0 md:mr-[3.625rem]" />
            <div className="md:text-left  text-center text-[#1d1d1f] mt-[1.5rem] md:mt-0 md:ml-[2rem]">
              <h2 className="text-[1.5rem] cooper-md leading-[2.1rem] xl:text-[2rem] font- xl:leading-[2.5rem]">
                Referral program alert!
              </h2>
              <p className="text-[1rem] xl:text-[1.125rem] mt-[0.6rem] leading-[1.8rem] xl:leading-[1.75rem]">
                Earn 10% monthly recurring commissions for each referral.
              </p>
            </div>
          </div>
          <button className="button mt-[2rem] md:mt-0 text-[#161616] flex items-center leading-[1.15rem]  inter-font text-[1rem] md:text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
            Refer a Friend
          </button>
        </div>
      </div>
    </div>
  );
}
