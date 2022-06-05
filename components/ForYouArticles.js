import axios from "axios";
import React, { useEffect, useState } from "react";
import ArticleCard2 from "./ArticleCard2";

export default function ForYouArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${"https://hot-seat-app.herokuapp.com/api/"}articles/category/${"short"}`
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
    <div>
      <div className=" separator">
        Articles Recomended For You{" "}
        <div className="nimate-spin h-5 w-5 mr-3"></div>{" "}
      </div>
      <div className="mt-4 mb-3">
        <div className="not-prose relative  overflow-hidden">
          <div className="relative overflow-auto">
            <div className="   mx-auto   min-w-0 ">
              <div className="snap-x overflow-x-auto scrollbar-hide flex">
                {articles.map((article) => (
                  <div
                    key={article._id}
                    className=" snap-center flex-none  h-64 w-64 rounded overflow-hidden m-2 "
                  >
                    <ArticleCard2 scroll={true} article={article} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" separator"></div>
    </div>
  );
}
