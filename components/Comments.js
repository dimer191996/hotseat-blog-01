import { DiscussionEmbed } from "disqus-react";

const Comments = ({ post }) => {
  const disqusShortname = "hotseat";

  const disqusConfig = {
    url: "https://www.hotseatmag.com/article/" + post.slug,
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Comments;
