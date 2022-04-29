import { CogIcon } from "@heroicons/react/solid";
import React from "react";
import SmallCard from "./SmallCard";

export default function FloatingButton() {
  return (
    <div className="  bottom-6 flex my-10  justify-center  sticky top-0 ">
      <a
        href="#comment"
        className=" py-1 rounded px-6 flex  bg-red-700 font-bold text-white"
      >
        <CogIcon className="h-6 px-2" /> Add a comment
      </a>
    </div>
  );
}
