"use client";

import React, { useState } from "react";
import styles from "../styles";
import Newsletter from "../components/Newsletter";
import Link from "next/link";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
} from "../components/Icons";

const Footer = (props) => {
  return (
    <div
      className={`bg-amber-200 flex flex-col py-2 md:py-6 lg:px-[10vw] sm:px-[5vw]  items-center justify-between text-center`}
    >
      <footer className="flex flex-col gap-3 md:gap-2 md:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 ">
        <p className="text-xs text-gray-900">
          © 2024 AiFy Inc. All rights reserved.
        </p>
        <nav className="ml-0 md:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm hover:underline hover:text-black font-medium text-gray-900 underline-offset-4"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </nav>
        <div className="flex gap-4 ml-0 md:ml-auto">
          <Link href="https://www.facebook.com/aifyapp" target="_blank">
            <FacebookIcon className="h-6 w-6 text-gray-900" />
          </Link>
          <Link href="https://www.instagram.com/aify.app/" target="_blank">
            <InstagramIcon className="h-6 w-6 text-gray-900" />
          </Link>
          <Link href="mailto:info@textaify.com" target="_blank">
            <MailIcon className="h-6 w-6 text-gray-900" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
