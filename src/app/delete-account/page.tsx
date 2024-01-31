import React from "react";
import { Metadata } from "next";

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
      <form action="" className="flex flex-col gap-5" method="post">
        <input
          type="text"
          className="w-full p-2 px-4 rounded-xl bg-white outline focus:outline-2 outline-blue-gray-700"
          placeholder="Email"
          name="email"
          id="email"
        />
        <input
          type="submit"
          value="Delete"
          className="px-5 py-2 rounded-full bg-blue-gray-900 text-white cursor-pointer"
        />
      </form>
    </div>
  );
}
