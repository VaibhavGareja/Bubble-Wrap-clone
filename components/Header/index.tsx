import React, { useEffect, useState } from "react";
import MobileHeader from "./Mobile";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 0) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };
  const handleClick = async () => {
    setOpen(!open);
  };
  const [translateY, setTranslateY] = useState("4rem");
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      console.log(scrollY);
      const newTranslateY =
        scrollY > 210 ? "1.5rem" : `${4.0 - scrollY / 100}rem`;
      console.log(newTranslateY);
      setTranslateY(newTranslateY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const style = {
    transform: `translate3d(0, ${translateY}, 0)`,
    // transition: "transform 0.5s ease-out",.
  };
  return (
    <>
      <div className={`fixed header w-full z-40 `} style={style}>
        <div className=" bg-[white]  border-[2px] rounded-[48px] max-w-[90%] lg:max-w-[95vw] border-[black] nav-container mx-auto items-center  pl-[1.875rem] pr-[1.875rem] py-[1rem]  md:py-[1rem] md:pl-[1.5rem] md:pr-[1.5rem] lg:py-2 lg:pl-[1.5rem] lg:pr-2  justify-between">
          <div className="flex flex-row justify-between items-center">
            <img
              src="/logo.png"
              className=" cursor-pointer w-[10rem] esm:w-[12rem] xl:w-[13rem]"
            />
            <ul className="hidden lg:block text-[1.125rem] font-[500] cursor-pointer">
              <li className="hover:bg-[black] cursor-pointer rounded-[12px] mr-[0.8rem] inline-block px-[0.8rem] py-[0.7rem] hover:text-[white]">
                <a>Work</a>
              </li>
              <li className="hover:bg-[black] cursor-pointer rounded-[12px] mr-[0.8rem] inline-block  px-[0.8rem] py-[0.7rem] hover:text-[white]">
                <a>Benefits</a>
              </li>
              <li className="hover:bg-[black] cursor-pointer rounded-[12px] mr-[0.8rem] inline-block px-[0.8rem] py-[0.7rem]  hover:text-[white]">
                <a>Pricing</a>
              </li>
              <li className="hover:bg-[black] cursor-pointer rounded-[12px] mr-[0.8rem] inline-block  px-[0.8rem] py-[0.7rem] hover:text-[white]">
                <a>FAQs</a>
              </li>
            </ul>

            <div className="hidden lg:block">
              <button className="bg-[#85fac1] hover:border-[1px] hover:border-[black] border-[1px] border-[transparent] text-[1.15rem] rounded-[40px] px-[2.3rem] py-3 font-[500]">
                Contact Us
              </button>
            </div>
            <div className="block lg:hidden  cursor-pointer">
              <button
                onClick={() => {
                  handleClick();
                }}
              >
                <img src="/hamburger.svg " className="hamburger-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {open && <MobileHeader onClick={handleClick} />}
    </>
  );
}
