import React from "react";
import { Metadata } from "next";
import DeleteClient from "./client";

export const metadata: Metadata = {
  title: "Delete Account - AiFy",
};
export default function DeleteAccount() {
  return (
    <div className="w-[60%] py-20 mx-auto flex flex-col gap-5">
      <h2 className="font-semibold text-[40px] leading-none">Delete Account</h2>
      <p>
        Enter your email address then we'll send you further information through
        mail.
      </p>
      <DeleteClient />
    </div>
  );
}
