import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { DesignServices } from "../../database/design-services";
import { ServicesSlider } from "../../database/service-slider";
export default function ServiceSlider() {
  return (
    <div className="h-[50px] flex slider">
      <div
        className="items-center flex  w-full h-[100%] "
        style={{ whiteSpace: "nowrap" }}
      >
        <Marquee play speed={100} style={{}} gradient={false} loop={0}>
          {ServicesSlider.map((data) => {
            return (
              <div className="flex pl-[3.375rem]">
                <div className="text-[1.5rem] leading-[1.375rem]">
                  {data.title}
                </div>
                <img src="side-arrow.svg" className="ml-[3.375rem]" />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
