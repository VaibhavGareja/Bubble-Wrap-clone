import React from "react";

export default function Header() {
  return (
    <div className="fixed  w-full header">
      <div className=" bg-[white]   border-[2px] rounded-[48px] border-[black]  container mx-auto items-center py-2 pl-[24px] pr-[8px]  justify-between">
        <div className="flex flex-row justify-between items-center">
          <img src="/logo.png" className="max-w-[191px]" />
          <ul className="text-[1.125rem] font-[500]">
            <li className="hover:bg-[black] rounded-[12px] mr-[0.8rem] inline-block px-[0.8rem] py-[0.7rem] hover:text-[white]">
              <a>Work</a>
            </li>
            <li className="hover:bg-[black] rounded-[12px] mr-[0.8rem] inline-block  px-[0.8rem] py-[0.7rem] hover:text-[white]">
              <a>Benefits</a>
            </li>
            <li className="hover:bg-[black] rounded-[12px] mr-[0.8rem] inline-block px-[0.8rem] py-[0.7rem]  hover:text-[white]">
              <a>Pricing</a>
            </li>
            <li className="hover:bg-[black] rounded-[12px] mr-[0.8rem] inline-block  px-[0.8rem] py-[0.7rem] hover:text-[white]">
              <a>FAQs</a>
            </li>
          </ul>

          <div>
            <button className="bg-[#85fac1] hover:border-[1px] hover:border-[black] border-[1px] border-[transparent] text-[1.15rem] rounded-[40px] px-[2.3rem] py-3 font-[500]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
