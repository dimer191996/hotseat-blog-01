import {
  ChevronDoubleRightIcon,
  EyeIcon,
  TagIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

export default function ArticleCard2({ article }) {
  return (
    <div className="  rounded-lg  overflow-hidden   shadow">
      <div className="">
        <div className=" relative h-56 w-auto   ">
          <Image
            src={article.image}
            alt={article.description}
            className=""
            objectFit="cover"
            layout="fill"
          />
          <div className="absolute   flex flex-col  justify-between  left-0 w-full h-full">
            <div className=" flex justify-end p-4 ">
              <div className="bg-red-400 flex justify-center items-center rounded-lg  p-1 text-white space-x-1">
                <EyeIcon className=" h-4" />
                <span className=" font-bold text-sm">
                  {article.views + 500}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 px-2 flex flex-col justify-between  space-y-2">
        <div className=" flex ">
          <h1 className=" flex items-center space-x-2 bg-red-200  rounded  font-semibold px-1 uppercase">
            <TagIcon className=" h-4 text-red-500 flex-wrap-reverse rotate-90" />{" "}
            <span>{article.category}</span>
          </h1>
        </div>
        <div className=" ">
          <h2 className="  font-bold text-lg">{article.title}</h2>
        </div>
        <div className=" py-4 ">
          <h2 className=" line-clamp-3   font-semibold text-gray-500 ">
            {article.description}
          </h2>
        </div>
        <div className=" leading-tight pb-2   px-2  flex justify-between">
          <div className="font-bold text-sm text-gray-500">
            <div>{article.author}</div>
            <div>Time</div>
          </div>
          <h3 className="font-bold text-gray-500 cursor-pointer hover:text-gray-700  px-2 rounded-md text-sm flex items-center">
            <span>{"Read More"}</span>{" "}
            <ChevronDoubleRightIcon className=" h-5" />{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}
