import { CogIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import SmallCard from "./SmallCard";

export default function FloatingButton() {
  return (
    <div className="  bottom-10 flex my-10  justify-center  sticky top-0 ">
      <Link href="/subscription">
        <div className=" cursor-pointer py-1 rounded px-6 flex text-center  bg-red-700 font-bold text-white">
          🙏 Subscribe To Our Newsletter 🙏
        </div>
      </Link>
    </div>
  );
}
