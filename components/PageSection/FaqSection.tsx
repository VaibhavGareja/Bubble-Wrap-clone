import React, { useState } from "react";
import Heading from "../Heading";
import { Faqs } from "../../database/faq";

export default function FaqSection() {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<any>("");
  const handleClick = async () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#f5f3ef] py-[6.25rem]">
      <div className=" flex flex-col container mx-auto text-center  text-[#333] ">
        <Heading
          title="FAQs"
          desc="Got questions? We got answers"
          headingColor="text-[#333]"
          descColor="text-[#191919]"
        />
        <div className="w-[65%] mx-auto text-left mt-[48px]">
          {Faqs.map((faq) => {
            return (
              <div
                className={`cursor-pointer relative  overflow-hidden 
                
                ${data == faq.que ? "faq-dropdown-click" : "faq-dropdown"}`}
                onClick={async () => {
                  if (data != "" && data == faq.que) {
                    await setData("");
                  }
                  if (data != faq.que) {
                    setData(faq.que);
                  }
                }}
              >
                <div
                  className={`flex h-[75px] justify-between  items-center w-[100%]`}
                >
                  <div className="w-[90%] text-[1.25rem] text-start">
                    {faq.que}
                  </div>
                  <img
                    src="faq-arrow.svg"
                    className={` w-[15px] absolute right-[5px] ${
                      data == faq.que
                        ? "arrow-transition-click"
                        : "arrow-transition"
                    }`}
                  />
                </div>
                <div className="px-[1.5rem] pb-[0.5rem] pt-[1.5rem] border-[1px] border-[#333] rounded-[20px] bg-[white]">
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
