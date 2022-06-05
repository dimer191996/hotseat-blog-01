import axios from "axios";

import SeoPage from "../components/SeoPage";
import ArticleCard2 from "../components/ArticleCard2";
import ArticlesSection from "../components/ArticlesSection";
import WithScreen from "../Layouts/WithScreen";

export async function getServerSideProps() {
  const articles = await axios
    .get(`${"http://localhost:3020/api/hot/"}articles?page=0`, {
      timeout: 10000,
    })
    .then((res) => res.data.articles)
    .catch((error) => {
      console.log(error.message);
    });

  return {
    props: {
      articles: articles || [],
    },
  };
}

export default function Home({ articles }) {
  return (
    <SeoPage
      description={
        " Your source for entertainment news, celebrities,TLC & 90 Day Fiance news, and ​celebrity gossip, more...!"
      }
      article={articles[0]}
      hearder={
        " Your source for entertainment news, celebrities,90 Day Fiance news , Welcome"
      }
      category={"none"}
    >
      <section className="">
        <div className=" md:flex justify-center my-5 ">
          <div className=" w-full md:w-2/3 px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              {articles?.slice(0, 4).map((data, index) => (
                <ArticleCard2 key={data._id} h={96} article={data} />
              ))}
            </div>
          </div>
        </div>
        <p className=" px-4 font-semibold text-2xl my-5 pb-5 text-center">
          Your source for entertainment news, <br /> celebrities, TLC news, and
          ​celebrity, <br /> more...!
        </p>{" "}
        <WithScreen width=" w-full px-2 lg:w-1/2">
          <div className=" mb-5">
            <div className=" separator text-left">
              <h1 className=" text-4xl font-bold">Latest</h1>
            </div>
          </div>
          <ArticlesSection articles={articles?.slice(4, 10)} />
          <div className=" separator text-left">
            <h1 className=" font-bold">ads</h1>
          </div>
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              backgroundColor: "#eee9",
            }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-4491397756399283"
            data-ad-slot="2168142036"
          ></ins>
          <div className=" separator text-left">
            <h1 className=" font-bold">ads</h1>
          </div>
          <ArticlesSection articles={articles?.slice(10, 16)} />
          <div className=" separator text-left">
            <h1 className=" font-bold">ads</h1>
          </div>
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              backgroundColor: "#eee9",
            }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-4491397756399283"
            data-ad-slot="2168142036"
          ></ins>
          <div className=" separator text-left">
            <h1 className=" font-bold">ads</h1>
          </div>
          <ArticlesSection articles={articles?.slice(16, 21)} />
          <div className=" separator text-left">
            <h1 className=" font-bold">ads</h1>
          </div>
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              backgroundColor: "#eee9",
            }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-4491397756399283"
            data-ad-slot="2168142036"
          ></ins>
          <div className=" separator text-left">
            <h1 className=" font-bold">ads</h1>
          </div>
          <ArticlesSection articles={articles?.slice(21, 35)} />
          <div className=" separator text-left">
            <h1 className=" font-bold">ads</h1>
          </div>
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              backgroundColor: "#eee9",
            }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-4491397756399283"
            data-ad-slot="2168142036"
          ></ins>
          <div className=" separator text-left">
            <h1 className=" font-bold">ads</h1>
          </div>
          <ArticlesSection articles={articles?.slice(35, 49)} />
        </WithScreen>
      </section>
    </SeoPage>
  );
}
