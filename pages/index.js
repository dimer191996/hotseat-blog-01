import axios from "axios";
import SmallCard from "../components/SmallCard";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import ArticleCard from "../components/ArticleCard";
import WithScreen from "../Layouts/WithScreen";
import SubscribeNewsLatter from "../components/SubscribeNewsLatter";
import SeoPage from "../components/SeoPage";
import YoutubeChannel from "../components/YoutubeChannel";
import FacebookGroup from "../components/FacebookGroup";

export async function getStaticProps() {
  const realityTv = await axios
    .get(`${process.env.API_URL_LOCAL}articles/home/tv`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
    });

  const stories = await axios
    .get(`${process.env.API_URL_LOCAL}articles/category/short`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
    });
  const truecrime = await axios
    .get(`${process.env.API_URL_LOCAL}articles/category/truecrime`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
    });
  const moviereviews = await axios
    .get(`${process.env.API_URL_LOCAL}articles/category/movie-review`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
    });

  return {
    props: {
      realityTv: realityTv || null,
      stories: stories || null,
      truecrime: truecrime || null,
      moviereviews: moviereviews || null,
    },
  };
}

export default function Home({ realityTv, stories, truecrime, moviereviews }) {
  return (
    <SeoPage
      description={
        " Your source for entertainment news, celebrities,TLC & 90 Day Fiance news, and ​celebrity gossip, more...!"
      }
      article={realityTv[0]}
      hearder={
        " Your source for entertainment news, celebrities,90 Day Fiance news , Welcome"
      }
      category={"none"}
    >
      <WithScreen width="lg:w-1/2 mx-4">
        <section className="">
          <p className=" px-4 font-semibold text-md my-5 pb-5 border-b text-center">
            Your source for entertainment news, celebrities,
            <br /> TLC & 90 Day Fiance news, and ​celebrity gossip, more...!
          </p>
          <div className=" grid md:grid-cols-2 2xl:grid-cols-3 gap-x-4  gap-y-4  border-b pb-5">
            {realityTv.articles.slice(0, 2)?.map((data) => (
              <div key={data._id}>
                <ArticleCard article={data} />
              </div>
            ))}
          </div>
          <h2 className=" px-4 border-b font-bold text-2xl pb-5 pt-5 text-center">
            Reality Tv News
          </h2>
          <div className=" grid md:grid-cols-2 2xl:grid-cols-3 gap-x-4  py-5 border-b">
            <FacebookGroup />
            {realityTv.articles.slice(2, 6)?.map((data) => (
              <div key={data._id}>
                <SmallCard article={data} />
              </div>
            ))}
            <section className="flex justify-center">
              <SubscribeNewsLatter removedesc={true} />
            </section>
          </div>

          <div className=" grid md:grid-cols-2 2xl:grid-cols-3 gap-x-4  gap-y-4  py-5">
            <section></section>
            {realityTv.articles.slice(6, 8)?.map((data) => (
              <div key={data._id}>
                <ArticleCard article={data} />
              </div>
            ))}
            <section>
              {realityTv.articles.slice(8, 11)?.map((data) => (
                <div key={data._id}>
                  <SmallCard imgShow={false} article={data} />
                </div>
              ))}
            </section>
            {realityTv.articles.slice(11, 13)?.map((data) => (
              <div key={data._id}>
                <ArticleCard article={data} />
              </div>
            ))}{" "}
            <section></section>
            {realityTv.articles.slice(13, 18)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
          </div>

          <section className="flex lg:mx-20 justify-center">
            <SubscribeNewsLatter />
          </section>
        </section>
        <section className="">
          <h2 className=" px-4 font-bold text-xl  pt-5 text-center">
            True Crime & Entertainment Stories
          </h2>
          <p className=" px-4 font-semibold text-md my-5 pb-5 border-b text-center">
            Your source for entertainment news,
            <br /> True Crime Strories, Life Hack, True Stories, Top 10 List ,
            more...!
          </p>
          <div className=" grid md:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-4 ">
            {truecrime.articles.slice(0, 2)?.map((data) => (
              <div key={data._id}>
                <ArticleCard article={data} />
              </div>
            ))}
          </div>
          <div className=" grid md:grid-cols-2 2xl:grid-cols-3 border-b gap-x-4 gap-y-4  py-5">
            {stories.articles.slice(0, 2)?.map((data) => (
              <div key={data._id}>
                <ArticleCard article={data} />
              </div>
            ))}
          </div>
          <div className=" grid md:grid-cols-2 2xl:grid-cols-3 gap-x-4  py-5">
            <YoutubeChannel />
            {stories.articles.slice(2, 6)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
            <FacebookGroup />
          </div>
          <div className=" grid md:grid-cols-2 2xl:grid-cols-3 border-b gap-x-4 gap-y-4   py-5">
            {stories.articles.slice(6, 8)?.map((data) => (
              <div key={data._id}>
                <ArticleCard article={data} />
              </div>
            ))}
          </div>
          <div className=" grid md:grid-cols-2 2xl:grid-cols-3 gap-x-4  py-5">
            <YoutubeChannel />
            {stories.articles.slice(8, 12)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
            <FacebookGroup />
          </div>
        </section>
        <div className=" px-4 flex items-center justify-center font-bold text-xl rounded-full border border-black hover:bg-gray-50 cursor-pointer my-5">
          <span>Read More</span> <ChevronDoubleRightIcon className="h-5 mt-1" />
        </div>
        <section className="">
          <h2 className="px-4 font-bold  pt-5 border-t text-xl my-5 text-center">
            Movie & Tv Series Reviews
          </h2>
          <p className=" px-4 font-semibold text-md my-5 pb-5 border-b text-center">
            Your source for entertainment news,
            <br /> True Crime Strories, Life Hack, True Stories, Top 10 List ,
            more...!
          </p>
          <div className=" grid md:grid-cols-2 2xl:grid-cols-3 gap-x-4  gap-y-4 ">
            {moviereviews.articles.slice(0, 2)?.map((data) => (
              <div key={data._id}>
                <ArticleCard article={data} />
              </div>
            ))}
            {moviereviews.articles.slice(2, 4)?.map((data) => (
              <div key={data._id}>
                <SmallCard imgShow={false} article={data} />
              </div>
            ))}
          </div>
          <div className=" px-4 flex items-center justify-center font-bold text-xl rounded-full border border-black hover:bg-gray-50 cursor-pointer my-5">
            <span>Read More</span>{" "}
            <ChevronDoubleRightIcon className="h-5 mt-1" />
          </div>
        </section>
      </WithScreen>
    </SeoPage>
  );
}
