import { CogIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import SmallCard from "./SmallCard";

export default function FloatingButton() {
  return (
    <div className="  bottom-20 flex my-10  justify-center  sticky top-0">
      <Link href="/subscription">
        <div className=" cursor-pointer py-1 rounded px-6 w-full  flex flex-col text-center text-lg  bg-green-700 font-bold text-white">
          <div className=" text-2xl font-bold">Subscribe</div>{" "}
          <div>🙏 To Our Newsletter 🙏</div>
          <div>
            <div className=" h-8 mb-3 text-gray-600 flex justify-start items-center px-3 border border-gray-700 w-full rounded bg-gray-100 ">
              Email *
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
