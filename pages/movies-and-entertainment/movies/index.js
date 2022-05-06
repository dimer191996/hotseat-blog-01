import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function movies({ M }) {
  return (
    <PageLayout
      articles={M}
      hearder={"  Movies Reviews"}
      pageDescription={
        "The latest and Stories, tailer, movie reviews ,\n  List, in-depth reports,recaps, reviews,\n episode summaries, more..."
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
  const M = await axios
    .get(
      `${"https://blog-app-hot.herokuapp.com/api/"}articles/category/movie-review`,
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
      M: M || [],
    },
  };
}
