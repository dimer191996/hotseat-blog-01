import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function happilyEverAfter({ realityTv }) {
  return (
    <PageLayout
      articles={realityTv}
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
export async function getServerSideProps() {
  const realityTv = await axios
    .get(
      `${"https://blog-app-hot.herokuapp.com/api/"}articles/category/happyEverAfter`,
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
      realityTv: realityTv || [],
    },
  };
}
