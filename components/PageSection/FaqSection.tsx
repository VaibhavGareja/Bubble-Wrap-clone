import React from "react";
import Heading from "../Heading";

export default function FaqSection() {
  return (
    <div className="bg-[#f5f3ef] py-[6.25rem]">
      <div className=" flex flex-col container mx-auto text-center  text-[#333] ">
        <Heading
          title="FAQs"
          desc="Got questions? We got answers"
          headingColor="text-[#333]"
          descColor="text-[#191919]"
        />
      </div>
    </div>
  );
}
