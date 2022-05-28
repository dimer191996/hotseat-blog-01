import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function stories({ stories }) {
  return (
    <PageLayout
      articles={stories}
      hearder={"Stories & Factcs"}
      pageDescription={
        " The latest and Stories, Facts, List, Relationship Stories,list, in-depth understanding of life ,more..."
      }
      topics={[
        {
          label: "<< Go Back",
          link: "/movies-and-entertainment",
        },
      ]}
    />
  );
}

export async function getServerSideProps() {
  const stories = await axios
    .get(
      `${"https://hot-seat-app.herokuapp.com/api/"}articles/category/short`,
      {
        timeout: 10000,
      }
    )
    .then((res) => res.data.articles)
    .catch((error) => {
      console.log(error.message);
    });

  return {
    props: {
      stories: stories || [],
    },
  };
}
