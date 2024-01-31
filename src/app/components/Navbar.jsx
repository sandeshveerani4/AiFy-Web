"use client";

import Link from "next/link";
import React from "react";
import styles from "../styles";
import Buttons from "./Buttons";
import Image from "next/image";

const Navbar = (props) => {
  return (
    <nav className="bg-amber-200 flex w-full justify-center lg:justify-between items-center px-[10vw] m-0">
      <a href="/">
        <Image src={props.src} alt="logo" width={96} height={96} />
      </a>
      <div
        className={`font-thin text-[20px] ${props.color} sm:hidden md:hidden lg:block`}
      >
        <Link href="/" className="mx-6 font-medium cursor-pointer">
          Home
        </Link>
        <Link href="/pricing" className="mx-6 font-medium cursor-pointer">
          Pricing
        </Link>
        <Link
          href="mailto:info@textaify.com"
          className="mx-6 font-medium cursor-pointer"
        >
          Contact
        </Link>
      </div>
      <div className="sm:hidden md:hidden lg:block">
        <Link
          href="https://play.google.com/store/apps/details?id=com.textaify&hl=en&gl=US"
          target="_blank"
        >
          <Buttons
            text="Get App"
            main={props.main}
            hover={props.hover}
            textMain={props.textMain}
            textHover={props.textHover}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
