import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function spoilers({ realityTv }) {
  return (
    <PageLayout
      articles={realityTv.articles}
      hearder={"TLC & 90 Day Fiance:Spoilers"}
      pageDescription={
        "The latest and 90 Day Fiance News , in-depth reports, recaps, reviews, episode summaries, more..."
      }
      topics={[
        {
          label: "Back Home",
          link: "/reality-tv/tlc-&-90-day-fiance",
        },
      ]}
    />
  );
}
export async function getStaticProps() {
  const realityTv = await axios
    .get(`${process.env.API_URL_LOCAL}articles/category/spoilers`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
    });

  return {
    props: {
      realityTv: realityTv || null,
    },
  };
}
