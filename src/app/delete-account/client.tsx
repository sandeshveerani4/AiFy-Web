"use client";
import React, { FormEvent, useState } from "react";

function DeleteClient() {
  const [email, setEmail] = useState("");
  async function deleteAcc(e: FormEvent) {
    e.preventDefault();
    const req = await fetch("/api/firebase", {
      body: JSON.stringify({ email: email }),
      method: "DELETE",
    });
    console.log(req);
  }
  return (
    <form
      onSubmit={async (e) => await deleteAcc(e)}
      className="flex flex-col gap-5"
      method="post"
    >
      <input
        type="text"
        className="w-full p-2 px-4 rounded-xl bg-white outline focus:outline-2 outline-blue-gray-700"
        placeholder="Email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="submit"
        value="Delete"
        className="px-5 py-2 rounded-full bg-blue-gray-900 text-white cursor-pointer"
      />
    </form>
  );
}

export default DeleteClient;
