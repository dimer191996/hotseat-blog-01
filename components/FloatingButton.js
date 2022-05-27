import { CogIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import SmallCard from "./SmallCard";

export default function FloatingButton({ hidebutton }) {
  return (
    <div className="  bottom-0 flex my-10  justify-center  sticky top-0">
      <div className="py-3 absolute right-0 -top-6 items-center flex justify-center z-30">
        <button
          onClick={hidebutton}
          className=" bg-red-800 font-bold  rounded-full px-4 text-white"
        >
          Close X
        </button>
      </div>
      <Link href="/subscription">
        <div className="  relative space-y-3 cursor-pointer py-10 rounded-t px-6 w-full  flex flex-col text-center text-lg  bg-gray-200 font-bold text-black">
          <div className=" text-4xl font-black">Subscribe</div>{" "}
          <p className=" font-sans   text-red-900  text-center text-xl">
            <span>
              Join our subscribers list to get the latest <br /> news, updates,
              delivered directly in your inbox.
            </span>
          </p>
          <div>
            <div className=" h-8 mb-3 text-gray-600 flex justify-start items-center px-3 border border-gray-700 w-full rounded bg-gray-100 ">
              Email *
            </div>
          </div>
          <div>
            <div className=" h-8 mb-3 text-gray-100 flex justify-center items-center px-3 border border-green-700 w-full rounded bg-green-600 ">
              Subscribe Now
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
