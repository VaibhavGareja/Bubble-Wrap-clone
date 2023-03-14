import React, { useEffect, useState } from "react";

export default function MobileHeader({ onClick }: any) {
  const [checkClose, setCheckClose] = useState(false);

  return (
    <div
      className={`z-50 open-transition   flex justify-center items-center fixed inset-0 opacity-[1] text-[#1d1d1f] bg-[#fff] h-[100vh]`}
    >
      <button onClick={onClick}>
        <img
          src="close-btn-black.svg"
          className="absolute w-[1.5rem] right-[2rem] top-[2rem] left-auto bottom-auto"
        />
      </button>
      <div className="inter-font text-[1.625rem] leading-[2rem] no-underline font-[500] flex flex-col items-center gap-y-[1.5rem]">
        <a>Work</a>
        <a>Benefits</a>
        <a>Pricing</a>
        <a>FAQs</a>
      </div>
    </div>
  );
}
