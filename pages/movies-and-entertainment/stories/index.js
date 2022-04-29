import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function stories({ stories }) {
  return (
    <PageLayout
      articles={stories.articles}
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

export async function getStaticProps() {
  const stories = await axios
    .get(`${process.env.API_URL_LOCAL}articles/category/short`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });

  return {
    props: {
      stories,
    },
  };
}
