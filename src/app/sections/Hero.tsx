"use client";

import React from "react";
import { PlayStoreIcon } from "../components/Icons";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className={`bg-amber-200 flex px-[10vw] md:py-[15vh] md:pt-[7.5vh] sm:py-[12vh] sm:pt-[6vh] rounded-b-3xl`}
    >
      <div className={`flex flex-col justify-center z-10 gap-5`}>
        <h1 className={`font-semibold text-[60px] leading-none uppercase head`}>
          The Ultimate AI Writing Assistant.
        </h1>
        <div className="flex justify-center mt-5 lg:justify-normal">
          <a
            href="https://play.google.com/store/apps/details?id=com.textaify&hl=en&gl=US"
            className="px-5 py-3 rounded-full bg-gradient-to-r 
            text-white from-grayish to-black  flex flex-row
              gap-2 transition-all duration-500 ease-in-out  bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%] "
            target="_blank"
          >
            <PlayStoreIcon width={20} color="white" />
            Get it on Google Play
          </a>
        </div>
      </div>
      <div className="hidden lg:block flex-grow-0 flex-shrink-0 iphone-x"></div>
    </div>
  );
};

export default Hero;
