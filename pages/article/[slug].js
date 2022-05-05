import { ChevronDownIcon, GiftIcon } from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import moment from "moment";
import FacebookGroup from "../../components/FacebookGroup";
import FloatingButton from "../../components/FloatingButton";
import MoreArticles from "../../components/MoreArticles";
import SeoArticle from "../../components/SeoArticles";
import ShareArticle from "../../components/ShareArticle";
import SubscribeNewsLatter from "../../components/SubscribeNewsLatter";
import YoutubeChannel from "../../components/YoutubeChannel";
import WithScreen from "../../Layouts/WithScreen";

export async function getServerSideProps({ params }) {
  const article = await axios
    .get(`${process.env.API_URL_LOCAL}article/` + params.slug, {
      timeout: 10000,
    })
    .then((res) => res.data.article)
    .catch(({ err }) => console.log(err.message));

  if (!article) {
    return {
      notfound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
}

const Post = ({ article }) => {
  const cleanDate = (date) => {
    return moment(date).fromNow();
  };

  return (
    <SeoArticle article={article}>
      <WithScreen width=" relative lg:w-[45%] md:w-[55%] ">
        <div className="lg:mx-12 relative md:mx-0  mx-2 sm:ml-0 ml-10">
          <ShareArticle slug={article.slug} />

          <section className=" flex flex-col">
            <header className="flex p-3">
              <div className=" w-full ">
                <div className=" text-lg my-4 font-semibold">
                  Category :
                  <span className=" uppercase"> {article.category}</span>
                </div>
                <h1 className="font-black text-4xl  mb-5 ">{article.title}</h1>

                <h2 className=" font- text-xl text-gray-700  mb-5 ">
                  {article.description}
                </h2>
              </div>
            </header>
          </section>
          <section>
            <div className=" border-t border-black">
              <div className=" my-5 flex gap-y-2 gap-x-2 mx-4">
                {/* <div className="bg-red-700 text-white flex p-1 rounded-lg cursor-pointer hover:bg-red-800 duration-500 ease-out px-2">
                  <SaveIcon className=" h-6 text-gray-100 px-2" /> Save
                </div> */}
                <div className="bg-red-800 flex p-1 text-white rounded-lg cursor-pointer hover:bg-green-800 duration-500 ease-out px-2">
                  Views :{" "}
                  <span className=" px-2  font-bold">{article.views}</span>
                </div>

                <div className="bg-red-800 flex p-1 text-white rounded-lg cursor-pointer hover:bg-green-800 duration-500 ease-out px-2">
                  Shares :{" "}
                  <span className=" px-2  font-bold">{article.shares}</span>
                </div>
              </div>
            </div>

            <div className=" flex justify-center">
              <div className="relative h-[20rem]  w-full ">
                <Image
                  src={article.image}
                  className=" rounded shadow-sm"
                  objectFit="cover"
                  layout="fill"
                  alt={article.description}
                />
              </div>
            </div>
            <div className=" border-t border-b flex bg-white flex-row items-center justify-between  my-5 ">
              <div className="flex flex-col   py-2 ">
                <div className="  leading-4  font-semibold flex-grow">
                  <h3 className=" text-lg">By {article.author}</h3>
                </div>
                <div className="  leading-4  flex-grow">
                  <h3 className="">{cleanDate(article.createdAt)}</h3>
                </div>
                <div className=" bg-emerald-100 px-2 rounded-md">
                  {/* <h3 className="font-bold text-gray-600 hover:text-emerald-700 text-sm flex items-center">
                <span>{"Read More"}</span>{" "}
                <ChevronDoubleRightIcon className=" h-5" />{" "}
              </h3> */}
                </div>
              </div>
              <div>
                <div className=" sticky top-10">
                  <a href="https://www.buymeacoffee.com/hotseatmag">
                    <img
                      src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
                      alt="Buy US A Coffee"
                      className=" h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <YoutubeChannel title={article.title} video={article.video} />
            <div className="mt-5">
              <div
                className="prose has-dropcap prose-xl   lg:prose-xl   prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML }}
              ></div>
              {article.sanitizedHTML && (
                <div>
                  {" "}
                  <hr className="my-2" />
                  <FacebookGroup />
                  <hr className="my-2" />
                </div>
              )}
              <div
                className="prose prose-xl  lg:prose-xl first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML1 }}
              ></div>
              {article.sanitizedHTML1 && (
                <div>
                  <hr className="my-2" />
                  <YoutubeChannel />
                  <hr className="mt-2" />
                </div>
              )}

              <div
                className="prose prose-xl  lg:prose-xl  first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML2 }}
              ></div>
              {article.sanitizedHTML2 && (
                <YoutubeChannel title={article.title} video={article.video1} />
              )}
              <div
                className="prose prose-xl mt-5  lg:prose-xl   first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML3 }}
              ></div>

              <SubscribeNewsLatter removedesc={true} />

              <div
                className="prose prose-xl  lg:prose-xl  first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML4 }}
              ></div>
            </div>
            <hr className="my-2" />
            <section>
              <div className=" space-y-2">
                <p className=" text-3xl font-bold">
                  Not sure what to read next ?
                </p>
                <p className=" text-lg">We can help.</p>
              </div>
            </section>
            <hr className="my-2" />
            <div className=" flex justify-center  col-span-12 my-4">
              <div id="comment invisible"></div>
              <a href="https://www.buymeacoffee.com/hotseatmag">
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
                  alt="Buy US A Coffee"
                  className="h-15"
                />
              </a>
            </div>
          </section>
          <FloatingButton />
          <div id="comment" className=" ">
            <div className=" font-bold bg-gray-100 rounded-lg flex justify-center">
              {"  Comming Soon, We're Working on it"}
            </div>
          </div>
        </div>
        <section>
          <MoreArticles category={article.category} />
        </section>
        <hr className="my-2" />
      </WithScreen>
    </SeoArticle>
  );
};

export default Post;
