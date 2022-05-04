import axios from "axios";
import PageLayout from "../../../Layouts/PageLayout";

export default function tlcRealityTv({ realityTv }) {
  return (
    <div className=" my-10">
      <PageLayout
        articles={realityTv.articles}
        hearder={" 90 Day Fiance & Other TLC Shows"}
        pageDescription={
          "The latest and 90 Day Fiance News , 90 Day Fiance:Before The 90 Days, 90 Day Fiance:Happily Ever After, 90 Day Fiance Season 9..., in-depth reports, recaps, reviews, episode summaries, more..."
        }
        topics={[
          {
            label: "<<",
            link: "/reality-tv",
          },
          {
            label: "Spoilers",
            link: "/reality-tv/tlc-&-90-day-fiance/spoilers",
          },
          {
            label: "Happily Ever After ",
            link: "/reality-tv/tlc-&-90-day-fiance/happily-ever-after",
          },
        ]}
      />
    </div>
  );
}
export async function getStaticProps() {
  const realityTv = await axios
    .get(`${process.env.API_URL_LOCAL}articles/category/tv`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
    });

  if (!realityTv) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      realityTv: realityTv || null,
    },
  };
}
