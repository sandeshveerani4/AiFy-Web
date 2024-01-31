"use client";

import React from "react";

const Card = (props) => {
  return (
    <div
      className=" bg-amber-200 flex lg:flex-row sm:flex-col justify-between px-[10%] py-[10%] rounded-3xl gap-4 lg:hover:scale-110 transition-all duration-150 w-[100%] sm:mb-2 lg:mb-0"
      style={{
        boxShadow: "0 5px 10px 0 rgb(10 10 10 / 5%)",
        borderColor: "transparent",
      }}
    >
      <div className="scale-[200%] flex items-center sm:justify-center lg:pr-8 lg:pl-4 sm:pr-0 sm:mt-4 lg:mt-0">
        {props.icon}
      </div>

      <div className="flex flex-col lg:justify-start sm:justify-between lg:items-start sm:items-center lg:text-left sm:text-center">
        <h1 className=" text-2xl pb-3">{props.title}</h1>
        <p className=" text-gray-800 text-lg">{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
