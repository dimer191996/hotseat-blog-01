import axios from "axios";
import PageLayout from "../../Layouts/PageLayout";

export default function HomeMovies({ ME }) {
  return (
    <div className=" my-10">
      <PageLayout
        category="none"
        articles={ME.articles}
        hearder={" MOVIES & ENTERTAINMENT"}
        pageDescription={
          " Find the latest movies, music, TV shows , \n True Crime Stories, True Stories and comics reviews that are worth your time."
        }
        topics={[
          {
            label: "<<",
            link: "/",
          },
          {
            label: "Movies",
            link: "/movies-and-entertainment/movies",
          },
          {
            label: "True Crime Stories",
            link: "/movies-and-entertainment/true-crime",
          },
          {
            label: "Stories & Facts",
            link: "/movies-and-entertainment/stories",
          },
        ]}
      />
    </div>
  );
}
export async function getStaticProps() {
  const ME = await axios
    .get(`${process.env.API_URL_LOCAL}articles/home/movies-entertainment`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
    });

  if (!ME) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      ME: ME || null,
    },
  };
}
