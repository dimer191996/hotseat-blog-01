import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function happilyEverAfter({ realityTv }) {
  return (
    <PageLayout
      articles={realityTv.articles}
      hearder={" 90 Day Fiance:Happily Ever After"}
      pageDescription={
        "The latest and 90 Day Fiance News, 90 Day Fiance:Happily Ever After , in-depth reports, recaps, reviews, episode summaries, more..."
      }
      topics={[
        {
          label: "<< Go Back",
          link: "/reality-tv/tlc-&-90-day-fiance",
        },
      ]}
    />
  );
}
export async function getStaticProps() {
  const realityTv = await axios
    .get(`${process.env.API_URL_LOCAL}articles/category/happyEverAfter`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });

  return {
    props: {
      realityTv,
    },
  };
}
