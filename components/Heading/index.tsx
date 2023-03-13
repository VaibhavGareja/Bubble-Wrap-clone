import React from "react";

interface IProps {
  title: string;
  desc: string;
  headingColor: string;
  descColor: string;
}

export default function Heading({
  title,
  desc,
  headingColor,
  descColor,
}: IProps) {
  return (
    <div className={`relative text-center`}>
      <h2
        className={`cooper-md  ${headingColor} text-center text-[2.5rem] leading-[3rem] font-[400]`}
      >
        {title}
      </h2>

      <p
        className={`text-[#191919] ${descColor} inter-font text-[1.5rem] leading-[2.1875rem] mt-[0.75rem] font-[400]`}
      >
        {desc}
      </p>
    </div>
  );
}
