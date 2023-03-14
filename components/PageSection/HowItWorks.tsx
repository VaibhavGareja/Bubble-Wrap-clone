import React from "react";
import HowItWorksCard from "../Cards/HowItWorksCard";
import Heading from "../Heading";

export default function HowItWorks() {
  return (
    <div className="bg-[#fbe9ec] py-[5.5rem] lg:py-[6.25rem]">
      <div className="container flex flex-col mx-auto text-center text-[#333] ">
        <Heading
          title="How BubbleWrap works?"
          desc="Getting started with BubbleWrap is as easy as copying and pasting"
          headingColor="text-[#333]"
          descColor="text-[#333]"
        />
        <div className="flex flex-col  md:flex-row mt-[3rem] md:mt-[4rem] lg:mt-[5.5rem] how-it-works-cards-list  justify-between items-start">
          <HowItWorksCard
            image="/submit.svg"
            title="1. Submit Your Request"
            desc="After purchasing the subscription, you get a Trello board to submit unlimited requests and set it’s priority"
          />
          <HowItWorksCard
            image="/submit.svg"
            title="2. Receive Your Design"
            desc="We work on your requests and submit the designs as per priority set by you on Trello"
          />
          <HowItWorksCard
            image="/submit.svg"
            title="3. Refine With Feedback"
            desc="Incase you have feedbacks on submitted designs, we collaborate with you to fine-tune the details to your satisfaction"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="button text-[#161616] flex items-center leading-[1.15rem]  inter-font text-[1rem] md:text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
            Get Started
            <img
              src="https://uploads-ssl.webflow.com/6352e9f1db028e490078b1df/639add9a6f642843c45770cf_btn-arrow.svg"
              className="w-[17px] ml-[5px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
