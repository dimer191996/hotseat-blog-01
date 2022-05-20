import axios from "axios";
import React, { useEffect, useState } from "react";
import FacebookGroup from "./FacebookGroup";
import SmallCard from "./SmallCard";
import SubscribeNewsLatter from "./SubscribeNewsLatter";

export default function MoreArticles({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${"https://blog-app-hot.herokuapp.com/api/"}articles/category/${category}`
      )
      .then(({ data }) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(null);
      });
  }, [articles.length]);

  return (
    <div className=" flex  justify-center">
      <div className=" w-[90%]  border-t-2 my-5">
        <div className="h-6 text-center">{loading ? "loading" : ""}</div>
        <div className=" grid lg:grid-cols-2 md:grid-cols-1">
          {articles?.slice(0, 8).map((el, index) => (
            <SmallCard key={index} article={el} />
          ))}
        </div>
        <ins
          class="adsbygoogle"
          style={{
            display: "block",
            textAlign: "center",
            backgroundColor: "#eeee",
          }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-4491397756399283"
          data-ad-slot="2168142036"
        ></ins>
      </div>
    </div>
  );
}
