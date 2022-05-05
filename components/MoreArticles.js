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
          {articles?.slice(1, 9).map((el, index) => (
            <SmallCard key={index} article={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
