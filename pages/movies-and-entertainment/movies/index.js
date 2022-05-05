import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function movies({ M }) {
  return (
    <PageLayout
      articles={M.articles}
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
    .get(`${process.env.API_URL_LOCAL}articles/category/movie-review`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
    });

  return {
    props: {
      M,
    },
  };
}
