import axios from "axios";
import Image from "next/image";
import moment from "moment";
import FacebookGroup from "../../components/FacebookGroup";
import MoreArticles from "../../components/MoreArticles";
import SeoArticle from "../../components/SeoArticles";
import ShareArticle from "../../components/ShareArticle";
import YoutubeChannel from "../../components/YoutubeChannel";
import WithScreen from "../../Layouts/WithScreen";

export async function getServerSideProps({ params }) {
  const article = await axios
    .get(`${"https://hot-seat-app.herokuapp.com/api/"}article/` + params.slug, {
      timeout: 10000,
    })
    .then((res) => res.data.article)
    .catch(({ err }) => console.log(err));

  if (!article) {
    return {
      notfound: true,
    };
  }
  return {
    props: {
      article: article || null,
    },
  };
}

const Post = ({ article }) => {
  const cleanDate = (date) => {
    return moment(date).fromNow();
  };

  return (
    <SeoArticle article={article}>
      <WithScreen width=" relative w-full  lg:w-[45%] md:w-[55%] ">
        <div className="lg:mx-12  relative md:mx-0  sm:ml-0 ">
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
            <div className=" px-3">
              <div className=" my-5 flex gap-y-2 gap-x-2">
                <div className="bg-red-800 flex p-1 text-white rounded-lg cursor-pointer hover:bg-green-800 duration-500 ease-out px-2">
                  🐻 Views :{" "}
                  <span className=" px-2  font-bold">{article.views}</span>
                </div>

                <div className="bg-red-800 flex p-1 text-white rounded-lg cursor-pointer hover:bg-green-800 duration-500 ease-out px-2">
                  🌻 Shares :{" "}
                  <span className=" px-2  font-bold">{article.shares}</span>
                </div>
              </div>
            </div>

            <div className=" md:flex justify-center md:p-2">
              <div className="relative h-[20rem] w-full ">
                <Image
                  src={article.image}
                  className=" rounded shadow-sm"
                  objectFit="cover"
                  layout="fill"
                  alt={article.description}
                />
              </div>
            </div>
            <div className=" border-t px-4 border-b flex bg-white flex-row items-center justify-between  my-5 ">
              <div className="flex flex-col   py-2 ">
                <div className="  leading-4  font-semibold flex-grow">
                  <h3 className=" md:text-lg text-md">By {article.author}</h3>
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
              <div>🙏</div>
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
            <ins
              class="adsbygoogle"
              style={{
                display: "block",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#eeee",
              }}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-4491397756399283"
              data-ad-slot="2168142036"
              data-full-width-responsive="true"
            ></ins>
          </section>

          <section className="px-4 md:px-0">
            <div className="mt-5">
              {" "}
              {article.sanitizedHTML2 && (
                <YoutubeChannel title={article.title} video={article.video} />
              )}
              <div
                className="prose has-dropcap prose-xl   lg:prose-xl   prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML }}
              ></div>
              <ins
                class="adsbygoogle"
                style={{ display: "block", backgroundColor: "#eeee" }}
                data-ad-format="fluid"
                data-ad-layout-key="-gq+t-1c-fj+xa"
                data-ad-client="ca-pub-4491397756399283"
                data-ad-slot="9911443569"
                data-full-width-responsive="true"
              ></ins>
              <div
                className="prose prose-xl  lg:prose-xl first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML1 }}
              ></div>
              <ins
                class="adsbygoogle"
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#eeee",
                  overflow: "hidden",
                }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-4491397756399283"
                data-ad-slot="2168142036"
                data-full-width-responsive="true"
              ></ins>
              <div
                className="prose prose-xl  lg:prose-xl  first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML2 }}
              ></div>
              <FacebookGroup />
              <div
                className="prose prose-xl mt-5  lg:prose-xl   first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML3 }}
              ></div>
              <ins
                class="adsbygoogle"
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#eeee",
                  overflow: "hidden",
                }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-4491397756399283"
                data-ad-slot="2168142036"
                data-full-width-responsive="true"
              ></ins>{" "}
              <div
                className="prose prose-xl  lg:prose-xl  first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML4 }}
              ></div>
            </div>
            <ins
              class="adsbygoogle"
              style={{
                display: "block",
                textAlign: "center",
                backgroundColor: "#eeee",
                overflow: "hidden",
              }}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-4491397756399283"
              data-ad-slot="2168142036"
              data-full-width-responsive="true"
            ></ins>
            <hr className="my-2" />

            <div id="comment" className=" h-20 ">
              <div className=" font-bold bg-gray-100 rounded-lg flex justify-center">
                <p> Comming Soon, We're Working the comment section</p>
              </div>
            </div>
            <section>
              <div className=" space-y-2">
                <p className=" text-3xl font-bold">
                  Not sure what to read next ?
                </p>
                <p className=" text-lg">We can help.</p>
              </div>
            </section>
          </section>
        </div>
        <section>
          <MoreArticles category={article.category} />
        </section>
      </WithScreen>
    </SeoArticle>
  );
};

export default Post;
