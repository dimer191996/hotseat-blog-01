import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function trueCrime({ TC }) {
  return (
    <PageLayout
      articles={TC.articles}
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

export async function getStaticProps() {
  const TC = await axios
    .get(`${process.env.API_URL_LOCAL}articles/category/truecrime`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
    });

  return {
    props: {
      TC: TC || null,
    },
  };
}
