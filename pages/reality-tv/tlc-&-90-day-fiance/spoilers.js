import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function spoilers({ realityTv }) {
  return (
    <PageLayout
      articles={realityTv}
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
export async function getServerSideProps() {
  const realityTv = await axios
    .get(
      `${"https://hot-seat-app.herokuapp.com/api/"}articles/category/spoilers`,
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
