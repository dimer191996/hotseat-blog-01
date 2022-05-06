import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function trueCrime({ TC }) {
  return (
    <PageLayout
      articles={TC}
      hearder={"  True crime TC to read online "}
      pageDescription={
        "   From serial killers to shocking current events, these true crime TC prove that sometimes real life is a lot darker than fiction..."
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
  const TC = await axios
    .get(
      `${"https://blog-app-hot.herokuapp.com/api/"}articles/category/truecrime`,
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
      TC: TC || [],
    },
  };
}
