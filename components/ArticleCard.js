import Image from "next/image";
import React from "react";

import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <Link href={`/article/${article.slug}`}>
      <div className=" cursor-pointer   mb-4  ">
        {/* <div className=" leading-tight pb-2   px-2  flex justify-between">
          <div className=" font-semibold">
            <div>{article.author}</div>
            <div className=" text-sm">{cleanDate(article.createdAt)}</div>
          </div>

          <h3 className="font-bold hover:text-red-600 text-red-800  px-2 rounded-md   text-sm flex items-center">
            <span>{"Read More"}</span>{" "}
            <ChevronDoubleRightIcon className=" h-5" />{" "}
          </h3>
        </div> */}
        <div className=" relative w-auto h-64  bg-gray-100  hover:shadow-md shadow overflow-hidden">
          <div>
            <Image
              src={article.image}
              className="  shadow-sm"
              objectFit="cover"
              layout="fill"
              alt={article.description}
            />
          </div>
        </div>
        <div className="px-4  overflow-hidden pt-4  flex flex-col justify-center">
          <p className="  line-clamp-2 leading-7 mb-2 hover:text-red-600 text-red-800 font-bold text-2xl">
            {article.title}
          </p>
          <p className="   leading-5   line-clamp-3">{article.description}</p>
        </div>
      </div>
    </Link>
  );
}
