import React from "react";
import HowItWorksCard from "../Cards/HowItWorksCard";

export default function HowItWorks() {
  return (
    <div className="bg-[#fbe9ec] py-[6.25rem]">
      <div className="container flex flex-col mx-auto text-center text-[#333] ">
        <h2 className="text-center text-[2.5rem] cooper-md leading-[3rem] ">
          How BubbleWrap works?
        </h2>
        <p className="mt-[0.75rem] text-center text-[1.5rem] leading-[2.1875rem]">
          Getting started with BubbleWrap is as easy as copying and pasting
        </p>
        <div className="flex mt-[5.5rem] how-it-works-cards-list  justify-between items-start">
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
          <button className="button mt-[3.5rem] text-[#161616] flex items-center leading-[1.15rem] gap-x-[8px] inter-font  text-[1.15rem] border-[2px] font-[500] border-[black] py-[1rem] px-[2.5rem] rounded-[40px]">
            Get Started
            <img src="https://uploads-ssl.webflow.com/6352e9f1db028e490078b1df/639add9a6f642843c45770cf_btn-arrow.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
