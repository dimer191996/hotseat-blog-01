import Link from "next/link";
import React from "react";
import ArticleCard from "../components/ArticleCard";
import FacebookGroup from "../components/FacebookGroup";
import SeoPage from "../components/SeoPage";
import SmallCard from "../components/SmallCard";
import SocialMedia from "../components/SocialMedia";
import SubscribeNewsLatter from "../components/SubscribeNewsLatter";
import YoutubeChannel from "../components/YoutubeChannel";

export default function PageLayout({
  articles,
  topics,
  hearder,
  pageDescription,
  category,
}) {
  return (
    <SeoPage
      description={pageDescription}
      article={articles[0]}
      hearder={hearder}
      category={category}
    >
      <div className="flex justify-center ">
        <div className=" lg:w-1/2 md:w-4/5 px-4">
          <section className=" z-auto  flex flex-col items-center">
            <div className="   ">
              <div className="   my-2 py-2">
                <ul className=" bg-white flex justify-center items-center">
                  {topics.map((el, index) => (
                    <li
                      key={index}
                      className=" hover:bg-gray-200 border-t border-b cursor-pointer py-2 ease-out duration-500"
                    >
                      <Link href={el.link}>
                        <p className=" line-clamp-1 px-4 font-semibold text-md  ">
                          {el.label}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <div className="  grid md:grid-cols-2 py-6 space-x-4  sm:space-y-2 md:space-x-0 ">
            {articles.slice(0, 2)?.map((data) => (
              <ArticleCard key={data._id} article={data} />
            ))}
          </div>

          <hearder className=" border-t  flex border-b flex-col items-center">
            <div className=" my-5 border-b bg-gray-300 py-2">
              <h2 className=" px-4 font-bold text-2xl  text-center">
                {hearder}
              </h2>
              <div className="px-4 flex items-center justify-center font-semibold text-md my-5 text-center">
                <p className=" ">{pageDescription}</p>
              </div>
            </div>
            <div className="  grid md:grid-cols-2 py-6 space-x-4  sm:space-y-2 md:space-x-0 ">
              <YoutubeChannel />
              <FacebookGroup />
            </div>
            <h2 className=" px-4 font-bold  text-xl  pb-5  text-center">
              Latest News
            </h2>
          </hearder>
          <div className="  grid md:grid-cols-2 py-6 space-x-4  sm:space-y-2 md:space-x-0 ">
            {articles.slice(2, 4)?.map((data) => (
              <ArticleCard key={data._id} article={data} />
            ))}
          </div>

          <div className="  grid md:grid-cols-2 2xl:grid-cols-3">
            <YoutubeChannel />
            {articles.slice(4, 8)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
            <FacebookGroup />
          </div>

          <div className="space-x-4  grid md:grid-cols-2 py-6  ">
            {articles.slice(8, 10)?.map((data) => (
              <ArticleCard key={data._id} article={data} />
            ))}
          </div>

          <div className="  grid md:grid-cols-2  2xl:grid-cols-3">
            <FacebookGroup />
            {articles.slice(10, 12)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
            <SubscribeNewsLatter removedesc={true} />
          </div>
          <div className="  grid md:grid-cols-2 py-6 space-x-4  sm:space-y-2 md:space-x-0 ">
            {articles.slice(12, 14)?.map((data) => (
              <ArticleCard key={data._id} article={data} />
            ))}
          </div>
          <div className="  grid md:grid-cols-2  2xl:grid-cols-3">
            {articles.slice(14, 16)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
          </div>
          <div className="  flex justify-center items-center  border-t bg-white">
            <SubscribeNewsLatter />
          </div>
          <div className="  grid md:grid-cols-2  2xl:grid-cols-3">
            {articles.slice(16, 20)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
          </div>
          <div className="  grid md:grid-cols-2 py-6 space-x-4  sm:space-y-2 md:space-x-0 gap-4">
            {articles.slice(20, 22)?.map((data) => (
              <ArticleCard key={data._id} article={data} />
            ))}
          </div>
          <div className="  grid md:grid-cols-2  2xl:grid-cols-3">
            {articles.slice(22, 24)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
          </div>
          <div className="  grid md:grid-cols-2 py-6 space-x-4  sm:space-y-2 md:space-x-0 ">
            {articles.slice(24, 26)?.map((data) => (
              <ArticleCard key={data._id} article={data} />
            ))}
          </div>
          <div className="  grid md:grid-cols-2  2xl:grid-cols-3">
            {articles.slice(24, 26)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
          </div>
          <div className=" grid md:grid-cols-2 py-6 space-x-4  sm:space-y-2 md:space-x-0  ">
            {articles.slice(26, 28)?.map((data) => (
              <ArticleCard key={data._id} article={data} />
            ))}
          </div>
          <div className="  grid md:grid-cols-2  2xl:grid-cols-3">
            {articles.slice(28, 3)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SeoPage>
  );
}
