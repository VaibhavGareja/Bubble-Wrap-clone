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
        className={`cooper-md  ${headingColor} text-center text-[2rem] esm:text-[2.5rem] lg:text-[3rem] xl:text-[2.5rem] leading-[2.5rem] xsm:leading-[3rem] md:leading-[4rem] lg:leading-[3rem] font-[400]`}
      >
        {title}
      </h2>

      <p
        className={`text-[#191919] ${descColor} inter-font text-[1rem] xsm:text-[1.1rem] leading-[1.8rem] xsm:leading-[1.6rem]  md:text-[1.4rem] lg:text-[1.5rem] md:leading-[2rem] lg:leading-[2.1875rem] mt-[0.5rem] xsm:mt-[0.9rem] font-[400]`}
      >
        {desc}
      </p>
    </div>
  );
}
