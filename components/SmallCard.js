import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SmallCard({
  article,
  imgSize = "h-20 w-1/3 ",
  imgShow = true,
}) {
  return (
    <Link href={`/article/${article.slug}`}>
      {/* hover:scale-105 transition transform ease-out duration-200 */}
      <div className=" flex flex-col space-x-2  my-2  hover:bg-gray-50 ease-out duration-500  rounded-lg cursor-pointer">
        <div className={`${imgShow ? "flex" : ""}  p-1 `}>
          {imgShow && (
            <div className={"relative " + imgSize}>
              <Image
                src={article.image}
                className=" rounded shadow-sm"
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}

          <div
            className={` ${
              imgShow && "w-4/5"
            } flex flex-col  pl-2 justify-between leading-tight`}
          >
            <h2 className=" line-clamp-2 hover:text-red-700 text-red-800  font-bold">
              {article.title}
            </h2>
            <p className=" line-clamp-2  ">{article.description}</p>
          </div>
        </div>
        <div className=" flex items-center justify-center border-t my-1 pt-1 ">
          {/* <div className="  leading-4 text-sm font-semibold flex-grow">
            <h2 className=" text-[14px]">By {article.author}</h2>
            <h1 className=" text-sm">{cleanDate(article.createdAt)}</h1>
          </div> */}

          <div className=" border mt-2  px-2 rounded-md">
            <h3 className="font-bold  text-sm flex items-center">
              <span>{"Read More"}</span>{" "}
              <ChevronDoubleRightIcon className=" h-5" />{" "}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
